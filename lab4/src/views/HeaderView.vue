<script setup>

import {useI18n} from "vue-i18n";
import {useSettingsStore} from "@/stores/SettingsStore.js";
import {ref, watch} from "vue";

const { t, locale } = useI18n({useScope: 'global'});

const settings = useSettingsStore();

const text = ref('EN')

watch(locale, (value) => {
  text.value = value === 'en' ? 'EN' : 'UA';
})

const handleLanguageChange = () => {
  const lang = locale.value === "en" ? "ua" : "en";
  settings.setLocale(lang);
  locale.value = lang
}

</script>

<template>
  <div class='header'>
    <RouterLink to="products" class="link">{{t('headers.products')}}</RouterLink>
    <RouterLink to="cart" class="link">{{t('headers.cart')}}</RouterLink>
    <RouterLink to="profile" class="link">{{t('headers.profile')}}</RouterLink>
    <button @click="handleLanguageChange">{{ text }}</button>
  </div>
  <RouterView/>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 30px;
  background-color: #37769e;
  margin-bottom: 30px;
}

.header .link {
  text-decoration: none;
  font-size: 40px;
  color: white;
}
</style>