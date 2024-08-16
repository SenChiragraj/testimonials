import { error } from "console";
import mongoose from "mongoose";

export const connectToDB = async () => {
  // try {
    mongoose.connect("mongodb://127.0.0.1:27017/testimonials")
      .then(() => console.log('Connected'))
      .catch(error => console.log(error));

    // if (mongoose.connections && mongoose.connections[0].readyState) return;
    // const { connection } = await mongoose.connect(
    //   process.env.MONGO_URL as string,
    //   {
    //     dbName: "testimonials"
    //   }
    // );
    // console.log(`Connected to Database : ${connection.host} `);
  // } catch (error) {
  //   console.log(error);
  //   // throw new Error("Error in connecting to Database");
  // }
}