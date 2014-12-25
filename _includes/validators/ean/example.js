$(document).ready(function() {
    $('#eanForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            ean: {
                validators: {
                    ean: {
                        message: 'The value is not valid EAN'
                    }
                }
            }
        }
    });
});