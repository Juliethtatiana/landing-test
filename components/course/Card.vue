<script setup>
import { useStudents } from '~/stores/Students'

const store = useStudents()
const props = defineProps(['course', 'students'])

const studentsList = ref({})

onMounted(async () => {
  if (props.students) {
    await getStudents(props.course.id)
  }
})

const getStudents = async (idCourse) => {
  studentsList.value = await store.getStudentsByCourse(idCourse)
}
</script>

<template>
  <div class="card flex align-items-center" v-if="course">
    <Card style="width: 25em">
      <template #header>
        <img
          alt="user header"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fj2logo.com%2Fpython%2Ftutorial%2Fintroduccion-a-python%2F&psig=AOvVaw2CUCJgQ4bXRANoagfsve1i&ust=1700019209888000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJj17prHwoIDFQAAAAAdAAAAABAJ"
        />
      </template>
      <template #title> {{ course.name }}</template>
      <template #subtitle> {{ `${course.horas} Horas` }}</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amcourse.et, consectetur adipisicing elit.
          Inventore sed consequuntur error repudiandae numquam deserunt quisquam
          repellat libero asperiores earum nam nobis, culpa ratione quam
          perferendis esse, cupiditate neque quas!
        </p>
        <div v-if="studentsList.students" class="my-4">
          <OrderList
            v-model="studentsList.students"
            listStyle="height:auto"
            dataKey="id"
          >
            <template #header> List of Students </template>
            <template #item="slotProps">
              <div class="flex flex-wrap p-2 align-items-center gap-3">
                <img
                  class="w-4rem shadow-2 flex-shrink-0 border-round"
                  :src="'https://primefaces.org/cdn/primevue/images/product/'"
                  :alt="slotProps.item.img"
                />
                <div class="flex-1 flex flex-column gap-2">
                  <span class="font-bold">{{ slotProps.item.name }}</span>
                </div>
              </div>
            </template>
          </OrderList>
        </div>
      </template>
    </Card>
  </div>
</template>
