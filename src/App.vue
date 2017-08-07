<template>
  <div>
    <Topbar/>
    <ResumeEditor/>
    <ResumePreview/>
  </div>
</template>

<script>
import './assets/reset.css'

import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'

export default {
  name: 'app',
  data: function(){
    return {
      text: 'hello world'
    }
  },
  components: {Topbar, ResumeEditor, ResumePreview}
}
</script>

<style>

</style>
