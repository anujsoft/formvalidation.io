$(document).ready(function() {
    $('#enableForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                full_name: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required and cannot be empty'
                        }
                    }
                },
                password: {
                    enabled: false,
                    validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        },
                        identical: {
                            field: 'confirm_password',
                            message: 'The password and its confirm must be the same'
                        }
                    }
                },
                confirm_password: {
                    enabled: false,
                    validators: {
                        notEmpty: {
                            message: 'The confirm password is required and cannot be empty'
                        },
                        identical: {
                            field: 'password',
                            message: 'The password and its confirm must be the same'
                        }
                    }
                }
            }
        })
        // Enable the password/confirm password validators if the password is not empty
        .on('keyup', '[name="password"]', function() {
            var isEmpty = $(this).val() == '';
            $('#enableForm')
                    .bootstrapValidator('enableFieldValidators', 'password', !isEmpty)
                    .bootstrapValidator('enableFieldValidators', 'confirm_password', !isEmpty);

            // Revalidate the field when user start typing in the password field
            if ($(this).val().length == 1) {
                $('#enableForm').bootstrapValidator('validateField', 'password')
                                .bootstrapValidator('validateField', 'confirm_password');
            }
        });
});