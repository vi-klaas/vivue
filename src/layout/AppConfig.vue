<script setup>
import Button from 'primevue/button';
import { ref } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { changeThemeSettings, setScale, layoutConfig } = useLayout();

const onChangeTheme = (theme, mode) => {
    const elementId = 'theme-css';
    const linkElement = document.getElementById(elementId);
    const cloneLinkElement = linkElement.cloneNode(true);
    const newThemeUrl = linkElement.getAttribute('href').replace(layoutConfig.theme.value, theme);
    cloneLinkElement.setAttribute('id', elementId + '-clone');
    cloneLinkElement.setAttribute('href', newThemeUrl);
    cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();
        cloneLinkElement.setAttribute('id', elementId);
        changeThemeSettings(theme, mode === 'dark');
    });
    linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
};

const isDarkMode = ref(false);

const toggleThemeMode = () => {
    isDarkMode.value = !isDarkMode.value;
    onChangeTheme(isDarkMode.value ? 'lara-dark-teal' : 'lara-light-teal', isDarkMode.value ? 'dark' : 'light');
};
</script>

<template>
  <Button class="layout-config-button p-link" type="button" @click="toggleThemeMode">
    <i :class="{ 'pi-moon': isDarkMode, 'pi-sun-o': !isDarkMode }"></i>
  </Button>
</template>

<style lang="css" scoped></style>
