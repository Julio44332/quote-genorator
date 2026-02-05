// 1. Select the HTML elements we need
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const newQuoteBtn = document.querySelector('.new-quote-btn');

// 2. Define an array of quotes
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Even though your voice is small; it is mighty",
        author: "Julio Andrade Solorio"
    },
    {
        quote: "While we may come from different places, and speak different tongues, but our hearts beat as one.",
        author: "Albus Percival Wulfric Brian Dumbledore"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "test.",
        author: "test"
    },
     {
   quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
      {
quote: "Don’t allow your wounds to turn you into a person you are not.",
        author: "-Paulo Coelho"
    },
{
quote: "You must do the thing which you think you cannot do.",
        author: "-Elanor Rroaecelt"
    },
{
quote: "Every human is an artist. And this is the main art that we have: the creation of our story.",
        author: "-don Miguel Ruiz"
    },
];

// 3. Function to generate and display a random quote
function generateQuote() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Get the random quote object
    const randomQuote = quotes[randomIndex];

    // Update the text content of the HTML elements
    quoteText.textContent = randomQuote.quote;
    quoteAuthor.textContent = "- " + randomQuote.author;
}

// 4. Add event listener to the button
newQuoteBtn.addEventListener('click', generateQuote);

// 5. Display a quote when the page first loads
generateQuote();

// Optional: Console log to confirm script is loaded
console.log("script.js for Quote Generator loaded!");
