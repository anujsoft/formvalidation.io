$(document).ready(function() {
    $('#dynamicOptionForm')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                numFloors: {
                    validators: {
                        between: {
                            min: 2,
                            max: 100,
                            message: 'The number of floors must be between 2 and 100'
                        }
                    }
                },
                floor: {
                    validators: {
                        between: {
                            min: 1,
                            max: 'numFloors',
                            message: 'The number of floors must be between %s and %s'
                        }
                    }
                }
            }
        })
        // Revalidate the floor field when changing the number of floors
        .on('keyup', '[name="numFloors"]', function(e) {
            $('#dynamicOptionForm').bootstrapValidator('revalidateField', 'floor');
        });
});