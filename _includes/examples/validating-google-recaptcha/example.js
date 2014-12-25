$(document).ready(function() {
    $('#defaultForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }
    });

    // Replace 'PUBLIC_KEY' with your public key
    Recaptcha.create('PUBLIC_KEY', 'recaptcha', {
         theme: 'white',
         callback: captchaLoaded
    });

    function captchaLoaded() {
        $('#defaultForm')
            .on('added.field.bv', function(e, data) {
                // The field 'recaptcha_response_field' has just been added
                if (data.field === 'recaptcha_response_field') {
                    // Find the icon
                    var $parent = data.element.parents('.form-group'),
                        $icon   = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]');

                    // Move icon to other position
                    $icon.insertAfter('#recaptcha');
                }
            })
            // Add new field after loading captcha
            .bootstrapValidator('addField', 'recaptcha_response_field', {
                validators: {
                    notEmpty: {
                        message: 'The captcha is required and can\'t be empty'
                    },
                    remote: {
                        type: 'POST',
                        url: 'recaptcha.php',
                        message: 'The captcha is not valid',
                        data: function() {
                            return {
                                recaptcha_challenge_field: $('#defaultForm').find('[name="recaptcha_challenge_field"]').val()
                            };
                        },
                        delay: 1000
                    }
                }
            });
    };
});