<template>
	<view class="index-list animated fadeInLeft">
		<view class="index-list1">
			<view>
				<image :src="item.userpic" mode="widthFix" lazy-load=""></image>
				<text>{{item.username}}</text>
			</view>
			<view v-if="item.isfollow" @tap="follow">
				<view class="icon iconfont icon-zengjia"></view>
				<text>关注</text>
			</view>
			<view v-else @tap="follow">
				<!-- <view class="icon iconfont icon-zengjia"></view> -->
				<text>已关注</text>
			</view>
		</view>
		<view class="index-list2">{{item.title}}</view>
		<view class="index-list3 u-f-ajc">
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<!-- 视频 -->
			<template v-if="item.type === 'video'">
				<view class="index-list-play icon iconfont icon-bofang"></view>
			</template>
			<view class="index-list-playinfo">
				{{item.playnum}}播放，{{item.long}}
			</view>
		</view>
		<view class="index-list4">
			<view>
				<view :class="{'active': item.infonum.index === 1}" class="icon iconfont icon-icon_xiaolian-mian" @tap="caozuo('ding')">
				</view>
				<text>{{item.infonum.dingnum}}</text>
				<view :class="{'active' : item.infonum.index === 2}" class="icon iconfont icon-kulian" @tap="caozuo('cai')">
				</view>
				<text>{{item.infonum.cainum}}</text>
			</view>
			<view>
				<view class="icon iconfont icon-pinglun1">
				</view>
				<text>{{item.infonum.commentnum}}</text>
				<view class="icon iconfont icon-zhuanfa">
				</view>
				<text>{{item.infonum.sharenum}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => {}
			},
			index: {
				type: Number
			}
		},
		data() {
			return {

			};
		},
		methods: {
			// 关注与取消关注
			follow() {
				this.item.isfollow = !this.item.isfollow
				uni.showToast({
					title: this.item.isfollow ? '取消关注成功!' : '关注成功',
					mask: false,
					duration: 2000
				})
			},
			// 顶踩操作
			caozuo(type) {
				// infonum: {
				// 	index: 2, // 0:还没有操作 1:顶 2:踩
				// 	dingnum: 11,
				// 	cainum: 11,
				// 	commentnum: 10,
				// 	sharenum: 10
				// },
				switch (type){
					case 'ding':
					if (this.item.infonum.index === 1 ) {
						return
					}
					this.item.infonum.cainum -= 1
					this.item.infonum.dingnum += 1
					this.item.infonum.index = 1
						break;
					case 'cai':
					if (this.item.infonum.index === 2 ) {
						return
					}
					this.item.infonum.cainum += 1
					this.item.infonum.dingnum -= 1
					this.item.infonum.index = 2
					default:
						break;
				}
			}
		}
	}
</script>

<style scoped>
	.index-list {
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}

	.index-list1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.index-list1>view:first-child {
		display: flex;
		align-items: center;
		color: #999999;
	}

	.index-list1>view:first-child image {
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
		margin-right: 10upx;
	}

	/* 	.index-list1>view:last-child {
		display: flex;
		align-items: center;
		padding: 6upx;
		background: #F4F4F4;
		border-radius: 6upx;
	} */
	.index-list1>view:nth-child(even) {
		display: flex;
		align-items: center;
		padding: 6upx;
		background: #F4F4F4;
		border-radius: 6upx;
	}

	.index-list2 {
		padding-top: 16upx;
	}

	.index-list3 {
		padding-top: 16upx;
		position: relative;
	}

	.index-list-play {
		position: absolute;
		font-size: 140upx;
		color: #FFFFFF;
	}

	.index-list-playinfo {
		position: absolute;
		background: rgba(51, 51, 51, 0.72);
		color: #FFFFFF;
		right: 12upx;
		bottom: 14upx;
		border-radius: 36upx;
		padding: 0 10upx;
	}

	.index-list3 image {
		width: 100%;
		border-radius: 6upx;
	}

	.index-list4 {
		padding: 15upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.index-list4 view {
		color: #999999;
	}

	.index-list4>view:first-child {
		display: flex;
		align-items: center;
	}

	.index-list4>view:last-child {
		display: flex;
		align-items: center;
	}

	.index-list4>view>view {
		display: flex;
		align-items: center;
	}

	.index-list4>view>view {
		margin: 0upx 12upx 0 0;
	}

	.index-list4>view>text {
		margin-right: 12upx;
	}

	.index-list4 .active,
	.index-list4 .active>view {
		color: #C5F61C;
	}
</style>
