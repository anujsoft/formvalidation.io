$(document).ready(function() {
    $('#enableButtonForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                task: {
                    validators: {
                        notEmpty: {
                            message: 'The task is required'
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
        })
        .on('success.field.bv', function(e, data) {
            if (data.bv.isValid()) {
                data.bv.disableSubmitButtons(false);
            }
        });
});
