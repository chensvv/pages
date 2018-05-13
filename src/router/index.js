import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Quotation from '@/components/Quotation'
import HuobiPro from '@/components/HuobiPro'
import Bch from '@/components/Bch'
import BiAn from '@/components/BiAn'
import Okex from '@/components/Okex'
import Upbit from '@/components/Upbit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },{
      path: '/quotation',
      name: 'quotation',
      component: Quotation
    },{
      path: '/huobipro',
      name: 'huobipro',
      component: HuobiPro
    },{
      path: '/bch',
      name: 'bch',
      component: Bch
    },{
      path: '/bian',
      name: 'bian',
      component: BiAn
    },{
      path: '/okex',
      name: 'okex',
      component: Okex
    },{
      path: '/upbit',
      name: 'upbit',
      component: Upbit
    }
  ]
})
