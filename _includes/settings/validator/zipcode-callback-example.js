$(document).ready(function() {
    $('#zipcodeCallbackForm')
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
                            country: function(value, validator, $field) {
                                return validator.getFieldElements('countrySelectBox').val();
                            },
                            message: 'The value is not valid zipcode'
                        }
                    }
                }
            }
        })
        .on('change', '[name="countrySelectBox"]', function() {
            $('#getCountryCode').bootstrapValidator('revalidateField', 'code');
        });
});