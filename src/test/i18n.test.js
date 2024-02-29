describe('i18next language change', function() {
    it('should maintain user-entered content', function() {
        //Given
        var userInputField = document.getElementById('userName');
        userInputField.value = 'John Doe';
        var initialContent = userInputField.value;

        // When
        var languageSelect = document.getElementById('languageSelect');
        languageSelect.value = 'de';
        languageSelect.dispatchEvent(new Event('change'));

        // Then
        expect(userInputField.value).toEqual(initialContent);
    });

    it('should maintain graphic element positioning', function() {
        var initialGraphicElementPosition = document.getElementById('about').getBoundingClientRect();

        var languageSelect = document.getElementById('languageSelect');
        languageSelect.value = 'de';
        languageSelect.dispatchEvent(new Event('change'));

        var newGraphicElementPosition = document.getElementById('about').getBoundingClientRect();

        expect(newGraphicElementPosition).toEqual(initialGraphicElementPosition);
    });
});
