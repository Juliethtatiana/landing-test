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

    <CourseCard :course="courses[0]"></CourseCard>
  </div>
</template>
