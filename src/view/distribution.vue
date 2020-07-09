<template>
	<div class="body_sty">

		<div class="map"></div>

		<div class="conduct">
			<div class="conduct_title" style="font-size: .3rem; text-align: center;">商品已经在路上</div>
			<div class="conduct_dec" style="font-size: .3rem; color: red; text-align: center;">12:35准时送达</div>
			<div class="conduct_title" style="font-size: .2rem; color: gray; text-align: center;">订单配送中 感谢您的耐心等待</div>
			<div class="conduct_contact">
				<div class="conduct_contact_img"></div>
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
	.map {
		height: 4rem;
		border: 1px solid navajowhite;
	}

	.conduct {
		height: 3.2rem;
		width: 90%;
		position: absolute;
		top: 2.3rem;
		left: 0.32rem;
	}

	.conduct_title {
		width: 60%;
		height: .5rem;
		margin: 0 auto;
	}

	.conduct_dec {
		width: 60%;
		height: .5rem;
		margin: 0 auto;
	}

	.conduct_contact {
		height: 1.5rem;
	}
</style>
