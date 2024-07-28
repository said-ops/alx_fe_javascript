//quotes list 
let quotesList = [
    {
        text : 'this is quote 1 text',
        category : 'quote 1 category'
    },
    {
        text : 'this is quote 2 text',
        category : 'quote 2 category'
    },
    {
        text : 'this is quote 3 text',
        category : 'quote 3 category'
    },
    {
        text : 'this is quote 4 text',
        category : 'quote 4 category'
    }
];
//quote display div
const quoteDisplayDiv =  document.getElementById('quoteDisplay');

//=============Task 0========================

//show random quote function

function showRandomQuote(){

    let index = Math.floor((Math.random()*quotesList.length));

    quoteDisplay.innerHTML = '';
    quoteDisplay.innerHTML = `<p>quote: ${quotesList[index].text}</p>
                              <p>category: ${quotesList[index].category}</p>`;
    // console.log('good');
}

//click event listner to the new quote button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

//function to add new quotes by user

function addQuote () {
    //input value
    let newQuoteText = document.getElementById('newQuoteText');
    let newQuoteCategory = document.getElementById('newQuoteCategory');

    if(! newQuoteText.value || ! newQuoteCategory.value){
        alert('please enter the quote text and category');
    }else {

        const newQuote = {text : '', category : ''};
        newQuote.text = newQuoteText.value;
        newQuote.category = newQuoteCategory.value;
        
        let quoteText = document.createElement('p');
        let quoteCategory = document.createElement('p');

        quoteText.innerHTML = `quote: ${newQuote.text}` ;
        quoteCategory.innerHTML = `category: ${newQuote.category}`;
        
        quoteDisplayDiv.innerHTML = '';
        quoteDisplayDiv.appendChild(quoteText);
        quoteDisplayDiv.appendChild(quoteCategory);
        
        quotesList.push(newQuote);
        alert('new quote added');
        newQuoteText.value = '';
        newQuoteCategory.value = '';

        //save quotes list to local storage
        saveQuotes();
        

    }

}
//click event listner for the add button S
document.getElementById('addQuote').addEventListener('click', addQuote);

//createAddQuoteForm
function createAddQuoteForm () {
    //form elements goes here

}
//=====================Task 1==============================
//save quotes to local storage
function saveQuotes () {
    localStorage.setItem('quotes' , JSON.stringify(quotesList));
    // console.log(quotesList);
}
//load quotes from local storage
function loadQuotes(){
    
    let loadedQuotes = localStorage.getItem('quotes');
    if(loadedQuotes){

        quotesList = JSON.parse(loadedQuotes);
         console.log( quotesList);
    }
}
//function hundle export quotes
function downloadQuotesAsJSON() {
    const dataStr = JSON.stringify(quotesList, null, 2); 
    const blob = new Blob([dataStr], { type: 'application/json' }); 
    const url = URL.createObjectURL(blob); 

    const linkElement = document.createElement('a');
    linkElement.href = url;
    linkElement.download = 'quotes.json';
    document.body.appendChild(linkElement); 
    linkElement.click(); 
    document.body.removeChild(linkElement); 
    URL.revokeObjectURL(url); 
}
document.getElementById('download').addEventListener('click', downloadQuotesAsJSON);
//function to handle import input
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotesList.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }
//==================Task 2=======================
//Populate Categories Dynamically
function populateCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    loadQuotes();
    quotesList.forEach(quote => {

        const option = document.createElement('option');
        option.innerHTML = quote.category;
        categoryFilter.appendChild(option);

    });  
}  

document.addEventListener('DOMContentLoaded', () => {
    
    loadQuotes();
    populateCategories();
})