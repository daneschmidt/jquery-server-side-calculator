$(document).ready(init);


function init () {
    console.log ('Welcome. Blue Warrior is now IT');

    $('.js-submit-btn').on('click', onClickEqual);

}

function onClickEqual(event) {
    console.log('you just clicked the button');
    const $input1Field = $('.js-input1').val();
    const $input2Field = $('.js-input2').val();
    console.log($input1Field, $input2Field);
}