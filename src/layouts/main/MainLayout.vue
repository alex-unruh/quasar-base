<template>
  <q-layout view="hHh Lpr lFf">
    <top-bar />

    <side-bar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer-bar />
  </q-layout>
</template>

<script setup>
import TopBar from './TopBar.vue';
import SideBar from './SideBar.vue';
import FooterBar from './FooterBar.vue';
import { useLayoutStore } from 'src/stores/layout';

const store = useLayoutStore();
</script>
