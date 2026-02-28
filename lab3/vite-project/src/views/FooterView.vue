<script setup>

</script>

<template>
  <footer class="footer">
  <div class="container">
    <p>© 2026 Lab3. All rights reserved.</p>
    <nav class="links">
      <RouterLink to="/" class="nav-link">Main</RouterLink>
      <RouterLink to="about" class="nav-link">About</RouterLink>
    </nav>
  </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--footer-bg);
  color: var(--footer-text);
  padding: 20px 0;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.links .nav-link{
  color: var(--footer-text);
  margin-left: 20px;
  text-decoration: none;
}

.links .nav-link:hover {
  color: #37769e;
}

</style>