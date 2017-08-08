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
            {school: '', time: '', content: ''}
      ],
      skills: [
            {skill: '', level: ''}
      ],
      workHistory: [
            {company: '', time: '', title: '', content: ''}
      ],
      projects: [
            {project: '', link: '', skill: '', content: ''}
      ],
      awards: [
            {award: '' , content: ''}
      ],
      contacts: [
            {contact: '' , link: ''}
      ]
    }
  },
  mutations: {
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
      console.log(state.user)
    }
  }
})