import Vue2 from 'app3/vue2';
import elementUI from 'app3/elementUI'
import './index.css';
import routes from 'app3/routes'
import VueRouter from 'app3/VueRouter'
/*
 * Transform vue2 components to DOM.
 */
export function vue2ToVue3(WrapperComponent, wrapperId) {
  console.log(WrapperComponent, 'comp')
  let vm;
  Vue2.use(elementUI)
  Vue2.use(VueRouter)
  const router = new VueRouter({
    mode: 'history',
    routes: routes
  })

  vm = new Vue2({
    router,
    render: (h) => h(WrapperComponent)
  });
  vm.$mount(`#${wrapperId}`);
}
