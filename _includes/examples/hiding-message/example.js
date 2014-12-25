$(document).ready(function() {
    $('#reportForm')
        .bootstrapValidator({
            excluded: ':disabled',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The title is required'
                        }
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                            message: 'The abstract is required'
                        }
                    }
                },
                os: {
                    validators: {
                        notEmpty: {
                            message: 'The operating system is required'
                        }
                    }
                },
                'browser[]': {
                    validators: {
                        notEmpty: {
                            message: 'Choose at least one browser'
                        }
                    }
                },
                priority: {
                    validators: {
                        notEmpty: {
                            message: 'The priority is required'
                        }
                    }
                }
            }
        })
        .on('error.field.bv', function(e, data) {
            // $(e.target)  --> The field element
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            // Hide the messages
            data.element
                .data('bv.messages')
                .find('.help-block[data-bv-for="' + data.field + '"]').hide();
        });
});