$(document).ready(function() {
    // updateStatus() example
    $('#datetimePicker').datetimepicker();

    $('#datetimeForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            datetimePicker: {
                validators: {
                    notEmpty: {
                        message: 'The date is required and cannot be empty'
                    },
                    date: {
                        format: 'MM/DD/YYYY h:m A'
                    }
                }
            }
        }
    });

    $('#datetimePicker')
        .on('dp.change dp.show', function (e) {
            // Revalidate the date when user change it
            $('#datetimeForm').bootstrapValidator('revalidateField', 'datetimePicker');
        });
});