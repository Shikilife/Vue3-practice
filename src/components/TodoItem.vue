<script setup>
const props = defineProps(['item'])
const emit = defineEmits(['remove'])
</script>

<template>
    <li>
        <span>{{ item }}</span>
        <button class="del-btn"  @click="$emit('remove')">刪除</button>
    </li>
</template>
