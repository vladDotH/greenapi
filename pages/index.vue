<template>
  <section class="pt-5 xl:mx-48 md:mx-8 mx-4">
    <div class="mx-auto flex gap-4 md:gap-8 justify-between form-full-width">
      <div class="grow-2">
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

        <FormKit type="button" label="getSettings" @click="onGetSettings" />
        <FormKit type="button" label="getStateInstance" @click="onGetState" />

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
        <FormKit type="button" label="sendMessage" @click="onSendMessage" />

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
        <FormKit type="button" label="sendFileByURL" @click="onSendFile" />
      </div>

      <div class="grow-1">
        <vue-json-pretty :data="response" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { AvailableRouterMethod, NitroFetchOptions } from 'nitropack'
import VueJsonPretty from 'vue-json-pretty'

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

const chatId = computed(() => `${phone.value}@c.us`)

const response = ref({})

function request(
  url: string,
  method: AvailableRouterMethod<any> = 'get',
  body?: any,
) {
  return $fetch(
    `${apiURL.value}/waInstance${instanceId.value}/${url}/${apiToken.value}`,
    {
      method: method,
      body: body,
    },
  ) as object
}

async function onGetSettings() {
  response.value = await request('getSettings')
}

async function onGetState() {
  response.value = await request('getStateInstance')
}

async function onSendMessage() {
  response.value = await request('sendMessage', 'post', {
    chatId: chatId.value,
    message: message.value,
  })
}

async function onSendFile() {
  response.value = await request('sendFileByUrl', 'post', {
    chatId: chatId.value,
    urlFile: fileURL.value,
    fileName: message.value,
  })
}
</script>

<style>
.form-full-width {
  --fk-max-width-input: none;
}
</style>
