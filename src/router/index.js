/*
 * @Author: renard121 1179327883@qq.com
 * @Date: 2023-12-07 19:31:50
 * @LastEditors: renard121 1179327883@qq.com
 * @LastEditTime: 2023-12-07 20:09:47
 * @FilePath: \antd-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: renard121 1179327883@qq.com
 * @Date: 2023-12-07 19:31:50
 * @LastEditors: renard121 1179327883@qq.com
 * @LastEditTime: 2023-12-07 19:50:18
 * @FilePath: \antd-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter,createWebHistory } from 'vue-router'

const routes=[
    {
        path:'/',
        name:'login',
        component:()=>import('../views/login.vue')
    }
]

const router = createRouter(
    {
        history:createWebHistory(process.env.BASE_URL),
        routes
    }
)
export default router