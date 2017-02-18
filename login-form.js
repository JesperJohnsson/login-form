(function(window, document, undefined) {
    var thatDoc = document;
    var thisDoc = (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;
    var template = thisDoc.querySelector('template').content;
    var LoginElementProto = Object.create(HTMLElement.prototype);

    LoginElementProto.loggedIn = '';

    LoginElementProto.createdCallback = function() {
        var shadowRoot = this.createShadowRoot();
        var clone = thatDoc.importNode(template, true);
        shadowRoot.appendChild(clone);

        this.loggedIn = shadowRoot.querySelector('p#loggedIn');
        var email = shadowRoot.querySelector('input#email');

        email.addEventListener('change', function() {
            console.log(this);
            console.log(this.value);
        });
    };

    LoginElementProto.attributeChangedCallback = function() {

    };

    LoginElementProto.setLoggedInTextContent = function(val) {
        console.log(this);
        this.loggedIn.textContent = val;
    };

    window.LoginElement = thatDoc.registerElement('login-form', {
        prototype: LoginElementProto
    });
})(window, document);