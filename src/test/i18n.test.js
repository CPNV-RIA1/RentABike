const {By, Builder,Select, Browser} = require('selenium-webdriver');
let driver;

describe('localisation language change', function() {
    driver = new Builder().forBrowser('chrome').build();
    driver.get('http://localhost:8000/public_html/index.html');
    driver.manage().setTimeouts({implicit: 500});

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
