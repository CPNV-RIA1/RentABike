const {By, Builder,Select, Browser} = require('selenium-webdriver');
let driver;

describe('localisation language change', function() {
    driver = new Builder().forBrowser('chrome').build();
    driver.get('http://localhost:8000/public_html/index.html');
    driver.manage().setTimeouts({implicit: 500});

    it('should change the language of the page', async function() {
        // Given
        let dropdownElement = driver.findElement(By.id('languageSelect'));
        const dropdown = new Select(dropdownElement)

        // When
        await dropdown.selectByVisibleText("DE");
        await driver.manage().setTimeouts({implicit: 500});

        // Then
        expect(await driver.findElement(By.id('workingTime')).getText()).toEqual("Arbeitszeiten");
    });

    it('should maintain user-entered content', async function() {
        //Given
        let userInputElement = driver.findElement(By.id('userName'));
        userInputElement.sendKeys("John Doe");

        let dropdownElement = driver.findElement(By.id('languageSelect'));
        const dropdown = new Select(dropdownElement)

        // When
        await dropdown.selectByVisibleText("DE");
        await driver.manage().setTimeouts({implicit: 500});

        // Then

        expect(await userInputElement.getAttribute("value")).toEqual("John Doe");
    });

    it('should maintain graphic element size when language is changed', async function() {
        // Given
        var initialGraphicElement = await driver.findElement(By.id('about'));
        var initialGraphicElementWidth = await initialGraphicElement.getAttribute('clientWidth');
        var initialGraphicElementHeight = await initialGraphicElement.getAttribute('clientHeight');
        let dropdownElement = driver.findElement(By.id('languageSelect'));
        const dropdown = new Select(dropdownElement)

        // When
        await dropdown.selectByVisibleText("DE");
        await driver.manage().setTimeouts({implicit: 500});
        var newGraphicElement = await driver.findElement(By.id('about'));
        var newGraphicElementWidth = await newGraphicElement.getAttribute('clientWidth');
        var newGraphicElementHeight = await newGraphicElement.getAttribute('clientHeight');

        // Then
        expect(newGraphicElementWidth).toEqual(initialGraphicElementWidth);
        expect(newGraphicElementHeight).toEqual(initialGraphicElementHeight);
    });
});