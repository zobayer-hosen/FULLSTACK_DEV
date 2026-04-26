require("dotenv").config()
const app = require("./src/app")

const connectDB = require("./src/db/db")

const port = 8080
app.listen(port,async()=>{
    await connectDB();{
        console.log(`server is running on port ${port}`)
    }
})