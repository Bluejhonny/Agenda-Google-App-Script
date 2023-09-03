function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google App');
}

function obtenerDatosHtml(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja= SpreadsheetApp.openById('1Fnk9Le-rKhWlMXQSRpINSTiWK5s42IyB8xFLhPwkk2o').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;

}