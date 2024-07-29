<template>
    <div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">Login</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                </li>
            </ul>
        </nav>
        <slot />
    </div>
</template>