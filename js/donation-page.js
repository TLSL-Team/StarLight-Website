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
    {"player":"vocaloidkiss(二十有柒)", "money":"1050.01"},
    {"player":"stjak123", "money":"1000.00"},
    {"player":"CH", "money":"888.00"},
    {"player":"ARtcgb(AR)", "money":"248.00"},
    {"player":"萧门服务器", "money":"274.60"},
    {"player":"AmyUuk(猫娘Amy)", "money":"200.00"},
    {"player":"ek_", "money":"200.00"},
    {"player":"gwzaehnii", "money":"200.00"},
    {"player":"Monochrome(猎户)", "money":"178.00"},
    {"player":"huangsam_04", "money":"154.65"},
    {"player":"CrystalAura(晶体光环)", "money":"194.00"},
    {"player":"佚名(此项包含所有无主款项)", "money":"160.00"},
    {"player":"GMHthe(GMH)", "money":"134.51"},
    {"player":"Revintale(Feya)", "money":"180.00"},
    {"player":"Proletariat_H(Lenine)", "money":"97.00"},
    {"player":"Happy_Li(我是李斯特)", "money":"88.88"},
    {"player":"苹果树", "money":"65.00"},
    {"player":"Zecils(木剑)", "money":"60.00"},
    {"player":"     (空昵称)", "money":"60.00"},
    {"player":"Tyumen(秋明)", "money":"125.11"},
    {"player":"yee~", "money":"52.00"},
    {"player":"IronMan(老铁)", "money":"50.00"},
    {"player":"Paradox", "money":"50.00"},
    {"player":"HuanZ(Hxin_123)", "money":"210.00"},
    {"player":"Es(099)", "money":"64.00"},
    {"player":"Aunt_nuozhen", "money":"45.14"},
    {"player":"ahdiua", "money":"45.00"},
    {"player":"ComradeZhang1(小张同志)", "money":"40.00"},
    {"player":"AZhao(阿招赖赖)", "money":"40.00"},
    {"player":"梦箐°", "money":"30.98"},
    {"player":"wishiwashi2002(鱼宝)", "money":"30.00"},
    {"player":"LeoNanshizi(南十字)", "money":"30.00"},
    {"player":"white_song(白耗子)", "money":"30.00"},
    {"player":"ArcheeRY_but_gone", "money":"30.00"},
    {"player":"Eight", "money":"30.00"},
    {"player":"datong(大同)", "money":"50.00"},
    {"player":"晓风Revol（Hina_0189）", "money":"28.88"},
    {"player":"Mo_Lin(孤凫)", "money":"25.00"},
    {"player":"Pumpmelon(南瓜)", "money":"22.00"},
    {"player":"Parzival", "money":"20.00"},
    {"player":"BookletDX(Killer_Queen)", "money":"20.00"},
    {"player":"oooofgmg", "money":"20.00"},
    {"player":"Mu_yu_", "money":"18.88"},
    {"player":"布鲁克斯(Brooks)", "money":"15.00"},
    {"player":"Idoyt_(没有ID)", "money":"15.00"},
    {"player":"Hai_Rui", "money":"13.30"},
    {"player":"Fla_Akebono", "money":"12.34"},
    {"player":"humizuki(可乐)", "money":"11.45"},
    {"player":"Maybe661", "money":"20.45"},
    {"player":"Mss.(梅帅帅)", "money":"11.00"},
    {"player":"FlyingCreeperS(FCS)", "money":"11.00"},
    {"player":"Forggit", "money":"10.38"},
    {"player":"biann(彼岸)", "money":"10.00"},
    {"player":"Blackback_", "money":"10.00"},
    {"player":"jy1433223(姜胤)", "money":"10.00"},
    {"player":"Hyrans", "money":"15.00"},
    {"player":"Seasame", "money":"39.00"},
    {"player":"离-Aliz", "money":"10.00"},
    {"player":"EyedMagician433(歆川)", "money":"33.32"},
    {"player":"ppyb(bo)", "money":"8.00"},
    {"player":"AmazingBanana", "money":"6.67"},
    {"player":"shenxiong(阿 巴)", "money":"6.66"},
    {"player":"归宿(Home_Yi)", "money":"6.66"},
    {"player":"kelair", "money":"37.33"},
    {"player":"Mango Gong", "money":"5.47"},
    {"player":"NaiGe(南戈Starry)", "money":"5.00"},
    {"player":"mirror(镜花)", "money":"5.00"},
    {"player":"zsw2009_", "money":"45.00"},
    {"player":"***(捐赠者要求隐去昵称)", "money":"14.00"},
    {"player":"forget", "money":"87.62"},
    {"player":"GMS_172(戈麦斯)", "money":"2.00"},
    {"player":"氳苬", "money":"2.00"},
    {"player":"xiao_no_love", "money":"2.00"},
    {"player":"kesager", "money":"1.50"},
    {"player":"popcatfromETO", "money":"11.45"},
    {"player":"xyvnb", "money":"15.50"},
    {"player":"cn_pangzong(胖总)", "money":"4.41"},
    {"player":"weizhizhuang893(位置装)", "money":"14.00"},
    {"player":"Steve47846(Qubit)", "money":"150.63"},
    {"player":"linjui(霂九)", "money":"2.01"},
    {"player":"陌维", "money":"2.00"},
    {"player":"YOYOY", "money":"0.50"},
    {"player":"FreshAcrobat126", "money":"0.10"},
    {"player":"zhanzuozi(转座子)", "money":"0.04"},
    {"player":"Par1s_Cann0N(巴黎大炮)", "money":"0.11"}
];

function sumDonationMoney(){
    let result = 0;
    for(let i in donation_list){
        result += Number(donation_list[i].money) * 100;
    }

    return (result / 100).toFixed(2);
}

let rid = setInterval(function (){
    let donation_box = document.getElementById("donation-text");
    if(donation_box != null){
        let sorted_donation_list = donation_list.sort((a, b) => {
            let money_a = Number(a.money);
            let money_b = Number(b.money);

            if(money_a > money_b){
                return -1;
            }
            else if(money_a === money_b){
                return 0;
            }
            else {
                return 1;
            }
        });

        for (let ele in sorted_donation_list){
            let donation_ele = document.createElement("p");
            donation_ele.innerHTML = `<strong>${sorted_donation_list[ele].player}: ￥${sorted_donation_list[ele].money}</strong>`;

            donation_box.appendChild(donation_ele);
        }

        clearInterval(rid);
    }
}, 1);

window.onload = function () {
    initSidebar();
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