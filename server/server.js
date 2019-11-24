const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');


let calcObject = [];


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static('server/public'));


function addCalc(newCalc) {
    calcObject.push(newCalc)
    console.log(calcObject);

}


app.post('/api/toCalc', (req,res) => {
    // console.log(req.body);
    const newCalc = req.body;
    addCalc(newCalc);
    res.sendStatus(200);
    // console.log(newCalc);
});


// app.get('/api/result', (req,res) => {
//     res.send(resultOfCalc);
// });


app.listen(PORT, () => {
    console.log(`What up from port: ${PORT}`);
})