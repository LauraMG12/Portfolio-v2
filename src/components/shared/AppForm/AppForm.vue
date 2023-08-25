<script setup lang="ts">
import { ref } from "vue";

import { contact } from "../../../content/Contact";

import DarkButton from "../../shared/AppButtons/DarkButton.vue";

//TODO: complete emailDomails[]
const emailDomains = [
  "gmail",
  "hotmail",
  "outlook",
  "yahoo",
  "proton",
  "mailbox",
  "zohomail",
];
const email = ref<string>("");
const message = ref<string>("");

function extractCorporativeName(): string {
  if (email.value === "" || !email.value.includes("@")) {
    return "";
  }
  const atPosition = email.value.indexOf("@");
  const lastDotPosition = email.value.lastIndexOf(".");
  const corporativeName = email.value.slice(atPosition + 1, lastDotPosition);
  if (emailDomains.includes(corporativeName)) {
    return "";
  }
  return capitalize(corporativeName);
}

function extractFormatedMessage(): string {
  if (message.value !== "") {
    return capitalize(message.value);
  }
  return "";
}

function sendEmail(): void {
  window.location.href = `mailto:laura.lmg12@gmail.com?subject=${extractCorporativeName()}&body=${extractFormatedMessage()}`;
}

function capitalize(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}
</script>

<template>
  <div class="contact-form">
    <label for="email">{{ contact.email }}</label>
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Write your email"
      v-model="email"
    />
    <label for="message">{{ contact.message }}</label>
    <textarea
      name="message"
      rows="10"
      cols="auto"
      placeholder="Write your message"
      v-model="message"
    />
    <DarkButton
      @click="sendEmail()"
      :text="contact.sendMessage"
      icon-name="plane"
    />
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  @media screen and (max-width: $breackpoint-medium) {
    width: 100%;
    margin-top: 25px;
  }
  &:deep(.button) {
    align-self: end;
    margin-top: 20px;
  }
  & label {
    margin-top: 15px;
    font-size: $font-size-p-mobile;
    font-family: $font-primary;
    color: $grey-dark;
    margin-left: 10px;
  }
  & input,
  & textarea {
    resize: none;
    border: 2px solid $grey-light;
    border-radius: 10px;
    padding: 10px 20px;
    font-family: $font-primary;
    &:focus {
      border: 2px solid $grey-dark;
    }
  }
}
</style>
