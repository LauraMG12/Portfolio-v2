<script setup lang="ts">
import { isSmallDevice } from "@/state/AppState";
import DarkButton from "./shared/AppButtons/DarkButton.vue";
import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
</script>

<template>
  <div id="contactSection">
    <div class="contact-header">
      <SvgIcon v-if="!isSmallDevice" name="bubble" />
      <div class="info">
        <div class="info-title">
          <h3 class="contact-title">Ready to work together?</h3>
          <SvgIcon v-if="!isSmallDevice" name="dashed" />
        </div>
        <h4>Let's get in touch</h4>
        <div class="email-container">
          <SvgIcon name="mail" />
          <div class="email">
            <p>laura.lmg12@gmail.com</p>
            <div class="underline" />
          </div>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Write your email"
      />
      <label for="message">Message</label>
      <textarea
        name="message"
        rows="10"
        cols="auto"
        placeholder="Write your message"
      />
      <DarkButton text="Send message" icon-name="plane" />
    </div>
  </div>
</template>

<style scoped lang="scss">
#contactSection {
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: $breackpoint-medium) {
    padding: 0;
    flex-direction: column;
  }
  .contact-header {
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: $breackpoint-medium) {
      width: 100%;
    }
    & .info {
      position: absolute;
      top: 145px;
      left: 115px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media screen and (max-width: $breackpoint-medium) {
        position: relative;
        top: 0;
        left: 0;
        gap: 10px;
      }
      & .info-title {
        position: relative;
        & h3 {
          font-weight: 700;
        }
        &:deep(.dashed) {
          position: absolute;
          top: 30%;
          right: 0;
          transform: translateX(60%);
        }
      }
      & .email-container {
        display: flex;
        margin-top: 30px;
        gap: 20px;
        width: fit-content;
        align-items: center;
        &:hover {
          cursor: pointer;
          & .email .underline {
            height: 100%;
          }
        }
        @media screen and (max-width: $breackpoint-medium) {
          margin-top: 20px;
        }
        & .email {
          width: fit-content;
          position: relative;
          & p {
            @media screen and (max-width: $breackpoint-small) {
              font-size: $font-size-small;
            }
          }
          & .underline {
            width: 105%;
            height: 7px;
            background: $blue-gradient-opacity-90;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
    }
  }
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
      border: 2px solid $grey-light;
      border-radius: 10px;
      padding: 10px 20px;
      font-family: $font-primary;
      &:focus {
        border: 2px solid $grey-dark;
      }
    }
  }
}
</style>
