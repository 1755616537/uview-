<template>
	<view>
		<!-- 顶部导航栏 -->
		<u-navbar :is-back="false" title="样式例子" :background="vuex_navbar_background"></u-navbar>
		<!-- 中间容器 -->
		<!-- <view class="content" style="background: #007AFF;">
			<view :style="{color: navbar_color}">{{$t('pages.index.index.bt')}}</view>
			<view style="height: 999px;"></view>
		</view> -->
		<!-- 所有内容的容器 -->
		<view class="u-page">
		<view class="u-flex u-row-center" style="background: #0A98D5;">外部居中</view>
		<view class="u-flex u-row-right" style="background: #aa557f;">外部靠右</view>
		<view class="u-flex u-row-left" style="background: #0A98D5;">外部靠左</view>
		<view class="u-flex u-row-around" style="background: #aa557f;">
			<text>自动适配</text>
			<text>自动适配</text>
		</view>
		<view class="u-flex u-row-between" style="background: #0A98D5;">
			<view>自动适配左</view>
			<view>自动适配右</view>
		</view>
		
		<view class="u-flex u-col-center" style="height: 100rpx;background: #aa557f;">
			<text style="background: #0A98D5;">内部上下居中</text>
		</view>
		<view class="u-flex u-col-bottom u-tips-color" style="height: 100rpx;background: #0A98D5;">
			<text style="background: #aa557f;">内部下</text>
		</view>
		<view class="u-flex u-col-top u-light-color" style="height: 100rpx;background: #aa557f;">
			<text style="background: #0A98D5;">内部上</text>
		</view>
		<view class="u-flex color-item" style="height: 100rpx;background: #0A98D5;">
			<text style="background: #aa557f;">内部上下高度占满</text>
		</view>
		
		<!-- 
		文字左对齐
		u-text-left
		文字居中对齐
		u-text-center
		文字右对齐
		u-text-right
		 -->
		
		<!--  定位uView内置了关于相对和绝对定位的两个类，分别为u-relative(u-rela)和u-absolute(u-abso)： -->
		
		<!-- 文字省略u-line-1,u-line-2,u-line-3,u-line-4,u-line-5五个类名在文字超出内容盒子时，分别只显示一行、两行、三行、四行、五行+省略号。 -->
		
		<!-- 
		 文字颜色
		 
		 uView提供了四个关于文字的颜色，具体详见文档的Color 色彩部分，分别是：
		 
		     main-color主要颜色，可以用于标题等需要重颜色的场景
		     content-color内容颜色，可以用于一般性内容的场景
		     tips-color提示颜色，可以用于浅颜色的提示语的场景
		     light-color为比tips-color更浅的颜色，可以和tips-color搭配使用
		 
		 举个例子：
		 我们平时看到的APP的新闻列表，标题颜色可以用$u-main-color，简介部分颜色可以用$u-content-color，底部的发布时间文字等可以用$u-tips-color。
		 #
		 1. 类名方
		 -->
		
		<!-- 
		注意： uView同时也给了一套简写的方法，二者是等价的
		u-padding-x == u-p-x
		u-padding-left-x == u-p-l-x
		u-padding-top-x == u-p-t-x
		u-padding-right-x == u-p-r-x
		u-padding-bottom-x == u-p-b-x
		u-margin-x == u-m-x
		u-margin-left-x == u-m-l-x
		u-margin-top-x == u-m-t-x
		u-margin-right-x == u-m-r-x
		u-margin-bottom-x == u-m-b-x
		
		<view class="u-margin-left-26"></viwe>
		-->
		
		</view>
		<!-- 底部导航栏,与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="tabbar_current" :list="vuex_tabbar_list" :mid-button="true" :before-switch="vuex_tabbar_beforeSwitch"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 底部导航栏,双向绑定的激活项的索引值,不定义会报错
				tabbar_current:-1
			}
		},
		onLoad: function(option) {
			// 页面加载
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
			
		},
	}
</script>

<style>
</style>
