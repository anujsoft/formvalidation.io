$(document).ready(function() {
    $('#rangeCallbackForm').bootstrapValidator({
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
                        format: 'YYYY/MM/DD'
                    },
                    callback: {
                        message: 'The date is not in the range',
                        callback: function(value, validator) {
                            var m = new moment(value, 'YYYY/MM/DD', true);
                            if (!m.isValid()) {
                                return false;
                            }
                            return m.isAfter('2000/01/01') && m.isBefore('2020/12/30');
                        }
                    }
                }
            }
        }
    });
});