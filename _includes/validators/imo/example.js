$(document).ready(function() {
    $('#imoForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            imo: {
                validators: {
                    imo: {
                        message: 'The value is not valid IMO'
                    }
                }
            }
        }
    });
});