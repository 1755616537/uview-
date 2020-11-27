// 这里的Vue为Vue对象(非创建出来的实例)，vm为main.js中“Vue.use(httpInterceptor, app)”这一句的第二个参数，
// 为一个Vue的实例，也即每个页面的"this"
// 如果需要了解这个install方法是什么，请移步：https://uviewui.com/components/vueUse.html
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		// 请求的本域名
		baseUrl: 'https://m-store.com.cn/lingshou',
		// 设置为json，返回后会对数据进行一次JSON.parse()
		dataType: 'json',
		// 是否显示请求中的loading
		showLoading: true,
		// 请求loading中的文字提示
		loadingText: '请求中...',
		// 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
		loadingTime: 800,
		// 是否在拦截器中返回服务端的原始数据
		originalData: true,
		// 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		loadingMask: true,
		// 配置请求头信息
		header: {
			'content-type': 'application/json;charset=UTF-8'
		},
	});

	// 请求拦截部分，如配置，每次请求前都会执行
	Vue.prototype.$u.http.interceptor.request = (config) => {
		console.log('请求开始拦截器:', config)
		// 取本地存储的Cookie,不为空就添上
		try {
			const Cookie = uni.getStorageSync('cookieKey');
			if (Cookie) {
				config.header.Cookie = Cookie;
			}
		} catch (e) {
			console.log("取出本地cookie错误:" + e);
		}

		// 返回false,拦截不发送请求
		return config;
	}

	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		console.log('请求结束拦截器:', res)
		if (res.statusCode == 200) {
			try {
				uni.setStorageSync('cookieKey', res.header["Set-Cookie"]);
			} catch (e) {
				console.log("存储本地cookie错误:" + e);
			}
			
			// 判断是否正常请求到
			if (res.data.errcode == 0) return res;
			
			// 请求错误
			switch (parseInt(res.data.errcode)) {
				case 404:
					// 未登录
					if (!WeiDengLu(res)) return false;
					break;
				default:
					vm.$u.toast(res.data.msg ? res.data.msg : '未定义错误信息', 1000);
					return false;
			}
		} else {
			switch (res.statusCode) {
				case 201:
					// 假设201为token失效，这里跳转登录
					WeiDengLu();
					return false;
					break;
				default:
					try {
						vm.$u.toast(res.data.msg ? res.data.msg : '未定义错误信息!', 1000);
					} catch (e) {
						vm.$u.toast('未定义错误信息!', 1000);
					}
					return false;
			}
		}
		
		return false;
	}
	
	function WeiDengLu() {
		// 未登录
	
		// 初始化清空登录信息
		getApp().globalData.login_data = [];
		getApp().globalData.backstage_login_data = [];
	
		vm.$u.toast('验证失败，请重新登录', 1000);
		setTimeout(() => {
			// 此为uView的方法，详见路由相关文档
			vm.$u.route({
				type: 'redirect',
				url: '/pages/index/index',
				params: {}
			})
		}, 1500)
	}
}

export default {
	install
}
