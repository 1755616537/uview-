<template>
	<view>
		<!-- 顶部导航栏 -->
		<u-navbar :is-back="true" :back-text="$t('index.index.DingBuDaoHangLan')" :back-icon-size='0' :title-bold='true' 
		 :background="vuex_navbar_background" :border-bottom='false'></u-navbar>
		<!-- 中间容器 -->
		<view class="content">
			
		</view>
		<!-- 所有内容的容器 -->
		<!-- <view class="u-page"></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad: function(option) {
			// 页面加载

			// 加载异步方法=>传递对象不继承对象引用的特性
			this.awaitonLoad(option);
			return
		},
		onShow: function() {
			// 页面显示
		},
		onReady: function() {
			// 初次渲染
		},
		onHide: function() {
			// 页面隐藏
		},
		onUnload: function() {
			// 页面卸载
		},
		onPullDownRefresh: function() {
			// 下拉动作
		},
		onReachBottom: function() {
			// 拉触底
		},
		methods: {
			async awaitonLoad(option) {
				
			}
		}
	}
</script>

<style>
</style>

<style lang="scss" scoped>
</style>
