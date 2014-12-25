$(document).ready(function() {
    $('#vatForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            vat: {
                validators: {
                    vat: {
                        message: 'The VAT number is not valid'
                    }
                }
            }
        }
    });
});