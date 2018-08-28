describe('test to search anything', function () {
    it('Should search something', function () {
        browser.get('http://www.thetestroom.com/jswebapp/');
        element(by.model('person.name')).sendKeys('Sergio');
        element(by.id('continue_button')).click();
        var select= element(by.model('animal'));
        select.$('[value="1"]').click();
        element(by.partialButtonText('CONT')).click();
    });
});