const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//window : 브라우저 창, 우리가 보고있는 화면
//lodash cdn 함수 _throttle : 0.3초 마다 scroll 확인
//gsap cdn
// 그냥 scroll하면 수백번 실행되기 때문
window.addEventListener('scroll', _.throttle( function() {
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기 gsap.to(요소, 지속시간(s), 옵션(객체데이터))
    // opacity : 중간 숫자 값으로 자연스럽게 전/후상태를 만들 수있지만 실제로 요소가 사라진 게 아님
    // display : 숫자가 아닌 속성 - 중간 값 존재X, 자연스러운 전환 효과 불가능
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'        
    });

    //버튼 보이기, toTopEl 대신 '#to-top' 이라고 적어도 가능하다(gsap이 알아서 찾아줌)
    gsap.to(toTopEl, .2, {
       x: 0,
     });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo:  0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, i) {
  gsap.to(fadeEl, 1, {
    delay: (i+1) * 0.7,   //0.7, 1.4, 2.1, 2.7 ...
    opacity: 1
  });
});

// 생성자(클래스)
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',    //기본값, 굳이 명시 안해도 됨
  slidesPerView: 3,   // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,   // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',    //페이지 번호 요소 선택자
    clickable: true         //사용자의 페이지 번호 요소 제어 가능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,           //-1 = 무한반복
    yoyo: true,            // 한번 재생된 애니메이션을 뒤로 재생
    ease: Power1.easeInOut,    // gsap easing 검색후 easeInOut 타입 함수 사용
    delay: random(0, delay)
  })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,            // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,                  // 뷰포트 맨위 =0, 맨아래=1
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

