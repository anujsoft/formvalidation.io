$(document).ready(function() {
    $('#thresholdForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        threshold: 3,
        fields: {
            fullname: {
                threshold: 10,
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            gender: {
                // The threshold option does not effect to the elements which user cannot type, such as radio, checkbox, select one
                threshold: 5,
                validators: {
                    notEmpty: {
                        message: 'The summary is required'
                    }
                }
            },
            phone: {
                threshold: 5,
                validators: {
                    notEmpty: {
                        message: 'The phone number is required'
                    },
                    phone: {
                        message: 'The phone number is not valid',
                        country: 'US'
                    }
                }
            },
            address: {
                // The threshold option is not set, it will be taken from the form option (which is 3 in this example)
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            }
        }
    });
});