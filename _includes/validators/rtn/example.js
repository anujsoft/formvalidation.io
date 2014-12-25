$(document).ready(function() {
    $('#rtnForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            rtn: {
                validators: {
                    rtn: {
                        message: 'The value is not valid RTN'
                    }
                }
            }
        }
    });
});