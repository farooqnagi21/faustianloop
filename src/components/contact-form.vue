<template>
  <form class="mb-6 px-3">
    <div class="field">
      <label class="label is-small">Name</label>
      <div class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="Name" value="" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label is-small">Email</label>
      <div class="control has-icons-left">
        <input
          class="input is-small"
          type="email"
          placeholder="abc@example.com"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label is-small">Message</label>
      <div class="control">
        <textarea
          class="textarea is-small has-fixed-size"
          placeholder="Message or Query"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control is-flex is-justify-content-flex-end">
        <button type="Submit" class="button is-primary is-small">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
</style>
