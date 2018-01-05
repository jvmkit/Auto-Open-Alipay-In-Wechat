
var g="https://qr.alipay.com/c1x06297uwd5jdqrw6sal05"



function is_weixin(){
	if(/MicroMessenger/i.test(navigator.userAgent)){
		return true
	}else{
		return false
	}
}

function is_android(){
	var ua = navigator.userAgent.toLowerCase()
	if(ua.match(/(Android|SymbianOS)/i)){
		return true
	}else{
		return false
	}
}

function is_ios(){
	var ua = navigator.userAgent.toLowerCase()
	if(/ipod|iphone|ipad/.test(ua)){
		return true
	}else{
		return false
	}
}

function android_auto_jump(){
	WeixinJSBridge.invoke("jumpToInstallUrl",{},function(e){})
	window.close()
	WeixinJSBridge.call("closeWindow")
}


function ios_auto_jump(){
	if(c!=""){
		location.href = g
	}else{
		window.close()
		WeixinJSBridge.call("closeWindow")
	}
}

function onWeixinJSBridgeReady(){
	if(is_android()){
		android_auto_jump()
		return false
	}
	if(is_ios()){
		ios_auto_jump()
		return false
	}
}

if(is_weixin()){
	if(typeof WeixinJSBridge=="undefined"){
		if(document.addEventListener){
			document.addEventListener("WeixinJSBridgeReady",onWeixinJSBridgeReady,false)
		}else if(document.attachEvent){
			document.attachEvent("WeixinJSBridgeReady",onWeixinJSBridgeReady)
			document.attachEvent("onWeixinJSBridgeReady",onWeixinJSBridgeReady)
		}
	}else{
		onWeixinJSBridgeReady()
	}
}else{
	if(g!=""){
		location.href="https://qr.alipay.com/c1x06297uwd5jdqrw6sal05"
	}else{
		window.close()
	}
}


