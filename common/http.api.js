// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// let hotSearchUrl = '/ebapi/store_api/hot_search';
// let indexUrl = '/ebapi/public_api/index';

// 获取微信JSAPI配置URL
let HuoQuWeiXinJSAPIPeiZhiURL='wx/jsapi_config'
// CODE换取后台登陆凭证URL
let CODEHuanQuHouTaiDengLuPingZhengURL='/gukelogin'

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	// let getSearch = (params = {}) => vm.$u.get(hotSearchUrl, {
	// 	id: 2
	// });

	// 此处使用了传入的params参数，一切自定义即可
	// let getInfo = (params = {}) => vm.$u.post(indexUrl, params);
	
	// 获取微信JSAPI配置
	let HuoQuWeiXinJSAPIPeiZhi = (params = {},header={}) => vm.$u.post(HuoQuWeiXinJSAPIPeiZhiURL,params,header);
	// CODE换取后台登陆凭证
	let CODEHuanQuHouTaiDengLuPingZheng = (browser_type='',params = {},header={}) => vm.$u.post(browser_type+CODEHuanQuHouTaiDengLuPingZhengURL,params,header);

	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		// getSearch,
		// getInfo,
		
		// 获取微信JSAPI配置
		HuoQuWeiXinJSAPIPeiZhi,
		// CODE换取后台登陆凭证
		CODEHuanQuHouTaiDengLuPingZheng
	};
}

// // 调用getSearch接口
// this.$u.api.getSearch().then(res => {
// 	console.log(res);
// })

// // 调用getInfo接口
// this.$u.api.getInfo({id: 3}).then(res => {
// 	console.log(res);
// })


export default {
	install
}
