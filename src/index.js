import express from 'express';
const app=express();
app.use(express.json());
app.get("/",async (req,res)=>{
    res.json({
        msg:" i have deploy my first express app in aws  adn i lover u"
    })
})

app.listen(3000,()=>{
    console.log("I have start my server");
})