<script setup>
import { ref } from 'vue';
import { useAuth } from '#imports';

const auth = useAuth();

const username = ref('');
const password = ref('');

const handleSignIn = async () => {
    try {
        await auth.signIn({
            username: username.value,
            password: password.value
        }, {
            callbackUrl: '/dashboard'
        });
    } catch (error) {
        console.error('サインインに失敗しました:', error);
        // エラー処理（例：ユーザーにエラーメッセージを表示する）
    }
};
</script>
<template>
    <div>
        <h1>ログインページ</h1>
        <form @submit.prevent="handleSignIn">
            <div>
                <label for="username">ユーザー名:</label>
                <input v-model="username" type="text" placeholder="ユーザー名" id="username" />
            </div>
            <div>
                <label for="password">パスワード:</label>
                <input v-model="password" type="password" placeholder="パスワード" id="password" />
            </div>
            <button type="submit">サインイン</button>
        </form>
    </div>
</template>