// import mongoose from "mongoose";

// const connect = async() => {
//     try {
       
//         await mongoose.connect("mongodb+srv://OpPautu:2V4XwKYBazWn3yi3@cluster001.skd3vfj.mongodb.net/test?retryWrites=true&w=majority")
//     } catch (error) {
//         throw new Error('Connection failed!')
//     }
// }

// export default connect;

import mongoose from "mongoose";

let isConnected = false;

const connect = async () => {
  mongoose.set("strictQuery", true);
  
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }
  
  try {
    console.log("MongoDB connection string:", process.env.MONGO);
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    isConnected = false;
  }
};

export default connect;