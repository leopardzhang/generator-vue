import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import $api from './$api'
import demo from './demo'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	plugins: [
		createPersistedState({
			key: '$group',
			paths: ['$group']
		})
	],
	modules: {
		$api,
		demo
	}
});

export default store
