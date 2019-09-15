<template>
  <div class="fixed-menu">
    <!-- <a-row>
      <a-col :span="8">
        <a-button>电话咨询</a-button>
      </a-col>
      <a-col :span="8">
        <a-button>Default</a-button>
      </a-col>
      <a-col :span="8">
        <a-button>Default</a-button>
      </a-col> -->
    <a-button-group class="custom-btn-group">
      <a-row>
        <a-col :span="8">
          <a-button block  type="link" blocktype="primary">
            <img src="@/assets/images/tel@2x.png" alt="">
            <span>电话咨询</span>
          </a-button>
        </a-col>
        <a-col :span="8">
        <a-button block  type="link">
          <img src="@/assets/images/nav@2x.png" alt="">
          <span>地址导航</span>
        </a-button>
        </a-col>
        <a-col :span="8">
        <a-button block type="link">
          <img src="@/assets/images/share@2x.png" alt="">
          <span>分享我们</span>
        </a-button>
        </a-col>
      </a-row>
    </a-button-group>

    <!-- </a-row> -->
  </div>
</template>

<style>
  .fixed-menu {
    position: fixed;
    bottom: -1px;
    height: 4rem;
    background-color: #fff;
    width: 100%;
    border-top: 1px solid #c3c3c3;
    padding: 5px;
    /* box-shadow: 0 -1px 4px #000; */
  }
  .custom-btn-group {
    width: 100%;
    text-align: center;
  }
  .custom-btn-group img {
    width: 1rem;
    height: 1.3rem;
    margin-bottom: 3px;
    margin-top: 4px;
  }
  .custom-btn-group span {
    display: block;
    margin: 5px auto;
  }

</style>