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
  <div class="m-4">
    <h2>Mis cursos</h2>
    <div class="flex gap-4">
      <CourseCard
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
      ></CourseCard>
    </div>
  </div>
</template>
