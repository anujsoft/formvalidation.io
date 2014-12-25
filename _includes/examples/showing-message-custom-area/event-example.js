$(document).ready(function() {
    $('#sendMessageForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required and cannot be empty'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The email address is not valid'
                        }
                    }
                },
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The title is required and cannot be empty'
                        },
                        stringLength: {
                            max: 100,
                            message: 'The title must be less than 100 characters long'
                        }
                    }
                },
                content: {
                    validators: {
                        notEmpty: {
                            message: 'The content is required and cannot be empty'
                        },
                        stringLength: {
                            max: 500,
                            message: 'The content must be less than 500 characters long'
                        }
                    }
                }
            }
        })

        .on('success.form.bv', function(e) {
            // Reset the message element when the form is valid
            $('#errors').html('');
        })

        .on('error.field.bv', function(e, data) {
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            // Get the messages of field
            var messages = data.bv.getMessages(data.element);

            // Remove the field messages if they're already available
            $('#errors').find('li[data-field="' + data.field + '"]').remove();

            // Loop over the messages
            for (var i in messages) {
                // Create new 'li' element to show the message
                $('<li/>')
                    .attr('data-field', data.field)
                    .wrapInner(
                        $('<a/>')
                            .attr('href', 'javascript: void(0);')
                            .html(messages[i])
                            .on('click', function(e) {
                                // Focus on the invalid field
                                data.element.focus();
                            })
                    )
                    .appendTo('#errors');
            }

            // Hide the default message
            // $field.data('bv.messages') returns the default element containing the messages
            data.element
                .data('bv.messages')
                .find('.help-block[data-bv-for="' + data.field + '"]')
                .hide();
        })

        .on('success.field.bv', function(e, data) {
            // Remove the field messages
            $('#errors').find('li[data-field="' + data.field + '"]').remove();
        });
});