const print_result = (buttonId, txtId, imgId) => {
    //html에서 js로 요소 가져옥 
    const button = document.getElementById(buttonId);
    const txt = document.getElementById(txtId);
    const img = document.getElementById(imgId);

    button.addEventListener('click', () => {
        txt.classList.toggle('show_txt');
        img.classList.toggle('show_img');
    })
}
print_result("search_btn","trash_txt","trash_img");