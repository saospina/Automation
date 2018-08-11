// spec.js
describe('Protractor Demo FoxPlay App', function() {
    it('should have a title', function() {
      browser.get('https://angular.io/');
      var menu = element.all(by.css('.nav-link'));
      menu.get(1).click();
      let feature = element(by.id('features--benefits'));
      expect(feature.getText()).toEqual('FEATURES & BENEFITS');
    });
  });
