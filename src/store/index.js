import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from '../lib/leancloud.js'
import getAVUser from '../lib/getAVUser.js'

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
    resume: {
    }
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
      state.user.username = ''
      state.resume.id = ''
    },
    addResumeSubField(state, {field}) {
      let empty = {}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
        Vue.set(empty, key, '')
      })
    },
    removeResumeSubField(state, {field, index}) {
      state.resume[field].splice(index, 1)
    },
    //设置resume数据
    setResume(state, payload){
      state.resumeConfig.map(({field}) => {
        Vue.set(state.resume, field, resume[field])
      })
      state.resume.id = resume.id
    },
    setResumeId(state,{id}){
      state.resume.id = id
    }
  },
  actions: {
    saveResume({state, commit}, payload){
      //新建一个Resume的类
      var Resume = AV.Object.extend('Resume')
      var resume = new Resume()
      if(state.resume.id){
        resume.id = state.resume.id
      }

      var currentUserId = getAVUser().id

      resume.set('profile', state.resume.profile)
      resume.set('education', state.resume.education)
      resume.set('skills', state.resume.skills)
      resume.set('workHistory', state.resume.workHistory)
      resume.set('projects', state.resume.projects)
      resume.set('awards', state.resume.awards)
      resume.set('contacts', state.resume.contacts)
      //设置当前用户owner_id
      resume.set('owner_id', currentUserId)

      //设置访问权限
      var acl = new AV.ACL()
      acl.setPublicReadAccess(AV.User.current(), true) //只有这个 user 能读
      acl.setPublicWriteAccess(AV.User.current(), true) //只有这个 user 能写

      resume.setACL(acl)
      resume.save().then(function(response){
        if(!state.resume.id){
          commit('setResumeId', {
            id: response.id
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    fetchResume({commit}, payload){
      var query = new AV.Query('Resume')
      query.equalTo('owner_id', getAVUser().id)
      query.first().then((resume)=>{
        if(resume){
          commit('setResume', {
            id: resume.id,
            profile: resume.profile,
            education: resume.education,
            skills: resume.skills,
            workHistory: resume.workHistory,
            projects: resume.projects,
            awards: resume.awards,
            contacts: resume.contacts,
            owner_id: resume.owner_id
          })
        }
      })
    }
  }
})