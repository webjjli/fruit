<template>
	<div class="body_sty">
		<div class="hea_back">

		</div>
		<div class="my_conter">
			<div class="my_top">
				<div class="my_touxiang">
					<img src="../assets/images/toux.jpg" />
				</div>
				<div class="my_name">
					<span>甜甜是酷盖</span>
				</div>
				<div class="my_hea_right">
					<img src="../assets/images/ka.png" />
				</div>
			</div>

			<div class="my_yue">
				<van-row style="font-size: .3rem;line-height: 30px;">
					<van-col span="8" align="center">200</van-col>
					<van-col span="8" align="center">8</van-col>
					<van-col span="8" align="center">2600</van-col>
				</van-row>
				<van-row style="font-size: .3rem;">
					<van-col span="8" align="center">账户余额</van-col>
					<van-col span="8" align="center">优惠券</van-col>
					<van-col span="8" align="center">账户积分</van-col>
				</van-row>
			</div>

			<div class="pay">
				<van-tabbar v-model="active1" :fixed="false" style="position: fixed;top: 3.8rem;" active-color="#000000"
				 inactive-color="#000">
					<van-tabbar-item icon="coupon">待支付</van-tabbar-item>
					<van-tabbar-item icon="card">待配送</van-tabbar-item>
					<van-tabbar-item icon="award" to="/distribution">配送中</van-tabbar-item>
					<van-tabbar-item icon="comment">待评价</van-tabbar-item>
					<van-tabbar-item icon="column" to="/more_order">全部订单</van-tabbar-item>
				</van-tabbar>
			</div>
			<!-- 收藏/福利/会员中心 -->
			<div class="welfare">
				<van-cell title="我的收藏" icon="like" is-link />
				<van-cell title="优惠福利" icon="point-gift" is-link />
				<van-cell title="会员中心" icon="gem" is-link />
			</div>
			<!-- 地址/设置/门店/客服 -->
			<div class="set_up">
				<van-cell title="地址管理" icon="map-marked" is-link />
				<van-cell title="门店/自提点查询" icon="shop" is-link />
				<van-cell title="客服帮助" icon="service" is-link />
				<van-cell title="设置" icon="setting" is-link />
			</div>

		</div>
		<!-- 底部 -->
		<div class="footer">
			<van-tabbar v-model="active2" active-color="#F80404">
				<van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
				<van-tabbar-item icon="qr" to="/classification">分类</van-tabbar-item>
				<van-tabbar-item icon="shopping-cart-o" to="/shopping_cart">购物车</van-tabbar-item>
				<van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active2: 3,
				active1: false,
				value: ""
			};
		},
	};
</script>

<style>
	.hea_back {
		height: 220px;
		background-color: #000000;
	}

	.my_conter {
		width: 97%;
		height: 10rem;
		background-color: white;
		/* border: 1px solid saddlebrown; */
		margin: 0 auto;
		position: absolute;
		top: 1.3rem;
		left: 10px;
	}

	.my_top {
		width: 100%;
		height: 135px;
		/* background-color: darkblue; */
	}

	.my_touxiang {
		width: 130px;
		height: 130px;
		border: 1px solid gainsboro;
		float: left;
	}

	.my_touxiang img {
		width: 100%;
		height: 100%;
	}

	.my_name span {
		font-size: .4rem;
		margin-left: -3.5rem;
	}

	.my_hea_right {
		width: 100px;
		height: 100px;
		float: right;
		margin-right: 10px;
		position: absolute;
		top: -.1rem;
		/* border: 1px solid gainsboro; */
		right: 10px;
	}

	.my_hea_right img {
		width: 50px;
		height: 50px;
	}

	.my_yue {
		height: 90px;
		border: 1px solid gainsboro;
		margin-top: 0.13rem;
		line-height: 3px;
	}

	.pay .van-tabbar {
		width: 97%;
		height: 120px;
		border: 1px solid gainsboro;
	}

	.van-icon-coupon::before {
		font-size: 0.45rem;
		color: red;
	}

	.van-icon-card::before {
		font-size: 0.45rem;
		color: red;
	}

	.van-icon-award::before {
		font-size: 0.45rem;
		color: red;
	}

	.van-icon-comment::before {
		font-size: 0.45rem;
		color: red;
	}

	.van-icon-column::before {
		font-size: 0.45rem;
		color: red;
	}

	.van-tabbar-item__text {
		font-size: 0.29rem;
	}

	/* .van-icon::before {
	font-size: .4rem;
		color: #FF2D2D;
	}*/
	.welfare {
		position: fixed;
		top: 5.2rem;
		height: 2.6rem;
		/* border: 1px solid aqua; */
		width: 97%;
	}

	.welfare .van-cell {
		width: 100%;
		height: 80px;
		border: 1px solid gainsboro;
		text-align: left;
		line-height: 50px;
	}

	.van-cell__title {
		font-size: .3rem;
	}

	.van-icon-location-o::before {
		line-height: 45px;
	}

	.set_up {
		position: fixed;
		bottom: 2.5rem;
		height: 3rem;
		/* border: 1px solid aqua; */
		width: 97%;
	}

	.set_up .van-cell {
		width: 100%;
		height: 80px;
		border: 1px solid gainsboro;
		text-align: left;
		line-height: 50px;
	}

	.van-icon-like::before {
		font-size: 0.35rem;
		line-height: 55px;
		color: red;
	}

	.van-icon-point-gift::before {
		font-size: 0.35rem;
		line-height: 55px;
		color: #FE984D;
	}

	.van-icon-gem::before {
		font-size: 0.35rem;
		line-height: 55px;
		color: #FEC54E;
	}

	.van-icon-map-marked::before {
		font-size: 0.35rem;
		line-height: 55px;
		color: #3EA1FE;
	}

	.van-icon-shop::before {
		font-size: 0.35rem;
		line-height: 55px;
		color: #3EA1FE;
	}

	.van-icon-service::before {
		font-size: 0.35rem;
		line-height: 55px;
		color: #3EA1FE;
	}

	.van-icon-setting::before {
		font-size: 0.35rem;
		line-height: 55px;
		color: #3EA1FE;
	}
</style>
