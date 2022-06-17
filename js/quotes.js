const quotes = [
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!",
        author: "Audrey Hepburn",
    },
    {
        quote: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshuler",
    },
    {
        quote: "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
        author: "Roald Dahl",
    },
    {
        quote: "Try to be a rainbow in someone's cloud.",
        author: "Maya Angelou",
    },
    {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        author: "Walt Whitman",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "Malala Yousafzai",
    },
    {
        quote: "Spread love everywhere you go.",
        author: "Mother Teresa",
    },
    {
        quote: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
        author: "Lady Gaga",
    },
    {
        quote: "You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
        author: "Mandy Hale",
    },
    {
        quote: "Nobody built like you, you design yourself.",
        author: "Jay-Z",
    },
    {
        quote: "You can be everything. You can be the infinite amount of things that people are.",
        author: "Kesha",
    },
    {
        quote: "I'm not going to continue knocking that old door that doesn’t open for me. I’m going to create my own door and walk through that.",
        author: "Ava DuVernay",
    },
    {
        quote: "Not having the best situation, but seeing the best in your situation is the key to happiness.",
        author: "Marie Forleo",
    },
    {
        quote: "Don’t try to lessen yourself for the world; let the world catch up to you.",
        author: " Beyoncé",
    },
    {
        quote: "When it comes to luck, you make your own.",
        author: "Bruce Springsteen",
    },
    {
        quote: "If you don’t like the road you’re walking, start paving another one!",
        author: "Dolly Parton",
    },
    {
        quote: "We are not our best intentions. We are what we do.",
        author: "Amy Dickinson",
    },
    {
        quote: "You do not find the happy life. You make it.",
        author: "Camilla Eyring Kimball",
    },
    {
        quote: "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
        author: "Rabindranath Tagore",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
