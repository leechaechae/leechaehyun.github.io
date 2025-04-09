// menu
document.querySelector(".menu").addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    let id_value = e.target.dataset.link;
    document.querySelector(id_value).scrollIntoView({ behavior: "smooth" });
  }
});

// banner
// gsap.to(".icon", 0.7, { opacity: 0 });

// var word = new TimelineMax()
//   .addLabel("b")
//   .to(".word", 0.7, { visibility: "visible" }, "b")
//   .to(".word", 0.7, { opacity: 1 }, "b")

//   .addLabel("a")
//   .to(".word", 0.7, { opacity: 0 }, "a")
//   .to(".icon", 0.7, { opacity: 1 }, "a")

//   .repeat(-1);

// gsap.to(".icon2", 0.9, { opacity: 0 });

// var word2 = new TimelineMax()
//   .addLabel("b")
//   .to(".word2", 0.7, { visibility: "visible", delay: 0.5 }, "b")
//   .to(".word2", 0.7, { opacity: 1, delay: 0.5 }, "b")

//   .addLabel("a")
//   .to(".word2", 0.7, { opacity: 0, delay: 0.5 }, "a")
//   .to(".icon2", 0.7, { opacity: 1, delay: 0.5 }, "a")

//   .repeat(-1);

// var circle = new TimelineMax()

//   .to(".circle", 0.5, { width: "20vw", delay: 1 })
//   .to(".circle", 0.5, { width: "6vw", delay: 2 })
//   .repeat(-1);

// hover
const items = document.querySelectorAll(".work-item");

items.forEach((el) => {
  const image = el.querySelector("img");

  el.addEventListener("mouseenter", (e) => {
    gsap.to(image, { autoAlpha: 1 });
  });

  el.addEventListener("mouseleave", (e) => {
    gsap.to(image, { autoAlpha: 0 });
  });

  el.addEventListener("mousemove", (e) => {
    gsap.set(image, { x: e.offsetX - 200, y: e.offsetY - 100 });
  });
});

// top button
const topBtn = document.querySelector(".topBtn");

// 스크롤 이벤트로 버튼 표시/숨김 처리
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// 클릭 시 부드럽게 스크롤 올리고, 맨 위 도달 시 버튼 숨기기
topBtn.addEventListener("click", function () {
  const scrollToTop = () => {
    const currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - 50);
      requestAnimationFrame(scrollToTop);
    } else {
      topBtn.style.display = "none"; // 맨 위에 도달하면 버튼 숨기기
    }
  };

  scrollToTop();
});
