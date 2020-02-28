<template>
	<view class="uni-tab-bar">
		<swiper class="swiper-box" @change="swiperChange" :current="tabIndex" :style="{height: swiperHeight + 'px'}">
			<swiper-item v-for="(item1,index1) in newList" :key="index1">
				<scroll-view scroll-y="true" class="list-index" @scrolltolower="loadmore(index1)">
					<!-- 图文列表 -->
					<block v-for="(item2,index2) in item1.list" :key="index2">
						<index-list :item="item2" :index="index2">
						</index-list>
					</block>
					<!-- 上拉加载更多 -->
					<!-- <view class="load-more">{{item1.loadText}}</view> -->
					<load-more :loadText="item1.loadText"></load-more>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import loadMore from '../common/load-more.vue'
	import indexList from './index-list.vue'
	export default {
		props: {
			newList: {
				type: Array,
				default: () => []
			},
			swiperHeight: {
				type: Number,
				default: () => 0
			},
			tabIndex: {
				type: Number,
				default: () => 0
			}
		},
		data() {
			return {

			}
		},
		methods: {
			// 内容轮播图部分切换
			swiperChange(e) {
				let tabIndex = e.detail.current
				this.$emit('swiperChange', tabIndex)
				// this.tabIndex = e.detail.current
				// this.currentTabId = this.tabBars[this.tabIndex].id
			},
			// 上拉加载更多
			loadmore(index) {
				this.$emit('loadMore', index)
			}
		},
		components: {
			indexList,
			loadMore
		}
	}
</script>

<style scoped>
	.list-index {
		height: 100%;
	}

	.load-more {
		text-align: center;
		color: #AAAAAA;
		padding: 15upx;
	}
</style>
