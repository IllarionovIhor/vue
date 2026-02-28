<script setup>
import { ref } from "vue";

const products = ref([{
    id: 1,
    name: "Autonomous Execution",
    description: "Agents independently plan, iterate, and execute complex, multi-step workflows without requiring constant human oversight.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 2,
    name: "Seamless Tool Integration",
    description: "Effortlessly connect with your existing APIs, databases, and enterprise software to take real actions across platforms.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  },
  {
    id: 3,
    name: "Advanced Reasoning",
    description: "Leverage state-of-the-art models to analyze problems, adapt to unexpected roadblocks, and intelligently optimize solutions.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
  },
  {
    id: 4,
    name: "Infinite Scalability",
    description: "Deploy a resilient digital workforce that operates 24/7, allowing your business to scale operations without proportional overhead.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    id: 5,
    name: "Contextual Adaptation",
    description: "Agents learn from your specific business environment and past interactions to provide highly personalized and accurate outcomes.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    id: 6,
    name: "Rapid Data Synthesis",
    description: "Instantly process and synthesize vast amounts of information to generate real-time insights and trigger immediate actions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    id: 7,
    name: "Resource Optimization",
    description: "Free up your human team from repetitive cognitive tasks so they can focus on high-level strategy, empathy, and creativity.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
  }
]);
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>

<template>
<div class="adv-container">
  <div class="card">
    <h2>About Our Advantages!</h2>
    <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="myclass border border-cyan-50 border-surface-200 dark:border-surface-700 rounded m-2  p-4">
          <div class="mb-4 p-10 image-container">
            <div class="relative mx-auto">
              <img :src="slotProps.data.image" :alt="slotProps.data.name"/>
            </div>
          </div>
          <div class="name">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="description">{{ slotProps.data.description }}</div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</div>
</template>

<style scoped>
.adv-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card{
  height: 40%;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.myclass{
  border: 2px solid #9f9e9e;
  height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 10px;
  text-align: center;
  gap: 20px;
}

.image-container{
  width:50%;
}

img{
  width: 100%;
  aspect-ratio: 16/9;

  /* height: 80px; */
}

.name{
  font-size: 20px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: #4e4e50;
}

.description{
  font-size: 14px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
}

h2{
  font-family: "Montserrat", sans-serif;
  font-size: 50px;
  position: relative;
  bottom: 40px;
}

</style>