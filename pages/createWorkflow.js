workflowCommands = {
    workCreate: function(name){
        return this.waitForElementVisible('body', 1000)
            .waitForElementPresent('@nameInput', 1000)
            .clearValue('@nameInput')
            .setValue('@nameInput', name)
            .waitForElementPresent('@workflowCreate', 10000)
            .click('@workflowCreate')
            
    },

    scrollToElement: function(){
        return this.waitForElementVisible('@workflowCreate', 100)
           .getLocationInView('@workflowCreate')
           .click('@workflowCreate')
     }
}

module.exports = {
    commands: [workflowCommands],
    url : function() {
        return this.api.launchUrl + "/create"
    },
    elements: {
        nameInput: "[name='name']",
        workflowCreate: {
            selector: "//div[@title='Create']",
            locateStrategy: "xpath"
        } 
        
    }
}