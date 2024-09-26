

// // new function
// const url ='http://openlibrary.org/subjects/love.json';

// async function fetchUrl() {
//     const response = await fetch(url) 
//     const data = await response.json()  
    
//     try {
        

//     } catch (error) {
        
//     }

//     console.log(data.works[0].key) 
//     console.log(response)
// }

// fetchUrl() 

// // end of newcode 

document.addEventListener("DOMContentLoaded", function() {
    // Fetch books related to "love" when the page loads
    fetchBooks();

    // Function to fetch books from OpenLibrary API
    async function fetchBooks() {
        const apiUrl = 'http://openlibrary.org/subjects/love.json';
        
        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log()
            // Display books in the sidebar
            displayBooks(data.works); 
            console.log(data.works[0].
                ia_collection[0, 1, 2]
                ) 
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    // Function to display the list of books in the sidebar
    function displayBooks(books) {
        const bookList = document.getElementById("book-list");
        const bookDisplay = document.getElementById("book-display");

        // Clear the book list before adding new content
        bookList.innerHTML = '';

        // Loop through each book and create a list item
        books.forEach(book => {
            const title = book.title;  // Get the book title
            const authors = book.authors.map(author => author.name).join(", ");  // Get the authors

            // Create a list item element (li) for each book
            const li = document.createElement('li');
            li.textContent = title;  // Set the book title as text content
            li.addEventListener('click', () => {
                // Display details of the book when clicked
                displayBookDetails(title, authors);
            });
            bookList.appendChild(li);  // Append the list item to the sidebar
        });
    }

    // Function to display book details in the main content area
    function displayBookDetails(title, authors) {
        const bookDisplay = document.getElementById("book-display");

        // Create a container for book details
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        // Create an element for the book title
        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = title;  // Set the title content 

        // Create an element for the book authors
        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = `By: ${authors}`;  // Set the authors content

        // Append the title and author to the book item
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookAuthor);
        

        // Clear the previous book details and append the new book details
        bookDisplay.innerHTML = '';
        bookDisplay.appendChild(bookItem);
    }

    // Function to search for books by title
    window.searchBooks = function() {
        // Get the search term entered by the user
        const searchTerm = document.getElementById("search-bar").value.toLowerCase();
        const books = document.querySelectorAll('#book-list li');

        // Loop through each book in the list
        books.forEach(book => {
            const title = book.textContent.toLowerCase();  // Get the title in lowercase
            if (title.includes(searchTerm)) {
                // Show the book if it matches the search term
                book.style.display = "";
            } else {
                // Hide the book if it doesn't match the search term
                book.style.display = "none";
            }
        });
    };
});


