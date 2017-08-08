<template>
   <div id="signIn">
     <form @submit.prevent="signIn">
       <div class="row">
         <label>用户名</label>
         <input type="text" v-model="formData.username" required placeholder="请输入用户名">
       </div>
       <div class="row">
         <label>密码</label>
         <input type="password" v-model="formData.password" required placeholder="请输入登录密码">
       </div>
       <div class="actions">
         <input type="submit" value="登录">
         <span class="errorMessage">{{errorMessage}}</span>
       </div>
     </form>
   </div>
 </template>
 
 <script>

 import AV from '../lib/leancloud';
 import getErrorMessage from '../lib/getErrorMessage';
 import getAVUser from '../lib/getAVUser';

 export default {
   name: 'SignInForm',
   data(){
     return {
       formData: {
         username: '',
         password: ''
       },
       errorMessage: ''
     }
   },
   methods: {
     signIn(){
       let {username, password} = this.formData
       AV.User.logIn(username, password).then(() => {
         this.$emit('success', getAVUser())
       },(error) => {
         this.errorMessage = getErrorMessage(error)
       });
     }
   }
 }
 </script>
 
 <style lang="scss" scoped>
   #signIn form {
     margin-top:.8em;
       > .row {
         display: flex;
         padding: .7em .5em;
         > label {
           margin-top: .5em;
           color: #616473;
           font-size: 14px;
         }
         > label:first-child {
           width: 4em;
           padding: 0.2em 0;
         }
       > input {
         width: 100%;
         padding: .5em;
         outline: none;
         border: 1px solid #aaa;
         color: #3e434f;
         background: transparent;
       }
     }
     > .actions {
       display: flex;
       justify-content: center;
       align-items: center;
       > input[type="submit"] {
         width:12.1em;
         text-align: center;
         padding: .5em 1em;
         color: #fff;
         border: 1px solid #ff8e78;
         outline: none;
         background: #ff8e78;
         border-radius: 2px;
         margin-left:2.8em;
         &:hover {
           color: #fff;
           border: 1px solid #ff5b3b;
           background: #ff5b3b;
           cursor: pointer;
         }
       }
     }
   }
   ::-webkit-input-placeholder {
     font-family: arial;
     font-weight: lighter;
     font-size: .8em;
     color: #bbb;
   }
 </style>