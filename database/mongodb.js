const mongoose = require("mongoose");
connectToRepository().catch((err) => console.log(err));
const connectToRepository = async () => {
  await mongoose.connect(
    `mongodb+srv://zurckasi:@m1908c3ig@cluster0.qg18e4c.mongodb.net/?retryWrites=true&w=majority`
  );
};
module.exports = mongoose;