const {By, Builder,Select, Browser} = require('selenium-webdriver');
const assert = require("assert");
let driver;

describe('i18next language change', function() {
    driver = new Builder().forBrowser('chrome').build();
    driver.get('http://localhost:63342/RentABike/public_html/index.html');
    driver.manage().setTimeouts({implicit: 500});

    it('should maintain user-entered content', function() {
        //Given
        let userInputElement = driver.findElement(By.id('userName'));
        userInputElement.sendKeys("value", "John Doe");

        let dropdownElement = driver.findElement(By.id('languageSelect'));
        const dropdown = new Select(dropdownElement)
        driver.manage().setTimeouts({implicit: 500});

        // When
        dropdown.selectByVisibleText("DE");

        // Then
        expect(userInputElement.value).toEqual(driver.findElement(By.id('userName')).getAttribute('value'));
    });

    it('should maintain graphic element positioning', function() {
        //Given
        var initialGraphicElementPosition = driver.findElement(By.id('about')).getBoundingClientRect();

        // When
        driver.findElement(By.id("languageSelect")).selectByVisibleText("DE");
        var newGraphicElementPosition = driver.findElement(By.id('about')).getBoundingClientRect();
        driver.manage().setTimeouts({implicit: 500});


        // Then
        expect(newGraphicElementPosition).toEqual(initialGraphicElementPosition);
    });
});
