<script setup>
definePageMeta({ auth: false });
const { status } = useAuth();
</script>

<template>
    <h1>Home Page</h1>
    <p>認証状態：{{ status }}</p>
</template>