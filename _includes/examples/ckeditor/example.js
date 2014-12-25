$(document).ready(function() {
    $('#profileForm')
        .bootstrapValidator({
            excluded: [':disabled'],
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required and cannot be empty'
                        }
                    }
                },
                bio: {
                    validators: {
                        notEmpty: {
                            message: 'The bio is required and cannot be empty'
                        },
                        callback: {
                            message: 'The bio must be less than 200 characters long',
                            callback: function(value, validator, $field) {
                                // Get the plain text without HTML
                                var div  = $('<div/>').html(value).get(0),
                                    text = div.textContent || div.innerText;

                                return text.length <= 200;
                            }
                        }
                    }
                }
            }
        })
        .find('[name="bio"]')
            .ckeditor()
            .editor
                // To use the 'change' event, use CKEditor 4.2 or later
                .on('change', function() {
                    // Revalidate the bio field
                    $('#profileForm').bootstrapValidator('revalidateField', 'bio');
                });
});