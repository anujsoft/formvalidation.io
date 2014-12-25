$(document).ready(function() {
    $('#hidingSuccessForm')
        .bootstrapValidator({
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
                abstract: {
                    validators: {
                        notEmpty: {
                            message: 'The abstract is required'
                        },
                        stringLength: {
                            max: 400,
                            message: 'The abstract must be less than 400 characters'
                        }
                    }
                },
                'topics[]': {
                    validators: {
                        notEmpty: {
                            message: 'The topic is required'
                        },
                        choice: {
                            min: 2,
                            max: 3,
                            message: 'Please choose 2 - 3 topics'
                        }
                    }
                },
                sessionType: {
                    validators: {
                        notEmpty: {
                            message: 'The session type is required'
                        }
                    }
                }
            }
        })
        .on('success.field.bv', function(e, data) {
            // $(e.target)  --> The field element
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            var $parent = data.element.parents('.form-group');

            // Remove the has-success class
            $parent.removeClass('has-success');

            // Hide the success icon
            $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
        });
});