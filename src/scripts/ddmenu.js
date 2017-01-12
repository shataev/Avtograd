(function () {
    var aside = document.getElementsByClassName("aside")[0];
    aside.addEventListener('click', showAsideMenu);

    function showAsideMenu(e){
        var target = e.target;
        while (target != this){
            if (target.classList.contains("vut-heading")){
                e.preventDefault();
                if(target.classList.contains("is-open")){
                    target.classList.remove("is-open")
                } else {
                    target.classList.add("is-open");
                }
                return
            }
            target = target.parentNode
        }
    }
})();