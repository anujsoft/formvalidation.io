$(document).ready(function() {
    $('#dynamicMessageForm')
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
                            message: 'The value is not valid %s'
                        }
                    }
                }
            }
        })
        .on('change', '[name="countrySelectBox"]', function() {
            // Revalidate the zipcode after changing the country
            $('#dynamicMessageForm').bootstrapValidator('revalidateField', 'code');
        });
});