const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ujjwal:sangwan01@examly.1timz.mongodb.net/?retryWrites=true&w=majority&appName=examly"
    );
    console.log(
      `mongodb connected:${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
