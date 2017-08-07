<template>
   <div id="resumeEditor">
     <nav>
      <ol>
        <li v-for="(item,index) in resume.visibleItems" :class="{active: item === selected}" @click="selected = item">
          {{index}}
        </li>
      </ol>
     </nav>
      <ol class="panels">
        <li v-for="item in resume.visibleItems" v-show="item === selected">
          {{resume[item]}}
        </li>
      </ol>
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'ResumeEditor',
   data(){
    return {
      selected: 'bio',
      resume: {
        visibleItems: ['bio', 'workHistory', 'education', 'projects', 'awards', 'contacts', 'others'],
        bio: {
          name: '',
          intention: '',
          birth: '',
          city: '',
          telephone: '',
          email: '',
          avatar: '',
          title: ''
        },
        'workHistory': [],
        education: [],
        projects: [],
        awards: [],
        contacts: [],
        others: []
      }
    }
   }
 }
 </script>
 
 <style lang="scss" scoped>
  #resumeEditor {
    background:#fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    > nav {
      width: 80px;
      background: #0d331f;
      color: #fff;
      > ol {
        > li {
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding:2em 0;
          &.active {
            border-left: 4px solid #ff5b3b;
            background: #fff;
            color: #000;
          }
        }
      }
    }
    > .panels {
      flex-grow: 1;
      > li {
        padding: 24px;
        > h2.item-title {
          margin-bottom: .5em;
        }
      }
    }
  }
  ol {
    list-style: none;
  }
 </style>