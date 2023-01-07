<template>
    <div class="wrapper">
        <!-- Navbar -->
        <Top-Nav-Bar></Top-Nav-Bar>

        <!-- Main Sidebar Container -->

        <Side-Nav-Bar></Side-Nav-Bar>
        <div class="content-wrapper">
            <slot></slot>
        </div>
        <!-- Content Wrapper. Contains page content -->

        <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
      <b>Version</b> 3.2.0
    </div>
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
    </div>
</template>
<script>

    import SideNavBar from "./sideNavBar.vue";
    import TopNavBar from "./topNavBar.vue";
    export default {
        name: "baseLayouts",
        components: {TopNavBar, SideNavBar}
    }
</script>

<style scoped>

</style>
