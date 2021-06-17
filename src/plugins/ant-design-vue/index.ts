import type { App } from "vue"

import { Button, Input } from 'ant-design-vue';

const antdComponents = [
  Button,
  Input
]

// 应用组件
export function useAntd(app: App) {
  // 循环应用
  antdComponents.forEach(com => {
    app.use(com)
  })
}