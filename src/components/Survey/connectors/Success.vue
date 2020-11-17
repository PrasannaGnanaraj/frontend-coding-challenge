<script>
import SuccessImage from '@/assets/images/thrivaling.png'
import ThvButton from '@/components/Shared/Button'
import { mapGetters } from 'vuex'
export default {
  name: 'Success',
  components: {
    ThvButton
  },
  computed: {
    ...mapGetters({
      name: 'survey/getName',
      diet: 'survey/getDiet',
      goals: 'survey/getGoals',
      dob: 'survey/getPrettyDob'
    }),
    successImg () {
      return SuccessImage
    }
  },
  methods: {
    startOver () {
      this.$router.push('/name')
    }
  }
}
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__success align-center">
        <img class="success-img" :src="successImg" />
        <h2 class="success-header">All done!</h2>
        <p class="success-info">
          Thank you for completing the survey. The <br />following results have
          been submitted
        </p>
        <div class="success-survey-info">
          <div
            class="
          success-survey-info__item"
          >
            <label class="info-label">
              Name
            </label>
            <span class="info-user-answer">
              {{ name }}
            </span>
          </div>
          <div
            class="
          success-survey-info__item"
          >
            <label class="info-label">
              Goals
            </label>
            <span class="info-user-answer"> {{ goals.join(", ") }} </span>
          </div>
          <div
            class="
          success-survey-info__item"
          >
            <label class="info-label">
              Diet
            </label>
            <span class="info-user-answer"> {{ diet }} </span>
          </div>
          <div
            class="
          success-survey-info__item"
          >
            <label class="info-label">
              DOB
            </label>
            <span class="info-user-answer"> {{ dob }}</span>
          </div>
          <div class="grid-x button-container">
            <div class="cell auto align-center">
              <thv-button element="button" size="large" @click="startOver"
                >Start Over</thv-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.success-img {
  width: 150px;
  height: 150px;
}
.success-header {
  color: #3d4250;
  margin: 20px 0;
}
.success-info {
  color: #99a2bf;
}
.success-survey-info {
  background-color: white;
  padding: 30px 0 30px 30px;
  margin-top: 40px;
  text-align: left;
}
.success-survey-info__item {
  margin-bottom: 20px;
}
.info-label {
  color: #99a2bf;
  margin-bottom: 4px;
}
.info-user-answer {
  color: #3d4250;
}
</style>
