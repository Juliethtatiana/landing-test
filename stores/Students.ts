import { defineStore } from 'pinia'
import dataStudents from 'assets/students.json'
export const useStudents = defineStore('Students', {
  state: () => ({ students: undefined }),
  actions: {
    async allStudents() {
      return dataStudents
    },
    async getStudentsByCourse(id: Number) {
      const students = dataStudents.filter((s) => {
        return s.idCourse === id
      })
      console.log(students)
      return students[0]
    },
  },
  getters: {
    getStudents: (state) => {
      return state.students
    },
  },
})
