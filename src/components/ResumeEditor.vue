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
        <li v-for="item in resumeConfig" v-show="item.field === selected">
          <div v-if="item.type === 'array'">
            <h2 class="item-title">{{item.title}}</h2>
            <div class="subitem" v-for="(subitem, i) in resume[item.field]">
              <el-button class="remove" type="danger" @click="removeResumeSubField(item.field, i)" size="mini">删除</el-button>
              <div class="resumeField" v-for="(value,key) in subitem">
                <label> {{key}} </label>
                <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
              </div>
              <hr>
            </div>
            <el-button type="success"  @click="addResumeSubField(item.field)">添加</el-button>
          </div>
          <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
            <label> {{key}} </label>
            <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
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
     },
     resumeConfig() {
       return this.$store.state.resumeConfig
     }
   },
   methods: {
     changeResumeField(path, value){
       this.$store.commit('updateResume',{
         path,
         value
       })
     },
     addResumeSubField(field) {
       console.log(1);
       this.$store.commit('addResumeSubField', { field })
     },
     removeResumeSubField(field, index) {
       this.$store.commit('removeResumeSubField', { field, index })
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