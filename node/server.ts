import mongoose from "mongoose";
import app from "./app";
import dotenv from 'dotenv';

dotenv.config();
app.listen(3333, ()=> {
   console.log('express up');
});

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/api?authMechanism=DEFAULT`)
.then(() => {
    console.log('mongo up');
})
.catch((err) => {
    console.log(err, ' error mongo');
})


export { app };