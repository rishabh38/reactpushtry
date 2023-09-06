const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express();
app.use(cors());
app.use(bodyParser.json())
mongoose.connect("mongodb://127.0.0.1/react");
const userSchema=new mongoose.Schema(
    {username:String}
)
const User=new mongoose.model("User",userSchema)
app.post('/signup',async(req,res)=>{try
{
    const{username}=req.body;
    const newUser=newUser({username})
    await newUser.save()
    res.send()
    }
catch(err){
    res.send(err)
}
})
app.listen(5000);