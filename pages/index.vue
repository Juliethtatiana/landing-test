<script setup lang="ts">
import { ref, onMounted } from 'vue'

const localePath = useLocalePath()
const router = useRouter()

onMounted(() => {
  router.push(localePath({ path: '/about' }))
})
</script>
<template></template>
