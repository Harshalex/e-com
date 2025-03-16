import mongoose from "mongoose";

function dbConnect() {
  const mongoUri =
    "mongodb+srv://harshrajchandelntf:rbtxCWOETBXGp21r@cluster0.pejqi.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";
  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
}

export default dbConnect;
