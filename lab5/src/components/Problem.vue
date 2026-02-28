<script setup>
import { ref } from "vue";

const faq = ref([
  {
    q: "Can I change the rate later?",
    a: "Yes, you can change your plan at any time."
  },
  {
    q: "Is my data stored?",
    a: "Yes, we store and use your data extensively. The models WILL leak it if asked nicely"
  },
  {
    q: "Can I test the service for free?",
    a: "Yes, we provide a free trial period."
  },
  {
    q: "Is there technical support?",
    a: "Yes, AI (an Indian) is always available to help out"
  }
]);

console.log(faq.value);
</script>

<template>
  <div class="faq">
    <h2 class="title">FAQ – Frequently asked questions</h2>

    <div class="faq-list">
      <Card
          v-for="(item, i) in faq"
          :key="i"
          class="faq-card"
      >
        <template #content>
          <div class="question">{{item.q}}</div>
          <Message severity="info" class="answer">{{ item.a }}</Message>
          </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.faq {
  padding: 50px 30px;
  margin-top: 20px;
}
.title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 700;
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.faq-card {
  padding: 8px;
}
.question {
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 8px;
  color: #454545;
}
.answer {
  margin-top: 5px;
  background: rgba(0, 123, 255, 0.1);
  color: #616161;
}
</style>
