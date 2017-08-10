<template>
  <div id="app" :class="{previewMode : previewMode}">
    <div :class="{page:page,fullPage:fullPage}">
      <header>
        <Topbar />
      </header>
      <main>
        <ResumeEditor />
        <ResumePreview @preview="preview" />
      </main>
      <el-button id="exitPreview" v-on:click="exitPreview">退出全屏</el-button>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'
import store from './store/index'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'
export default {
  name: 'app',
  store,
  data() {
    return {
      previewMode: false,
      page:true,
      fullPage:false
    }
  },
  components: { Topbar, ResumeEditor, ResumePreview },
  methods: {
    exitPreview() {
      this.previewMode = false
      this.fullPage = false
      this.page = true
    },
    preview() {
      this.previewMode = true
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
svg.icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
  vertical-align: -0.1em;
  font-size: 16px;
}
#app {
  width: 100%;
  height: 100%;
  background: #f0efe9;
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    >main {
      width: 100%;
      min-width: 1024px;
      max-width: 1440px;
      margin: 16px 0 0 0;
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      align-self: center;
      >#resumeEditor {
        min-width: 35%;
        background: #fff;
      }
      >#resumePreview {
        flex-grow: 1;
        margin-left: 16px;
        background: #fff;
      }
    }
  }
  .fullPage{
    margin: 10px;
  }
  &.previewMode{
    overflow: auto; //使得全屏显示时的底部白边
  }
  &.previewMode #topbar {
    display: none;
  }
  &.previewMode #resumeEditor {
    display: none;
  }
  &.previewMode #resumePreview {
    min-width: 976px;
    margin: 0 auto;
  }
  #exitPreview {
    display: none;
  }
  &.previewMode #exitPreview {
    display: inline-block;
    position: fixed;
    right: 16px;
    bottom: 16px;
  }
}
</style>