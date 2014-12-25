$(document).ready(function() {
    $('#isbnForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            isbn: {
                validators: {
                    isbn: {
                        message: 'The value is not valid ISBN'
                    }
                }
            }
        }
    });
});