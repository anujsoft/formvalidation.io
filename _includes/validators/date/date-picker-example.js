$(document).ready(function() {
    $('#datetimePicker').datetimepicker();

    $('#meetingForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            meeting: {
                validators: {
                    date: {
                        format: 'MM/DD/YYYY h:m A',
                        message: 'The value is not a valid date'
                    }
                }
            }
        }
    });

    $('#datetimePicker').on('dp.change dp.show', function(e) {
        $('#meetingForm').bootstrapValidator('revalidateField', 'meeting');
    });
});