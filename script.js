// let apiQuotes = [];
// show new quote
function newQuote(){
  // pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)]
  console.log(quote);
}
// get quotes from api
// async function getQuotes(){
//   const apiUrl = 'https://type.fit/api/quotes';
//   try{
//     const response = await fetch(apiUrl)
//     apiQuotes = await response.json();
//     // console.log(apiQuotes);
//     newQuote();
//   }
//   catch(error){
//     // catch error here
//   }
// }
// // on load
// getQuotes();

newQuote()