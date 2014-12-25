$(document).ready(function() {
    $('#phoneForm')
        .bootstrapValidator()
        // Revalidate phone number when changing the country
        .on('change', '[name="countrySelectBox"]', function(e) {
            $('#phoneForm').bootstrapValidator('revalidateField', 'phoneNumber');
        });
});