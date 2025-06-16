import connectDB from "./db/index.js";
import {app} from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path : "./.env"
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8002, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})