import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 首页地址
Vue.prototype.$index_url = 'http://b.xiaogongju.top/#/';
// 后台api地址
Vue.prototype.$http_url = 'http://';
// websocketapi地址
Vue.prototype.$websocketapi_url = 'ws://';
// 微信的appid
Vue.prototype.$wechat_appid = '';
// 支付宝的appid
Vue.prototype.$alipay_appid = '';

// 获取input焦点
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

// 引入全局使用uView
import uView from '@/common/uview-ui';
Vue.use(uView);

// 引入uView提供的对vuex的简写法文件
import store from '@/common/store'
let vuexStore = require('@/common/store/$u.mixin.js')
Vue.mixin(vuexStore)

// 引入语言包，注意路径
import zh from '@/common/locales/zh.js';
import en from '@/common/locales/en.js';
// 引入并使用vue-i18n
import VueI18n from '@/common/vue-i18n.min'
Vue.use(VueI18n)
// 构造i18n对象
const i18n = new VueI18n({
	// 默认语言，这里的local属性，对应message中的zh、en属性
	locale: 'zh',
	// 引入语言文件
	messages: {
		// 这里的属性名是任意的，您也可以把zh设置为cn等，只是后续切换语言时
		// 要标识这里的语言属性，如：this.$i18n.locale = zh|en|zh|xxx
		'zh': zh, // 这里为上面通过import引入的语言包
		'en': en,
	}
})
// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n

App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
	...App
})

// uView
// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()
