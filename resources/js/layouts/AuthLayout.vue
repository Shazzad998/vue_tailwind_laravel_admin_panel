<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div
            class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
        >
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useDefaults from "../composable/defaults";

const { setTheme } = useDefaults();

onMounted(() => {
    setTheme();
});
</script>
