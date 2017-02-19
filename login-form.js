class LoginForm extends HTMLElement {
  detachedCallback() {};

  attributeChangedCallback(attr, oldVal, newVal) {};

  attachedCallback() {
    var template = this.owner.querySelector('template');
    var clone = document.importNode(template.content, true);
    this.root = this.createShadowRoot();
    this.root.appendChild(clone);
  }

  createdCallback() {};
}

if(document.createElement('login-form').constructor !== LoginForm) {
  LoginForm.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
  document.registerElement('login-form', LoginForm);
}