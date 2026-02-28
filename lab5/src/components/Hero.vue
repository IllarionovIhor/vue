<script setup>

</script>

<template>
<div class="hero">
   <div class="hero-body">
     <div class="hero-header">
        <h1 id="med-tit">
          AGENTIC
        </h1>
       <h1 id="ser-tit">
         OpenAI
       </h1>
       <p class="hero-text" v-copy>
         OpenAI is leading the next evolution of artificial intelligence by building autonomous agents that seamlessly execute complex workflows on your behalf. Move beyond conversation and empower your business with digital workers capable of reasoning, planning, and taking action to achieve your boldest goals.
       </p>
     </div>
     <div class="hero-btn" >
       <Button label="Click for more" severity="info" raised class="btn btn-1" v-copy="'copy this text'"/>
       <Button label="What do we do?" severity="info" raised class="btn btn-2" />
     </div>
   </div>
  <div class="hero-img">

  </div>
</div>
</template>

<style scoped>
.hero{
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.hero-body{
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
}

.hero-header{
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
  font-family: "Montserrat", sans-serif;
  position: relative;
  left: 150px;
}

.hero-btn{
  width: 95%;
  height: 50px;
  position: relative;
  top: 120px;
  left: 150px;
  display: flex;
  justify-content: left;
  gap: 50px;
}

.btn{
  width: 20%;
  border: none;
}

#med-tit{
  font-size: 70px;
  color: #243E73;
  margin: 0;
}

#ser-tit{
  font-size: 70px;
  color: #739FD9;
  margin: 0;
}

.btn-1{
  background-color: #739FD9;
}

.btn-2{
  background-color: #A3C9D9;
}

.hero-img{
  width: 50%;
  position: relative;
  left: 50%;
  height: 80vh;
  background-image: url('https://cdn.sologo.ai/2025/0102/20250102113948245.png');
  background-size: 260%;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-header .hero-text{
  width: 80%;
  font-size: 15px;
  text-align: left;
  font-weight: 200;
}

.hero-text:hover{
  background-color: rgba(159, 158, 158, 0.9);
  cursor: copy;
}

</style>