const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')
let apiQuotes = [];

// loading spiner show
function showLoadingSpiner(){
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// remove loading spiner
function removeLoadingSpiner(){
  loader.hidden = true;
  quoteContainer.hidden = false;
}


// show new quote
 function newQuote(){
  
// pick a random quote from apiQuotes array
   const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
   // check if author field is blank and place it with 'Unknown'
   if(!quote.author){
    authorText.textContent = 'Unknown';
   } else {
    authorText.textContent = quote.author;
   }
   // check quote length for styling
   if(quote.text.length>120){
    quoteText.classList.add('long-quote')
   } else {
    quoteText.classList.remove('long-quote')
   }
  quoteText.textContent = quote.text;

  removeLoadingSpiner(); 
 }

// get quotes from api
async function getQuotes(){
  showLoadingSpiner();
  const apiUrl = 'https://medromdhani.github.io/mohamed.github.io/data/quotes.json';
  try{
    const response = await fetch(apiUrl)
    apiQuotes = await response.json();
     console.log(apiQuotes);
    newQuote();
  }
  catch(error){
   // catch error here
   }
 }
 // on load
// tweet quote
function tweetQuote(){
  showLoadingSpiner();
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}/${authorText.textContent}`;
  window.open(twitterUrl, '_black')
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

getQuotes();



//newQuote()