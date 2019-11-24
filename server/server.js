const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static('server/public'));

//going to move this next section to a module

let calcArray = [];


function addCalc(newCalc) {
    calcArray.push(newCalc)
    console.log(calcArray);

}

//end move to module section

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

    }else {
        console.log('try again');
    }
});


// app.get('/api/result', (req,res) => {
//     res.send(resultOfCalc);
// });


app.listen(PORT, () => {
    console.log(`What up from port: ${PORT}`);
})