const loginPageCommands = {
    login: function(username, password){
        return this.waitForElementVisible('@loginForm')
            .setValue('@usernameField', username)
            .setValue('@passwordField', password)
            .click('@loginButton')
    }
};


module.exports = {
    commands: [loginPageCommands],
    url: function() {
        return this.api.launchUrl + "/login";
    },
    elements: {
        usernameField: {
            selector: "[name='username']"
        },
        passwordField: {
            selector: "[name='password']"
        },
        loginButton: {
            selector: "[styles]"
        },
        loginForm: {
            selector: "//form[@id='login-form']",
            locateStrategy: "xpath"
        }
    }
};