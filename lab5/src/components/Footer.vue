<script setup>

</script>

<template>
<footer class="footer">
  <div class="info">
    <h2>Information</h2>
    <h4>Agentic OpenAI</h4>
    <p>© 2025 Lab5. All rights reserved.</p>
    <p>Cutting-edge artificial intelligence non-profit organisation</p>
  </div>

  <div class="contacts">
    <h2>Contacts</h2>
    <h4>+38(096)-675-78-54</h4>
    <p>Email: <a href="#">openai@gmail.com</a></p>
    <p>Manager: +38(068)-346-23-12</p>
  </div>

  <div class="address">
    <h2>Address</h2>
    <p>25 Tsentralna St., Building B</p>
    <p>Kyiv, 01001</p>
  </div>

</footer>
</template>

<style scoped>
.footer{
  height: 31vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  font-family: "Montserrat", sans-serif;
  border-top: 5px solid #95C2E8;
}

.info{
  height: 230px;
  width: 550px;
  position: relative;
  left: 50px;
}

.address{
  height: 230px;
  width: 550px;
  position: relative;
  left: 150px;
}

.contacts{
  height: 230px;
  width: 550px;
  position: relative;
  left: 150px;
}

</style>