$(document).ready(function() {
    $('#idForm')
        .bootstrapValidator()
        // Revalidate ID number when changing the country
        .on('change', '[name="countrySelectBox"]', function(e) {
            $('#idForm').bootstrapValidator('revalidateField', 'idNumber');
        });
});