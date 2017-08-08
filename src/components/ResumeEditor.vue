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
          <div v-if="resume[item.field] instanceof Array">
            <div class="subitem" v-for="subitem in resume[item.field]">
              <div class="resumeField" v-for="(value,key) in subitem">
                <label> {{key}} </label>
                <input type="text" :value="value">
              </div>
              <hr>
            </div>
          </div>
          <div class="resumeField" v-else v-for="(value,key) in resume[item.field]">
            <label> {{key}} </label>
            <input type="text" :value="value" @input="changeResumeField([item.field, key, $event.target.value)">
          </div>
        </li>
      </ol>
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'ResumeEditor',
   computed: {
     selected: {
       get(){
         return this.$store.state.selected
       },
       set(value){
         return this.$store.commit('switchTab', value)
       }
     },
     resume(){
       return this.$store.state.resume
     }
   },
   methods: {
     changeResumeField(field, subfield, value){
       this.$store.commit('updateResume'){
         field,
         subfield,
         value
       })
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
      overflow: auto;
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
  .resumeField {
    > label {
      display: block;
    }
    input[type="text"] {
      margin: 16px 0;
      border: 1px solid #ddd;
      box-shadow: inset 0 1px 3px 0 rgba(0,0,0,.25);
      width: 100%;
      height: 40px;
      padding: 0 8px;
      outline: none;
    }
  }
  svg.icon {
    width: 24px;
    height: 24px;
  }
  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin:24px 0;
  }
 </style>