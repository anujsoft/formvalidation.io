$(document).ready(function() {
    $('#toggleForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: 'The company name is required'
                        }
                    }
                },
                // These fields will be validated when being visible
                job: {
                    validators: {
                        notEmpty: {
                            message: 'The job title is required'
                        }
                    }
                },
                department: {
                    validators: {
                        notEmpty: {
                            message: 'The department name is required'
                        }
                    }
                },
                mobilePhone: {
                    validators: {
                        notEmpty: {
                            message: 'The mobile phone number is required'
                        },
                        digits: {
                            message: 'The mobile phone number is not valid'
                        }
                    }
                },
                // These fields will be validated when being visible
                homePhone: {
                    validators: {
                        digits: {
                            message: 'The home phone number is not valid'
                        }
                    }
                },
                officePhone: {
                    validators: {
                        digits: {
                            message: 'The office phone number is not valid'
                        }
                    }
                }
            }
        })
        .on('click', 'button[data-toggle]', function() {
            var $target = $($(this).attr('data-toggle'));
            $target.toggle();
            if (!$target.is(':visible')) {
                // Enable the submit buttons in case additional fields are not valid
                $('#togglingForm').data('bootstrapValidator').disableSubmitButtons(false);
            }
        });
});