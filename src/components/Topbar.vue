<template>
   <div id="topbar">
     <div class="wrapper">
       <div class="logo">
         <img src="https://ooo.0o0.ooo/2017/08/04/59841e858990d.png"/>
         <span>在线简历制作</span>
       </div>
       <div class="actions">
         <div class="userActions">
           <span class="welcome">你好，{{user.username}}</span>
           <a href="#" class="button" @click.prevent="signOut">退出</a>
           <a href="#" class="button primary">预览</a>
         </div>
         <div class="userActions">
           <a href="#" class="button primary" @click.prevent="signUpDialogVisible = true">注册</a>
           <a href="#" class="button" @click.prevent="signInDialogVisible = true">登录</a>
         </div>
       </div>
       <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
         <SignUpForm @success="signIn($event)"/>
       </MyDialog>
       <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
         <SignInForm @success="signIn($event)"/>
       </MyDialog>
     </div>
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'Topbar',
   data(){
     return {
       signUpDialogVisible: false
     }
   },
   components: {
     MyDialog
   }
 }
 </script>
 
 <style lang="scss" scoped>
#topbar {
   background:#fff;
   box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
   >.wrapper {
     min-width: 1024px;
     max-width: 1440px;
     margin: 0 auto;
     height:64px;
   }
   >.wrapper {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 16px;
     >.logo {
       font-size:22px;
       color:#0d331f;
       >img {
         width:50px;
         height:45px;
         margin-left: .2em;
         vertical-align: middle;
       }
     }
   }
}
 .button {
   width: 60px;
   height: 28px;
   border: 1px solid #ff5b3b;
   border-radius: 3px;
   cursor: pointer;
   font-size: 14px;
   background: #fff;
   color: #0d331f;
   text-decoration: none;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   vertical-align: middle;
   &:hover{
     box-shadow: 1px 1px 1px hsla(0,0,0,.3);
   }
   &.primary {
     background:#ff5b3b;
     color: #fff;
   }
 }
 .actions {
   display: flex;
   .userActions {
     margin-right: 3em;
     .welcome {
       margin-right: .5em;
     }
   }
 }
 </style>