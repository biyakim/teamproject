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