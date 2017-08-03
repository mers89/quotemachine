$(document).ready(function(){
 var randomQuote;
 var randomNum;
 var author;
  getQuote();
function getQuote(){
  //Made quotes array to global var
var quotes = ["Laughter is timeless, imagination has no age, and dreams are forever.", "The biggest adventure you can take is to live the life of your dreams.", "Your time is limited, so don't waste it living someone else's life.", "A goal is a dream with a deadline.", "Don't be pushed by your problems, be led by your dreams.", "Never give up on what you really want to do. The person with big dreams is more powerful than the one with all the facts."];
  var author1 =["-Walt Disney", "-Oprah Winfrey", "-Steve Jobs", "-Napolean Hill", "-Ralph Waldo Emmerson", "-Albert Einstein"];
  randomNum = Math.floor(Math.random()*quotes.length);
  randomQuote = quotes[randomNum];
   author = author1[randomNum];


    $(".quote").text(randomQuote); 
    $(".author").text(author);
}
    $("#tweet").on("click", function(){
window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });
  
    $("#newQuote").on("click", function(){
    getQuote();
  });
});

