$(document).ready(function() {
    $('#sedolForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            sedol: {
                validators: {
                    sedol: {
                        message: 'The value is not valid SEDOL'
                    }
                }
            }
        }
    });
});