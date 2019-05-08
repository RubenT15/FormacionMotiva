define(['ojs/ojcore', 'knockout', 'jquery',
    'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojlabel'],  
 function(oj, ko, $) {  
    
    function ValidatorsModel() {
      var self = this;
      self.tracker = ko.observable();

      // for username field
      self.userName = ko.observable();
      self.userNameValid = ko.observable();
      self.userNameMessagesCustom = ko.observable();

      // for password field
      self.password = ko.observable();
      self.passwordValid = ko.observable();

      self.validators = ko.computed(function () {
        return [{
            type: 'regExp',
            options: {
              pattern: '[a-zA-Z0-9]{3,}',
              messageDetail: 'You must enter at least 3 letters or numbers'}}];
      });

      self.validators2 = ko.computed(function () {
        return [{
            type: 'regExp',
            options: {
              pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}',
              label: 'Password',
              messageSummary: '\'{label}\' too Weak',
              messageDetail:
              'You must enter a password that meets our minimum security requirements.'}}];
      });

      // listener that is called whenever the valid property
      //  is changed on the username or password components
      self.validChangedListener = function (event) {
        var id = event.currentTarget.id;
        var validProperty = event.detail.value;
        var usernameValidState;
        var passwordValidState;

        if (id === "username")
          self.userNameValid(validProperty);
        else
          self.passwordValid(validProperty);

        usernameValidState = document.getElementById("username").valid;
        passwordValidState = document.getElementById("password").valid;
      };

      // Calls validate method on each component.
      // If a field is required and empty on initial render, 
      // the 'valid' state will be 
      // "invalidHidden" if no other messages are shown. 
      // When the user presses the Submit button,
      //  the user will see the "Field is required" error message
      // and the valid state will be "invalidShown".
      self.submit = function () {
        var element1 = document.getElementById("username");
        var element2 = document.getElementById("password");

        // validate them both, and when they are both done 
        // validating and valid, submit the form.
        // Calling validate() will update the component's 
        // valid property    
        element1.validate().then(function (result1) {
          // validate the other element, 
          // regardless of the result of the 
          // first element's validate().
          element2.validate().then(function (result2) {
            if (result1 === "valid" && result2 === "valid") {
              // submit the form would go here
              alert("everything is valid; submit the form");
            }
          });
        });
      };
      
      // Adds a custom warning message 
      self.addCustomMessage = function () {
        var usernameMsg = {summary: "Warning messages are not considered invalid.",
          detail: "", severity: oj.Message.SEVERITY_TYPE.WARNING};
        self.userNameMessagesCustom([usernameMsg]);

      };
    };
    return new ValidatorsModel();
  }  
);  
