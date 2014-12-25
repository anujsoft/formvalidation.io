$(document).ready(function() {
    $('#regexpForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            avatar: {
                validators: {
                    regexp: {
                        regexp: /\.(gif|jpg|jpeg|tiff|png)$/i,
                        message: 'The avatar URL must end with .jpg, .jpeg or .png'
                    },
                    uri: {
                        message: 'The avatar URL is not valid'
                    }
                }
            }
        }
    });
});