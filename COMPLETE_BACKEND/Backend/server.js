require("dotenv").config();
const app = require("./src/app")
const connectDB = require("./src/db/db")

app.listen(8080, async () => {
    await connectDB();
    console.log("Server is running on port 8080")
})