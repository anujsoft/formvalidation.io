$(document).ready(function() {
    $('#zipcodeForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            code: {
                validators: {
                    zipCode: {
                        country: 'US',
                        message: 'The value is not valid zipcode'
                    }
                }
            }
        }
    });
});