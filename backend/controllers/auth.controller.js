import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User crated successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found!')); //using middleware, we pass custom error
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
    // we use cookie(hash-token that includes mail of user and saved in browser) to autenicate the user, 
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); //we wana add some info thats unique for a user, we use id not mail/password caz if a hacker gets the info he wont be able to identify the user
    const { password: pass, ...rest } = validUser._doc; //here we seperating password and other info, we dont wana send password, we do ._doc caz if we dont still password is sent
    res
      .cookie('access_token', token, { httpOnly: true }) //no other 3rd party app can get access to our token
      .status(200)
      .json(rest); //saving this token inside cookie
  } catch (error) {
    next(error); //middleware cagtches error 
  }
};