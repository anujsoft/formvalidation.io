$(document).ready(function() {
    $.fn.bootstrapValidator.validators.password = {
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '') {
                return true;
            }

            if (value.length < 8) {
                return false;
            }
            if (value === value.toLowerCase()) {
                return false;
            }
            if (value === value.toUpperCase()) {
                return false;
            }
            if (value.search(/[0-9]/) < 0) {
                return false;
            }

            return true;
        }
    };

    $('#passwordForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    password: {
                        message: 'The password is not valid'
                    }
                }
            }
        }
    });
});