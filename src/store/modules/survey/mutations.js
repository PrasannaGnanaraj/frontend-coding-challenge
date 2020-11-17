export default {
  updateName (state, newState) {
    state.name = newState
  },
  updateGoals (state, newState) {
    state.goals = newState
  },
  updateDiet (state, newState) {
    state.diet = newState
  },
  updateDob (state, newState) {
    state.dob = newState
  },
  updateSurveyStep (state, newState) {
    state.currentSurveyStep = newState
  }
}
