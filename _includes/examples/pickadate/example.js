$(document).ready(function() {
    $('#dob').pickadate({
        format: 'mm/dd/yyyy',
        formatSubmit: 'mm/dd/yyyy',
        hiddenName: true
    });

    $('#dob')
        .pickadate('picker')
        .on('render', function() {
            // http://amsul.ca/pickadate.js/api.htm#events-callbacks
            // Revalidate the dob field
            $('#pickDateForm').bootstrapValidator('revalidateField', 'dob');
        });

    $('#pickDateForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        excluded: ':disabled',
        fields: {
            dob: {
                validators: {
                    notEmpty: {
                        message: 'The date of birth is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date of birth is not a valid date'
                    }
                }
            }
        }
    });
});