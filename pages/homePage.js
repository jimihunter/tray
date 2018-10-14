const homePageCommands = {
    clickHomePageLogin: function(){
        return this.waitForElementVisible('@loginNav')
            .click('@loginNav')
            .waitForElementNotPresent('@loginNav');
    }
}

module.exports = {
    commands: [homePageCommands],
    url: "https://tray.io",
    elements: {
        loginNav: {
            selector: "//a[@href='https://app.tray.io']",
            locateStrategy: "xpath"
        }
    }
}