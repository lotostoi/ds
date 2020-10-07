<template>
  <header class="header">
    <div class="ds-logo">
      <img  src="./../assets/logo.png" alt />
    </div>
    <nav class="ds-nav">
      <router-link :to="{name: 'aboutProject'}" active-class="active" exact>About Project</router-link>
      <router-link :to="{name: 'DsContent'}" active-class="active">Controll</router-link>
      
    </nav>
    <div class="userMame">
      <router-link to="#">{{name}}</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: "Alexander Plotnikov"
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: $baseColor;
  height: $heightHeader;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  border-bottom: 1px solid #000;
}

.ds-logo {
  display: flex;
  transition: transform .3 linear;
  &:hover {
    transform: scale(1.1);
  }
  & > img {
    width: 100%;
    height: 100%;
  }
}

.ds-nav {
  margin-left: 30px;
  margin-right: auto;
  display: flex;
  & > a {
    text-decoration: none;
    margin: 0 10px;
    color: white;
  }
  & > a.active {
    color: rgb(250, 201, 111);;
  }
  & > a:hover {
    color: rgb(248, 71, 17);
  }
}

.userMame {
  & > a {
    text-decoration: none;
    margin: 0 10px;
    color: white;
  }
  & > a.active {
    color: rgb(248, 148, 17);
  }
  & > a:hover {
    color: rgb(248, 71, 17);
  }
}
</style>
