var DocClass = function(){
  this.openById = function (id) {
    var doc = DocumentApp.openById(id);
    response.title = doc.getName();
    response.body = doc.getBody().getText();
    response.url = doc.getUrl();
    return response
  }
}