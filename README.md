VanilaJavaScript-Project-FRIME
HTML, CSS, JS, Figma\_ 쇼핑몰 사이트

## 🌈 프로젝트 소개

- Prime 쇼핑몰 프로젝트는 Temu 쇼핑몰을 참고하여 HTML, CSS(SCSS), JavaScript를 활용해 기존 구조와 기능을 재구성한 웹페이지입니다.
- 로컬스토리지를 사용해 사용자 데이터를 저장하고 반응형 디자인으로 다양한 디바이스에서 최적화된 쇼핑 경험을 제공합니다.

## 🏡 개발 팀원 및 역할

- 김도경: PM / 쇼핑몰 디테일 설계 및 데이터 관리 담당 (Json 데이터 처리 및 서버 통신)
- 김정하: 로그인 및 회원가입 기능 구현
- 문지수: 카트 관련 기능 구현 (아이템 추가/삭제, 총 금액 계산, 로컬 스토리지 활용)
- 정보경: 메인 페이지 구현 및 디자인 총괄
- 2차 유지보수: 김도경 김정하 문지수 정보경

## 🕰️ 개발 기간 \*2024

- 기획: 07/14 ~ 07/21 (IA, WBS, 스토리보드, 상세기획, WireFrame)
- 디자인: 07/22 ~ 07/25 (Index, Cart, Product, Login)
- 웹 개발: 07/25 ~ 08/12 (Index, Cart, Product, Login)
- 추가 페이지 개발: 08/12 ~ 08/28 (SubPage 기획, 디자인, 개발)
- 웹 오류 수정 및 유지보수: 08/29 ~ 09/06 (Error, ISSUE Check, 수정, 발표준비)
- 2차 웹 오류 수정 및 유지보수 : 11/28 ~ 12/06

## 🌎 개발 환경

- Language: HTML, CSS(SCSS), JS
- SCSS를 활용한 코드 모듈화 및 유지보수성 향상.
- IDE: Visual Studio Code
- 프로젝트 관리 및 협업을 위한 확장 프로그램 활용.
- Figma: UI/UX 디자인 설계.
- Git: 버전 관리 및 팀 협업.
- Slack: 실시간 커뮤니케이션.
- Notion: 프로젝트 일정 및 문서 관리.

## ⚒️ 사이트 분석 및 수정 내역

- 2024/08/10: 검색 조건 필터 로직 최적화 (속도 개선)
- 2024/08/15: 카트 가격 계산 오류 수정
- 2024/11/29: 메인 슬라이드 전환 시 화면 깨짐 현상 해결

## 📚 주요 기능

- 메인 슬라이드: 자동 롤링 및 화살표 클릭 시 수동 전환 가능. CSS transition으로 부드러운 애니메이션 효과 구현.
- 검색 필터링: 검색어 입력 시 실시간으로 Json 데이터를 기반으로 필터링. 대소문자 구분 없이 검색 가능.
- 카트 기능: 카트에 아이템 추가 및 삭제 가능. 로컬 스토리지 활용으로 새로고침 시에도 데이터 유지. 총 금액 자동 계산 및 업데이트.
- 리뷰 및 문의 기능: 리뷰 및 문의 항목을 카테고리별로 필터링 가능.

## ✨ HTML, CSS, Git Basic Rule

- 주석필수
- HTML 클래스는 더블언더스코어 방식을 사용한다.
- HTML 클래스의 체이닝은 3개가 넘어가지 않게 한다. ex) main**slide**arrow, main**slide**arrow-left
- 세로 컨텐츠 정렬은 margin-bottom만을 사용하기.
- position 사용은 PM에게 답변받기.
- SCSS 사용하기 (변수 및 파일 나누기)
- 네스팅 기능 이용하기.
- Git commit -m 은 'dk\*' 형태로 이니셜 붙이기.

## 🦉 JS Basic Rule

- 주석필수

## 💫 VsCode Common Extension

- PostCss sorting: CSS 속성들을 자동으로 정렬.
- Error lens: 에러가 있는 부분을 직관적으로 표시.
- Code Spell Checker: 사전에 없거나 잘못된 단어를 감지.

## 🧪 테스트 및 유지보수

- 테스트 진행 사항: UI/UX 테스트: 모든 페이지가 크로스 브라우징 호환 가능한지 확인.
- 기능 테스트: 검색 및 카트 기능 정상 작동 여부 확인.
- 유지보수 계획: 사용자 피드백 기반 기능 개선. 코드 최적화를 통한 성능 향상.
