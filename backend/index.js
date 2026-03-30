import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()
app.use(cors());
app.use(express.json())
dotenv.config();
const PORT=process.env.PORT || 4000;
const URL=process.env.mongodbURL;

//cnonnect to mongodb

    mongoose.connect(process.env.mongodbURL)
       .then(()=>console.log("connected to mongodb"))
.catch(err=>
console.log("ERROR",err));
// defining route
app.use("/book",bookRoute)
app.use("/users",userRoute)



app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})