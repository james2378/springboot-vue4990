import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import qingjiashenqing from '@/views/modules/qingjiashenqing/list'
    import jiankangdangan from '@/views/modules/jiankangdangan/list'
    import hulifengxian from '@/views/modules/hulifengxian/list'
    import shanshixinxi from '@/views/modules/shanshixinxi/list'
    import hulijilu from '@/views/modules/hulijilu/list'
    import wuzixinxi from '@/views/modules/wuzixinxi/list'
    import wuziruku from '@/views/modules/wuziruku/list'
    import huodongxinxi from '@/views/modules/huodongxinxi/list'
    import feiyongxinxi from '@/views/modules/feiyongxinxi/list'
    import wuzichuku from '@/views/modules/wuzichuku/list'
    import sheshixinxi from '@/views/modules/sheshixinxi/list'
    import fuwugongdan from '@/views/modules/fuwugongdan/list'
    import yihurenyuan from '@/views/modules/yihurenyuan/list'
    import yihudengji from '@/views/modules/yihudengji/list'
    import laoren from '@/views/modules/laoren/list'
    import wuzifenlei from '@/views/modules/wuzifenlei/list'
    import yuangongdangan from '@/views/modules/yuangongdangan/list'
    import laifangdengji from '@/views/modules/laifangdengji/list'
    import jiashutanwang from '@/views/modules/jiashutanwang/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/qingjiashenqing',
        name: '请假申请',
        component: qingjiashenqing
      }
      ,{
	path: '/jiankangdangan',
        name: '健康档案',
        component: jiankangdangan
      }
      ,{
	path: '/hulifengxian',
        name: '护理风险',
        component: hulifengxian
      }
      ,{
	path: '/shanshixinxi',
        name: '膳食信息',
        component: shanshixinxi
      }
      ,{
	path: '/hulijilu',
        name: '护理记录',
        component: hulijilu
      }
      ,{
	path: '/wuzixinxi',
        name: '物资信息',
        component: wuzixinxi
      }
      ,{
	path: '/wuziruku',
        name: '物资入库',
        component: wuziruku
      }
      ,{
	path: '/huodongxinxi',
        name: '活动信息',
        component: huodongxinxi
      }
      ,{
	path: '/feiyongxinxi',
        name: '费用信息',
        component: feiyongxinxi
      }
      ,{
	path: '/wuzichuku',
        name: '物资出库',
        component: wuzichuku
      }
      ,{
	path: '/sheshixinxi',
        name: '设施信息',
        component: sheshixinxi
      }
      ,{
	path: '/fuwugongdan',
        name: '服务工单',
        component: fuwugongdan
      }
      ,{
	path: '/yihurenyuan',
        name: '医护人员',
        component: yihurenyuan
      }
      ,{
	path: '/yihudengji',
        name: '医护等级',
        component: yihudengji
      }
      ,{
	path: '/laoren',
        name: '老人',
        component: laoren
      }
      ,{
	path: '/wuzifenlei',
        name: '物资分类',
        component: wuzifenlei
      }
      ,{
	path: '/yuangongdangan',
        name: '员工档案',
        component: yuangongdangan
      }
      ,{
	path: '/laifangdengji',
        name: '来访登记',
        component: laifangdengji
      }
      ,{
	path: '/jiashutanwang',
        name: '家属探望',
        component: jiashutanwang
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
