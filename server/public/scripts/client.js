$(document).ready(init);


function init () {
    console.log ('Welcome. Blue Warrior is now IT');

    $('.js-submit-btn').on('click', onClickEqual);

    $('.js-minus-btn').on('click', testfunction);

}


function testfunction() {
    console.log('- button was clicked');

}
function onClickEqual(event) {
    console.log('you just clicked the = button');
    const postPack = {
    input1 = $('.js-input1').val(),
    input2 = $('.js-input2').val(),
    opInput = "add",
    }
    console.log(postPack);
}