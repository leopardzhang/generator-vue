import Vue from 'vue'
import Router from 'vue-router'
import $app from '@/pages/$app/index.vue'
import index from '@/pages/index/index.vue'


Vue.use(Router);

export default new Router({
	routes: [{
			path: '/$app',
			name: '$app',
			component: $app
		}, {
			path: '/index',
			name: 'index',
			component: index
		}, {
			path: '/*',
			redirect: '/index'
		}
	]
})