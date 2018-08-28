// spec.js
describe('Protractor Demo FoxPlay App', function() {
    it('should have a title', function() {
      browser.get('https://angular.io/');
      var menu = element.all(by.css('.nav-link'));
      menu.get(1).click();
      menu.get(0).click();
      menu.get(2).click();
      menu.get(0).click();
      menu.get(3).click();
      menu.get(0).click();
      menu.get(4).click();
      menu.get(0).click();
      // let feature = element(by.css('feature-header'));
      // expect(feature.getText()).toEqual('Cross Platform');
    });
  });
