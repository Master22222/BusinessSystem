
import Vue from 'vue';

import VueResource from 'vue-resource';

import Cookie from "js-cookie";

Vue.use(VueResource);

let isLogin = false;


const login = {

	isLogin(){
		return isLogin || !!Cookie.get('business_uid');
	},
	login () {
	},
	auth(to, callback) {
		const user = Cookie.get('business_uid');
		if(user && user == 'admin'){
			location.hash = '#!/' + hash;
			return true;
		}
		location.hash = '#!/login';
		return false;
	}
}

export default {
	methods: login,
	created(){
		console.log("login mixin created")
	}
}