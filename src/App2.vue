<template>
  <div id="app" :class="{previewMode : previewMode}">
    <div :class="{page:page,fullPage:fullPage}">
      <header>
        <Topbar @preview="preview" />
      </header>
      <main>
        <ResumeEditor/>
        <ResumePreview/>
      </main>
      <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
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
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'

export default {
  name: 'app',
  store,
  data(){
    return {
      previewModel: flase,
      page: true,
      fullPage: false
    }
  },
  components: {Topbar, ResumeEditor, ResumePreview},
  methods:{
    exitPreview(){
      this.previewModel = false
      this.fullPage = false
      this.page = true
    },
    preview(){
      this.previewModel = true
      this.fullPage = true
      this.page = false
    }
  },
  created() {
    document.body.insertAdjacentHTML('afterbegin', icons) //插入icon的svg
    let state = localStorage.getItem('state')
    if (state) {
      state = JSON.parse(state)
    }
    this.$store.commit('initState', state)
    this.$store.commit('setUser', getAVUser())
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
