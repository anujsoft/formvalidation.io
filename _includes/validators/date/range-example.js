$(document).ready(function() {
    $('#rangeForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            date: {
                validators: {
                    date: {
                        message: 'The date is not valid',
                        format: 'YYYY/MM/DD',
                        min: '2000/01/01',
                        max: '2020/12/30'
                    }
                }
            }
        }
    });
});