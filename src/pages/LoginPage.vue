<template>
  <q-layout>
    <q-page-container>
      <q-page id="loginPage" padding class="bg-grey-4">
        <div class="row justify-center">
          <div class="col-12 col-md-8 col-xl-4">
            <q-card class="login-form q-pa-md justify-center shadow-15">
              <q-card-section class="text-center">
                <div class="text-h4 text-bold q-mb-sm text-blue-grey-9">QUASAR BASE</div>
                <div class="text-h6 text-weight-bolder text-blue-grey-9">LOGIN</div>
              </q-card-section>

              <q-form @submit.prevent="login()">
                <q-card-section class="q-gutter-md q-py-none">
                  <q-input outlined label="E-mail" type="email" v-model="email" required>
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input outlined label="Senha" type="password" v-model="password" required>
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </q-card-section>

                <q-card-section>
                  <q-btn color="blue-grey-9" type="submit" size="lg" class="full-width" glossy>LOGIN</q-btn>
                </q-card-section>
              </q-form>

              <q-card-section>
                <div class="text-subtitle text-center">Quasar Base v1.0.0</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const email = ref("");
const password = ref("");
</script>

<style lang="scss" scoped>
.login-form {
  margin-top: 27%;
  border-top: 13px solid $blue-grey-9;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  img {
    width: 20%;
  }
}
</style>
