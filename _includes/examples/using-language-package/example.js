$(document).ready(function() {
    $('#registrationForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                    },
                    stringLength: {
                        min: 6,
                        max: 30
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                    },
                    emailAddress: {
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                    },
                    stringLength: {
                        min: 8
                    }
                }
            },
            birthday: {
                validators: {
                    notEmpty: {
                    },
                    date: {
                        format: 'YYYY/MM/DD'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                    }
                }
            }
        }
    });
});