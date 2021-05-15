$(document).ready(function() {
    var xml;
    $('#b1').click(function() {
        $.get('registrados.xml', null, function(data, textStatus) {
            xml = data;
            $(xml).find('usuario').each(function() {
                var item = $(this);

                if (item.find('usuario').text() == $('#userid').val() && item.find('clave').text() == $('#pwd').val()) {
                    window.open('success.html');
                }
            });
        });
    });
});