$(document).ready(function() {
    $('#icheckForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                job: {
                    validators: {
                        notEmpty: {
                            message: 'The job position is required'
                        }
                    }
                },
                'languages[]': {
                    validators: {
                        choice: {
                            min: 2,
                            max: 4,
                            message: 'Please choose 2 - 4 programming languages you are good at'
                        }
                    }
                }
            }
        })
        .find('input[name="job"], input[name="languages[]"]')
            // Init iCheck elements
            .iCheck({
                checkboxClass: 'icheckbox_square-red',
                radioClass: 'iradio_square-red'
            })
            // Called when the radios/checkboxes are changed
            .on('ifChanged', function(e) {
                // Get the field name
                var field = $(this).attr('name');
                $('#icheckForm').bootstrapValidator('revalidateField', field);
            });
});