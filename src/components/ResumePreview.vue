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
         <ol class="person-info">
           <li>生日：{{resume.profile.birthday}}</li>
           <li>现居：{{resume.profile.city}}</li>
           <li>电话：{{resume.profile.telephone}}</li>
           <li>邮箱：{{resume.profile.email}}</li>
         </ol>
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
     <div class="resume">
       <section data-name="education" v-show="resume.education">
         <h2>
           <b class="icon-img"></b>
           教育背景  Education Background
         </h2>
         <ol>
           <li v-for="item in resume.education">
             <h3>
               <p v-show="item.time"> {{item.time}} </p>
               <p v-show="item.school"> {{item.school}} </p>
               <p v-show="item.content"> {{item.content}} </p>
             </h3>
           </li>
         </ol>
       </section>

       <section data-name="workHistory" v-show="resume.workHistory">
         <h2>
           <b class="icon-img"></b>
           工作经历  Work Experience
         </h2>
         <ol>
           <li v-for="item in resume.workHistory">
             <h4 v-show="item.time"> {{item.time}} </h4>
             <h4>{{item.company}}</h4>
             <h4 v-show="item.title"> {{item.title}} </h4>
             <p v-show="item.content">工作描述： {{item.content}} </p>
           </li>
         </ol>
       </section>
       <section data-name="projects" v-show="resume.projects">
         <h2>
           <b class="icon-img"></b>
           项目展示  Projects Show
         </h2>
         <ol>
           <li v-for="item in resume.projects">
             <h4 v-show="item.project">项目名称：<a href="v-show='item.link'">{{item.project}}</a></h4>
             <h4 v-show="item.skill">技术栈： {{item.skill}} </h4>
             <p v-show="item.content">项目描述： {{item.content}} </p>
           </li>
         </ol>
       </section>
       <section data-name="awards" v-show="resume.awards">
         <h2>
           <b class="icon-img"></b>
           获奖情况 Additional Performance
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
           <b class="icon-img"></b>
           联系方式  Contact Me
         </h2>
         <ol>
           <li v-for="item in resume.contacts">
             <h3><a href="v-show='item.link'">{{item.contact}}</a></h3>
           </li>
         </ol>
       </section>
     </div>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: space-between;
    * {
      box-sizing: border-box;
      font-variant: normal;
      font-weight: normal;
    }
    ol {
      list-style: none;
    }
    p {
      white-space: pre-line;
    }
    .top {
      width: 100%;
      background: #3e6391;
      //background: #50e3a4;
      line-height: 46px;
      box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
      z-index: 10;
      > h3 {
        color: #fff;
        margin-left: .5em;
      }
    }
    .resume {
      width: 70%;
      min-height: 100vh;
      float: left;
    }
    .aside {
      width: 30%;
      //background: #e6e6e6;
      background: #f0efe9;
      float: right;
      text-align: center;
      overflow: hidden;
      >.avatar {
        width: 150px;
        height: 150px;
        margin: .5em auto;
        border-radius: 50%;
        background: #fff;
        padding: 3px;
        text-align: center;
        > img {
          width: 144px;
          height: 144px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
    }
    section[data-name="profile"],section[data-name="skills"]{
        margin: 1.5em 0;
        ol {
          border-bottom: none;
        }
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
          >li {
            font-size: 14px;
            margin: .2em .5em 0 0;
          }
        }
    }
    section[data-name="skills"] {
        >ol {
          width: 85%;
          margin:0 auto;
          >li {
            font-size: 14px;
            margin: .2em 0 .5em 0;
            text-align: left;
            >p.skill-detail {
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
      }
    section {
      > h2 {
        display: inline-block;
        padding: .2em;
        margin: 1em 0 .5em 0;
        font-size: 1.2em;
        > b.icon-img {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 1px dotted #3e6391;
          border-radius: 50%;
          background: transparent;
          vertical-align: middle;
          margin-left:.5em;
          margin-top: -3px;
        }
      }
      > ol {
        padding: .8em;
        border-bottom: 1px solid #e0e0e0;
        > li {
          margin-bottom:.8em;
        }
      }
    }
    section[data-name="workHistory"],
    section[data-name="awards"]{
      li {
        margin-bottom: 1.5em;
        > h4 {
          display: inline-block;
          padding: .5em 0;
          margin-right: 2em;
          color: #446a9a;
          &h4:last-child(){
            margin-right: 0;
          }
        }
        > p {
          font-size: 14px;
        }
      }
    }
    section[data-name="projects"] {
      li {
        padding-bottom: 1em;
        margin-bottom: 1.5em;
        border-bottom: 1px dotted #e0e0e0;
        > h4 {
          padding: .3em 0;
          margin-right: 2em;
          color: #446a9a;
          &h4:last-child(){
            margin-right: none;
          }
        }
        > p {
          padding-top: .2em;
          font-size: 14px;
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
    section[data-name="education"] {
      ol>li>h3>p {
        display: inline-block;
        margin: .2em .8em;
        font-size: .8em;
      }
      li {
        line-height: 1.5;
      }
    }
    section[data-name="contacts"] {
      li {
        color: #3e6391;
        font-size: .8em;
        float: left;
        margin: 0 0 1.5em 1em;
      }
      ol {
        border-bottom: none;
      }
    }
  }
 </style>