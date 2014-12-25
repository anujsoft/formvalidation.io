$(document).ready(function() {
    $('#select2Form')
        .find('[name="colors"]')
            .select2()
            // Revalidate the color when it is changed
            .change(function(e) {
                $('#select2Form').bootstrapValidator('revalidateField', 'colors');
            })
            .end()
        .find('[name="colors-tags"]')
            .select2({
                // Specify tags
                tags: ['Black', 'Blue', 'Green', 'Orange', 'Red', 'Yellow', 'White']
            })
            // Revalidate the color when it is changed
            .change(function(e) {
                $('#select2Form').bootstrapValidator('revalidateField', 'colors-tags');
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
                colors: {
                    validators: {
                        callback: {
                            message: 'Please choose 2-4 color you like most',
                            callback: function(value, validator, $field) {
                                // Get the selected options
                                var options = validator.getFieldElements('colors').val();
                                return (options != null && options.length >= 2 && options.length <= 4);
                            }
                        }
                    }
                },
                'colors-tags': {
                    validators: {
                        callback: {
                            message: 'Please choose 2-4 color you like most',
                            callback: function(value, validator, $field) {
                                // Get the selected options
                                var options  = validator.getFieldElements('colors-tags').val(),
                                    options2 = options.split(',');
                                return (options2 !== null && options2.length >= 2 && options2.length <= 4);
                            }
                        }
                    }
                }
            }
        });
});