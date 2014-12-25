$(document).ready(function () {
    $('#bootstrapTagsInputForm')
        .find('[name="cities"]')
            // Revalidate the cities field when it is changed
            .change(function (e) {
                $('#bootstrapTagsInputForm').bootstrapValidator('revalidateField', 'cities');
            })
            .end()
        .find('[name="countries"]')
            // Revalidate the countries field when it is changed
            .change(function (e) {
                $('#bootstrapTagsInputForm').bootstrapValidator('revalidateField', 'countries');
            })
            .end()
        .bootstrapValidator({
            excluded: ':disabled',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                cities: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter at least one city you like the most.'
                        }
                    }
                },
                countries: {
                    validators: {
                        callback: {
                            message: 'Please enter 2-4 countries you like most.',
                            callback: function (value, validator, $field) {
                                // Get the entered elements
                                var options = validator.getFieldElements('countries').tagsinput('items');
                                return (options !== null && options.length >= 2 && options.length <= 4);
                            }
                        }
                    }
                }
            }
        });
});