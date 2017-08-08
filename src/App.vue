<template>
<div id="app">
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</div>
</template>

<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'
import icons from './assets/icons'

import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'

import store from './store/index.js'

export default {
  name: 'app',
  store,
  components: {Topbar, ResumeEditor, ResumePreview},
  created(){
    //将SVG icons 插入 body 中
    document.body.insertAdjacentHTML('afterbegin', icons)
    //数据保存到localStorage
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    //this.$store.commit('initState', state)
  }
}
</script>

<style lang="scss">
 .page {
   height: 100vh;
   display: flex;
   flex-direction: column;
   background: #f0efe9;
   >main {
     flex-grow: 1;
   }
   >main {
     min-width: 1024px;
     max-width: 1440px;
     margin: 16px 0 0 0;
     display: flex;
     justify-content: space-between;
     width: 100%;
     align-self: center;
   }
 }

 #resumeEditor {
   min-width: 35%;
   background: #50e3a4;
 }

 #resumePreview {
   flex-grow: 1;
   margin-left: 16px;
   background: #fff;
 }

 svg.icon {
   height: 1em;
   width: 1em;
   fill: currentColor;
   vertical-align: -0.1em;
   font-size: 16px;
 }
</style>
