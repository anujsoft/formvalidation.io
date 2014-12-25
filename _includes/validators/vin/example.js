$(document).ready(function() {
    $('#vinForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            vin: {
                validators: {
                    vin: {
                        message: 'The VIN number is not valid'
                    }
                }
            }
        }
    });
});