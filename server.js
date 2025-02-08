const express = require("express")
const port =4500
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.listen(port,()=>{
    console.log(`server is connected http://localhost:${port}`)
})

app.post('/',(req,res)=>{
    const {name ,bank,branch}=req.body
    if(!name)
        return res.status(404).send("name is not given")
    
    if(bank.length>14 || bank.length<14)
        return res.status(410).send("Invalid bank acoount number")
    if(!branch)
        return res.status(440).send("branch is not given")
    return res.status(200).send("all the details are given")
})
