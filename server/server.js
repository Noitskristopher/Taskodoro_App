const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors({
//     origin: "http://localhost:3000"
// }));

app.use(cors({
    origin: ["https://vercel.com/cabadokris32-gmailcom/taskodoro-backend/6RRMTJyvo9CC6tL3sCq6K5CvawRq"],
    methods: ["POST", "GET"]
}));

require("./config/mongoose.config");

const taskRoutes = require('./routes/task.routes');
taskRoutes(app);

app.listen(8000, () => console.log("Listening on Port 8000"))