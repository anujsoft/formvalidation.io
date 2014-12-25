$(document).ready(function() {
    $('#chosenForm')
        .find('[name="colors"]')
            .chosen()
            // Revalidate the color when it is changed
            .change(function(e) {
                $('#chosenForm').bootstrapValidator('revalidateField', 'colors');
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
                }
            }
        });
});