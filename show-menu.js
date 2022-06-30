//햄버거 메뉴
const toggleMenu = (toggleId, itemsId) => {
    const toggle = document.getElementById(toggleId);
    const navItems = document.getElementById(itemsId);
    const toggleIcons = toggle.getElementsByTagName("i")[0];

    if(toggle && navItems){
        toggle.addEventListener('click',()=>{
            console.log('hi')
            navItems.classList.toggle('show-menu');
            toggleIcons.classList.toggle('bx-menu');
            toggleIcons.classList.toggle('bx-x');
            console.log(toggleIcons)
        })
    }
}
toggleMenu('nav-toggle','nav-items'); //햄버거 메뉴아이콘, 헤더 메뉴