<template>
	<div class="body_sty">
		<!-- 头部搜索款 -->
		<div class="header">
			<van-search left-icon="location-o" v-model="value" placeholder="请输入搜索关键词" input-align="center" right-icon="filter-o" />
		</div>
		<div>
			<van-tree-select height="10rem" :items="items" :main-active-index.sync="active">
				<template #content>
					<div v-if="active === 0" class="ddd">
						<router-link to="/details">
							<van-card price="34.0/份" desc="酸酸甜甜根本停不下来" title="海南陵水圣女果 2斤装" :thumb="require('../assets/images/pg.jpg')">
								<template #footer>
									<van-icon name="add-o" />
								</template>
							</van-card>
						</router-link>
						<van-card price="2.00" desc="蜜一样的滋味" title="黄金车厘子约500g" :thumb="require('../assets/images/clz.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="水分超多,清甜可口" title="江西脐橙*3 约500g" :thumb="require('../assets/images/duji.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="不亚于水蜜桃的高颜值冬桃" title="澳大利亚油桃*3约800g" :thumb="require('../assets/images/youtao.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="清脆爽口,水分超多" title="甘肃静宁苹果" :thumb="require('../assets/images/pg.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="好比冰糖的高甜度" title="湖南冰糖橙*6 约500g" :thumb="require('../assets/images/btc.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="真的有奶香味!" title="台湾牛奶蜜枣*6 约2斤" :thumb="require('../assets/images/mz.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>


					<div class="ddd" v-if="active === 1">
						<van-card price="2.00" desc="shjdjsg" title="台湾牛奶蜜枣*6 约2斤" :thumb="require('../assets/images/pg.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="水分超多,清甜可口" title="江西脐橙*3 约500g" :thumb="require('../assets/images/duji.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="好比冰糖的高甜度" title="湖南冰糖橙*6约500g" :thumb="require('../assets/images/btc.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>


					<div class="ddd" v-if="active === 2">
						<van-card price="2.00" desc="水分超多,清甜可口" title="江西脐橙*3 约500g" :thumb="require('../assets/images/duji.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="不亚于水蜜桃的高颜值冬桃" title="澳大利亚油桃*3约800g" :thumb="require('../assets/images/youtao.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>


					<div class="ddd" v-if="active === 3">
						<van-card price="2.00" desc="shjdjsg" title="台湾牛奶蜜枣*6 约2斤" :thumb="require('../assets/images/pg.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="蜜一样的滋味" title="黄金车厘子约500g" :thumb="require('../assets/images/clz.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="水分超多,清甜可口" title="江西脐橙*3 约500g" :thumb="require('../assets/images/duji.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="不亚于水蜜桃的高颜值冬桃" title="澳大利亚油桃*3约800g" :thumb="require('../assets/images/youtao.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>



					<div class="ddd" v-if="active === 4">
						<van-card price="2.00" desc="蜜一样的滋味" title="黄金车厘子约500g" :thumb="require('../assets/images/clz.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>


					<div class="ddd" v-if="active === 5">
						<van-card price="2.00" desc="水分超多,清甜可口" title="江西脐橙*3 约500g" :thumb="require('../assets/images/duji.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="好比冰糖的高甜度" title="湖南冰糖橙*6约500g" :thumb="require('../assets/images/btc.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>


					<div class="ddd" v-if="active === 6">
						<van-card price="2.00" desc="水分超多,质地柔软" title="北京奇异果*6 约2斤" :thumb="require('../assets/images/qiyg.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>



					<div class="ddd" v-if="active === 7">
						<van-card price="2.00" desc="柔嫩汁多、形美味甜" title="草莓*20 约2斤" :thumb="require('../assets/images/caomei.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="酸甜,有微香味" title="贵州都匀蓝莓2盒约2斤" :thumb="require('../assets/images/lanmei.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>

					</div>


					<div class="ddd" v-if="active === 8">
						<van-card price="2.00" desc="穗大粒饱,色泽鲜艳" title="青岛大泽山葡萄" :thumb="require('../assets/images/putao.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="果肉晶莹剔透,水分多" title="云南无籽红提" :thumb="require('../assets/images/tizi.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>

					<div class="ddd" v-if="active === 9">
						<van-card price="2.00" desc="不亚于水蜜桃的高颜值冬桃" title="澳大利亚油桃*3约800g" :thumb="require('../assets/images/youtao.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>


					<div class="ddd" v-if="active === 10">
						<van-card price="2.00" desc="清脆爽口,水分超多" title="甘肃静宁苹果" :thumb="require('../assets/images/pg.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="砀山酥梨,肉质细腻口感好" title="砀山酥梨" :thumb="require('../assets/images/li.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>


					<div class="ddd" v-if="active === 11">
						<van-card price="2.00" desc="口感甘甜爽口" title="麒麟西瓜" :thumb="require('../assets/images/xigua.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>


					<div class="ddd" v-if="active === 12">
						<van-card price="2.00" desc="芒果味道浓郁,酸甜可口" title="良品铺子芒果干" :thumb="require('../assets/images/guogan.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="2.00" desc="家居必备小零食" title="零食" :thumb="require('../assets/images/lingshi.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>



				</template>
			</van-tree-select>
		</div>










		<!-- 底部 -->
		<div class="footer">
			<van-tabbar v-model="active4" active-color="#F80404">
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
				active4: 1,
				active: 0,
				value: "",
				value1: "",
				activeKey: 0,
				items: [{
					text: '今日优惠'
				}, {
					text: '进口鲜果'
				}, {
					text: '时令鲜果'
				}, {
					text: '今日鲜果'
				}, {
					text: '车厘子'
				}, {
					text: '柑橘橙柚'
				}, {
					text: '奇异果/弥...'
				}, {
					text: '草莓/蓝莓'
				}, {
					text: '葡萄/提子'
				}, {
					text: '桃杏李'
				}, {
					text: '苹果/梨'
				}, {
					text: '瓜类'
				}, {
					text: '果干/零食'
				}, ],
			};
		},
	};
</script>

<style>
	.van-icon-filter-o::before {
		font-size: .4rem;
	}

	.aside {
		float: left;
	}

	.van-sidebar-item {
		height: 0.76rem;
	}

	.van-sidebar-item__text {
		font-size: .3rem;
		line-height: .5rem;
	}

	.aside_right {
		width: 73%;
		height: 2rem;
		float: left;
		border: 2px solid gainsboro;
	}

	.aside_right_l {
		width: 1.5rem;
		height: 1.5rem;
		margin-top: .2rem;
		float: left;
	}

	.aside_right_l img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.aside_right_title {
		width: 3.8rem;
		height: 1.8rem;
		float: left;
	}

	.aside_title_1 {
		font-size: .3rem;
		line-height: .6rem;
	}

	.aside_title_2 {
		font-size: 0.25rem;
	}

	.aside_price {
		font-size: 0.28rem;
		margin-top: .53rem;
		margin-left: -2rem;
	}

	.aside_right_jia {
		width: 50px;
		height: 50px;
		float: right;
		margin-top: -.9rem;
		margin-right: .3rem;
	}

	.aside_right_jia img {
		width: 100%;
		height: 100%;
	}

	.van-card {
		height: 2rem;
	}

	.ddd .van-card__title {
		max-height: 0.6rem;
		line-height: 0.5rem;
		font-size: 0.3rem;
	}

	.ddd .van-card__thumb {
		width: 1.5rem;
		height: 1.5rem;
	}

	.ddd .van-card__desc {
		font-size: 0.15rem;
		min-height: .6rem;
		line-height: .3rem;
	}

	.van-icon-add-o::before {
		font-size: .4rem;
		color: red;
	}

	.ddd .van-card__thumb img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	/* .van-card__title{
		font-size: .4rem;
		margin-top: .3rem;
	}
	.van-multi-ellipsis--l2{
		
	} */
</style>
