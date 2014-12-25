$(document).ready(function() {
    $('#idForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                idNumber: {
                    validators: {
                        id: {
                            country: 'countrySelectBox',
                            message: 'The value is not valid %s ID'
                        }
                    }
                }
            }
        })
        // Revalidate ID number when changing the country
        .on('change', '[name="countrySelectBox"]', function(e) {
            $('#idForm').bootstrapValidator('revalidateField', 'idNumber');
        });
});