import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const test = (req, res)=>{
  res.json({
    msg: "routing is me doing",
  });
}
//for updating a user its not like sign-up/in, we have to do extra check in: if a person is authenticated/not.
//when a user signs in we create a token inside the cookie, we can use token to verify the user
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: { //set makes sure only changed data is updated, rest is let to be as it is, if this not done a person can make himseld admin by just a req
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true } //this returns and saves this updated user w new info, else we get prev info for our response 
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
