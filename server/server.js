import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.get('/', (req, res) => {
    res.send("<h1>Hello home page</h1>")
})


app.use(cors());
app.use(express.json());


app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes)

app.listen(port, ()=> {
    console.log(`Server is started at port ${port}`)
})
