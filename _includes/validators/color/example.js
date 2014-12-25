$(document).ready(function() {
    $('#colorForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            color: {
                validators: {
                    color: {
                        type: ['hex', 'hsl', 'hsla', 'keyword', 'rgb', 'rgba'],  // The default value for type
                        message: 'The value is not valid color'
                    }
                }
            }
        }
    });
});