$(document).ready(function() {
    $('#zipcodeElementForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                code: {
                    validators: {
                        zipCode: {
                            country: 'countrySelectBox',
                            message: 'The value is not valid zipcode'
                        }
                    }
                }
            }
        })
        .on('change', '[name="countrySelectBox"]', function() {
            // Revalidate the zipcode after changing the country
            $('#zipcodeElementForm').bootstrapValidator('revalidateField', 'code');
        });
});