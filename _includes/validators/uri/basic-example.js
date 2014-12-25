$(document).ready(function() {
    $('#uriForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            website: {
                validators: {
                    uri: {
                        message: 'The website address is not valid'
                    }
                }
            }
        }
    });
});