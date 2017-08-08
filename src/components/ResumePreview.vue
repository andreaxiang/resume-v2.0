<template>
   <div id="resumePreview">
     {{resume}}
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'ResumePreview',
   computed: {
     resume(){
       return this.$store.state.resume
     }
   }
 }
 </script>
 
 <style>
 #resumePreview {
  color: blue;
 }
 </style>