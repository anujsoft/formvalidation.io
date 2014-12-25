$(document).ready(function() {
    $('#stringCaseForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    stringCase: {
                        message: 'The card holder must be in uppercase',
                        'case': 'upper'
                    }
                }
            }
        }
    });
});