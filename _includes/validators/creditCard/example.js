$(document).ready(function() {
    $('#creditCardForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            cc: {
                validators: {
                    creditCard: {
                        message: 'The credit card number is not valid'
                    }
                }
            }
        }
    });
});