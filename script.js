let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
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
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
];

function init() {
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
            <div class="book_image"></div>
            <div class="book_info">
                <div class="book_price">${book.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</div>
                <div class="book_likes">${book.likes} <img src="${book.liked ? 'heart-filled.png' : 'heart-empty.jpeg'}" alt="Like"></div>
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

function addComment(bookIndex) {
    // 1. Das richtige Input-Feld anhand der ID greifen
    let inputField = document.getElementById(`inputComment-${bookIndex}`);
    let commentText = inputField.value;

    // 2. Sicherheitscheck: Wenn das Feld leer ist, machen wir nichts
    if (commentText.trim() === "") {
        alert("Bitte schreibe erst einen Kommentar!");
        return; 
    }

    // 3. Ein neues Kommentar-Objekt erstellen
    let newComment = {
        "name": "Du (Gast)", // Hier könnte später ein echter Username stehen
        "comment": commentText
    };

    // 4. Das Objekt in das 'comments'-Array des gewählten Buches schieben
    books[bookIndex].comments.push(newComment);

    // 5. Das Input-Feld wieder leeren
    inputField.value = "";

    // 6. Die Ansicht neu laden (deine Render-Funktion aufrufen)
    renderBooks(); 
}



