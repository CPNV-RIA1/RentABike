describe('i18next language change', function() {
    driver = new Builder().forBrowser('chrome').build();
    driver.get('http://localhost:63342/RentABike/public_html/index.html');
    it('should maintain user-entered content', function() {
        //Given
        driver.findElement(By.id('userName')).sendKeys("value", "John Doe");;
        var initialContent = "John Doe";

        // When
        driver.findElement(By.id("languageSelect")).selectByVisibleText("DE");

        // Then
        expect(userInputField.value).toEqual(driver.findElement(By.id('userName')).getAttribute('value'));
    });

    it('should maintain graphic element positioning', function() {
        //Given
        var initialGraphicElementPosition = driver.findElement(By.id('about')).getBoundingClientRect();

        // When
        driver.findElement(By.id("languageSelect")).selectByVisibleText("DE");
        var newGraphicElementPosition = driver.findElement(By.id('about')).getBoundingClientRect();

        // Then
        expect(newGraphicElementPosition).toEqual(initialGraphicElementPosition);
    });
});
