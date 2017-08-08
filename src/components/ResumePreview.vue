<template>
   <div id="resumePreview">
     <section>
       <div class="actions">
         <a class="button primary">预览</a>
         <a class="button" href="#">保存</a>
       </div>
     </section>
     <section data-name="profile" v-show="resume.profile">
       <h1>
         {{resume.profile.name}}
       </h1>
       <h2>求职意向：{{resume.profile.intention}}</h2>
       <p>
         <small>生日：{{resume.profile.birthday}}</small>
         <small>现居：{{resume.profile.city}}</small>
         <small>电话：{{resume.profile.phone}}</small>
         <small>邮箱：{{resume.profile.email}}</small>
       </p>
     </section>
     <section data-name="education" v-show="resume.education">
       <h2>毕业院校</h2>
       <ol>
         <li v-for="item in resume.education">
           <h3>{{item.school}}
             <p v-show="item.time"> - {{item.time}} </p>
             <p v-show="item.content"> - {{item.content}} </p>
           </h3>
         </li>
       </ol>
     </section>
     <section data-name="skills" v-show="resume.skills">
       <h2>职业技能</h2>
       <ol>
         <li v-for="item in resume.skills">
           <h3>{{item.skill}}</h3>
           <p v-show="item.level"> {{item.level}} </p>
         </li>
       </ol>
     </section>
     <section data-name="workHistory" v-show="resume.workHistory">
       <h2>工作经历</h2>
       <ol>
         <li v-for="item in resume.workHistory">
           <h3>{{item.company}}</h3>
           <p v-show="item.time"> {{item.time}} </p>
           <p v-show="item.title"> {{item.title}} </p>
           <p v-show="item.content"> {{item.content}} </p>
         </li>
       </ol>
     </section>
     <section data-name="projects" v-show="resume.projects">
       <h2>项目展示</h2>
       <ol>
         <li v-for="item in resume.projects">
           <h3>{{item.project}}</h3>
           <p v-show="item.skill"> {{item.skill}} </p>
           <p v-show="item.content"> {{item.content}} </p>
         </li>
       </ol>
     </section>
     <section data-name="awards" v-show="resume.awards">
       <h2>获奖情况</h2>
       <ol>
         <li v-for="item in resume.awards">
           <h3>{{item.award}}</h3>
           <p v-show="item.content"> {{item.content}} </p>
         </li>
       </ol>
     </section>
     <section data-name="contacts" v-show="resume.contacts">
       <h2>联系方式</h2>
       <table>
         <tr v-for="item in resume.contacts">
           <td>{{item.contact}}</td>
           <td v-show="item.content"> {{item.content}} </td>
         </tr>
       </table>
     </section>
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'ResumePreview',
   computed: {
     resume(){
       return this.$store.state.resume
     }
   },
   created(){
     console.log(this.resume)
   }
 }
 </script>
 
 <style lang="scss">
  #resumePreview {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    padding: 2em;
    color: #333;
    line-height: 1.2;
    overflow: auto;
    * {
      box-sizing: border-box;
      font-variant: normal;
      font-weight: normal;
    }
    ol {
      list-style: none;
    }
    section + section {
      margin-top: 2em;
    }
    p {
      white-space: pre-line;
    }
    section {
      > h2:first-child {
        background: #ddd;
        display: inline-block;
        padding: .2em;
        margin-bottom: .5em;
      }
      > .actions {
        float: right;
      }
      .button {
         width:60px;
         height:28px;
         border: 1px solid #ff5b3b;
         border-radius: 3px;
         cursor: pointer;
         font-size: 14px;
         background:#fff;
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
    }
    section[data-name="profile"]{
      > h1 {
        margin: .1em 0;
        font-size: 3em;
      }
      >p small {
        margin: .2em .5em 0 0;
      }
    }
    section[data-name="workHistory"],
    section[data-name="projects"],
    section[data-name="awards"]{
      li + li { margin-top: 1em; }
      li {
        h3 {
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: .3em;
          margin-bottom: .3em;
        }
      }
    }
    section[data-name="education"]{
      li {
        line-height: 1.5;
      }
    }
    section[data-name="contacts"]{
      td:first-child{
        padding-right: 1em;
      }
    }
  }
 </style>