import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

const router = new Router({
	routes: [{
		path: '/$app',
		name: '$app',
		component(resolve) {
			require.ensure(['@/pages/$app/index.vue'], () => {
				resolve(require('@/pages/$app/index.vue'));
			});
		}
	}, {
		path: '/index',
		name: 'index',
		component(resolve) {
			require.ensure(['@/pages/index/index.vue'], () => {
				resolve(require('@/pages/index/index.vue'));
			});
		}
	}, {
		path: '/*',
		redirect: '/index'
	}]
})

router.beforeEach((to, from, next) => {
	next();
});

router.afterEach(() => {
	// 切换页面后将屏幕滚动至顶端
	window.scrollTo(0, 0);
});

export default router
