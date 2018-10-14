/**
 * Checks if page titile contains specified Regex
 * @method checkTitle
 * @param {Regex} expression the regex to look for
 * @api assertions
 */

 checkTitle = function(expression = /The Best API Integration/) {
     this.message = `Test if page title contains ${expression}`;

     this.expected = () => {
         return true;
     };

     this.pass = (value) => {
         return expression.test(value);
     };

     this.value = (result) => {
         return result;
     };

     this.command = (callback) => {
         return this.api.getTitle(callback);
     };
 };

 module.exports.assertion = checkTitle;