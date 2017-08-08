<template>
   <div id="resumePreview">
     <div class="top">
      <h3>RESUME</h3>
     </div>
     <div class="aside">
       <section class="avatar">
        <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1502182936098&amp;di=b668cb1f083fc55265080b795e3db6c3&amp;imgtype=0&amp;src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201603%2F30%2F20160330184340_BKeM4.jpeg">
       </section>
       <section data-name="profile" v-show="resume.profile">
         <h1>
           {{resume.profile.name}}
         </h1>
         <h4>求职意向：{{resume.profile.intention}}</h4>
         <div class="aside-title">基本信息</div>
         <div class="person-info">
           <p>生日：{{resume.profile.birthday}}</p>
           <p>现居：{{resume.profile.city}}</p>
           <p>电话：{{resume.profile.telephone}}</p>
           <p>邮箱：{{resume.profile.email}}</p>
         </div>
       </section>
       <section data-name="skills" v-show="resume.skills">
         <div class="aside-title">职业技能</div>
         <ol>
           <li v-for="item in resume.skills">
             <p class="skill-detail">
               <span>{{item.skill}}</span>
               <span v-show="item.level"> {{item.level}} </span>
             </p>
           </li>
         </ol>
       </section>
     </div>

     <section data-name="education" v-show="resume.education">
       <h2>
         <svg class="icon">
           <use :xlink:href="`#icon-${item.icon}`"></use>
         </svg>
         毕业院校
       </h2>
       <ol>
         <li v-for="item in resume.education">
           <h3>{{item.school}}
             <p v-show="item.time"> - {{item.time}} </p>
             <p v-show="item.content"> - {{item.content}} </p>
           </h3>
         </li>
       </ol>
     </section>

     <section data-name="workHistory" v-show="resume.workHistory">
       <h2>
         <svg class="icon">
           <use :xlink:href="`#icon-${item.icon}`"></use>
         </svg>
         工作经历
       </h2>
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
       <h2>
         <svg class="icon">
           <use :xlink:href="`#icon-${item.icon}`"></use>
         </svg>
         项目展示
       </h2>
       <ol>
         <li v-for="item in resume.projects">
           <h3>{{item.project}}</h3>
           <p v-show="item.skill"> {{item.skill}} </p>
           <p v-show="item.content"> {{item.content}} </p>
         </li>
       </ol>
     </section>
     <section data-name="awards" v-show="resume.awards">
       <h2>
         <svg class="icon">
           <use :xlink:href="`#icon-${item.icon}`"></use>
         </svg>
         获奖情况
       </h2>
       <ol>
         <li v-for="item in resume.awards">
           <h3>{{item.award}}</h3>
           <p v-show="item.content"> {{item.content}} </p>
         </li>
       </ol>
     </section>
     <section data-name="contacts" v-show="resume.contacts">
       <h2>
         <svg class="icon">
           <use :xlink:href="`#icon-${item.icon}`"></use>
         </svg>
         联系方式
       </h2>
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
    padding: 0;
    color: #333;
    line-height: 1.2;
    overflow: auto;
    position: relative;
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
    .top {
      width: 100%;
      background: #3e6391;
      line-height: 46px;
      > h3 {
        color: #fff;
        margin-left: .5em;
      }
    }
    .aside {
      width: 260px;
      height: 100%;
      background: #e6e6e6;
      position: fixed;
      right: .9em;
      top: 5em;
      text-align: center;
      overflow: auto;
      >.avatar {
        width: 150px;
        height: 150px;
        margin: .5em auto;
        border-radius: 50%;
        background: #fff;
        padding: 3px;
        text-align: center;
        z-index: 10;
        > img {
          width: 144px;
          height: 144px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
      >section[data-name="profile"],section[data-name="skills"]{
        margin: 1.5em 0;
        > .aside-title {
          width: 85%;
          margin: .8em auto;
          font-size: 1.2em;
          padding: .3em .8em;
          border: 2px solid #3e6391;
          color: #3e6391;
        }
        > h1 {
          margin: .1em 0;
          font-size: 1.8em;
          color: #3e6391;
        }
        > h4 {
          margin: .1em 0 .2em 0;
        }
        >.person-info{
          width: 85%;
          margin:0 auto;
          text-align: left;
          >p {
            font-size: 14px;
            margin: .2em .5em 0 0;
          }
        }
      }
      >section[data-name="skills"]{
        margin: 1em 0 .5em 0;
        .skill-detail{
          width: 85%;
          margin: 0 auto;
          padding: .3em;
          font-size: 14px;
          text-align: left;
          overflow: hidden;
          >span:first-child {
            float: left;
            width: 40%;
          }
          >span:nth-child(2){
            margin-left: .8em;
            float: left;
            width: 50%;
          }
        }
      }
    }
    section {
      > h2:first-child {
        background: #ddd;
        display: inline-block;
        padding: .2em;
        margin-bottom: .5em;
      }
    }
    section[data-name="workHistory"],
    section[data-name="projects"],
    section[data-name="awards"]{
      padding: 0 .5em;
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
      padding: 0 .5em;
      li {
        line-height: 1.5;
      }
    }
    section[data-name="contacts"]{
      padding: 0 .5em;
      td:first-child{
        padding-right: 1em;
      }
    }
  }
 </style>