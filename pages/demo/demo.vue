<template>
	<view>
		<view v-if="(age > 20)" :class="className">
			<view>测试1</view>
			<view>{{text}}</view>
			<view>测试3</view>
			<!-- 		<view class="view-box" hover-stay-time="800" hover-class="view-box-hover animated bounceIn">
			我是demo\n
		</view>
		<text>我是text内容\n</text>
		<text :selectable="true">我是text内容</text> -->
		</view>
		<button type="primary" @click="changeItem">修改</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				className: 'box',
				text: '哈哈哈',
				age: 10
			}
		},
		methods: {
			changeItem() {
				this.age += 10
				// this.text = '嘻嘻嘻'
				// this.className = 'box1'
			}
		}
	}
</script>

<style>
	.box {
		width: 100%;
		height: 600upx;
		display: flex;
	}

	.box>view {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #007AFF;
		border: 1px solid #FFFFFF;
	}

	.view-box {
		width: 200upx;
		height: 200upx;
		margin: 100upx;
		background-color: #0A98D5;
	}

	.view-box-hover {
		/* background-color: red; */
	}
</style>
