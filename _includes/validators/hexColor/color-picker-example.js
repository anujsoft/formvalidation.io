$(document).ready(function() {
    $('#colorPickerForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            color: {
                validators: {
                    hexColor: {
                        message: 'The color code is not valid'
                    }
                }
            }
        }
    });

    $('#colorPicker')
        .colorpicker()
        .on('showPicker changeColor', function(e) {
            $('#colorPickerForm').bootstrapValidator('revalidateField', 'color');
        });
});