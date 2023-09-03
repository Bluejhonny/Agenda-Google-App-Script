function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google App');
}

function obtenerDatosHtml(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}