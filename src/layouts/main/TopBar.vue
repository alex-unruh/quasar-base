<template>
  <q-header elevated>
    <q-toolbar class="bg-blue-grey-10 glossy">
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="store.toggleLeftDrawer" />

      <q-toolbar-title class="q-pl-lg">
        Application
      </q-toolbar-title>

      <q-btn flat round dense icon="brightness_6" class="q-mr-xs" @click="app.dark.toggle();" title="Inverter Tema" />
      <q-btn flat round dense icon="settings" title="Configurações" />
      <q-btn flat round dense icon="account_circle" title="Perfil de Usuário" />
      <q-btn flat round dense icon="power_settings_new" title="Sair" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useLayoutStore } from 'src/stores/layout';

const app = useQuasar();
const store = useLayoutStore();
</script>
