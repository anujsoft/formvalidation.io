$(document).ready(function() {
    $('#issnForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            issn: {
                validators: {
                    issn: {
                        message: 'The value is not valid ISSN'
                    }
                }
            }
        }
    });
});