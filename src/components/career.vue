<template>
  <div class="sec career">
    <div class="sec-wrap" style="padding: 0;">
      <div class="card">
        <div class="card-arrow"></div>
        <div class="card-title">Career</div>
        <div class="card-content">
          <div class="card-content-box">
            <div class="title">
              코코엔터테인먼트코리아<span class="date"
                >2019.04.08 ~ 2021.08.20</span
              >
            </div>
            <div class="about">
              퍼블리셔로 시작하여 IT팀 팀장 및 프론트엔드 개발자
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sec.career {
  height: 200px;
}
.card {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  padding-bottom: 2rem;
  border-width: 0px 0.5rem 0px 0px;
  border-style: solid;
  border-color: #fff;
  top: 2rem;
  right: 5rem;
}
.card-arrow {
  position: absolute;
  height: 3rem;
  width: 0.5rem;
  background-color: #fff;
  right: 0.5rem;
  top: -0.2rem;
  transform: rotate(40deg);
}
.card-title {
  right: -1rem;
  bottom: -2.5rem;
  color: rgb(34, 40, 49);
  background-color: #fff;
  position: absolute;
  font-size: 3rem;
  font-weight: 800;
  line-height: 2.5rem;
}
.card-content-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.card-content-box .title {
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
}
.card-content-box .date {
  color: rgb(0, 173, 181);
  font-size: 1rem;
  margin-left: 1rem;
}
.card-content-box .about {
  padding: 1rem 0px;
  color: rgb(0, 173, 181);
}
@media (max-width: 768px) {
  .card {
    justify-content: flex-end;
    right: 1rem;
    padding-right: 3rem;
  }
}
</style>
