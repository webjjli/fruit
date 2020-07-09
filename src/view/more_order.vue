<template>
	<div class="body_sty">
		<div class="more_order">
			<router-link to="/my">
				<van-nav-bar title="全部订单" left-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
			</router-link>
		</div>

		<div class="more_nav">
			<van-tabs v-model="active5" swipe-threshold="5">
				<van-tab title="全部">
					<!-- 内容一 -->
					<div class="more_con">
						<div class="more_con_title">
							<van-cell-group>
								<van-cell title="准时达:约12:35送达" value="配送中>" />
							</van-cell-group>
						</div>
						<div class="more_con_conter">
							<van-card num="1" price="25.00" desc="规格:800g" title="法国嘎啦苹果 约800g" :thumb="require('../assets/images/faguogala.jpg')" />
						</div>
						<div class="more_con_conter">
							<van-card num="1" price="15.00" desc="好比冰糖的高甜度" title="湖南麻阳冰糖橙*6 约500g" :thumb="require('../assets/images/btc.jpg')" />
						</div>
						<div class="more_con_conter">
							<van-card num="1" price="22.00" desc="水分超多,清甜可口" title="江西脐橙*3 约500g" :thumb="require('../assets/images/duji.jpg')" />
						</div>
						<div class="total">
							<div class="total_text" style="font-size: 0.25rem;">
								<font style="padding-right: .2rem;">共3件商品</font>
								<font style="font-size: .3rem;"><strong>合计：￥62.00</strong></font>
							</div>
						</div>
						<div class="confirm">
							<div class="confirm_but">
								<input type="button" value="再来一单" style="float: left;" />
								<input type="button" value="确认送达" style="float: left;" />
							</div>
						</div>


						<!-- 内容二 -->
						<div class="more_con_2">
							<div class="more_con_title">
								<van-cell-group>
									<van-cell title="次日达:约明日18:10送达" value="自提配送中>" />
								</van-cell-group>
							</div>
							<div class="more_con_conter">
								<van-card num="1" price="25.00" desc="规格:800g" title="法国嘎啦苹果 约800g" :thumb="require('../assets/images/faguogala.jpg')" />
							</div>
							<div class="total">
								<div class="total_text" style="font-size: 0.25rem;">
									<font style="padding-right: .2rem;">共3件商品</font>
									<font style="font-size: .3rem;"><strong>合计：￥62.00</strong></font>
								</div>
							</div>
							<div class="confirm">
								<div class="confirm_but">
									<input type="button" value="再来一单" style="float: left;" />
									<input type="button" value="确认送达" style="float: left;" />
								</div>
							</div>
						</div>

						<!-- 内容三 -->
						<div class="more_con_2">
							<div class="more_con_title">
								<van-cell-group>
									<van-cell title="2017-12-26 12:42" value="订单已完成>" />
								</van-cell-group>
							</div>
							<div class="more_con_conter">
								<van-card num="1" price="25.00" desc="规格:800g" title="法国嘎啦苹果 约800g" :thumb="require('../assets/images/faguogala.jpg')" />
							</div>
							<div class="total">
								<div class="total_text" style="font-size: 0.25rem;">
									<font style="padding-right: .2rem;">共3件商品</font>
									<font style="font-size: .3rem;"><strong>合计：￥62.00</strong></font>
								</div>
							</div>
							<div class="confirm">
								<div class="confirm_but">
									<input type="button" value="评价" style="float: left;" />
									<input type="button" value="确认送达" style="float: left;" />
								</div>
							</div>
						</div>
					</div>



				</van-tab>
				<van-tab title="待支付">内容 2</van-tab>
				<van-tab title="待配送">内容 3</van-tab>
				<van-tab title="配送中">内容 4</van-tab>
				<van-tab title="待评价">内容 4</van-tab>
			</van-tabs>
		</div>

		<footer class="footer_text"></footer>
	</div>
</template>

<script>
	export default {
		methods: {
			onClickLeft() {
				Toast('<');
			},
		},
		data() {
			return {
				active5: 0,
				onClickLeft: "",
				onClickRight: "",
				value: "",
			};
		},
	};
</script>

<style>
	.more_order {
		height: 1rem;
		background-color: white;
	}

	.more_order .van-nav-bar {
		height: 1rem;
	}

	.van-nav-bar__title {
		font-size: .3rem;
	}

	.more_nav {
		height: .8rem;
	}

	.more_nav .van-tabs {
		height: 100%;
	}

	.more_nav .van-tabs--line .van-tabs__wrap {
		height: 1rem;
	}

	.van-tab__text--ellipsis {
		font-size: .3rem;
	}

	.more_con {
		height: 8.5rem;
		width: 90%;
		margin: 0 auto;
		margin-top: .2rem;
		border: 1px solid gainsboro;
		border-radius: .3rem;
	}

	.more_con_title {
		height: .8rem;
	}

	.more_con_conter {
		height: 2rem;
		border: 1px solid gainsboro;
	}

	.more_con_conter .van-card__title {
		max-height: 0.6rem;
		line-height: 0.5rem;
		font-size: 0.3rem;
	}

	.more_con_conter .van-card__thumb {
		width: 1.5rem;
		height: 1.5rem;
	}

	.more_con_conter .van-card__desc {
		font-size: 0.15rem;
		min-height: .6rem;
		line-height: .3rem;
	}


	.more_con_conter .van-card__thumb img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.van-card__num {
		font-size: .3rem;
	}

	.total {
		height: .7rem;
		/* border: 1px solid firebrick; */
	}

	.total_text {
		height: .5rem;
		width: 3.5rem;
		/* border: 1px solid darkblue; */
		float: right;
	}

	.confirm {
		height: .6rem;
	}

	.confirm_but {
		width: 4rem;
		height: .6rem;
		/* border: 1px solid darkmagenta; */
		float: right;
	}

	.confirm_but input {
		width: 2rem;
		height: .5rem;
		background-color: gainsboro;
		font-size: .3rem;
		border: none;
		border-radius: .5rem;
	}

	.more_con_2 {
		height: 4.3rem;
		border: 1px solid gainsboro;
		margin-top: .8rem;
		border-radius: .3rem;
	}
</style>
