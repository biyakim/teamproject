//버튼을 클릭했을 때 card 보이게 하기
const show_card = (classId) => {
    //card를 hidden한 id요소 삭제 
    document.querySelector(classId).removeAttribute('id');
};
