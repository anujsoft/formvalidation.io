$(document).ready(function() {
    $('#cusipForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            cusip: {
                validators: {
                    cusip: {
                        message: 'The value is not valid CUSIP'
                    }
                }
            }
        }
    });
});