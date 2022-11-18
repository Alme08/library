const form_page = document.querySelector('.form-page');
const form = document.querySelector('#form');
const book_container = document.querySelector('#book-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const statusRead = document.querySelector('#statusRead');
let library = [];

document.addEventListener('click', e =>{
    console.log(e.target);
    if(e.target.matches('.add')){
        form_page.classList.remove('display-none');
    }
    if (e.target.matches('.form-page')) {
        form_page.classList.add('display-none');
    }
    if (e.target.matches('#delete')) {
        library = library.filter((book, index) => index != e.target.dataset.index);
        book_container.innerHTML = '';
        for (const book in library) {
            book_container.innerHTML += library[book].showInfo(book);
        }
    }
    if (e.target.matches('#statusRead')) {
        library[e.target.dataset.index].changeStatus()
        book_container.innerHTML = '';
        for (const book in library) {
            book_container.innerHTML += library[book].showInfo(book);
        }
    }
})
form.addEventListener('submit', e=>{
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked)
    form_page.classList.add('display-none');
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    book_container.innerHTML = '';
    for (const book in library) {
        book_container.innerHTML += library[book].showInfo(book);
    }
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.showInfo = function(index){
    if (this.read === true) {
        return `
                <div class="book">
                        <p>"${this.title}"</p>
                        <p>${this.author}</p>
                        <p>${this.pages} pages</p>
                        <div>
                            <button id="statusRead" class="read" data-index=${index}>Read</button>
                            <button id="delete" data-index=${index}>Delete</button>
                        </div>
                    </div>
                `;
    } else {
        return `
                <div class="book">
                        <p>"${this.title}"</p>
                        <p>${this.author}</p>
                        <p>${this.pages} pages</p>
                        <div>
                            <button id="statusRead" class="notRead" data-index=${index}>Not read</button>
                            <button id="delete" data-index=${index}>Delete</button>
                        </div>
                    </div>
                `;
    }
}
Book.prototype.changeStatus = function(){
    if (this.read === true) {
        this.read = false
    }else{
        this.read = true
    }
}

const addBookToLibrary = (title, author, pages, status) =>{
    let book = new Book(title, author, pages, status);
    library.push(book);
}