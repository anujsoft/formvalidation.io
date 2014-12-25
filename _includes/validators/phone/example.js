$(document).ready(function() {
    $('#phoneForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                phoneNumber: {
                    validators: {
                        phone: {
                            country: 'countrySelectBox',
                            message: 'The value is not valid %s phone number'
                        }
                    }
                }
            }
        })
        // Revalidate phone number when changing the country
        .on('change', '[name="countrySelectBox"]', function(e) {
            $('#phoneForm').bootstrapValidator('revalidateField', 'phoneNumber');
        });
});