<template>
  <a-result status="401" title="401" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>