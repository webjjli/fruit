<template>
	<div class="body_sty">
		<div class="nav">
			<van-nav-bar title="购物车" left-text="返回" right-text="编辑" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		</div>
		<div class="activity">
			<van-row style="font-size: 0.3rem;">
				<van-col span="8" style="color: red; width: .8rem; height: .4rem; border: 1px solid red; line-height: .4rem;margin-top: 0.15rem;">满减</van-col>
				<van-col span="8" style="width: 2.8rem; height: .6rem; line-height: .7rem; color: #999999;">满39元，已减10元</van-col>
				<van-col span="8" style="width: 3rem; height: .6rem; margin-left: .5rem;line-height: .7rem; color: #999999;text-align: right;">查看活动></van-col>
			</van-row>
		</div>



		<div class="commodity">
			<div class="commodity_top">
				<div class="commodity_top_check">
					<van-checkbox v-model="checked" icon-size="26px" style="margin-top: 1rem;"></van-checkbox>
				</div>
				<div class="specifications">
					<van-card price="25.00/份" desc="规格:约600g" title="美国新奇士红心橙*6 约600g" :thumb="require('../assets/images/hxc.jpg')">
						<template #footer>
							<van-stepper v-model="value1" theme="round" button-size="22" disable-input />
						</template>
					</van-card>
				</div>
			</div>
			<div class="commodity_f">
				<div class="commodity_f_r" style="font-size: .3rem;">
					<font>小计：</font>
					<font style="color: red;">25.00</font>
				</div>
			</div>
		</div>

		<div class="commodity">
			<div class="commodity_top">
				<div class="commodity_top_check">
					<van-checkbox v-model="checked" icon-size="26px" style="margin-top: 1rem;"></van-checkbox>
				</div>
				<div class="specifications">
					<van-card price="25.00/份" desc="规格:约800g" title="法国嘎啦苹果*6 约800g" :thumb="require('../assets/images/faguogala.jpg')">
						<template #footer>
							<van-stepper v-model="value1" theme="round" button-size="22" disable-input />
						</template>
					</van-card>
				</div>
			</div>
			<div class="commodity_f">
				<div class="commodity_f_r" style="font-size: .3rem;">
					<font>小计：</font>
					<font style="color: red;">25.00</font>
				</div>
			</div>
		</div>

		<div class="commodity">
			<div class="commodity_top">
				<div class="commodity_top_check">
					<van-checkbox v-model="checked" icon-size="26px" style="margin-top: 1rem;"></van-checkbox>
				</div>
				<div class="specifications">
					<van-card price="25.00/份" desc="规格:约600g" title="美国新奇士红心橙*6 约600g" :thumb="require('../assets/images/hxc.jpg')">
						<template #footer>
							<van-stepper v-model="value1" theme="round" button-size="22" disable-input />
						</template>
					</van-card>
				</div>
			</div>
			<div class="commodity_f">
				<div class="commodity_f_r" style="font-size: .3rem;">
					<font>小计：</font>
					<font style="color: red;">25.00</font>
				</div>
			</div>
		</div>



		<div class="settlement">
			<van-submit-bar :price="2050" button-text="提交订单" @submit="onSubmit">
				<van-checkbox v-model="checked">全选</van-checkbox>
			</van-submit-bar>
		</div>


		<!-- 底部 -->
		<div class="footer">
			<van-tabbar v-model="active3" active-color="#F80404">
				<van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
				<van-tabbar-item icon="qr" to="/classification">分类</van-tabbar-item>
				<van-tabbar-item icon="shopping-cart-o" to="/shopping_cart">购物车</van-tabbar-item>
				<van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
			</van-tabbar>
		</div>

	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';

	export default {
		methods: {
			onClickLeft() {
				Toast('返回');
			},
			onClickRight() {
				Toast('编辑');
			},
		},
		data() {
			return {
				checked: "",
				value: "0",
				active3: 2,
				onSubmit: "",
				value1: "",
			};
		},
	};
</script>

<style>
	.nav {
		height: 1rem;
		/* border: 1px solid darkblue; */
	}

	.nav .van-nav-bar {
		height: 100%;
	}

	.activity {
		height: .7rem;
		/* border: 1px solid gainsboro; */
		background-color: #EEEEEE;
	}

	.commodity {
		height: 3rem;
		/* border: 1px solid darkblue; */
		background-color: white;
		margin-top: .2rem;
	}

	.commodity_top {
		height: 2.4rem;
		border: 1px gainsboro solid;
	}

	.commodity_top_check {
		height: 2rem;
		width: 1rem;
		/* border: 1px solid darkgoldenrod; */
		float: left;

	}

	.specifications {
		width: 6.2rem;
		height: 2.3rem;
		/* border: 1px solid firebrick; */
		float: left;
	}

	.specifications .van-card__title {
		max-height: 0.6rem;
		line-height: 0.5rem;
		font-size: 0.3rem;
	}

	.specifications .van-card__thumb {
		width: 1.5rem;
		height: 1.5rem;
	}

	.specifications .van-card__desc {
		font-size: 0.15rem;
		min-height: .6rem;
		line-height: .3rem;
	}


	.specifications .van-card__thumb img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.commodity_f {
		height: .5rem;
	}

	.commodity_f_r {
		width: 2.5rem;
		height: .5rem;
		/* border: 1px solid #006400; */
		float: right;
	}

	/* .settlement{
		width: 100%;
		height: 1rem;
		border: 1px solid firebrick;
		
	} */
	.settlement .van-submit-bar__bar {
		height: 1rem
	}

	.van-submit-bar__button {
		width: 2rem;
		min-width: 2rem;
	}

	.settlement .van-checkbox__icon {
		font-size: .4rem;
	}

	.settlement .van-submit-bar {
		height: 60px;
		position: fixed;
		bottom: 1.6rem;
		/* 	border: 2px solid gray; */
	}
</style>
