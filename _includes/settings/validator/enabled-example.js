$(document).ready(function() {
    $('#validatorEnabledForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        // enabled is true, by default
                        message: 'The full name is required and cannot be empty'
                    },
                    stringLength: {
                        enabled: true,
                        min: 8,
                        max: 40,
                        message: 'The full name must be more than 8 and less than 40 characters long'
                    },
                    regexp: {
                        enabled: false,
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The full name can only consist of alphabetical, number, and space'
                    }
                }
            }
        }
    });
});