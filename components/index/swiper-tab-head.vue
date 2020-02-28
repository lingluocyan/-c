<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x :show-scrollbar="false" :scroll-into-view="currentTabId" class="uni-swiper-tab">
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view :id="tab.id" class="swiper-tab-list" @tap="tabTab(index)" :class="{'active':tabIndex === index}">
					{{tab.name}}
					<view class="swiper-tab-line" v-show="{'active':tabIndex === index}">
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: {
				type: Array,
				default: () => []
			},
			tabIndex: {
				type: Number,
				default: () => 0
			},
			currentTabId: {
				type: String,
				default: () => ''
			}
		},
		data() {
			return {

			}
		},
		methods: {
			tabTab(index) {
				this.$emit('tabTab', index)
			}
		}
	}
</script>

<style scoped>
	.swiper-tab-list {
		color: #969696;
		font-weight: bold;
	}

	.active {
		color: #343434;
	}

	.active .swiper-tab-line {
		border-bottom: 6upx solid #FEDE33;
		width: 60%;
		margin: auto;
		border-radius: 6upx;
	}

	.swiper-box {
		/* height: 1400upx; */
	}
</style>
