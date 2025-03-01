import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js"
import userRoute from "./Route/user.route.js"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI;



//connect to mongo db
try {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully!");
} catch (error) {
    console.error("Error connecting to the database:", error);
}

//creating routes
app.use("/book",bookRoute);
app.use("/users",userRoute);

app.get("/",(req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})