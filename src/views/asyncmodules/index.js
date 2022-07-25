// const asyncModules = []

// const modules = require.context('../asyncmodules', true, /index.vue$/)
// console.log(modules)
// modules.keys().forEach(fileName => {
//   asyncModules.push({
//     path: fileName,
//     component: () => import('@/views/asyncmodules' + fileName.replace('./', '/'))
//   })
// })
const routes = [
  {
    path: '/home',
    name: 'home',
    // 懒加载
    component: () => import('@/views/asyncmodules/one/index.vue')
  }
]

export default routes
