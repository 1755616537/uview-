<script>
	export default {
		onLaunch: function() {
			console.log('App 初始化完成');

			// #ifdef APP-PLUS
			// 检测升级 仅出现在 App 平台下的代码
			// 发起请求
			uni.request({
				url: '',
				method: 'GET',
				data: {},
				header: {},
				success: (res) => {
					if (res.statusCode == 200 && res.data.isUpdate) {
						//判断客户端环境 取出不同下载地址
						let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
						// 提醒用户更新
						uni.showModal({
							title: '更新提示',
							content: res.data.note ? res.data.note : '是否选择更新',
							success: (showResult) => {
								if (showResult.confirm) {
									// 转码确保没中文
									// openUrl=encodeURI(openUrl);
									// 打开地址
									plus.runtime.openURL(openUrl);
								}
							}
						})
					}
				}
			})
			// #endif

			// #ifdef H5
			// 仅H5出现
			// 获取UserAgent信息=>转小写
			let ua = navigator.userAgent.toLowerCase();
			// 判断是否手机端
			if ((ua.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i))) {
				//手机端
				if (/iPhone|iPad|iPod/.test(ua)) {
					// return 'ios'
				} else if (/Android/.test(ua)) {
					// return 'android'
				}
			} else {
				//pc端
				// return;
			}
			// 判断浏览器类型
			if (ua.indexOf('wechat'.toLowerCase()) > 0 || ua.indexOf('MicroMessenger'.toLowerCase()) > 0) {
				// 微信
				getApp().globalData.browser_type = 'wechat';
			} else if (ua.indexOf('alipay'.toLowerCase()) > 0 || ua.indexOf('AlipayClient'.toLowerCase()) > 0) {
				// 支付宝
				getApp().globalData.browser_type = 'alipay';
			} else if (ua.indexOf('qq'.toLowerCase()) > 0 || ua.indexOf('qqtheme'.toLowerCase()) > 0) {
				// QQ
				getApp().globalData.browser_type = 'qq';
			}
			// #ifdef MP-WEIXIN
			// 微信小程序类型
			this.globalData.browser_type = 'wechat';
			// #endif
			// uni.showModal({
			//     content: ua,
			// });
			// #endif
			
			// 以下是全局变量vuex配置----------------------------------------------------------------------

			// 主题颜色
			this.$u.vuex('vuex_ZhuTi_color', this.$u.color['warning']);

			// 主题字体颜色
			this.$u.vuex('vuex_ZhuTiZiTi_color', this.$u.color['mainColor']);

			// 主题背景颜色
			this.$u.vuex('vuex_ZhuTiBeiJing_color', this.$u.color['bgColor']);

			// 顶部导航栏背景色
			this.$u.vuex('vuex_navbar_background', {
				// 定义渐变的背景
				// backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'

				// 定义纯色的背景
				backgroundColor: '#ffffff',

				// 定义背景图
				// background:'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat'

				// 还可以设置背景图size属性
				// backgroundSize: 'cover',
			});
		},
		onShow: function() {
			console.log('App 启动或从后台进入前台显示');
		},
		onHide: function() {
			console.log('App 从前台进入后台');
		},
		onError: (e) => {
			console.log('App 报错时触发', e);
		},
		// 全局变量
		globalData: {
			//浏览器类型
			browser_type:'',
			// 登录服务供应商类型
			oauth_provider_type:'',
			// 官方授权登陆后数据
			login_data:[],
			// 官方授权登陆数据=>换取的后台用户数据
			backstage_login_data:[],
			// 微信JSAPI是否已经加载
			WXJSAPIOn:false
		}
	};
</script>

<style>
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
</style>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import '@/common/uni.css';
	
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}
	
	/* #endif */
</style>

<!-- -->
<style lang="scss">
	page{
		background-color: #efefef;
	}
	// 使用uView UI样式 
	@import "@/common/uview-ui/index.scss";
</style>
