function getCountryCode(value, validator, $field) {
    // Return the selected country code
    return validator.getFieldElements('countrySelectBox').val();
};

$(document).ready(function() {
   $('#zipcodeFunctionNameForm')
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
                            country: 'getCountryCode',
                            message: 'The value is not valid zipcode'
                        }
                    }
                }
            }
        })
        .on('change', '[name="countrySelectBox"]', function() {
            $('#zipcodeFunctionNameForm').bootstrapValidator('revalidateField', 'code');
        });
});