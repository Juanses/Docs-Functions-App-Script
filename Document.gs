var DocClass = function(){
  this.openById = function (id) {
    this.doc = DocumentApp.openById(id);
    this.title = this.doc.getName();
    this.body = this.doc.getBody();
    this.text = this.body.getText();
    this.url = this.doc.getUrl();
    return response
  }
}