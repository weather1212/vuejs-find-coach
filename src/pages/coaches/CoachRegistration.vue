<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // this.$route.push('/coaches');
      this.$router.replace('/coaches');    // 이동 후 이전 페이지로 못 돌아감.
    }
  }

}

</script>


<style scoped>

</style>