

dashboardCommands = {
    createNewWorkflow: function(){
        return this.waitForElementPresent('body')
            .waitForElementPresent('@createButton')
            .click('@createButton')
    },

    deleteWorkflow: function(workflow) {
        return this.waitForElementPresent('@workflowMenu')
            .moveToElement('@workflowMenu', undefined, undefined)
            .click('@deleteButton')
    },

    completeWorkflowDelete: function(){
        return this.waitForElementPresent('@deleteConfirmation')
            .moveToElement('@deleteConfirmation', undefined, undefined)
            .click('@deleteConfirmation')
    }
}

module.exports = {
    commands: [dashboardCommands],
    url : function() {
        return this.api.launchUrl;
    },
    elements: {
        createButton: ".uppercase___2hcvEE",
        workflowDashboard: ".Dashboard___hN1j8o > div:nth-of-type(4)",
        workflowMenu:{
            selector: "//div[contains(@class,'Options-menu')]",
            locateStrategy: "xpath"
        } ,
        deleteButton: ".delete-button",
        deleteConfirmation: {
            selector: "//div[@id='modal-undefined']//div[@title='Yes']",
            locateStrategy: "xpath"
        },
        logoutSelector: "[href='\/logout']",
        logoutToggleSelector: "#userToggle",
        logoutPanel: ".Profile-DropDown___1PGHos",
          
        
    }
}