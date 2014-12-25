$(document).ready(function() {
    $('#zipCodeForm')
        .bootstrapValidator()
        // Revalidate phone number when changing the country
        .on('change', '[name="countrySelectBox"]', function(e) {
            $('#zipCodeForm').bootstrapValidator('revalidateField', 'postalCode');
        });
});