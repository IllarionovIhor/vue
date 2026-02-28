<script setup>
import { ref } from 'vue';

const problems = ref([
  {
    p: "Want an excuse to fire workers, while providing worse service?",
    s: "We have just the plan for you, contact us in private!"
  },
  {
    p: "You are in a dire need of half-working C compiler?",
    s: "Our AIs can do that! Or was it anthropic's....."
  },
  {
    p: "Are you concerned with our code of ethics?",
    s: "We have you covered. No need to be concerned about something that doesn't exist."
  },
  {
    p: "AI hallucinates on you?",
    s: "You are absolutely right, Dave. We are sorry. This will never happen again"
  }

]);
</script>

<template>
<div class="solve-container">
  <div class="txt">
    <h1>Problem - Solve</h1>
  </div>
  <div class="card">
    <Accordion>
      <AccordionPanel :value="i" class="panel"
                      v-for="(problem, i) in problems"
                      :key = "i">

        <AccordionHeader class="panel-heading">
          <i class="pi pi-question-circle"></i>
          {{problem.p}}
        </AccordionHeader>

        <AccordionContent icon="pi pi-check-circle">
          <hr>
          <div class="pi pi-check-circle">
            <p>Solved!</p>
          </div>
          <p class="m-0">{{problem.s}}</p>
        </AccordionContent>

      </AccordionPanel>
    </Accordion>
  </div>
</div>
</template>

<style scoped>
.solve-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card{
  width: 100%;
  padding: 10px;
  font-size: 20px;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;

}

.txt{
  position: relative;
  top: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
}

.panel{
  margin-bottom: 20px;
  margin-top: 20px;
  width: 580px;
}

.pi-question-circle {
  color: red;
  font-size: 20px;
}

.pi-check-circle{
  color: green;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  margin: 0;
  position: relative;
  top: 25px;
}

.pi-check-circle p {
  color: rgba(51, 64, 84, 0.98);
  font-family: "Montserrat", sans-serif;
}



</style>