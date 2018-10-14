
exports.command = function(logoutToggleSelector) {
    let logoutPanel = ".Profile-DropDown___1PGHos";
    let logoutSelector = "[href='\/logout']"
    
    this
        .waitForElementPresent(logoutToggleSelector)
        .click(logoutToggleSelector)
        .element('css selector', logoutPanel, function(res){
            if (res.value && res.value.ELEMENT) {
                this.waitForElementVisible(logoutPanel)
                    .element('css selector', logoutSelector, function(res){
                        if (res.value && res.value.ELEMENT){
                            this.waitForElementVisible(logoutSelector)
                                .click(logoutSelector)
                        }
                    })
            } else {
                console.log('Element not present')
        }})
        
        return this;
};