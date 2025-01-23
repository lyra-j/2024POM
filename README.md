# 2024 POM

React Practice : 2024 Paris Olympic Medal CRUD

<!-- [배포주소]
이미지 몇컷 -->

## 💻 프로젝트 소개

&nbsp; **[Frontend / React & JS / 개인 과제]**
<br />
&nbsp; 📆 작업 기간 2025.01.21 ~ 2025.01.24 <br />
&nbsp; React를 활용하여 CRUD 기능을 구현한 2024 파리 올림픽 메달 트래커입니다. <br />
<br />
![React](https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?&logo=javascript&logoColor=white) ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?&logo=css3&logoColor=white)

<br />

## 🔹 기능 소개

- 국가별로 획득한 메달수를 입력하면 localStorage에 저장 후 업데이트 및 삭제 가능합니다.
- 메달 종류 또는 메달 총 합계가 많은 순부터 정렬하여 확인 가능합니다.

<br />

## 🔹 트러블슈팅

- [리액트와 친해지고 싶어요](https://velog.io/@ly-ra/리액트-친해지고-싶어요)

<br />

## 🔹 프로젝트 구조

```markdown
📁 src/
|- components/
| |-Button.jsx  
 | |-InputBox.jsx
| |-MedalForm.jsx :국가별 메달 갯수 입력받는 폼 & 저장
| |-MeladItem.jsx : 저장받은 데이터
| |-MedalList.jsx : 데이터들이 모여서 표기되는 곳
|
|- utils/
| |-localStorage.js  
 |
|- App.tsx
```

<br />

## 🔹 첫 리액트 작업 후기

수업을 들을 때는 그렇구나~ 하고 이해 한듯 했지만 막상 혼자서 작업을 진행하려고 하니 어떤 컴포넌트에 어떤 기능을 담아야 겠구나 정도는 그려졌으나 내가 하고있는 작업이 맞는건지는 알수가 없었다.<br />
오히려 낯설어서 흐름파악하기도 코드보기도 힘들었다.<br />
또 과제 제출기간이 짧아서 무엇을 하고있는지 제대로 파악하지 못하고 진행을 해서 이번에 복습을 못하면 다음 수업은 따라가기 힘들것 같다는 생각이 강하게 들었다.<br />
<br />
짧은 과제 기간에도 1~2일 만에 완성한 사람들도 많았고, 나 역시 어찌되었던 구동하는 결과물을 만들긴 했다.<br />
완수를 하고 나니 바닐라자바스크립트로 작업할 때 보다는 물리적인 시간은 적게 드는 것이 맞는것 같기도 하다.<br />
리액트가 낯선 친구가 아닌 친숙한 친구가 될때까지!!
