const express = require("express")
const app = express()
app.use(express.json());

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

const userRoutes = require("./routes/userRoutes")

app.use('/users', userRoutes)

const PORT = 3000 // will use env variable later
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))