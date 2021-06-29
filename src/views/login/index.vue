<template>
  <div class="login-container">
    <div class="top">
      <div class="header">
        Vue3 Template
      </div>
      <div class="desc"> Vue3 + Vite + ts + andtv 搭建后台管理基础框架 </div>
    </div>
    <div class="main">
      <a-form :model="form">
        <a-form-item v-bind="validateInfos.userName">
          <a-input
            v-model:value="loginForm.userName"
            size="large"
            placeholder="请输入用户名"
          >
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input-password
            v-model:value="loginForm.password"
            autocomplete
            size="large"
            placeholder="请输入密码"
            type="password"
          >
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-checkbox>记住我</a-checkbox>
          <a class="forge-password">已有帐号，忘记密码？</a>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            size="large"
            block
            @click="handleLogin"
          >
            登录
          </a-button>
        </a-form-item>
        <a-form-item>
          <div class="register">
            没有帐号？
            <a>点此注册</a>
          </div>
        </a-form-item>
        <div class="user-login-other">
          <div class="login-oauth-title"><span>其他方式登录</span></div>
          <div class="login-oauth-list">
            <a>
              <WechatOutlined style="color:#46d800" />
            </a>
            <a>
              <WeiboCircleOutlined style="color:#e32932" />
            </a>
            <a>
              <QqOutlined style="color:#00b0fb" />
            </a>
            <a>
              <DingdingOutlined style="color:#3795f9" />
            </a>
            <a>
              <GithubOutlined style="color:#0a0203" />
            </a>
          </div>
        </div>
      </a-form>
    </div>
    <div class="footer">
      <div class="copyright"> Vue3 Template ©2021 Created by <a
          href="https://intolearn.com/"
          target="_blank"
        >前端_逗叔</a> </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { useRouter } from "vue-router";
import { reactive, ref, defineComponent, toRaw, getCurrentInstance } from "vue";
import { useForm } from "@ant-design-vue/use";
import {
  UserOutlined,
  LockOutlined,
  GithubOutlined,
  WechatOutlined,
  WeiboCircleOutlined,
  QqOutlined,
  DingdingOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { useStore } from 'vuex'
import { key } from '../../store'
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    GithubOutlined,
    WechatOutlined,
    WeiboCircleOutlined,
    QqOutlined,
    DingdingOutlined,
  },
  setup() {
    const store = useStore(key)
    const router = useRouter();
    const loginForm = reactive({ userName: "", password: "" });
    const rulesRef = reactive({
      userName: [{ required: true, message: "请输入用户名" }],
      password: [{ required: true, message: "请输入密码" }],
    });

    const { resetFields, validate, validateInfos } = useForm(
      loginForm,
      rulesRef
    );

    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const api = proxy.$api;

    // 登录
    const handleLogin = () => {
      validate()
        .then(() => {
          api.common
            .login(toRaw(loginForm))
            .then((res: any) => {
              message.success("登录成功");
              store.commit("common/setToken",res.data)
              router.push({ name: "Home" });
            })
            .catch((err: any) => {
              message.error("登录失败");
            });
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    return { loginForm, resetFields, validateInfos, handleLogin };
  },
});
</script>
<style lang='less' scoped>
.login-container {
  height: 100%;
  background-color: #f0f2f5;
  padding-top: 72px;
  .top {
    text-align: center;
    .header {
      font-size: 33px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 600;
      position: relative;
      top: 2px;
    }
    .desc {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      margin-top: 12px;
      margin-bottom: 40px;
    }
  }
  .main {
    min-width: 260px;
    width: 368px;
    margin: 0 auto;
    .forge-password {
      font-size: 14px;
      float: right;
    }
    .user-login-other {
      .login-oauth-title {
        text-align: center;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          flex: 1;
          border: 1px solid #e8e8e8;
        }
        &::after {
          content: "";
          flex: 1;
          border: 1px solid #e8e8e8;
        }
        span {
          color: #8c92a4;
          padding: 0 16px;
        }
      }
    }
    .login-oauth-list {
      margin-top: 16px;
      display: flex;
      a {
        flex: 1;
        text-align: center;
        .anticon {
          font-size: 28px;
        }
      }
    }
  }
  .footer {
    width: 100%;
    bottom: 0;
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;
    .copyright {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    }
  }
}
</style>