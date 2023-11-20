<script setup>
const props = defineProps(['course'])
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
        <div></div>
      </template>
    </Card>
  </div>
</template>
