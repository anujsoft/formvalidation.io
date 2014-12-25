$('.post form').bootstrapValidator({
    fields: {
        'post[body]': {
            validators: {
                notEmpty: {
                    message: 'Post content is required'
                },
                stringLength: {
                    message: 'Post content must be less than 120 characters',
                    max: function (value, validator, $field) {
                        return 120 - (value.match(/\r/g) || []).length;
                    }
                }
            }
        }
    }
});