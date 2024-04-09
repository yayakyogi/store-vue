<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <img src="/images/illustrations/transaction-success.svg" />
    <h1 class="title">Transaction Processed!</h1>
    <p class="description">Silahkan tunggu konfirmasi email dari kami dan kami akan menginformasikan resi secept mungkin!</p>
    <a-button size="large" type="primary">My Dashboard</a-button>
    <a-button size="large">Go Shopping</a-button>
  </div>
</template>

<style lang="less">
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .title {
    margin-bottom: 0;
    line-height: 15px;
  }

  .description {
    margin-bottom: 10px;
    color: @grey-color;
    max-width: 500px;
    text-align: center
  }
}
</style>
