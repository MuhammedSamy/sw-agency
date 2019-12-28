const express = require('express');
const ejs = require('ejs');
const app = express();
const trips = require('./routers/trip');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use('/trips',trips)
app.get('/',(req,res)=>{
    res.send('Hello There!');
})


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to port ${port}...`));