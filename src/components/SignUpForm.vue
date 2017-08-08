<template>
   <div id="signUp">
     <form @submit.prevent="signUp">
       <div class="row">
         <label>用户名</label>
         <input type="text" v-model="formData.username" required placeholder="用户名不少于3位">
       </div>
       <div class="row">
         <label>邮箱</label>
         <input type="text" v-model="formData.email" required placeholder="邮箱格式比如：xxx@xxx.com">
       </div>
       <div class="row">
         <label>密码</label>
         <input type="password" v-model="formData.password" required placeholder="密码不少于6位">
       </div>
       <div class="actions">
         <input type="submit" value="提交注册">
       </div>
     </form>
   </div>
 </template>
 
 <script>

 import AV from '../lib/leancloud';

 export default {
   name: 'SignUpForm',
   data(){
     return {
       formData: {
         username: '',
         email: '',
         password: ''
       },
       errorMessage: ''
     }
   },
   created(){

   },
   methods: {
     signUp(){
       let {username, email, password} = this.formData
       // 新建 AVUser 对象实例
       var user = new AV.User();
       // 设置用户名
       user.setUsername(username);
       // 设置密码
       user.setPassword(password);
       // 设置邮箱
       user.setEmail(email);
       user.signUp().then((loginedUser) => {
         this.$emit('success', {
           username: loginedUser.attributes.username,
           id: loginedUser.id
         })
       },(error) => {
         alert(JSON.stringify(error));
       });
     }
   }
 }
 </script>
 
 <style lang="scss" scoped>
  #signUp form {
    margin-top:.5em;
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
          color: white;
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