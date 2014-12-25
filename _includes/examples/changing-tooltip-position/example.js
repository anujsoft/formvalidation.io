$(document).ready(function() {
    $('#tooltipContainerForm')
        .bootstrapValidator({
            container: 'tooltip',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required and can not be empty'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required and can not be empty'
                        }
                    }
                },
                phone: {
                    validators: {
                        digits: {
                            message: 'The phone number can contain digits only'
                        },
                        notEmpty: {
                            message: 'The phone number is required and can not be empty'
                        }
                    }
                }
            }
        })
        .on('error.field.bv', function(e, data) {
            // Get the tooltip
            var $parent = data.element.parents('.form-group'),
                $icon   = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
                title   = $icon.data('bs.tooltip').getTitle();

            // Destroy the old tooltip and create a new one positioned to the right
            $icon.tooltip('destroy').tooltip({
                html: true,
                placement: 'right',
                title: title,
                container: 'body'
            });
        });

    // Reset the Tooltip container form
    $('#resetButton').on('click', function(e) {
        var fields = $('#tooltipContainerForm').data('bootstrapValidator').getOptions().fields,
            $parent, $icon;

        for (var field in fields) {
            $parent = $('[name="' + field + '"]').parents('.form-group');
            $icon   = $parent.find('.form-control-feedback[data-bv-icon-for="' + field + '"]');
            $icon.tooltip('destroy');
        }

        // Then reset the form
        $('#tooltipContainerForm').data('bootstrapValidator').resetForm(true);
    });
});