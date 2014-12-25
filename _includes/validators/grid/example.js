$(document).ready(function() {
    $('#gridForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            grid: {
                validators: {
                    grid: {
                        message: 'The value is not valid GRId'
                    }
                }
            }
        }
    });
});