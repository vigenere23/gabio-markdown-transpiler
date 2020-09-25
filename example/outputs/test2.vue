<template>
  <div>
    <GioTitle no-margin fontSize="12rem">A bright sun</GioTitle>
<GioHeading :level="1" id="#the-day-i-was-born">The day I was born</GioHeading>
<GioBodyText>It was in the year <strong>503</strong>, once...</GioBodyText>
<GioCaption><GioBodyText><em>They should be all damned</em></GioBodyText>
</GioCaption>
<GioBodyText>
      <GioCaptionedImage
        :srcs="['@example/assets/test-image.png']"
        caption="test image"
        lazy
      />
</GioBodyText>

  </div>
</template>

<script lang="ts">
  
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Test2 extends Vue {}
</script>
