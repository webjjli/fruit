<template>
	<div class="body_sty">
		<!-- 头部搜索款 -->
		<div class="header">
			<van-search left-icon="location-o" v-model="value3" placeholder="请输入搜索关键词" input-align="center" right-icon="scan" />
		</div>
		<!-- 轮播图 -->
		<div class="switch">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item class="my-swipe_1">1</van-swipe-item>
				<van-swipe-item class="my-swipe_2">2</van-swipe-item>
				<van-swipe-item class="my-swipe_3">3</van-swipe-item>
			</van-swipe>
		</div>

		<div class="theme">
			<!-- 主题 -->
			<div class="theme_1">
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">专题预售</div>
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">带来原生野果</div>
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">送去温暖的心</div>
			</div>
			<div class="theme_2">
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">邀请好友</div>
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">30元红包</div>
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">等你拿</div>
			</div>
			<div class="theme_3">
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">扶贫助困</div>
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">带来自然鲜果</div>
				<div class="theme_1_p" style="font-size: .3rem; color: white; text-align: center;">送去温暖爱心</div>
			</div>
		</div>

		<div class="fast">
			<p style="color: #FB7067; text-align: left;font-size: 0.35rem; float: left;margin-top: .2rem;">鲜果快报</p>
			<div class="fast_l">
				<p style="font-size: .3rem;margin-top: 0.09rem;">
					<van-notice-bar scrollable background="#E9E9E9" text="今年的砂糖桔,为何这般的清甜!" />
				</p>
			</div>
		</div>

		<div class="group">
			<div class="group_title">
				<van-cell-group>
					<van-cell sty title="拼团预售" value="产地直采.品质保证" />
				</van-cell-group>
			</div>

			<div class="group_con">
				<div class="group_con_img">
					<img src="../assets/images/pg.jpg">
				</div>
				<div class="group_con_text">
					<p style="font-size: 0.35rem;margin-top: .2rem;"><strong>甘肃静宁苹果*6 约两斤</strong></p>
					<p style="font-size: .3rem;text-align: left;margin-left: .2rem;margin-top: 0.15rem;">
						<font style="color: #ef1f22; font-size: 0.35rem;">￥30.0</font>/份
					</p>
					<div class="progress">
						<van-progress percentage="90" color="#FC241C" />
					</div>
					<div class="sale">
						<van-cell title="已售2600份" icon="clock-o" value="6天内发货" />
					</div>
				</div>
			</div>

		</div>

		<!-- 热卖优惠 -->
		<div class="discount">
			<div class="group_title">
				<van-cell-group>
					<van-cell sty title="热卖优惠" value="人气热销.大众喜欢" />
				</van-cell-group>
			</div>
			<div class="discount_con">
				<div class="discount_con_top">
					<div class="discount_con_top_1">
						<div class="discount_con_img">
							<img src="../assets/images/btc.jpg" style="width: 100%; height: 100%; border-radius: 50%;">
						</div>
						<div class="discount_con_title" style="font-size: .3rem;">
							<font style="font-size: .3rem;">广东四会砂糖桔...</font>
						</div>
						<div class="discount_con_price">
							<div class="discount_con_price_l" style="font-size: .3rem;">
								<font style="color: red;">￥26.0</font>
								<font>/份</font>
							</div>
							<div class="discount_con_price_r">
								<img src="../assets/images/+.png" />
							</div>
						</div>
					</div>

					<div class="discount_con_top_1">
						<div class="discount_con_img">
							<img src="../assets/images/clz.jpg" style="width: 100%; height: 100%; border-radius: 50%;">
						</div>
						<div class="discount_con_title" style="font-size: .3rem;">
							<font style="font-size: .3rem;">智利JJ级车厘子...</font>
						</div>
						<div class="discount_con_price">
							<div class="discount_con_price_l" style="font-size: .3rem;">
								<font style="color: red;">￥69.0</font>
								<font>/份</font>
							</div>
							<div class="discount_con_price_r">
								<img src="../assets/images/+.png" />
							</div>
						</div>
					</div>


					<div class="discount_con_top_1">
						<div class="discount_con_img">
							<img src="../assets/images/btc.jpg" style="width: 100%; height: 100%; border-radius: 50%;">
						</div>
						<div class="discount_con_title" style="font-size: .3rem;">
							<font style="font-size: .3rem;">海南陵水圣女果...</font>
						</div>
						<div class="discount_con_price">
							<div class="discount_con_price_l" style="font-size: .3rem;">
								<font style="color: red;">￥26.0</font>
								<font>/份</font>
							</div>
							<div class="discount_con_price_r">
								<img src="../assets/images/+.png" />
							</div>
						</div>
					</div>
				</div>

				<div class="discount_con_footer">
					<div class="discount_con_top_1">
						<div class="discount_con_img">
							<img src="../assets/images/tiangua.jpg" style="width: 100%; height: 100%; border-radius: 50%;">
						</div>
						<div class="discount_con_title" style="font-size: .3rem;">
							<font style="font-size: .3rem;">海南玉菇甜瓜*2...</font>
						</div>
						<div class="discount_con_price">
							<div class="discount_con_price_l" style="font-size: .3rem;">
								<font style="color: red;">￥39.0</font>
								<font>/份</font>
							</div>
							<div class="discount_con_price_r">
								<img src="../assets/images/+.png" />
							</div>
						</div>
					</div>

					<div class="discount_con_top_1">
						<div class="discount_con_img">
							<img src="../assets/images/btc.jpg" style="width: 100%; height: 100%; border-radius: 50%;">
						</div>
						<div class="discount_con_title" style="font-size: .3rem;">
							<font style="font-size: .3rem;">湖南麻阳冰糖橙...</font>
						</div>
						<div class="discount_con_price">
							<div class="discount_con_price_l" style="font-size: .3rem;">
								<font style="color: red;">￥12.5</font>
								<font>/份</font>
							</div>
							<div class="discount_con_price_r">
								<img src="../assets/images/+.png" />
							</div>
						</div>
					</div>


					<div class="discount_con_top_1">
						<div class="discount_con_img">
							<img src="../assets/images/lanmei.jpg" style="width: 100%; height: 100%; border-radius: 50%;">
						</div>
						<div class="discount_con_title" style="font-size: .3rem;">
							<font style="font-size: .3rem;">智利蓝莓*1盒...</font>
						</div>
						<div class="discount_con_price">
							<div class="discount_con_price_l" style="font-size: .3rem;">
								<font style="color: red;">￥59.0</font>
								<font>/份</font>
							</div>
							<div class="discount_con_price_r">
								<img src="../assets/images/+.png" />
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<!-- 时令新上 -->
		<div class="season">
			<div class="group_title">
				<van-cell-group>
					<van-cell sty title="时令新上" value="应季鲜果.优质果园" />
				</van-cell-group>
			</div>
			<div class="season_con">
				<div class="season_con_top">
					<van-card price="25.0/份" desc="果肉细腻,酸甜口感,果香沁人" title="广西百香果*5个 约500g" :thumb="require('../assets/images/bxg.jpg')">
						<template #tags>
							<van-tag plain type="danger">采摘日期：06.16</van-tag>
						</template>
						<template #footer>
							<van-icon name="add-o" />
						</template>
					</van-card>
				</div>
				<div class="season_con_top">
					<van-card price="25.0/份" desc="果肉细腻,酸甜口感,果香沁人" title="法国嘎啦苹果*6 约800g" :thumb="require('../assets/images/faguogala.jpg')">
						<template #tags>
							<van-tag plain type="danger">采摘日期：06.16</van-tag>
						</template>
						<template #footer>
							<van-icon name="add-o" />
						</template>
					</van-card>
				</div>
			</div>
		</div>

		<!-- 为您推荐 -->
		<div class="recommend">
			<div class="recommend_title">
				<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
					为您推荐
				</van-divider>
			</div>
			<div class="recommend_top">
				<div class="recommend_top_l">
					<div class="recommend_top_l_img">
						<img src="../assets/images/qiyg.jpg" width="100%" height="100%" />
					</div>
					<div class="recommend_top_l_title" style="font-size: .3rem;text-align: center;">佰瑞猕猴桃*原箱22个</div>
					<div class="recommend_top_l_dec" style="font-size: .2rem; text-align: center;">你们爱吃的徐香来了!酸甜...</div>
					<div class="recommend_top_l_price">
						<div class="recommend_top_l_price_l" style="font-size: .3rem;">
							<font style="color: red;">￥54.9</font><del style="color: gray;font-size: .2rem;">108元</del>
						</div>
						<div class="recommend_top_l_price_r">
							<img src="../assets/images/+.png" />
						</div>
					</div>
				</div>

				<div class="recommend_top_r">
					<div class="recommend_top_l_img">
						<img src="../assets/images/qiyg.jpg" width="100%" height="100%" />
					</div>
					<div class="recommend_top_l_title" style="font-size: .3rem;text-align: center;">佰瑞猕猴桃*原箱22个</div>
					<div class="recommend_top_l_dec" style="font-size: .2rem; text-align: center;">你们爱吃的徐香来了!酸甜...</div>
					<div class="recommend_top_l_price">
						<div class="recommend_top_l_price_l" style="font-size: .3rem;">
							<font style="color: red;">￥54.9</font><del style="color: gray;font-size: .2rem;">108元</del>
						</div>
						<div class="recommend_top_l_price_r">
							<img src="../assets/images/+.png" />
						</div>
					</div>
				</div>
			</div>

			<div class="recommend_footer">
				<div class="recommend_top_l">
					<div class="recommend_top_l_img">
						<img src="../assets/images/qiyg.jpg" width="100%" height="100%" />
					</div>
					<div class="recommend_top_l_title" style="font-size: .3rem;text-align: center;">佰瑞猕猴桃*原箱22个</div>
					<div class="recommend_top_l_dec" style="font-size: .2rem; text-align: center;">你们爱吃的徐香来了!酸甜...</div>
					<div class="recommend_top_l_price">
						<div class="recommend_top_l_price_l" style="font-size: .3rem;">
							<font style="color: red;">￥54.9</font><del style="color: gray;font-size: .2rem;">108元</del>
						</div>
						<div class="recommend_top_l_price_r">
							<img src="../assets/images/+.png" />
						</div>
					</div>
				</div>

				<div class="recommend_top_r">
					<div class="recommend_top_l_img">
						<img src="../assets/images/qiyg.jpg" width="100%" height="100%" />
					</div>
					<div class="recommend_top_l_title" style="font-size: .3rem;text-align: center;">佰瑞猕猴桃*原箱22个</div>
					<div class="recommend_top_l_dec" style="font-size: .2rem; text-align: center;">你们爱吃的徐香来了!酸甜...</div>
					<div class="recommend_top_l_price">
						<div class="recommend_top_l_price_l" style="font-size: .3rem;">
							<font style="color: red;">￥54.9</font><del style="color: gray;font-size: .2rem;">108元</del>
						</div>
						<div class="recommend_top_l_price_r">
							<img src="../assets/images/+.png" />
						</div>
					</div>
				</div>
			</div>
		</div>



		<!-- 底部 -->
		<div class="footer">
			<van-tabbar v-model="active" active-color="#F80404">
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
				active: 0,
				value3: "",
				value1: "",
			};
		},
	};
</script>

<style>
	.my-swipe_1 {
		width: 100%;
		height: 100%;
		background-image: url(../assets/images/1.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: 0;
	}

	.my-swipe_2 {
		width: 100%;
		height: 100%;
		background-image: url(../assets/images/2.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: 0;
	}

	.my-swipe_3 {
		width: 100%;
		height: 100%;
		background-image: url(../assets/images/3.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: 0;
	}

	.body_sty {
		background-color: #F5F2F2;
	}

	.header {
		height: 1rem;
	}

	.header .van-search {
		width: 100%;
		height: 100%;
	}

	.van-search .van-cell {
		height: 70px;
		line-height: 50px;
	}

	.van-icon-location-o::before {
		font-size: .4rem;
	}

	.van-icon-scan::before {
		font-size: .4rem;
	}

	/* lunbo */
	.switch {
		height: 350px;
		/* border: 1px solid saddlebrown; */
	}

	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 350px;
		text-align: center;
		background-color: #39a9ed;
	}

	.switch img {
		height: 350px;
	}


	.van-tabbar-item__text {
		font-size: 0.25rem;
	}

	.van-icon-wap-home-o::before {
		font-size: 0.5rem;
	}

	.van-icon-qr::before {
		font-size: 0.5rem;
	}

	.van-icon-shopping-cart-o::before {
		font-size: 0.5rem;
	}

	.van-icon-manager-o::before {
		font-size: 0.5rem;
	}

	.theme {
		height: 2.2rem;
		margin-top: 30px;
		background-color: white;
	}

	.theme_1 {
		width: 35%;
		height: 2rem;
		/* border: 1px solid darkblue; */
		float: left;
		background-color: #EA0000;
	}

	.theme_1_p {
		height: 0.6rem;
	}

	.theme_2 {
		width: 28%;
		height: 2rem;
		/* border: 1px solid darkblue; */
		float: left;
		margin-left: 4%;
		background-color: #FF9224;
	}

	.theme_3 {
		width: 28%;
		height: 2rem;
		/* border: 1px solid darkblue; */
		float: right;
		background-color: #FFED97;
	}

	.fast {
		height: .9rem;
		/* border: 1px solid darkblue; */
		background-color: white;
	}

	.fast_l {
		width: 5.5rem;
		height: 0.55rem;
		/* 	border: 1px saddlebrown solid; */
		float: left;
		background-color: #E9E9E9;
		border-radius: .5rem;
		margin-top: .1rem;
		margin-left: .2rem;
	}

	.group {
		height: 4rem;
		/* border: 1px solid darkblue; */
		margin-top: .2rem;
		display: block;
	}

	.group_title {
		height: .8rem;
		/* border: 1px solid red; */

	}

	.group_title .van-cell-group {
		width: 100%;
		height: .9rem;
	}

	.van-cell__value {
		font-size: .3rem;
		line-height: .6rem;
	}

	.van-cell__title {
		text-align: left;
		line-height: .6rem;
	}

	.group_con {
		height: 3rem;
		/* border: 2px solid gainsboro; */
		background-color: white;
	}

	.group_con_img {
		width: 2.5rem;
		height: 2.5rem;
		margin: .2rem;
		float: left;
	}

	.group_con_img img {
		width: 2rem;
		height: 2rem;
		margin-top: .2rem;
		border-radius: 50%;
	}

	.group_con_text {
		width: 4.2rem;
		height: 2.8rem;
		float: left;
		margin-top: .1rem;
	}

	.progress {
		height: .5rem;
		width: 95%;
		margin: .2rem
	}

	.progress .van-progress {
		width: 100%;
		height: .1rem;
	}

	.sale {
		height: .6rem;
		margin-top: -.5rem;
	}

	.van-icon-clock-o::before {
		font-size: .2rem;
		margin-top: 0.15rem;
	}

	.discount {
		height: 7.2rem;
		background-color: white;
	}

	.discount_con {
		height: 6.3rem;
	}

	.discount_con_top {
		height: 3rem;
		border: 1px solid gainsboro;
	}

	.discount_con_top_1 {
		height: 2.8rem;
		width: 2.43rem;
		float: left;
		border: 1px solid gainsboro;
	}

	.discount_con_img {
		width: 2rem;
		height: 1.5rem;
		margin: 0 auto;
	}

	.discount_con_title {
		height: .6rem;
		margin: 0 auto;
	}

	.discount_con_price {
		height: .6rem;
	}

	.discount_con_price_l {
		float: left;
		height: .6rem;
		width: 1.4rem;
	}

	.discount_con_price_r {
		float: right;
		height: .6rem;
		width: .7rem;
	}

	.discount_con_price_r img {
		margin-bottom: 2rem;
		height: .4rem;
		width: .4rem;
	}

	.discount_con_footer {
		height: 3rem;
	}


	.season {
		height: 5.6rem;
		background-color: white;
		margin-top: 0.2rem;
	}

	.season_con {
		height: 7rem;
	}

	.season_con_top {
		height: 2.2rem;
	}

	.season_con_top .van-card__title {
		max-height: 0.6rem;
		line-height: 0.5rem;
		font-size: 0.3rem;
	}

	.season_con_top .van-card__thumb {
		width: 1.5rem;
		height: 1.5rem;
	}

	.season_con_top .van-card__desc {
		font-size: 0.25rem;
		min-height: .6rem;
		line-height: .3rem;
	}

	.van-icon-add-o::before {
		font-size: .4rem;
		color: red;
	}

	.season_con_top .van-card__thumb img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.season_con_top .van-tag--danger.van-tag--plain {
		color: #000000;
	}

	.recommend {
		height: 9rem;
	}

	.recommend_title {
		height: 1rem;
	}

	.recommend_top {
		height: 4rem;
		background-color: white;
	}

	.recommend_footer {
		height: 4rem;
		background-color: white;
	}

	.recommend_top_l {
		width: 50%;
		height: 4rem;
		/* border: 1px solid firebrick; */
		float: left;
	}

	.recommend_top_r {
		width: 48%;
		height: 4rem;
		float: left;
	}

	.recommend_top_l_img {
		width: 3rem;
		height: 2rem;
		margin: 0 auto;
	}

	.recommend_top_l_img img {
		border-radius: 100%;
	}

	.recommend_top_l_title {
		height: .4rem;
	}

	.recommend_top_l_dec {
		height: .4rem;
	}

	.recommend_top_l_price {
		height: .6rem;
	}

	.recommend_top_l_price_l {
		height: .6rem;
		width: 1.8rem;
		float: left;
		margin-left: .2rem;
	}

	.recommend_top_l_price_r {
		height: .6rem;
		width: .6rem;
		float: right;
	}

	.recommend_top_l_price_r img {
		margin-bottom: 2rem;
		height: 0.45rem;
		width: 0.45rem;
	}

	/* 底部 */
	/* .footer .van-tabbar {
				height: 150px;
				position: fixed;
				border: 1px solid darkblue;
			} */
	.footer {
		height: 1.5rem;
		background-color: white;
	}

	.footer .van-tabbar {
		height: 1.5rem;
	}
</style>
