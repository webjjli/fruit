<template>
	<div class="body_sty">

		<div class="order_title">
			<router-link to="/my">
				<div class="fanhui" style="font-size: .6rem;">
					< </div> </router-link> <div class="order_title_con">
						<div class="order_title_con_1" style="font-size: .4rem; color: white; text-align: center;">
							订单已完成>
						</div>
						<div class="order_title_con_1" style="font-size: .3rem;color: white; text-align: center;">
							感谢你的支持和信任，期待您的下次光临
						</div>
				</div>
		</div>

		<div class="order_con">
			<van-card num="1" price="12.5" desc="规格:500g/份" title="湖南麻阳冰糖橙*6 约500g" :thumb="require('../assets/images/btc.jpg')" />
			<van-card num="1" price="25.00" desc="规格:1kg/份" title="台湾牛奶蜜枣*6 约2斤" :thumb="require('../assets/images/mz.jpg')" />
			<van-card num="1" price="80.00" desc="规格:500/份" title="智利JJ黄金车厘子" :thumb="require('../assets/images/clz.jpg')" />
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="配送费" value="￥0" />
				</van-cell-group>
			</div>
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="优惠" value="￥-10" />
				</van-cell-group>
			</div>
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="" value="总计:￥132.50" />
				</van-cell-group>
			</div>
		</div>



		<div class="order_con_2">
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="配送信息" value="" />
				</van-cell-group>
			</div>
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="送达时间" value="准时达 12:18" />
				</van-cell-group>
			</div>
			<div class="delivery_fee_2">
				<van-cell-group>
					<van-cell title="收货地址" value="海淀北二街8号中关村SOHO大厦26号" />
				</van-cell-group>
			</div>
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="配送方式" value="准时达" />
				</van-cell-group>
			</div>
		</div>


		<div class="order_con_2">
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="订单信息" value="" />
				</van-cell-group>
			</div>
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="订单号" value="154547982315678" />
				</van-cell-group>
			</div>
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="下单时间" value="2018-01-26 10:21" />
				</van-cell-group>
			</div>
			<div class="delivery_fee">
				<van-cell-group>
					<van-cell title="支付方式" value="快捷支付" />
				</van-cell-group>
			</div>
		</div>

	</div>
</template>

<script>
</script>

<style>
	.order_title {
		height: 3rem;
		border: 1px solid gainsboro;
		background-color: #ED645A;
	}

	.fanhui {
		height: .5rem;
	}

	.order_title_con {
		width: 80%;
		height: 2rem;
		margin: .6rem;
	}

	.order_title_con_1 {
		height: 1rem;
	}

	.order_con {
		height: 9rem;
		width: 95%;
		margin: 0 auto;
		border: 1px solid gainsboro;
		background-color: white;
		margin-top: .2rem;
	}

	.delivery_fee {
		height: .8rem;
		border: 1px solid gainsboro;
	}

	.delivery_fee_2 {
		height: 1.2rem;
		border: 1px solid gainsboro;
	}

	.order_con_2 {
		height: 4rem;
		width: 95%;
		margin: 0 auto;
		background-color: white;
		margin-top: .2rem;
	}

	.order_con .van-card__title {
		max-height: 0.6rem;
		line-height: 0.5rem;
		font-size: 0.3rem;
	}

	.order_con .van-card__thumb {
		width: 1.5rem;
		height: 1.5rem;
	}

	.order_con .van-card__desc {
		font-size: 0.25rem;
		min-height: .6rem;
		line-height: .3rem;
	}

	.van-icon-add-o::before {
		font-size: .4rem;
		color: red;
	}

	.order_con .van-card__thumb img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.order_con .van-tag--danger.van-tag--plain {
		color: #000000;
	}
</style>
