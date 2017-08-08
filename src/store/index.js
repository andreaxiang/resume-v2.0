import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    resume: {
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
            birthday: '',
            city: '',
            telephone: '',
            email: ''
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
            {project: '大丰收农产品电商网站', link: 'https://andreaxiang.github.io/dfs.com', skill: 'Html Css JavaScript jQuery Ajax', content: '我的第一个项目，我的第一个项目我的第一个项目，三款克莱斯勒力量'},
            {project: 'Vue项目1: Todo待办应用', link: 'https://andreaxiang.github.io/dfs.com', skill: 'Vue.js leanCloud Html Css JavaScript', content: '我的第一个项目，我的第一个项目我的第一个项目，三款克莱斯勒力量'},
            {project: 'Vue项目2: 在线简历制作工具', link: 'https://andreaxiang.github.io/dfs.com', skill: 'Vue.js Vuex Html5 Css3 JavaScript', content: '我的第一个项目，我的第一个项目我的第一个项目，三款克莱斯勒力量'}
      ],
      awards: [
            {award: 'Test 1' , content: 'This is a test file'},
            {award: 'Test 2', content: 'This is a test file'}
      ],
      contacts: [
            {contact: 'GitHub' , link: 'https://andreaxiang.github.io'},
            {contact: '微博' , link: 'https://andreaxiang.github.io'},
            {contact: '简书' , link: 'https://andreaxiang.github.io'}
      ]
    }
  },
  mutations: {
    switchTab(state, payload){
      state.selected = payload
    }
  }
})