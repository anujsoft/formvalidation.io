$(document).ready(function() {
    $('#ismnForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            ismn: {
                validators: {
                    ismn: {
                        message: 'The value is not valid ISMN'
                    }
                }
            }
        }
    });
});