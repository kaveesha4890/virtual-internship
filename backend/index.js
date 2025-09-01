const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/ping',(req,res)=>{
    res.json({message: 'pong',time: new Date().toISOString()})
});

if(require.main === module){
    const port = process.env.PORT || 4000;
    app.listen(port,()=>{
        console.log(`Server is listening on ${port}`);
    })
}else{
    module.exports = app;
}