<template>
  <div>
    <nav class="navbar fixed-top">
      <div class="navbar-brand" href="#">
        <img
          src="../assets/news-logo.png"
          width="50"
          height="50"
          class="d-inline-block align-top"
          alt
        />
        <span>My News</span>
      </div>

      <!-- <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div> -->

      <div class="page-navigation">
        <ul class="d-flex" style="list-style: none; margin: 0;">
          <router-link to="/">
            <li>Top Headlines</li>
          </router-link>
          <router-link to="/allnews">
            <li class="ml-4">All News</li>
          </router-link>
        </ul>
      </div>
      <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
      />-->
      <router-link to="/search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </router-link>
      <!-- </form> -->
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background: #f9f8f8;
}
.navbar-brand span {
  color: #000000;
  font-weight: 800;
}
.page-navigation ul {
  padding-left: 0;
}
.page-navigation li {
  color: #d04d14;
  font-weight: 600;
}
.page-navigation a:hover {
  color: #e47105;
  text-decoration: none;
}
/* @media (max-width:600px) {
  .navbar > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .navbar > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .navbar > .nav-btn > label:hover,.navbar  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .navbar > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .navbar > .page-navigation {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .navbar > .page-navigation > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .page-navigation {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .page-navigation {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
} */
</style>