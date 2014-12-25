$(document).ready(function() {
    $('#groupForm').bootstrapValidator({
        container: 'tooltip',
        group: 'td',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'project[]': {
                validators: {
                    notEmpty: {
                        message: 'The project name is required'
                    }
                }
            },
            'role[]': {
                validators: {
                    notEmpty: {
                        message: 'The role is required'
                    }
                }
            },
            'url[]': {
                validators: {
                    notEmpty: {
                        message: 'The URL is required'
                    },
                    uri: {
                        message: 'The URL is invalid'
                    }
                }
            }
        }
    });
});