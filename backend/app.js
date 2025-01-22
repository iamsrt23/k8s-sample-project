const express = require('express')
const app = express()

const PORT = 5000

app.get('/',(req,res)=>{
    res.send("Hello From The Backend!")

})

app.listen(PORT,()=>{
    console.log("Backend Running on port ${PORT}")
})


