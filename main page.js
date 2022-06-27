const searchForm = document.querySelector('.search_form');
const searchTxt = searchForm.querySelector('.searchTxt');
const list = document.querySelector('.list');
const allDelete = document.querySelector('.allDelete');
const txt = document.querySelector('.txt');
const ITEMS_KEY = "todos";

let items = new Array();

function saveItems() {  //item을 localStorage에 저장
    typeof(Storage) !== 'undefined' && localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
};

function allDelete() { //전체 item을 삭제 
    localStorage.clear(items);
}

function deleteItem() {
    const li = e.target.parentElement;
    li.remove();
}
const RTTBtn = document.querySelector('symbol_mark');
const menu = document.querySelector('.navbar_menu');

RTTBtn.addEventListener('click',() => {
    menu.classList.toggle('avtive');
});
