const citation = document.querySelector('#citation')
const author = document.querySelector('#author')

async function getQuote() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'arceoNpwxC1SMFT/n9rmUA==hoxVAK6dqtzWXtII',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        if(result[0].quote.length >= 138){
            getQuote();
        }
        else{
            putQuote(result);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getQuote();

function putQuote(response){
    citation.innerHTML = response[0].quote;
    author.innerHTML = response[0].author;
}