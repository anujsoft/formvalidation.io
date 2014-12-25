$(document).ready(function() {
    $('#loginForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    }
                }
            }
        }
    });

    // Login button click handler
    $('#loginButton').on('click', function() {
        bootbox
            .dialog({
                title: 'Login',
                message: $('#loginForm'),
                show: false // We will show it manually later
            })
            .on('shown.bs.modal', function() {
                $('#loginForm')
                    .show()                                 // Show the login form
                    .bootstrapValidator('resetForm', true); // Reset form
            })
            .on('hide.bs.modal', function(e) {
                // Bootbox will remove the modal (including the body which contains the login form)
                // after hiding the modal
                // Therefor, we need to backup the form
                $('#loginForm').hide().appendTo('body');
            })
            .modal('show');
    });
});