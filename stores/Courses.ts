import { defineStore } from 'pinia'
import dataCourses from 'assets/courses.json'
import { setCoursesData } from '~/composables/utils/mixins'
export const useCourses = defineStore('Courses', {
  state: () => ({ courses: undefined }),
  actions: {
    async allCourses() {
      /* const result = await apiServices({
        method: 'GET',
        url: '/detail-courses',
      })

      if (result.status && result.code === 100) {
        setLoginUser({ user: undefined, authToken: undefined })
      } */
      setCoursesData(dataCourses)
      return dataCourses
    },
  },
  getters: {
    getCourses: (state) => {
      return state.courses || useCookie('courses-data').value
    },
  },
})
