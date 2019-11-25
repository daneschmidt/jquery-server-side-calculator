const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static('server/public'));

let calcHistoryArray = [];


app.post('/api/toCalc', (req,res) => {
    // console.log(req.body);
    const newCalc = req.body;
    const opInput = req.body.opInput;
    const input1 = parseFloat(req.body.input1);
    const input2 = parseFloat(req.body.input2);

    addCalc(newCalc);
    res.sendStatus(200);
    // console.log(newCalc);
    let answer;

    if(opInput == "add") {
        answer = input1 + input2;
        console.log(answer);

    }else if(opInput == "sub") {
        answer = input1 - input2;
        console.log(answer);

    }else if(opInput == "multi") {
        answer = input1 * input2;
        console.log(answer);

    }else if(opInput == "divide") {
        answer = input1 / input2;
        console.log(answer);

    }else {
        console.log('try again');
    }

});


function addCalc(newCalc) {
    calcHistoryArray.push(newCalc)
    console.log(calcHistoryArray);

}


app.get('/api/results', (req,res) => {
    res.send(calcHistoryArray);
    console.log(calcHistoryArray);
});


app.listen(PORT, () => {
    console.log(`What up from port: ${PORT}`);
})