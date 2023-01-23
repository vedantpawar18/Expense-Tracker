const express=require("express");
const app=express();
var cors = require('cors')

const Connection=require("./Config/db")

app.use(express.json());
app.use(cors());

var logRouter=require("./routes/usersRoute");
const transactionsRouter = require('./routes/transactionsRoute')

app.get("/", (req,res)=>{
    res.send("Welcome to homepage");
});

app.use("/api/users",logRouter);
app.use('/api/transactions' , transactionsRouter)

app.listen(8080,async()=>{
    try{
        await Connection;
        console.log("port started at 8080");
    }
    catch(err){
        console.log(err)
    }
})