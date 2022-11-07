<template>
    <div class="main">
        <div class="header">
            <ul>
                <li>Tổng quan</li>
                <li>Thành phần lương</li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Main',
    data () {
      return {
      }
    }
  }
  </script>
  
  <style scoped lang="css">
  .header{
    width: 100%;
    height: 50px;
    background-color: rgb(35, 196, 115);
  }
  .header ul{
  }
  .header ul li {
    list-style: none;
    float: left;
    padding: 15px 10px;
  }
  </style>
  