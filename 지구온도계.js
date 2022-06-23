const show_img = (btnId, imgId) => {
    const btn = document.getElementById(btnId);
    const changeImg = document.getElementById(imgId)
    
    if(btnId=="one"){
        changeImg.src = "http://me.go.kr/upload/1/editor/202003/06/20200306174741.png";
    }else if(btnId=="two"){
        changeImg.src = "http://img.research-paper.co.kr/resources/2020/06/15/QbhLWDulm8tvRq3A2lxC6PtUIzXV4ltC7aWY799X.jpeg";
    }else if(btnId=="three"){
        changeImg.src = "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202202/28/08213f9c-9df4-4bee-8c8b-1e352fda1a3b.jpg"
    }

};
