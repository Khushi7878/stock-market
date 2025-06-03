const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
      await mongoose.connect(`mongodb+srv://khushbooagarwal177:SJK5sE8DOVjRITV1@cluster0.qbqgizu.mongodb.net`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection failed:", error.message);
    }
  };

  module.exports = dbConnection