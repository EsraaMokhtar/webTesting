var quoteList = [
    'Be yourself; everyone else is already taken',

    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
   
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",

    "So many books, so little time.",

    "A room without books is like a body without a soul.",

    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",

    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",

    "You only live once, but if you do it right, once is enough.",

    "Be the change that you wish to see in the world.",

    "You only live once, but if you do it right, once is enough.",

    "Be the change that you wish to see in the world.",

    "In three words I can sum up everything I've learned about life: it goes on",

    "If you tell the truth, you don't have to remember anything.",

    "In three words I can sum up everything I've learned about life: it goes on."
];

 var numberOfIndex = quoteList.length-1;

function randomQuote(){

    var randomNumber = Math.random()*numberOfIndex ;

    var number = Math.floor(randomNumber);

    document.getElementById('newQuote').innerHTML =`"${quoteList[number]}"`; 

}

