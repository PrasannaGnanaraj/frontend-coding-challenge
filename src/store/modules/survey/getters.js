export default {
  getGoals (state) {
    return state.goals
  },
  getDiet (state) {
    return state.diet
  },
  getDob (state) {
    return state.dob
  },
  getPrettyDob (state) {
    const date = new Date(state.dob)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  },
  getSurveyStep (state) {
    return state.currentSurveyStep
  },
  getSurveyStages (state) {
    return state.surveyStages
  },
  getName (state) {
    return state.name
  }
}
