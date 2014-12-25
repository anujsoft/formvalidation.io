$(document).ready(function() {
    $('#isinForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            isin: {
                validators: {
                    isin: {
                        message: 'The value is not valid ISIN'
                    }
                }
            }
        }
    });
});