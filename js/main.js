/* 作者:Disy & StarLight，拷贝及使用前请务必征得作者同意！ */

let card_ele;
let card_text;
let close_button;

function safeCardFadeIn(){
    hide(card_ele);
    hide(close_button);

    if(card_ele.classList.contains("hidden")){
        card_ele.classList.remove("hidden");
    }

    if(close_button.classList.contains("hidden")){
        close_button.classList.remove("hidden");
    }

    fadeIn(card_ele, 100, "flex");
    fadeIn(close_button, 200, "flex");
}

function safeCardFadeOut(){
    fadeOut(card_ele, 100, false);
    fadeOut(close_button, 200, false);
}

window.onload = function () {

    card_ele = document.getElementById("introduce-card-container");
    card_text = document.getElementById("introduce-text");
    close_button = document.getElementById("introduce-close");

    /* 初始化界面内容 */
    initSidebar();
    initCards();
    initAllMonitor();
    initBulletScreen();
    initLantern();
    initWSConnection();
    autoUpdateYear();
    autoChangeSubTitle();
    fitWindow();

    /* 检测屏幕尺寸变化，如果屏幕过窄则启动手机版模式 */
    window.onresize = function () {
        resize_monitors();
        fitWindow();
    }

    /* 设置服务器介绍页四个按钮的效果 */
    document.getElementById("main-cpu").addEventListener("click", function (){
        card_text.innerHTML = "<h3>优秀的性能</h3><br><p>&nbsp;&nbsp;&nbsp;&nbsp;服务器配置了大雕AMD-5950X，足足16个核心，锁频高频4.4GHz运行! 更有128G高频率DDR4内存和高性能的SSD（三星980Pro + 西数黑盘SN750）与之相配，甚至还有RTX 3080显卡？！保证给您一个告别卡顿的世界！</p>";
        safeCardFadeIn();
    });

    document.getElementById("main-survival").addEventListener("click", function (){
        card_text.innerHTML = "<h3>生电的天堂</h3><br><p>&nbsp;&nbsp;&nbsp;&nbsp;除了超高的配置与性能外，我们还开创性的划分外服与内服，外服提供原创趣味性插件以获得更棒的轻生存体验，而内服则使用Fabric核心，搭配各种生电必备mod（如Carpet），真正做到生电生存两不误！</p>";
        safeCardFadeIn();
    });

    document.getElementById("main-multi").addEventListener("click", function (){
        card_text.innerHTML = "<h3>多版本兼容</h3><br><p>&nbsp;&nbsp;&nbsp;&nbsp;不论是Java版1.9.X ~ 1.20.X任一版本的玩家，还是仅有BE(基岩版)，但想跨版本进入Java服务器，与大家一同游玩的玩家，在StarLight这里都不是问题！</p>";
        safeCardFadeIn();
    });

    document.getElementById("main-ban").addEventListener("click", function (){
        card_text.innerHTML = "<h3>完善的防熊</h3><br><p>&nbsp;&nbsp;&nbsp;&nbsp;通过提供领地相关的监测，您的建筑区域可仅向信任的玩家开放，确保入侵的熊孩子无法进入您的领地大搞破坏。同时基于内/外服分离的机制，通过审核更严格的内服，同样保证您不再受熊孩子的侵扰！</p>";
        safeCardFadeIn();
    });

    document.getElementById("introduce-close").addEventListener("click", function (){
        safeCardFadeOut();
    });
}

window.onresize = function () {
    fitWindow();
}