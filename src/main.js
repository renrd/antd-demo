/*
 * @Author: renard121 1179327883@qq.com
 * @Date: 2023-12-07 15:58:48
 * @LastEditors: renard121 1179327883@qq.com
 * @LastEditTime: 2023-12-07 20:00:17
 * @FilePath: \antd-demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import router from './router';
createApp(App).user(Antd).use(router).mount('#app')
