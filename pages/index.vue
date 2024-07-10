<template>
  <section class="pt-5 xl:mx-48 md:mx-8 mx-4">
    <div class="mx-auto flex gap-4 justify-between form-full-width">
      <div class="grow-1">
        <FormKit
          v-model="apiURL"
          type="url"
          label="Адрес API"
          validation="url"
          placeholder="https://..."
        />
        <FormKit
          v-model="instanceId"
          type="text"
          label="Instance ID"
          placeholder="0123456789"
        />
        <FormKit
          v-model="apiToken"
          type="text"
          label="API Token"
          placeholder="1234abcd"
        />

        <FormKit type="button" label="getSettings" />
        <FormKit type="button" label="getStateInstance" />

        <FormKit
          v-model="phone"
          type="tel"
          label="Номер телефона"
          placeholder="79516602910"
          validation="matches:/^[0-9]{11}$/"
          :validation-messages="{
            matches: 'Телефон должен быть в формате 79516602910',
          }"
          validation-visibility="dirty"
        />
        <FormKit
          v-model="message"
          type="textarea"
          label="Сообщение"
          placeholder="..."
        />
        <FormKit type="button" label="sendMessage" />

        <FormKit
          v-model="phone"
          type="tel"
          label="Номер телефона"
          placeholder="79516602910"
          validation="matches:/^[0-9]{11}$/"
          :validation-messages="{
            matches: 'Телефон должен быть в формате 79516602910',
          }"
          validation-visibility="dirty"
        />
        <FormKit
          v-model="fileURL"
          type="url"
          label="Адрес файла"
          validation="url"
          placeholder="https://..."
        />
        <FormKit type="button" label="sendFileByURL" />
      </div>

      <div class="grow-1">
        <FormKit
          type="textarea"
          label="Сообщение"
          rows="40"
          class="form-full-width"
          readonly
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'

definePageMeta({
  layout: 'main',
})

useHead({
  title: 'Main',
})

const config = useRuntimeConfig()

const apiURL = useLocalStorage('api-url', config.public.apiURL)

const instanceId = useLocalStorage('instance-id', null)
const apiToken = useLocalStorage('api-token', null)
const phone = useLocalStorage('phone', null)
const message = useLocalStorage('message', null)
const fileURL = useLocalStorage('file-url', null)
</script>

<style>
.form-full-width {
  --fk-max-width-input: none;
}
</style>
