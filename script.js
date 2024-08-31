window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const closeBtn2 = document.querySelector("#btn2");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    closeBtn2.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right");
            closeBtn2.classList.replace("bx-menu","bx-menu-alt-right");
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
            closeBtn2.classList.replace("bx-menu-alt-right","bx-menu");
        }
    }
}