<template>
  <div class="business-preview">
    <h5>שם העסק</h5>
    <h5>{{ item.name }} ({{ item.nameEn }})</h5>
    <h5>כתובת העסק</h5>
    <h5>{{ item.address }}, {{ item.city }}</h5>
    <h5>מספר חשבוניות</h5>
    <h5>{{ item.documentCount }}</h5>
    <h5>מטבע לחיוב</h5>
    <h5>{{ item.settings.documentCurrency }}</h5>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>