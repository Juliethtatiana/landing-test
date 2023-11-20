<script setup>
const store = useCourses()
const courses = ref([])

onMounted(() => {
  nextTick(async () => {
    await getCourses()
  })
})

const getCourses = async () => {
  courses.value = await store.allCourses()
}
</script>
<template>
  <div class="m-4 services-page">
    <h2>Mis cursos</h2>
    <div class="flex gap-4">
      <CourseCard
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
        :students="true"
      ></CourseCard>
    </div>
  </div>
</template>
