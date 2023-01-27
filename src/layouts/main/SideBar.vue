<template>
  <q-drawer v-model="store.leftDrawerOpen" :mini="store.mini" show-if-above elevated class="q-pt-sm" :width="240"
    @click="mini = false">
    <q-list class="q-gutter-y-sm">

      <q-expansion-item icon="dashboard" label="Dashboard" caption="Monitoramento" title="Dashboard">
        <q-list padding class="rounded-borders text-primary" dense>
          <menu-link label="Cadastrar" icon="add_circle_outline" @click="teste" />
          <menu-link label="Gerenciar" icon="assignment" />
        </q-list>
        <q-separator />
      </q-expansion-item>

      <q-expansion-item icon="people" label="Admin" caption="Usuários/Grupos" title="Administração">
        <q-list padding class="rounded-borders text-primary" dense>
          <menu-link label="Cadastrar" icon="add_circle_outline" />
          <menu-link label="Gerenciar" icon="assignment" />
        </q-list>
        <q-separator />
      </q-expansion-item>

      <menu-link label="Documentação" caption="Quasar Framework" icon="article" href="https://quasar.dev"
        target="_blank" />
    </q-list>
  </q-drawer>
</template>

<script setup>
import MenuLink from 'src/components/MenuLink.vue';
import { useLayoutStore } from 'src/stores/layout';
const store = useLayoutStore();

function teste() {
  let name = "Alexandre Unruh";
  console.log(name);
}
</script>

