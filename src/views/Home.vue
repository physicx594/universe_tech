<template>
  <div class="home">
    <div class="navbar">
      應徵者: 饒家鴻
    </div>
    <div class="banner"></div>
    <div class="content">
        <div class="title">Github Repo</div>
        <div class="section first">
          <div class="pic"></div>
          <div class="repos">
            <ul>
              <li v-for="(item, index) in repos.slice(0, 4)" :key="index">
                <a :href="item.html_url" target="_blank">
                <div class="name">{{ item.name }}</div>
                <div class="description">{{ item.description }}</div>
                <div class="url">{{ item.html_url }}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="section second">
          <div class="repos">
            <ul>
              <li v-for="(item, index) in repos.slice(4, 8)" :key="index">
                <a :href="item.html_url" target="_blank">
                  <div class="name">{{ item.name }}</div>
                  <div class="url">{{ item.html_url }}</div>
                  <div class="description">{{ item.description }}</div>
                </a>
              </li>
            </ul>
          </div>
          <div class="pic"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      repos: []
    }
  },
  methods: {
    getData () {
      const api = 'https://api.github.com/users/physicx594/repos'
      this.axios.get(api)
        .then(res => {
          this.repos = res.data
        })
        .catch(error => {
          console.log(error, '讀取錯誤，請檢查')
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="scss">
.home{
  .navbar{
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 0;
    font-size: 30px;
    font-weight: bold;
    background: rgb(255, 255, 255);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.06);
    z-index: 999;
  }
  .banner{
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80') no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0);
    z-index: -1;
  }
  .content{
    .title{
      margin: 50px 0;
      font-size: 30px;
      font-weight: bold;
    }
    .section{
      width: 100%;
      display: flex;
      margin: 50px 0;
      .pic{
        height: 80vh;
        width: 50%;
        background: url('https://media.cakeresume.com/image/upload/s--i9mAyk35--/c_fit,f_auto,fl_png8,h_600/v1545703612/trkm8p3i4tseumppapyv.png') no-repeat center top;
        background-size: cover;
        background-attachment: fixed;
        clip-path: polygon(50% 13%, 90% 50%, 50% 87%, 0 100%, 0 0);
      }
      .repos{
        width: 50%;
        ul{
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          padding: 30px;
          li{
            position: relative;
            height: 20%;
            width: 80%;
            margin: 2.5% auto;
            padding: 10px;
            line-height: 33px;
            box-sizing: border-box;
            border-radius: 5px;
            border: 1px solid rgb(15, 76, 129);
            text-align: left;
            transition: all .5s ;
            &:hover{
              background:rgba(15, 76, 129, 1);
              & .name, .url{
                opacity: 0;
                transition: all .5s ;
              }
              & .description{
                opacity: 1;
              }
            }
            .name{
              font-size: 24px;
              font-weight: bold;
            }
            .description{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              font-size: 24px;
              color: #fff;
              opacity: 0;
            }
            a{
              color: unset;
              text-decoration: none;
            }
          }
        }
      }
    }
    .section.second .pic{
      clip-path: polygon(100% 0, 50% 13%, 10% 50%, 50% 87%, 100% 100%);
    }
  }
}
</style>
