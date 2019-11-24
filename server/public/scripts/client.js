$(document).ready(init);


function init () {
    console.log ('Welcome. Blue Warrior is now IT');

    $('#js-submit-btn').on('click', onClickEqual);

    $('#js-minus-btn').on('click', clickSub);
    $('#js-plus-btn').on('click', clickAdd);
    $('#js-times-btn').on('click', clickMulti);
    $('#js-divide-btn').on('click', clickDivide);

}


function clickAdd(event) {
    opInput = "add";
    console.log('add button clicked');

}

function clickSub(event) {
    opInput = "sub";
    console.log('sub button clicked');

}

function clickMulti(event) {
    opInput = "multi";
    console.log('multi button clicked');

}

function clickDivide(event) {
    opInput = "divide";
    console.log('divide button clicked');

}


function onClickEqual(event) {
    console.log('you just clicked the = button');
    const postPack = {
    input1: $('#js-input1').val(),
    input2: $('#js-input2').val(),
    opInput: opInput,
    }
    console.log(postPack);
}