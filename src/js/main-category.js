const mainCategoryBtns = document.querySelector(".category__btn");

const categoryRightBtn = mainCategoryBtns.querySelector(
  ".category__slide-btn-right"
);
const categoryLeftBtn = mainCategoryBtns.querySelector(
  ".category__slide-btn-left"
);
console.log(categoryRightBtn, categoryLeftBtn);

// const slides = document.querySelector(".main__slides");
// const slide = slides.querySelectorAll("li");
// // console.log(slides, slide);

// const slideCount = slide.length;

// const slideWidth = 447;
// const slideMargin = 30;

// const mainSlidePg = document.querySelector(".number");
// // console.log(slideCount, slideWidth, slideMargin);

// let currentIdx = 0;

// // 슬라이드의 총 페이지 수
// const totalPages = slideCount;

// // 페이지네이션 업데이트 함수
// const updatePagination = () => {
//   const currentPage = (currentIdx % slideCount) + 1;
//   mainSlidePg.innerText = `${currentPage} / ${totalPages}`;
// };

// // 복제한 5개의 li노드를 왼쪽으로 이동시키기 위한 함수(1)
// const updateWidth = () => {
//   const currentSlides = document.querySelectorAll(".slides li");
//   const newSlideCount = currentSlides.length;
//   const newWidth = `${
//     (slideWidth + slideMargin) * newSlideCount - slideMargin
//   }px`;
//   slides.style.width = newWidth;
// };

// // 복제한 5개의 li노드를 왼쪽으로 이동시키기 위한 함수(2)
// const setInitialPos = () => {
//   const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
//   slides.style.transform = `translateX(${initialTranslateValue}px)`;
// };

// // li노드를 복제하기 위한 함수
// const makeClone = () => {
//   for (let i = 0; i < slideCount; i++) {
//     const cloneSlide = slide[i].cloneNode(true);
//     cloneSlide.classList.add("clone");
//     slides.appendChild(cloneSlide);
//   }
//   for (let i = slideCount - 1; i >= 0; i--) {
//     const cloneSlide = slide[i].cloneNode(true);
//     cloneSlide.classList.add("clone");
//     slides.prepend(cloneSlide);
//   }

//   updateWidth();
//   setInitialPos();
//   setTimeout(() => {
//     slides.classList.add("animated");
//   }, 100);
// };

// makeClone();

// // 버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수
// const moveSlide = (num) => {
//   // console.log(num);

//   slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
//   currentIdx = num;
//   if (currentIdx === slideCount || currentIdx === -slideCount) {
//     setTimeout(() => {
//       slides.classList.remove("animated");
//       slides.style.left = "0px";
//       currentIdx = 0;
//     }, 500);
//     setTimeout(() => {
//       slides.classList.add("animated");
//     }, 600);
//   }
//   updatePagination(); // 페이지네이션 업데이트
// };

// // 초기 페이지네이션 상태 업데이트
// updatePagination();

// // 버튼 클릭 이벤트 함수
// // moveSlide(currentIdx + 1);

// rightBtn.addEventListener("click", () => {
//   // console.log("click");
//   moveSlide(currentIdx + 1);
// });

// leftBtn.addEventListener("click", () => {
//   console.log("click");
//   moveSlide(currentIdx - 1);
//   // mainSlidePg.innerText = `${currentIdx + 1} / 4`;
// });

// // 자동슬라이드 및 정지기능 함수

// let timer = undefined;

// const autoSlide = () => {
//   if (timer === undefined) {
//     timer = setInterval(() => {
//       moveSlide(currentIdx + 1);
//     }, 3000);
//   }
// };

// autoSlide();

// const stopSlide = () => {
//   clearInterval(timer);
//   timer = undefined;
// };

// slides.addEventListener("mouseenter", () => {
//   stopSlide();
// });

// slides.addEventListener("mouseleave", () => {
//   autoSlide();
// });

// btns.addEventListener("mouseenter", () => {
//   stopSlide();
// });

// btns.addEventListener("mouseleave", () => {
//   autoSlide();
// });
