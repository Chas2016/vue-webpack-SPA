/**
 * Created by chen on 2016/9/30.
 */
import Vue from 'vue';
import cardShelf from './views/cardShelf.vue';
import cardDetail from './views/cardDetail.vue';

import Router from 'vue-router';
Vue.use(Router);

var App  = Vue.extend({}); //路由器需要一个跟组件

var router = new Router();

router.map({
    '/cardShelf': { //访问地址
        name: 'cardShelf',
        component: cardShelf //引用组件名称
    },
    '/cardDetail': { //访问地址
        name: 'cardDetail',
        component: cardDetail //引用组件名称
    },
});
router.redirect({  //定义全局的重定向规则
    '*':"/cardShelf"
 });
Vue.config.debug = true ;

router.start(App,'#app');