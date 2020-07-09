<template>
	<div class="body_sty">
		<router-link ro="/classification">
			<div class="fanhui">
				< </div> </router-link> <div class="details_img">
					<img src="../assets/images/details.jpg" />
			</div>

			<div class="details_con">
				<div class="details_con_title">
					<p style="font-size: .4rem;">广东四会砂糖桔 约2斤装</p>
				</div>
				<div class="details_con_dec">
					<p style="font-size: .3rem; color: gray;">比水果店性价比还高！味甜、易剥 还新鲜</p>
				</div>
				<div class="details_con_price">
					<van-cell title="￥26.0/份" value="仅剩500份" />
				</div>
				<div class="address">
					<van-cell title="送至  北京海淀区中关村" value="..." />
				</div>
				<div class="address_f">
					<p style="font-size: 0.25rem; color: gray;text-align: center;">现在下单 最快今天19:15前送达 支持自取</p>
				</div>
				<div class="details_con_radiio"></div>
			</div>

			<div class="fresh">
				<div class="fresh_title">
					<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
						鲜果采摘
					</van-divider>
				</div>
				<div class="fresh_dec">
					<div class="fresh_dec_1">
						<p style="font-size: .3rem;">场地：江南省南丰县</p>
					</div>
					<div class="fresh_dec_1">
						<p style="font-size: .3rem;">采摘日期：2018.01.26</p>
					</div>
					<div class="fresh_dec_1">
						<p style="font-size: .3rem;">天气状况：晴 16°C</p>
					</div>
					<div class="fresh_dec_1">
						<p style="font-size: .3rem;">运输方式：冷链保险运输</p>
					</div>
				</div>
				<div class="fresh_dec_radio">
					<img src="../assets/images/radio.png" />
				</div>
			</div>

			<div class="details_footer">
				<input type="button" value="加入购入车" />
			</div>
	</div>
</template>

<script>
</script>

<style>
	.details_img {
		height: 8rem;
		background-color: white;
	}

	.details_img img {
		width: 100%;
		height: 100%;
	}

	.details_con {
		height: 4rem;
		width: 100%;
		border: 1px solid gainsboro;
		border-radius: .5rem;
		background-color: white;
	}

	.details_con_title {
		height: .5rem;
		margin-top: .2em;
	}

	.details_con_dec {
		height: .4rem;
	}

	.details_con_price {
		height: .8rem;
		border-bottom: 1px solid gainsboro;
	}

	.details_con_price .van-cell__title {
		color: red;
	}

	.address {
		height: .6rem;
	}

	.address_f {
		height: .6rem;
		width: 90%;
		margin: 0 auto;
		border-radius: .5rem;
	}

	.fresh {
		height: 9.2rem;
	}

	.fresh_title {
		height: 1rem;
	}

	.fresh_dec {
		height: 3rem;
	}

	.fresh_dec_1 {
		height: .6rem;
		width: 90%;
		border: 1px solid gainsboro;
		margin: 0 auto;
	}

	.fresh_dec_radio {
		height: 4rem;
	}

	.fresh_dec_radio img {
		height: 100%;
		width: 100%;
	}

	.details_footer {
		width: 100%;
		height: 1rem;
		position: fixed;
		bottom: .2rem;
		background-color: white;
	}

	.details_footer input {
		height: 100%;
		width: 100%;
		border: none;
		border-radius: .5rem;
		background-color: red;
		color: white;
		font-size: .4rem;
	}
</style>
