import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi ({ state }) {
    const body = {
      'user': {
        'name': state.name,
        'goals': state.goals,
        'diet': state.diet,
        'dob': state.dob
      }
    }
    const config = { headers: { 'Content-Type': 'application/json' } }
    return axios.post(`${API_URL}/users`, body, config)
  },
  setName ({ commit }, name) {
    commit('updateName', name)
  },
  addGoal ({ commit, state }, goal) {
    commit('updateGoals', [...state.goals, goal])
  },
  removeGoal ({ commit, state }, goal) {
    commit('updateGoals', state.goals.filter(g => g !== goal))
  },
  setDiet ({ commit }, diet) {
    commit('updateDiet', diet)
  },
  clearDiet ({ commit }) {
    commit('updateDiet', null)
  },
  setDob ({ commit }, dob) {
    commit('updateDob', dob)
  },
  incrementSurveyStep ({ commit, state }) {
    commit('updateSurveyStep', state.currentSurveyStep + 1)
  },
  decrementSurveyStep ({ commit, state }) {
    commit('updateSurveyStep', state.currentSurveyStep - 1)
  },
  resetSurveyStep ({ commit }) {
    commit('updateSurveyStep', 0)
  }
}
