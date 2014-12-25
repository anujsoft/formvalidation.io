$(document).ready(function() {
    $('#latlongForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            latitude: {
                validators: {
                    between: {
                        min: -90,
                        max: 90,
                        message: 'The latitude must be between -90.0 and 90.0'
                    }
                }
            },
            longitude: {
                validators: {
                    between: {
                        min: -180,
                        max: 180,
                        message: 'The longitude must be between -180.0 and 180.0'
                    }
                }
            }
        }
    });
});