$(document).ready(function() {
    $('#imeiForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            imei: {
                validators: {
                    imei: {
                        message: 'The value is not valid IMEI'
                    }
                }
            }
        }
    });
});