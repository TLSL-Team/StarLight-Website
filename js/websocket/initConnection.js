/* 作者:Disy & StarLight，拷贝及使用前请务必征得作者同意！ */

new_element = document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src", "./js/websocket/reconnectWS.js");

// 预声明全局变量
let wsv4;  // IPv4的WebSocket
let wsv6;  // IPv6的WebSocket
let start_time_stamp = 0;
let delta = 0;

const GOOD_SIGNAL_IMG_PATH = "/img/icon/signal/Signal-Good.svg";
const NORMAL_SIGNAL_IMG_PATH = "/img/icon/signal/Signal-Normal.svg";
const BAD_SIGNAL_IMG_PATH = "/img/icon/signal/Signal-Bad.svg";

function ping(wss){  // 发送ping消息相关
	start_time_stamp = (new Date()).getTime();
	wss.send("ping");
}

function setPingMes(delay, type){
	delay = Number(delay);

	if (type === "4"){
		let v4_logo = document.getElementById("ipv4-logo");

		if(delay < 30){
			if(v4_logo.src.indexOf(GOOD_SIGNAL_IMG_PATH) === -1){
				v4_logo.src = GOOD_SIGNAL_IMG_PATH;
			}
		}
		else if(delay > 30 && delay < 100){
			if(v4_logo.src.indexOf(NORMAL_SIGNAL_IMG_PATH) === -1){
				v4_logo.src = NORMAL_SIGNAL_IMG_PATH;
			}
		}
		else if(delay > 100){
			if(v4_logo.src.indexOf(BAD_SIGNAL_IMG_PATH) === -1){
				v4_logo.src = BAD_SIGNAL_IMG_PATH;
			}
		}

		document.getElementById("ipv4-ping").innerHTML = delay.toString() + "ms";
	}
	else{
		let v6_logo = document.getElementById("ipv6-logo");
		
		if(delay < 30){
			if(v6_logo.src.indexOf(GOOD_SIGNAL_IMG_PATH) === -1){
				v6_logo.src = GOOD_SIGNAL_IMG_PATH;
			}
		}
		else if(delay > 30 && delay < 100){
			if(v6_logo.src.indexOf(NORMAL_SIGNAL_IMG_PATH) === -1){
				v6_logo.src = NORMAL_SIGNAL_IMG_PATH;
			}
		}
		else if(delay > 100){
			if(v6_logo.src.indexOf(BAD_SIGNAL_IMG_PATH) === -1){
				v6_logo.src = BAD_SIGNAL_IMG_PATH;
			}
		}

		document.getElementById("ipv6-ping").innerHTML = delay.toString() + "ms";
	}
}

function initWSConnection(){
	document.body.appendChild(new_element);

	wsv4 = new WebSocket("wss://slv4.starlight.cool:26666");

	wsv4.onopen = function(){
		start_time_stamp = (new Date()).getTime();
		wsv4.send("ping");
		setInterval(() => { ping(wsv4) }, 2000);
	};

	wsv4.onmessage = function (evt){
		const received_msg = evt.data;
		const packet = JSON.parse(received_msg);

		switch (packet.header) {
			case "pong":
				delta = ((new Date()).getTime() - start_time_stamp);
				setPingMes(delta,'4');
				break;

			case "players":
				document.getElementById("player-num").innerHTML = packet.body.onlineNum.toString();
				break;
		}
	}

	wsv4.onerror = function (){
		document.getElementById("ipv4-logo").src = "./img/icon/signal/Disconnected.svg";
		document.getElementById("ipv4-ping").innerHTML = "连接失败";
	}

	wsv4.onclose = function (){
		document.getElementById("ipv4-logo").src = "./img/icon/signal/Disconnected.svg";
		document.getElementById("ipv4-ping").innerHTML = "连接失败";
	}

	wsv6 = new WebSocket("wss://slv6.starlight.cool:26666");

	wsv6.onopen = function(){
		start_time_stamp = (new Date()).getTime();
		wsv6.send("ping");
		setInterval(() => { ping(wsv6) }, 2000);
	};

	wsv6.onmessage = function (evt){
		const received_msg = evt.data;
		const packet = JSON.parse(received_msg);

		switch (packet.header) {
			case "pong":
				delta = ((new Date()).getTime() - start_time_stamp);
				setPingMes(delta,'6');
				break;

			case "players":
				document.getElementById("player-num").innerHTML = packet.body.onlineNum.toString();
				break;
		}
	}

	wsv6.onerror = function (){
		document.getElementById("ipv6-logo").src = "./img/icon/signal/Disconnected.svg";
		document.getElementById("ipv6-ping").innerHTML = "连接失败";
	}

	wsv6.onclose = function (){
		document.getElementById("ipv6-logo").src = "./img/icon/signal/Disconnected.svg";
		document.getElementById("ipv6-ping").innerHTML = "连接失败";
	}
}