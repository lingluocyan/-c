<template>
	<view>
		<!-- 上拉加载更多 -->
		<view class="load-more">{{loadText}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			loadText: {
				type: String,
				default: () => ''
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.load-more {
		text-align: center;
		color: #AAAAAA;
		padding: 15upx;
	}
</style>
