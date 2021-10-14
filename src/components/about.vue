<template>
  <div class="sec about">
    <div class="sec-wrap">
      <h2>About</h2>
      <div class="flex marginB-10">
        <div class="profile-img-wrap">
          <img src="@/assets/img/profile.png" />
          <div class="profile-circle"></div>
        </div>
        <div class="profile-info-wrap">
          <ul>
            <li>
              <a href="https://github.com/her0707" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://her0707.github.io" target="_blank">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="about-content">
        2년차 Front-End Developer 허원호 입니다. Vue, PHP, Electron, Node.js 의
        개발 경험이 있으며 <br />
        항상 발전하고 보완하는 개발자가 될 수 있도록 끊임없이 자기개발하며
        <br />
        기존에 다루는 Front-End 뿐 아니라 Back-End 분야까지 나아갈 수 있도록
        준비해가고 있습니다.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sec.about {
  height: 100vh;
}
.sec-wrap .profile-img-wrap {
  position: relative;
}

.sec-wrap img {
  width: 200px;
  position: absolute;
  left: 0;
}
.sec-wrap .profile-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #03464f;
}
.profile-info-wrap {
  margin-left: 5rem;
}
.profile-info-wrap ul li {
  border-radius: 25px;
  width: 200px;
  padding: 5px 0;
  background: #03464f;
  margin-bottom: 10px;
}
.profile-info-wrap ul li a {
  color: #fff;
  font-size: 20px;
}
.about-content {
  font-size: 1.5rem;
  padding: 20px 0;
}

@media (max-width: 768px) {
  .profile-info-wrap {
    margin-left: 0;
    margin-top: 5rem;
  }
}
</style>
