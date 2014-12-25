$(document).ready(function() {
    $('#profileForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                // All the email address field have emailAddress class
                selector: '.emailAddress',
                validators: {
                    callback: {
                        message: 'You must enter at least one email address',
                        callback: function(value, validator, $field) {
                            var isEmpty = true,
                                // Get the list of fields
                                $fields = validator.getFieldElements('email');
                            for (var i = 0; i < $fields.length; i++) {
                                if ($fields.eq(i).val() !== '') {
                                    isEmpty = false;
                                    break;
                                }
                            }

                            if (!isEmpty) {
                                // Update the status of callback validator for all fields
                                validator.updateStatus('email', validator.STATUS_VALID, 'callback');
                                return true;
                            }

                            return false;
                        }
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    }
                }
            }
        }
    });
});