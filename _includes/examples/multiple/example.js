$(document).ready(function() {
    $('#multipleForm').bootstrapValidator({
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
            'browsers[]': {
                validators: {
                    notEmpty: {
                        message: 'Please specify at least one browser you use daily for development'
                    }
                }
            },
            'editors[]': {
                validators: {
                    notEmpty: {
                        message: 'The editor names are required'
                    }
                }
            }
        }
    });
});