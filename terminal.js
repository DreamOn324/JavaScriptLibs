///////////////////////////   终端相关操作   ///////////////////////////

/**
 * 判断终端的类型
 * invoke : browser.versions.webKit
 * @type {boolean} 选定终端类型的布尔值
 */
var browser = {
	versions: function() {    
		var u = navigator.userAgent;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

/**   
 * 检测浏览器类型
 * @param {String} browserStr 浏览器标志字符串    
 * @return {boolean}      
 */
function browserType(browserStr) {
	return (navigator.userAgent.indexOf(browserStr) != -1) ? true : false;
}

/**
 * 检查浏览器是否支持placeholder
 * @return {Boolean} 是否支持
 */
function hasPlaceholderCheck() {
	return 'placeholder' in document.createElement('input');
}
