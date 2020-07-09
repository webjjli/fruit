<template>
	<div class="body_sty">

		<div class="sure_nav">
			<router-link to="/index">
				<van-nav-bar title="确认订单" left-text="返回" left-arrow @click-left="onClickLeft" />
			</router-link>
		</div>

		<div class="delivery_method">
			<div class="delivery_method_1">
				<van-cell-group>
					<van-cell title="送货方式" value="配送 自提" />
				</van-cell-group>
			</div>
			<div class="delivery_method_2">
				<van-cell title="北京是海淀区中关村SOHO大厦16层1688室  李(先生) 152****4574" icon="location-o" />
			</div>
			<div class="delivery_method_1">
				<van-cell-group>
					<van-cell title="准时达:约12:32送达" value="[可选送达时段]" />
				</van-cell-group>
			</div>
		</div>

		<div class="delivery_con">
			<div class="delivery_con_img">
				<div class="delivery_con_img_1"></div>
			</div>
			<div class="delivery_method_1">
				<van-cell title="商品总额" value="￥131.4" />
			</div>
			<div class="delivery_method_1">
				<van-cell title="配送费(满39元免配送费)" value="[可选送达时段]" />
			</div>
			<div class="delivery_method_1">
				<van-cell title="优惠" value="￥0" />
			</div>
			<div class="delivery_method_1">
				<van-cell title="" value="￥-40" />
			</div>
		</div>

		<div class="delivery_invoice">
			<van-cell title="发票" value="不开发票>" />
		</div>

		<div class="details_footer">
			<input type="button" value="去支付" />
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			onClickLeft() {
				this.$Toast('返回');
			},
		},
	};
</script>

<style>
	.sure_nav {
		height: 1rem;
	}

	.sure_nav .van-nav-bar {
		height: 1rem;
	}

	.delivery_method {
		height: 4rem;
		margin-top: .2rem;
		background-color: white;
	}

	.delivery_method_1 {
		height: 1rem;
		border: 1px solid gainsboro;
	}

	.delivery_method_2 {
		height: 1.5rem;
	}

	.delivery_con {
		height: 7rem;
	}

	.delivery_con_img {
		height: 2.5rem;
		border: 1px solid lawngreen;
	}

	.delivery_invoice {
		height: 2rem;
		border: 1px solid gainsboro;
		margin: .2rem;
	}
</style>
