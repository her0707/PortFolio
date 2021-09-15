<template>
  <div class="sec skill">
    <div class="sec-wrap">
      <h2>Skill</h2>
      <div class="skill-wrap">
        <div class="skill-box">
          <div class="name">Vue</div>
          <div class="contents">
            <div class="content-list">
              vuex, vue router, element-ui, socket.io 등의 라이브러리 사용
              경험이 있습니다.
            </div>
            <div class="content-list">
              Vue를 활용한 암호화폐 거래소 사이트 (C2C, B2C) 등의 프론트엔드
              작업 경험이 있습니다.
            </div>
          </div>
        </div>
        <div class="skill-box">
          <div class="name">Electron</div>
          <div class="contents">
            <div class="content-list">
              키오스크에서 사용할 Electron 클라이언트 개발 경험이 있습니다.
            </div>
            <div class="content-list">
              키오스크 상품 주문프로그램과 연동하여 암호화폐 거래소 서비스를
              이용할 수 있는 클라이언트를 개발하였습니다.
            </div>
            <div class="content-list">
              암호화폐거래소의 보유 코인으로 키오스크에서 상품 결제가 가능하도록
              구현되어있습니다.
            </div>
            <div class="content-list">
              윈도우 TabTip 키보드 제어, fetch 라이브러리, TCP 소켓 연결 경험이
              있습니다.
            </div>
          </div>
        </div>
        <div class="skill-box">
          <div class="name">PHP</div>
          <div class="contents">
            <div class="content-list">
              Codeigniter, XE, 템블릿언더바 사용경험이 있습니다.
            </div>
            <div class="content-list">
              오픈마켓 솔루션을 활용하여 자체 결제시스템 및 소셜로그인을
              구현하였으며 XE 모듈 개발 경험이 있습니다.
            </div>
          </div>
        </div>
        <div class="skill-box">
          <div class="name">Node.js, Socket.io</div>
          <div class="contents">
            <div class="content-list">
              Customer Service, FAQ API 구현 경험 및
            </div>
            <div class="content-list">
              Socket.io 를 활용한 암호화폐 시세 데이터 전송 Server를
              구현하였습니다.
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
.skill-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.skill-box {
  border: 0.2rem solid #03464f;
  border-radius: 2rem;
  margin: 2rem;
  padding: 2rem;
  position: relative;
}
.skill-box .name {
  transform: rotate(-10deg);
  position: absolute;
  left: -1.5rem;
  top: -1.5rem;
  border: 0.2rem solid rgb(238, 238, 238);
  color: rgb(0, 173, 181);
  background-color: rgb(34, 40, 49);
  padding: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: 800;
}
.skill-box .content-list {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .skill-wrap {
    display: block;
  }
}
</style>
