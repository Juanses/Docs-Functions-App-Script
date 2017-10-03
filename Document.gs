function docs(id) {
  var doc = DocumentApp.openById(id);
  var response = {};
  response.title = doc.getName();
  response.body = doc.getBody().getText();
  response.url = doc.getUrl();
  return response
}
