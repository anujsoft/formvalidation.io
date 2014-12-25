$(document).ready(function() {
    $('#customFormatForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            independenceDay: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function (value, validator) {
                            var m = new moment(value, 'MMMM D', true);
                            if (!m.isValid()) {
                                return false;
                            }
                            return (m.months() === 6 && m.date() === 4);
                        }
                    }
                }
            }
        }
    });
});