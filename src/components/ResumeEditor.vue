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
            <input type="text" v-model="resume[item.field][key]">
          </div>
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
          title: ''
        },
        education: [
          {school: '南京大学', time: '2011.09-2016.02', content: '本科'},
          {school: '丰禾中学', time: '2004.09-2007.06', content: '高中'}
        ],
        skills: [
          {skill: 'Javascript', level: '熟练'},
          {skill: 'CSS3', level: '熟练'},
          {skill: 'HTML5', level: '熟练'},
          {skill: 'NodeJS', level: '了解'},
          {skill: 'Less/Scss', level: '熟练'},
          {skill: 'PHP/MySQL', level: '熟练'}
        ],
        workHistory: [
          {company: '深圳市五谷网络科技有限公司', time: '2015.10-2016.12', title: 'web前端开发', content: '我的第三份工作是：是可分类性上了克隆人类邪恶的'},
          {company: '深圳市掌众信息技术有限公司', time: '2014.07-2015.10', title: '交互设计师', content: '我的第二份工作是：是可分类性上了克隆人类邪恶的'},
          {company: '深圳市五谷网络科技有限公司', time: '2011.06-2014.07', title: '网页UI设计师', content: '我的第一份工作是：是可分类性上了克隆人类邪恶的'}
        ],
        projects: [
          {project: '大丰收农产品电商网站', skill: 'Html Css JavaScript jQuery Ajax', content: '我的第一个项目，我的第一个项目我的第一个项目，三款克莱斯勒力量'},
          {project: 'Vue项目1: Todo待办应用', skill: 'Vue.js leanCloud Html Css JavaScript', content: '我的第一个项目，我的第一个项目我的第一个项目，三款克莱斯勒力量'},
          {project: 'Vue项目2: 在线简历制作工具', skill: 'Vue.js Vuex Html5 Css3 JavaScript', content: '我的第一个项目，我的第一个项目我的第一个项目，三款克莱斯勒力量'}
        ],
        awards: [
          {award: 'Test 1' , content: 'This is a test file'},
          {award: 'Test 2', content: 'This is a test file'}
        ],
        contacts: [
          {GitHub: 'andreaxiang' , Link: 'https://andreaxiang.github.io'},
          {'微博': 'xxxxxx' , Link: 'https://andreaxiang.github.io'},
          {'简书': 'xxxxxx' , Link: 'https://andreaxiang.github.io'}
        ]
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