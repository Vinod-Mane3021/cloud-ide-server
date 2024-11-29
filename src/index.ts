import app from "./app";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});


app.listen(4000, () => {
  console.log(`⚙️  Server is running at port 4000`);
});



app.on("error", (error) => {
  console.error("Error : ", error);
  throw error;
});
