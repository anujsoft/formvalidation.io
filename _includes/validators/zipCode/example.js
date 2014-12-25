$(document).ready(function() {
    $('#zipCodeForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                postalCode: {
                    validators: {
                        zipCode: {
                            country: 'countrySelectBox',
                            message: 'The value is not valid %s postal code'
                        }
                    }
                }
            }
        })
        // Revalidate postal code when changing the country
        .on('change', '[name="countrySelectBox"]', function(e) {
            $('#zipCodeForm').bootstrapValidator('revalidateField', 'postalCode');
        });
});