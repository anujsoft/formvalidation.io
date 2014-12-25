$(document).ready(function() {
    $('#colorForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            color: {
                validators: {
                    hexColor: {
                        message: 'The color code is not valid'
                    }
                }
            }
        }
    });
});