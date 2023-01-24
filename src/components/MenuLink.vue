<template>
  <q-item clickable v-ripple active-class="my-menu-link" :to="to" :href="href" :target="target" :title="label">
    <q-item-section avatar v-if="icon">
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section v-if="label">
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption lines="1" v-if="caption">{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  icon: { type: String },
  label: { type: String },
  caption: { type: String },
  to: { type: String },
  href: { type: String },
  target: { type: String }
})
</script>
