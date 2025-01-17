// Get references to the button and the paragraph
const button = document.getElementById('changeTextBtn');
const outputText = document.getElementById('outputText');

// Add an event listener to the button to handle clicks
button.addEventListener('click', function() {
    outputText.textContent = "You've clicked the button! The text has changed.";
});
