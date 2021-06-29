import type { App } from "vue"

import { Layout, Menu, Breadcrumb, Form, Result, Button, Input, Checkbox, message } from 'ant-design-vue';

const antdComponents = [
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Result,
  Button,
  Input,
  Checkbox,
]

// 应用组件
export function useAntd(app: App) {
  // 循环应用
  antdComponents.forEach(com => {
    app.use(com)
  })
  app.config.globalProperties.$message = message;
}