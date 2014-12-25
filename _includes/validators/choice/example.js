$(document).ready(function() {
    $('#interviewForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'languages[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 4,
                        message: 'Please choose 2 - 4 programming languages you are good at'
                    }
                }
            },
            'editors[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 3,
                        message: 'Please choose 2 - 3 editors you use most'
                    }
                }
            }
        }
    });
});