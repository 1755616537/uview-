<template>
	<view>
		<!-- 顶部导航栏 -->
		<u-navbar :is-back="true" :title="$t('pagesA.WaiBuEWB.WaiBuEWB.navbar_title')" :background="vuex_navbar_background"></u-navbar>
		<!-- 中间容器 -->
		<view class="container">
			<web-view :src="url" v-if="url!=null"></web-view>
		</view>
		<!-- 所有内容的容器 -->
		<!-- <view class="u-page"></view> -->
		<!-- 底部导航栏,与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<!-- <u-tabbar v-model="tabbar_current" :list="vuex_tabbar_list" :mid-button="true" @change='vuex_tabbar_beforeSwitch'></u-tabbar> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 底部导航栏,双向绑定的激活项的索引值,不定义会报错
				tabbar_current:-1,
				// 网页路径
				url:null
			}
		},
		methods: {
		},
		onLoad:function(option){
			// 页面加载	
			this.url=decodeURIComponent(option.url)
		},
		onShow:function(){
			// 页面显示
		},
		onReady:function(){
			// 初次渲染
		},
		onHide:function(){
			// 页面隐藏
		},
		onUnload:function(){
			// 页面卸载
		},
		onPullDownRefresh:function(){
			// 下拉动作
		},
		onReachBottom:function(){
			// 拉触底
		}
	}
</script>

<style>
</style>