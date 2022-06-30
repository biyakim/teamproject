//버튼을 클릭했을 때 card 보이게 하기
const show_card = (btnId, rowId) => {
    //html에서 js로 요소 가져오기
    const btn = document.getElementById(btnId);
    const card = document.getElementById(rowId);
    if(btn){
        //card를 hidden한 id요소
        btn.addEventListener('click',()=> {
        card.classList.toggle('show_row');
        });
    }
    
};
const show_card2 = (btnId, rowId) => {
    //html에서 js로 요소 가져오기
    const btn = document.getElementById(btnId);
    const card = document.getElementById(rowId);
    if(btn){
        //card를 hidden한 id요소
        btn.addEventListener('click',()=> {
        card.classList.toggle('show_row2');
        });
    }
    
};

show_card("click_btn1","row"); //id이름
show_card2("click_btn2","row2");

const toggleMenu = (toggleId, itemsId) => {
    const toggle = document.getElementById(toggleId);
    const navItems = document.getElementById(itemsId);
    const toggleIcons = toggle.getElementsByTagName("i")[0];
    // if(toggle && navItems){
        toggle.addEventListener('click',()=>{
            console.log('hi');
            navItems.classList.toggle('show-menu');
            toggleIcons.classList.toggle('bx-menu');
            toggleIcons.classList.toggle('bx-x');
            console.log(toggleIcons)
        })
    // }
}
toggleMenu('nav-toggle','nav-items'); //햄버거 메뉴아이콘, 헤더 메뉴