import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
})
    .catch((err) => {
        console.log(err);
    });
const app = express();
app.use(express.json()) //to allow to send json to server, else  we will get undefined if we send some json to server
// req is the data we get from client side, res is data we send back from server side

app.use("/backend/user", userRouter);
app.use("/backend/auth", authRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});