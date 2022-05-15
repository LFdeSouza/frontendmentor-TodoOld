import { default as mongoose } from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => console.log("Mongoose connected..."));
mongoose.connection.on("error", (error) =>
  console.log(`Mongoose connection failed: ${error}`)
);

const mongooseShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

//Nodemon
process.once("SIGUSR2", () => {
  mongooseShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});
//Application termination
process.on("SIGINT", () => {
  mongooseShutdown("app termination", () => {
    process.exit(0);
  });
});
//Heroku
process.on("SIGTERM", () => {
  mongooseShutdown("Heroku app shutdown", () => {
    process.exit(0);
  });
});
