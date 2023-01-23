import { Book } from './classes/Book.js';
import { User } from './classes/User.js';


window.addEventListener("DOMContentLoaded", function(e){
    let books = [];
    let users = [];

    let firstBook = new Book(1, "Final Fantasy", "SquareSoft", "15/02/89", 224, "C'est l'histoire d'un Chevalier Noir.", "https://www.manga-news.com/public/images/vols/Final_Fantasy_VII_Material_Ultimania_mana.jpg");
    let secondBook = new Book(2 , "FullMetal Alchemist", " SquareSoft", "14/02/2000", 156, "Deux enfants perdent leurs mère ", "https://m.media-amazon.com/images/I/71V1kRB2fTL.jpg");
    let thirdBook = new Book(3, "Dragon Quest", "SquareEnix", "02/05/1989", 161, "Un jeune cherche à retrouver les branches de l'Yggdrasyle ", "https://www.manga-news.com/public/images/series/dragon-quest-heritiers-emblem-1-mana.jpg");

    let firstUser = new User(1, "Valmongogo", "valmonzo@onglesrefaient.fr", "YoYoYO", "Valmont", "Jesaispas", "data:image/png;base64,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");
    let secondUser = new User(2, "Arnaud", "Arnaud@mazda.fr", "MazdaBoy", "Arnaud", "Arnaud", "data:image/jpeg;base64,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");
    let thirdUser = new User(3, "Maxoumonchou", "pokeboy@gail.fr", "Onlyfan", "Max", "Langlois", "https://static.wikia.nocookie.net/pokemon-steam1/images/8/87/Cizayox.png/revision/latest/smart/width/250/height/250?cb=20210625052950&path-prefix=fr");

    books.push(firstBook);
    books.push(secondBook);
    books.push(thirdBook);
    users.push(firstUser);
    users.push(secondUser);
    users.push(thirdUser);


    let jsonBooks = JSON.stringify(books);
    let jsonUsers = JSON.stringify(users);

    sessionStorage.setItem("books", jsonBooks);
    sessionStorage.setItem("users", jsonUsers);

    let booksStorage = JSON.parse(sessionStorage.getItem("books"));
    let usersStorage = JSON.parse(sessionStorage.getItem("users"));

    let newBooks = [];
    let newUsers = [];


    for(let i = 0 ; i < booksStorage.length; i++) {
        let parseData = JSON.parse(booksStorage[i]);
        let newBook = new Book(parseData.id, parseData.title, parseData.author, parseData.publicationDate, parseData.totalPages, parseData.excerpt, parseData.coverImage);
        newBooks.push(newBook);
    }

    for(let i = 0; i < usersStorage.length; i++) {
        let parseData = JSON.parse(usersStorage[i]);
        let newUser = new User(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
        newUsers.push(newUser);
    }

    console.log(newBooks);
    console.log(newUsers);


})