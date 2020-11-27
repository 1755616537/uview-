<view @tap.stop>
	<u-image shape="circle" ref="uImage" width="200rpx" height="200rpx" src="https://cdn.uviewui.com/uview/example/fade.jpg"
	 mode="aspectFill" :fade="true" duration="450">
		<!-- 加载中提示 -->
		<u-loading slot="loading"></u-loading>
		<!-- 加载错误提示 -->
		<view slot="error" style="font-size: 24rpx;">加载失败</view>
	</u-image>
</view>
