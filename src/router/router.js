import Vue from "vue";
import VueRouter from "vue-router";


//引入组件
import index from "../view/index.vue";
import classification from "../view/classification.vue";
import shopping_cart from "../view/shopping_cart.vue";
import my from "../view/my.vue";
import more_order from "../view/more_order.vue";
import details from "../view/details.vue";
import order_complete from "../view/order_complete.vue";
import sure_order from "../view/sure_order.vue";
import distribution from "../view/distribution";





//要告诉vue使用VueRouter

Vue.use(VueRouter);


const routes = [{
		path: "/",
		component: index,
	},
	{
		path: "/index",
		component: index
	},
	{
		path: "/classification",
		component: classification
	},
	{
		path:"/shopping_cart",
		component:shopping_cart
	},
	{
		path:"/my",
		component:my
	},
	{
		path:"/more_order",
		component:more_order
	},
	{
		path:"/details",
		component:details
	},
	{
		path:"/order_complete",
		component:order_complete
	},
	{
		path:"/sure_order",
		component:sure_order
	},
	{
		path:"/distribution",
		component:distribution
	}
]

var router = new VueRouter({
	/* linkActiveClass: "footer_1", */
	routes
})
export default router;
