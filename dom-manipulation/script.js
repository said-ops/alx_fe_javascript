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
// console.log(quotesList);

//show random quote function

function showRandomQuote(){


    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = quotesList[Math.floor((Math.random()*quotesList.length))].text;
    // console.log('good');
}


//click event listner to the new quote button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

//function to add new quotes by user

function addQuote () {

    let newQuoteText = document.getElementById('newQuoteText');
    let newQuoteCategory = document.getElementById('newQuoteCategory');
    if(! newQuoteText.value || ! newQuoteCategory.value){
        alert('please enter the quote text and category');
    }else{
        const newQuote = {text : '', category : ''};
        newQuote.text = newQuoteText.value;
        newQuote.category = newQuoteCategory.value;
        quotesList.push(newQuote);
        alert('New quote added');
        newQuoteText.value = '';
        newQuoteCategory.value = '';
    }

}
document.getElementById('addQuote').addEventListener('click', addQuote);