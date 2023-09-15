const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://kalon160895:irm3XKdREQDk4JN8@cluster0.wx2xkkz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("db connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, { dbName: "test" });
}



module.exports = {
  mongoConnect,
};
