const form_page = document.querySelector('.form-page');
const form = document.querySelector('#form');
document.addEventListener('click', e =>{
    console.log(e.target);
    if(e.target.matches('.add')){
        form_page.classList.remove('display-none');
    }
    if (e.target.matches('.form-page')) {
        form_page.classList.add('display-none');
    }
    form.addEventListener('submit', e=>{
        e.preventDefault();
        form_page.classList.add('display-none');
    })
})
let library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Book.prototype.info = function(){
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
// }

// const IT = new Book('IT', 'Stephen King', 1068, 'already read');
// console.log(IT.title);
// console.log(IT.info());