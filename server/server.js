const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
// These make req.body available!
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// const stuffToCalc = {
//     value1: 2,
//     value2: 2,
//     operator: 'multiply'  //change fix or address this later... im not sure how this is going to work yet... idea
//                           //now is to take the 'multiply' and make an if then check to swap 'multiply' for * etc
// }

// const resultOfCalc = {
//     resultvalue: 4,

// }


app.post('/api/toCalc', (req,res) => {
    const calcObject = req.body.calcObject;
    const input1 = (calcObject.input1);
    const input2 = (calcObject.input2);
    const opInput = (calcObject.opInput);
    res.send(calcObject);

});



// app.get('/api/result', (req,res) => {
//     res.send(resultOfCalc);
// });






app.listen(PORT, () => {
    console.log(`What up from port: ${PORT}`);
})