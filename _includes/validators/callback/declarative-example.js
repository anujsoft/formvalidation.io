// IMPORTANT NOTICE: You have to declare the callback as a global function
// outside of $(document).ready()
function checkCaptcha(value, validator) {
    // Determine the numbers which are generated in captchaOperation
    var items = $('#captchaOperation').html().split(' '),
        sum   = parseInt(items[0]) + parseInt(items[2]);
    return value == sum;
};

$(document).ready(function() {
    // Return a random number between min and max
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Generate a sum of two random numbers
    function generateCaptcha() {
        $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
    };

    generateCaptcha();

    $('#callbackForm').bootstrapValidator();
});