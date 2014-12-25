$(document).ready(function() {
    $('#ibanForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            iban: {
                validators: {
                    iban: {
                        message: 'The value is not valid IBAN'
                    }
                }
            }
        }
    });
});