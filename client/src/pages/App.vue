<template>
  <article class="test">
    <p>{{item}}</p>
    <table>
      <tbody>
        <tr>
          <td>{{item}}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data() {
    return {
      item: "hello world"
    };
  }
};
</script>

<style>
.test > p {
  background-color: aqua;
}
</style>