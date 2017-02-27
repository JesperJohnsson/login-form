(function(window, document) {

  // Define the NewsletterForm HTMLElement
  class NewsletterForm extends HTMLElement {
    detachedCallback() {};

    attributeChangedCallback(attr, oldVal, newVal) {};

    attachedCallback() {
      let that = this;
      let template = this.owner.querySelector('template');
      let clone = document.importNode(template.content, true);

      // Attach the shadow root and append the clone of the template to said root.
      this.root = this.createShadowRoot();
      this.root.appendChild(clone);

      // Get the email input and the submit button from the shadow root.
      let emailInput = this.root.querySelector('input#email');
      let submit = this.root.querySelector('#submit');

      submit.addEventListener('click', function() {
        that.setAttribute('email', emailInput.value);
      });
    }

    createdCallback() {};
  }

  // Create the element newsletter-form if there isn't an available one
  if(document.createElement('newsletter-form').constructor !== NewsletterForm) {
    NewsletterForm.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
    document.registerElement('newsletter-form', NewsletterForm);
  }
})(window, document);

