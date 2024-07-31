// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  build: {
    transpile: ["jsonwebtoken"], //jsonwebtoken使用時のエラー対応としてトランスパイル設定を追加する
  },
  modules: ["@sidebase/nuxt-auth"],
  auth: {
    globalAppMiddleware: true,
    provider: {
      type: "local",
      token: {
        signInResponseTokenPointer: "/tokens/accessToken",
      },
      pages: {
        login: "/login", //リダイレクト先のページを設定できる、デフォルト（何も指定しない場合）は/login
      },
      endpoints: {
        signIn: { path: "/api/auth/signin", method: "post" }, // サーバーサイドのログインエンドポイントを指定
      },
    },
  },
  runtimeConfig: {
    public: {
      authJs: {
        baseUrl: "http://localhost:3000" // 環境変数からベースURLを設定
      },
    },
  },
});