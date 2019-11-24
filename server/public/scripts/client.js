$(document).ready(init);


function init () {
    console.log ('Welcome. Blue Warrior is now IT');

    $('.js-submit-btn').on('click', onClickEqual);

}

function onClickEqual(event) {
    console.log('you just clicked the button');
    const postPack = {
    input1 = $('.js-input1').val(),
    input2 = $('.js-input2').val(),
    }
    console.log(input1, input2);
}