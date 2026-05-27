let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=400&fit=crop",
      "comments": [ /* ... */ ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "image": "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=300&h=400&fit=crop",
      "comments": [ /* ... */ ]
    },
    {
      "name": "FREEDOM - Die Schmahamas-Verschwörung",
      "author": "Paluten",
      "likes": 4280,
      "liked": false,
      "price": 14.00,
      "publishedYear": 2018,
      "genre": "Kinder- & Jugendbuch",
      "image": "https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=300&h=400&fit=crop",
      "comments": []
    },
    {
      "name": "Das magische Baumhaus",
      "author": "Mary Pope Osborne",
      "likes": 2150,
      "liked": true,
      "price": 8.99,
      "publishedYear": 1992,
      "genre": "Kinderbuch",
      "image": "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=300&h=400&fit=crop",
      "comments": []
    }
];

function init() {
    loadFromStorage()
    renderBook()
}

function renderBook() {
    let content = document.getElementById("bookstore");

    let htmlCollect = "";

    for (let index = 0; index < books.length; index++) {
        htmlCollect += templateBook(index);
    }
    content.innerHTML = htmlCollect;
}

function templateComments(comments) {
    if (comments.length === 0) {
        return `<li>Noch keine Kommentare vorhanden.</li>`;
    }

    let html = "";
    for (let i = 0; i < comments.length; i++) {
        html += `<li><strong>${comments[i].name}:</strong> ${comments[i].comment}</li>`;
    }
    return html;
}

function templateBook(index) {
    const book = books[index];

    return /*html*/ `
        <div class="books">
            <div class="book_title"><h2>${book.name}</h2></div>
            <div class="book_image"> 
              <img src="${book.image}" alt="${book.name}">
            </div>
            <div class="book_info">
                <div class="book_price">${book.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</div>
                <div class="book_likes">${book.likes} 
                  <button onclick="toggleLike(${index})">
                    <img src="${book.liked ? './assets/icon/heart-filled.png' : './assets/icon/heart-empty.jpeg'}" alt="Like">
                  </button>
                </div>
            </div>
            <div class="book_description">
                <ul>
                    <li><strong>Autor:</strong> ${book.author}</li>
                    <li><strong>Erscheinungsjahr:</strong> ${book.publishedYear}</li>
                    <li><strong>Genre:</strong> ${book.genre}</li>
                </ul>
            </div>
            <div class="book_comment">
                <h3>Kommentare:</h3>
                <ul>
                    ${templateComments(book.comments)}
                </ul>
                <div class="comment_input">
                    <input type="text" id="inputComment-${index}" placeholder="Kommentar schreiben...">
                    <button onclick="addComment(${index})">Abschicken</button>
                </div>
            </div>
        </div>
    `;
}

function toggleLike(bookIndex) {
    let book = books[bookIndex];

    if (book.liked) {
        book.liked = false;
        book.likes--;
    } else {
        book.liked = true;
        book.likes++;
    }
    addToStorage()
    renderBook();
}

function addComment(bookIndex) {
    let inputField = document.getElementById(`inputComment-${bookIndex}`);
    let commentText = inputField.value;

    if (commentText.trim() === "") {
        alert("Bitte schreibe erst einen Kommentar!");
        return; 
    }

    let newComment = {
        "name": "Du (Gast)",
        "comment": commentText
    };

    books[bookIndex].comments.push(newComment);

    inputField.value = "";

    addToStorage()
    renderBook(); 
}

function addToStorage() {
    localStorage.setItem("myBookstoreData", JSON.stringify(books));
}

function loadFromStorage() {
    let storedBooks = localStorage.getItem("myBookstoreData");

    if (storedBooks === null) {
        console.log("No Bookstore array found in storage");
        return;
    }

    books = JSON.parse(storedBooks);
}