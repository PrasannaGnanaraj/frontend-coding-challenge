const state = () => ({
  name: '',
  goals: [],
  diet: null,
  dob: null,
  currentSurveyStep: 0,
  surveyStages: ['name', 'goals', 'diet', 'dob']
})

export default state
