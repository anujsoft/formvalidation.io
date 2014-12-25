$(document).ready(function() {
    $('#signupForm')
        .on('init.field.bv', function(e, data) {
            var field  = data.field,        // Get the field name
                $field = data.element,      // Get the field element
                bv     = data.bv;           // BootstrapValidator instance

            // Create a span element to show valid message
            // and place it right before the field
            var $span = $('<small/>')
                            .addClass('help-block validMessage')
                            .attr('data-field', field)
                            .insertAfter($field)
                            .hide();

            // Retrieve the valid message via getOptions()
            var message = bv.getOptions(field).validMessage;
            if (message) {
                $span.html(message);
            }
        })
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    validMessage: 'The username looks great',
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        different: {
                            field: 'password',
                            message: 'The username cannot be same as password'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/i,
                            message: 'The username can only consist of alphabetical, number'
                        }
                    }
                },
                password: {
                    validMessage: 'The password is good',
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        different: {
                            field: 'username',
                            message: 'The password cannot be same as username'
                        }
                    }
                }
            }
        })
        .on('success.field.bv', function(e, data) {
            var field  = data.field,        // Get the field name
                $field = data.element;      // Get the field element

            // Show the valid message element
            $field.next('.validMessage[data-field="' + field + '"]').show();
        })
        .on('error.field.bv', function(e, data) {
            var field  = data.field,        // Get the field name
                $field = data.element;      // Get the field element

            // Show the valid message element
            $field.next('.validMessage[data-field="' + field + '"]').hide();
        });
});