function initModel() {
    let model = document.createElement("svg");

    jQuery.get("img/resources/model.svg", null, function (svg) {
        model.innerHTML = svg;
        document.getElementById("monitor").insertBefore(model, document.getElementById("tip-container"));

        loadVisualization();
    }, "text");
}

window.onload = function () {
    initSidebar()
    initModel();
    initLantern();
    fitWindow();

    document.getElementById("scroll-btn").addEventListener("click", function (){
        let main_ele = document.getElementsByClassName("main-frame")[0];
        let current_position = 0;
        let end_position = window.innerHeight;

        let rid = setInterval(function (){

            if(end_position - current_position < 20){
                main_ele.scrollTop += 5;
                current_position += 5;
            }
            else {
                main_ele.scrollTop += 15;
                current_position += 15;
            }

            if(current_position >= end_position){
                clearInterval(rid);
            }
        }, 1);
    });
}