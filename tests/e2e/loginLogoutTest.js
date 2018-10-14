const data = require('../../data/dev');

module.exports = {
    '@tags': ['e2e'],

    before(client) {
        client
            .maximizeWindow()
            .deleteCookies();
        
        const homePage = client.page.homePage();
        const loginPage = client.page.trayLoginPage();
        
        homePage
            .navigate()
            .clickHomePageLogin()

        loginPage
            .login(data.username, data.password)
            .longCommand();

    },

    after(client) {
        client.end();
    },
     
    'Create new Workflow': function(client) {
        
        const dashboard = client.page.trayDashboard();
        const createWorkFlow = client.page.createWorkflow();

        dashboard.createNewWorkflow()

        createWorkFlow
            .workCreate('Babyshark')
            .longCommand()

        client
            .back()
            .back()
            .refresh()
            .longCommand()
            
        dashboard.assert.checkTitle(/Dashboard/)
        dashboard.assert.containsText('@workflowDashboard', 'Babyshark')

    },

    'Delete previously created workflow': function(client) {

        const loginPage = client.page.trayLoginPage();
        const dashboard = client.page.trayDashboard();


        dashboard.assert.containsText('@workflowDashboard', 'Babyshark')
        
        dashboard
            .deleteWorkflow('Babyshark')
            .completeWorkflowDelete()
            .longCommand()
            .expect.element('@workflowDashboard').text.to.not.contain('Babyshark')
        
        dashboard
            .logout('@logoutToggleSelector')
        
        loginPage.assert.urlContains('/login')
           
    }
};