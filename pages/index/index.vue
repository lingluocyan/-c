<template>
	<view>
		<!-- 顶部tab选项栏 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTab="tabTab" :currentTabId="currentTabId"></swiper-tab-head>
		<!-- 内容部分 -->
		<swiper-tab-body :newList="newList" @loadMore="loadMore" @swiperChange="swiperChange" :swiperHeight="swiperHeight"
		 :tabIndex="tabIndex"></swiper-tab-body>
	</view>
</template>

<script>
	import swiperTabHead from '../../components/index/swiper-tab-head.vue'
	import swiperTabBody from '../../components/index/swiper-tab-body.vue'

	export default {
		data() {
			return {
				showScrollBar: false,
				swiperHeight: 0,
				tabIndex: 0,
				currentTabId: '',
				tabBars: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}, {
					name: '军事',
					id: 'junshi'
				}, {
					name: '历史',
					id: 'lishi'
				}, {
					name: '本地',
					id: 'bendi'
				}],
				list: [{
					userpic: "../../static/demo/userpic/12.jpg",
					username: "昵称",
					isfollow: false,
					title: '我是标题',
					type: "img", // img:图文，video:视频
					titlepic: "../../static/demo/datapic/11.jpg",
					playnum: "20W", // 播放次数
					long: "2:57", // 视频时间
					infonum: {
						index: 2, // 0:还没有操作 1:顶 2:踩
						dingnum: 11,
						cainum: 11,
						commentnum: 10,
						sharenum: 10
					},
				}, {
					userpic: "../../static/demo/userpic/12.jpg",
					username: "昵称",
					isfollow: true,
					title: '我是标题',
					type: "img", // img:图文，video:视频
					titlepic: "../../static/demo/datapic/11.jpg",
					playnum: "20W", // 播放次数
					long: "2:57", // 视频时间
					infonum: {
						index: 0, // 0:还没有操作 1:顶 2:踩
						dingnum: 11,
						cainum: 11,
						commentnum: 10,
						sharenum: 10
					},
				}],
				newList: [{
					loadText: "上拉加载更多",
					list: [{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isfollow: false,
						title: '我是标题',
						type: "img", // img:图文，video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						playnum: "20W", // 播放次数
						long: "2:57", // 视频时间
						infonum: {
							index: 2, // 0:还没有操作 1:顶 2:踩
							dingnum: 11,
							cainum: 11,
							commentnum: 10,
							sharenum: 10
						},
					}, {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isfollow: false,
						title: '我是标题',
						type: "img", // img:图文，video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						playnum: "20W", // 播放次数
						long: "2:57", // 视频时间
						infonum: {
							index: 2, // 0:还没有操作 1:顶 2:踩
							dingnum: 11,
							cainum: 11,
							commentnum: 10,
							sharenum: 10
						},
					}, {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isfollow: true,
						title: '我是标题',
						type: "img", // img:图文，video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						playnum: "20W", // 播放次数
						long: "2:57", // 视频时间
						infonum: {
							index: 0, // 0:还没有操作 1:顶 2:踩
							dingnum: 11,
							cainum: 11,
							commentnum: 10,
							sharenum: 10
						},
					}]
				}, {
					loadText: "上拉加载更多", 
					list: [{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isfollow: false,
						title: '我是标题',
						type: "img", // img:图文，video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						playnum: "20W", // 播放次数
						long: "2:57", // 视频时间
						infonum: {
							index: 2, // 0:还没有操作 1:顶 2:踩
							dingnum: 11,
							cainum: 11,
							commentnum: 10,
							sharenum: 10
						},
					}, {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isfollow: true,
						title: '我是标题',
						type: "img", // img:图文，video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						playnum: "20W", // 播放次数
						long: "2:57", // 视频时间
						infonum: {
							index: 0, // 0:还没有操作 1:顶 2:踩
							dingnum: 11,
							cainum: 11,
							commentnum: 10,
							sharenum: 10
						},
					}]
				}, {
					loadText: "上拉加载更多",
					list: []
				}, {
					loadText: "上拉加载更多",
					list: []
				}, {
					loadText: "上拉加载更多",
					list: []
				}, {
					loadText: "上拉加载更多",
					list: []
				}, {
					list: []
				}, {
					loadText: "上拉加载更多",
					list: []
				}, {
					loadText: "上拉加载更多",
					list: []
				}]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let windowHeight = res.windowHeight
					this.swiperHeight = windowHeight - uni.upx2px(100)
				}
			})
		},
		methods: {
			tabTab(index) {
				this.tabIndex = index
			},

			swiperChange(data) {
				this.tabIndex = data
				this.currentTabId = this.tabBars[data].id
				console.log(this.currentTabId, 'this.currentTabId')
				// this.tabIndex = e.detail.current
				// this.currentTabId = this.tabBars[this.tabIndex].id
			},
			loadMore(index) {
				if (this.newList[index].loadText != "上拉加载更多") {
					return
				}
				// 修改状态
				this.newList[index].loadText = "加载中"
				// 模拟获取数据
				setTimeout(() => {
					let obj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isfollow: false,
						title: '我是标题',
						type: "img", // img:图文，video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						playnum: "20W", // 播放次数
						long: "2:57", // 视频时间
						infonum: {
							index: 2, // 0:还没有操作 1:顶 2:踩
							dingnum: 11,
							cainum: 11,
							commentnum: 10,
							sharenum: 10
						},
					}
					this.newList[index].list.push(obj)
					this.newList[index].loadText = "上拉加载更多"
				}, 1000)
			}
		},
		components: {
			swiperTabBody,
			swiperTabHead
		}
	}
</script>

<style scoped>

</style>
