<template>
	<swiper class="banner" indicator-dots circular :autoplay="false">
		<swiper-item v-for="item in pics" :key= "item.id">
			<image @tap="test(item.pic)"  :src="item.pic" ></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				title: 'nihao',
				pics: [
					{
						id:"1",
						pic:"http://xsjoss.oss-cn-beijing.aliyuncs.com/xsj/banke/2022/08/18/fc16f1ad-42e7-4b16-8a4c-700ce431271d.jpg"
					},
					{
						id:"2",
						pic:"http://xsjoss.oss-cn-beijing.aliyuncs.com/xsj/banke/2022/08/18/fc16f1ad-42e7-4b16-8a4c-700ce431271d.jpg"
					}
				]
			}
		},
		onLoad() {
			//@tap="onPreviewImage(item.pic)" 
		},
		methods: {
			test(pic) {
				uni.previewImage({
					urls: this.pics.map(v=>v.pic),
					current: pic
				})
		   }
		}
	}
</script>

<style>
	.banner,
	.banner image{
		width: 750rpx;
	}
</style>
