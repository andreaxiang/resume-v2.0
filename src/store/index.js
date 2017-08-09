import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resumeConfig: [
      {
        field: 'profile',
        icon: 'id',
        keys: ['name','intention', 'birthday', 'city', 'telephone', 'email'],
        title: '个人信息'
      },
      {
        field: 'education',
        icon: 'book',
        type: 'array',
        keys: ['school', 'time', 'content'],
        title: '教育经历'
      },
      {
        field: 'skills',
        icon: 'add',
        type: 'array',
        keys: ['skill', 'level'],
        title: '职业技能'
      },
      {
        field: 'workHistory',
        icon: 'work',
        type: 'array',
        keys: ['company', 'time', 'title', 'content'],
        title: '工作经历'
      },
      {
        field: 'projects',
        icon: 'heart',
        type: 'array',
        keys: ['project', 'link', 'skill', 'content'],
        title: '项目经验'
      },
      {
        field: 'awards',
        icon: 'cup',
        type: 'array',
        keys: ['award', 'content'],
        title: '加分项目'
      },
      {
        field: 'contacts',
        icon: 'phone',
        type: 'array',
        keys: ['contact', 'link', 'content'],
        title: '联系方式'
      }
    ],
    resume: {}
  },
  mutations: {
    initState(state, payload) {
      state.resumeConfig.map((item) => {
        if (item.type === 'array') {
          //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
          Vue.set(state.resume, item.field, [])
        } else {

          //state.resume[item.field] = {} // 这样写 Vue 无法监听属性变化
          Vue.set(state.resume, item.field, {})
          item.keys.map((key) => {
            //state.resume[item.field][key] = '' // 这样写 Vue 无法监听属性变化
            Vue.set(state.resume[item.field], key, '')
          })
        }
      })
      Object.assign(state, payload)
      console.log('resume', state.resumeConfig)
    },
    switchTab(state, payload){
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload){
      Object.assign(state.user, payload)
    },
    removeUser(state){
      state.user.id = ''
    },
    addResumeSubField(state, { field }) {
      let empty = {}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
        Vue.set(empty, key, '')
      })
    },
    removeResumeSubField(state, { field, index }) {
      state.resume[field].splice(index, 1)
    }
  }
})