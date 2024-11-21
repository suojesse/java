'use strict';

const form = document.getElementById('searchForm');
const queryInput = document.getElementById('query');
const jokesContainer = document.getElementById('jokesContainer');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const query = queryInput.value.trim();

    jokesContainer.innerHTML = '';

    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            data.result.forEach(joke => {
                const article = document.createElement('article');
                const paragraph = document.createElement('p');
                paragraph.textContent = joke.value;
                article.appendChild(paragraph);
                jokesContainer.appendChild(article);
            });
        });
});