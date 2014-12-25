$(document).ready(function() {
    $('#multiselectForm')
        .find('[name="gender"]')
            .multiselect()
            .end()
        .find('[name="browsers"]')
            .multiselect({
                // Re-validate the multiselect field when it is changed
                onChange: function(element, checked) {
                    $('#multiselectForm').bootstrapValidator('revalidateField', 'browsers');
                }
            })
            .end()
        .bootstrapValidator({
            // Exclude only disabled fields
            // The invisible fields set by Bootstrap Multiselect must be validated
            excluded: ':disabled',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                gender: {
                    validators: {
                        notEmpty: {
                            message: 'The gender is required'
                        }
                    }
                },
                browsers: {
                    validators: {
                        callback: {
                            message: 'Please choose 2-3 browsers you use for developing',
                            callback: function(value, validator, $field) {
                                // Get the selected options
                                var options = validator.getFieldElements('browsers').val();
                                return (options != null
                                        && options.length >= 2 && options.length <= 3);
                            }
                        }
                    }
                }
            }
        });
});