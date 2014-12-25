$(document).ready(function() {
    $('#meidForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            meid: {
                validators: {
                    meid: {
                        message: 'The value is not valid MEID'
                    }
                }
            }
        }
    });
});