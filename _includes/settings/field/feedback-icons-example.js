$(document).ready(function() {
    $('#fieldIconsForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            address: {
                feedbackIcons: 'false',
                validators: {
                    notEmpty: {
                        message: 'The address is required and cannot be empty'
                    }
                }
            },
            city: {
                feedbackIcons: false,
                validators: {
                    notEmpty: {
                        message: 'The city is required and cannot be empty'
                    }
                }
            },
            phone: {
                feedbackIcons: true,
                validators: {
                    notEmpty: {
                        message: 'The phone number is required and cannot be empty'
                    },
                    phone: {
                        country: 'US',
                        message: 'The phone number is not valid'
                    }
                }
            }
        }
    });
});