<template>
   <div id="resumeEditor">
     <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
     </nav>
      <ol class="panels">
        <li v-for="item in resume.config" v-show="item.field === selected">
          {{resume[item.field]}}
        </li>
      </ol>
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'ResumeEditor',
   data(){
    return {
      selected: 'profile',
      resume: {
        visibleItems: ['profile','education', 'skills', 'workHistory', 'projects', 'awards', 'contacts'],
        config: [
          {field: 'profile', icon: 'id'},
          {field: 'education', icon: 'book'},
          {field: 'skills', icon: 'heart'},
          {field: 'workHistory', icon: 'work'},
          {field: 'projects', icon: 'add'},
          {field: 'awards', icon: 'cup'},
          {field: 'contacts', icon: 'phone'}
        ],

        profile: {
          name: '',
          intention: '',
          birth: '',
          city: '',
          telephone: '',
          email: '',
          avatar: '',
          title: ''
        },
        education: [],
        skills: [],
        workHistory: [],
        projects: [],
        awards: [],
        contacts: []
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
  svg.icon {
    width: 24px;
    height: 24px;
  }
 </style>