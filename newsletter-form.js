(function(window, document) {
  class NewsletterForm extends HTMLElement {
    detachedCallback() {};

    attributeChangedCallback(attr, oldVal, newVal) {

    };

    attachedCallback() {
      var template = this.owner.querySelector('template');
      var clone = document.importNode(template.content, true);
      this.root = this.createShadowRoot();
      this.root.appendChild(clone);

      this.$submit = this.root.querySelector('#submit');

      var emailInput = this.root.querySelector('input#email');
      var that = this;

      this.$submit.addEventListener('click', function() {
        that.setAttribute('email', emailInput.value);
      });
    }

    createdCallback() {};
  }

  if(document.createElement('newsletter-form').constructor !== NewsletterForm) {
    NewsletterForm.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
    document.registerElement('newsletter-form', NewsletterForm);
  }
})(window, document);

