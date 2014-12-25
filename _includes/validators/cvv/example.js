$(document).ready(function() {
    $('#cvvForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            ccNumber: {
                validators: {
                    creditCard: {
                        message: 'The credit card number is not valid'
                    }
                }
            },
            cvvNumber: {
                validators: {
                    cvv: {
                        creditCardField: 'ccNumber',
                        message: 'The CVV number is not valid'
                    }
                }
            }
        }
    });
});