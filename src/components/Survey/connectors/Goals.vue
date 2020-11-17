<script>
import { mapActions, mapGetters } from 'vuex'
import CheckButton from '@/components/Survey/components/CheckButton'
import ThvButton from '@/components/Shared/Button'

export default {
  name: 'Goals',
  components: {
    ThvButton,
    CheckButton
  },
  computed: {
    ...mapGetters({ selectedGoals: 'survey/getGoals', name: 'survey/getName' }),
    hasEnoughGoals: {
      get: function () {
        return this.selectedGoals.length <= 4
      }
    }
  },
  data () {
    return {
      goals: {
        improveEnergy: {
          name: 'Energy'
        },
        improveFitness: {
          name: 'Fitness'
        },
        improveLongTermHealth: {
          name: 'Long-term health'
        },
        improveMood: {
          name: 'Mood'
        },
        improveSleep: {
          name: 'Sleep'
        },
        improveWeight: {
          name: 'Weight'
        }
      },
      goalErrorMessage: 'Please select up to 4 goals'
    }
  },
  methods: {
    ...mapActions({
      addGoal: 'survey/addGoal',
      removeGoal: 'survey/removeGoal',
      incrementSurveyStep: 'survey/incrementSurveyStep',
      decrementSurveyStep: 'survey/decrementSurveyStep'
    }),
    submit () {
      this.incrementSurveyStep()
      this.$router.push('/diet')
    },
    back () {
      this.decrementSurveyStep()
      this.$router.push('/name')
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'diet') {
      this.hasEnoughGoals ? next() : alert(this.goalErrorMessage)
    } else {
      next()
    }
  }
}
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ name }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to four</p>
        <div class="spacer sp__top--sm"></div>
        <check-button
          v-for="({ name }, key) in goals"
          :key="key"
          :text="name"
          :selected="selectedGoals.includes(name)"
          v-on:check="addGoal"
          v-on:uncheck="removeGoal"
        ></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" @click="submit"
              >Next</thv-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
