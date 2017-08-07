<template>
   <div id="resumeEditor">
     <nav>
      <ol>
        <li class="active"> xxx1 </li>
        <li> xxx2 </li>
        <li> xxx3 </li>
        <li> xxx4 </li>
        <li> xxx5 </li>
        <li> xxx6 </li>
        <li> xxx7 </li>
      </ol>
     </nav>
      <ol class="panels">
        <li>1111</li>
        <li>2222</li>
        <li>3333</li>
        <li>4444</li>
        <li>5555</li>
        <li>6666</li>
        <li>7777</li>
      </ol>
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'ResumeEditor',
   data(){
    return {

    }
   }
 }
 </script>
 
 <style lang="scss" scoped>
  #resumeEditor {
    background:#fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    > nav {
      width: 80px;
      background: #0d331f;
      color: #fff;
      > ol {
        > li {
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding:2em 0;
          &.active {
            border-left: 4px solid #ff5b3b;
            background: #fff;
            color: #000;
          }
        }
      }
    }
    > .panels {
      flex-grow: 1;
      > li {
        padding: 24px;
        > h2.item-title {
          margin-bottom: .5em;
        }
      }
    }
  }
  ol {
    list-style: none;
  }
 </style>