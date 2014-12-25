$(document).ready(function() {
    $('#triggerForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            title: {
                trigger: 'keyup',
                validators: {
                    notEmpty: {
                        message: 'The title is required'
                    }
                }
            },
            summary: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'The summary is required'
                    }
                }
            },
            description: {
                validators: {
                    notEmpty: {
                        message: 'The description is required'
                    }
                }
            }
        }
    });
});