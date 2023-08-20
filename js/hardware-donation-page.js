/* 作者:Disy & StarLight，拷贝及使用前请务必征得作者同意！ */

/* 以下两个方法用于适时隐藏滚动条，防止捐助名单误触 */
function movIn(){
    document.getElementsByClassName("main-frame")[0].style.overflow = "hidden";
}

function movOut(){
    document.getElementsByClassName("main-frame")[0].style.overflow = "auto";
}

// 捐助名单与金额
const donation_list = [
    {"player": "202773576", "money": "10.00", "time": "2023/8/17 0:01"},
    {"player": "3507862757", "money": "50.00", "time": "2023/8/17 0:02"},
    {"player": "477310249", "money": "6.00", "time": "2023/8/17 0:03"},
    {"player": "1020091223", "money": "50.00", "time": "2023/8/17 0:03"},
    {"player": "1801864243", "money": "30.00", "time": "2023/8/17 0:03"},
    {"player": "2409429806", "money": "30.00", "time": "2023/8/17 0:03"},
    {"player": "2434886981", "money": "10.00", "time": "2023/8/17 0:07"},
    {"player": "3034531704", "money": "50.00", "time": "2023/8/17 0:08"},
    {"player": "563712530", "money": "150.00", "time": "2023/8/17 0:09"},
    {"player": "1733683250", "money": "66.00", "time": "2023/8/17 0:10"},
    {"player": "2818545089", "money": "66.60", "time": "2023/8/17 0:12"},
    {"player": "3149299534", "money": "83.67", "time": "2023/8/17 0:18"},
    {"player": "1007732468", "money": "25.00", "time": "2023/8/17 0:18"},
    {"player": "3083394826", "money": "50.00", "time": "2023/8/17 0:19"},
    {"player": "3521358901", "money": "20.00", "time": "2023/8/17 0:33"},
    {"player": "1536640836", "money": "300.00", "time": "2023/8/17 0:36"},
    {"player": "1810219352", "money": "100.00", "time": "2023/8/17 0:56"},
    {"player": "未知（微信昵称：亚）", "money": "2.33", "time": "2023/8/17 5:28"},
    {"player": "2097647121", "money": "147.36", "time": "2023/8/17 10:04"},
    {"player": "783885990", "money": "34.30", "time": "2023/8/17 10:35"},
    {"player": "1932054434", "money": "35.50", "time": "2023/8/17 11:03"},
    {"player": "2879285547", "money": "14.72", "time": "2023/8/17 12:04"},
    {"player": "未知（微信昵称：嫩都可会）", "money": "10.00", "time": "2023/8/17 12:56"},
    {"player": "351995229", "money": "10.00", "time": "2023/8/17 18:44"},
    {"player": "2126941634", "money": "30.00", "time": "2023/8/17 19:00"},
    {"player": "2452536408", "money": "36.00", "time": "2023/8/17 20:42"},
    {"player": "1763981323", "money": "31.40", "time": "2023/8/17 20:56"},
    {"player": "1462173577", "money": "50.00", "time": "2023/8/17 21:04"},
    {"player": "2018046361", "money": "114.00", "time": "2023/8/18 0:06"},
    {"player": "2423340067", "money": "15.00", "time": "2023/8/18 0:06"},
    {"player": "3384391077", "money": "75.00", "time": "2023/8/18 0:06"},
    {"player": "1481567451", "money": "10.00", "time": "2023/8/18 0:06"},
    {"player": "2514109920", "money": "15.03", "time": "2023/8/19 23:02"},
    {"player": "3384391077", "money": "90.00", "time": "2023/8/19 23:03"}
];

function sumDonationMoney(){
    let result = 0;
    for(let i in donation_list){
        result += Number(donation_list[i].money) * 100;
    }

    return Number((result / 100).toFixed(2));
}

function renderPercent() {
    let percent = Number((sumDonationMoney() / 9000).toFixed(4));

    let intPercent = Math.round(percent * 100);

    document.documentElement.style.setProperty('--color-h', intPercent.toString());
    document.documentElement.style.setProperty('--battery-right',  (90 - intPercent) + "%");

    let windowWidth =  window.innerWidth;

    document.documentElement.style.setProperty('--wave-top-percent',  (35 + windowWidth * 0.006) + "%");

    let gWaves = document.getElementsByClassName("g-wave");
    for (let i = 0; i < gWaves.length; i++) {
        gWaves[i].style.left = intPercent + "%";
        gWaves[i].style.width = (100 + 0.7 * windowWidth) + "px";
        gWaves[i].style.height = (100 + 0.7 * windowWidth) + "px";
    }

    document.getElementById("battery-percent").innerHTML = "募捐进度: {0}%<br>总金额: {1}元".format((percent * 100).toFixed(2), sumDonationMoney());

    document.getElementById("battery").style.width = Math.round(0.6 * windowWidth) + "px";
    document.getElementById("battery-percent").style.width = Math.round(0.6 * windowWidth) + "px";
    document.getElementById("battery-copy").style.width = Math.round(0.6 * windowWidth) + "px";
}

let rid = setInterval(function (){
    let donation_box = document.getElementById("donation-text");

    for (let ele in donation_list){
        let donation_ele = document.createElement("p");
        donation_ele.innerHTML = `<strong>${donation_list[ele].player}: ￥${donation_list[ele].money}</strong>`;

        donation_box.appendChild(donation_ele);
    }

    clearInterval(rid);
}, 1);

window.onload = function () {
    initSidebar();
    initLantern();
    fitWindow();

    renderPercent();

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

window.onresize = function () {
    fitWindow();
    renderPercent();
};