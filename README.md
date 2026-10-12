# eunkyoung529.github.io

김은경 개발자 포트폴리오 사이트입니다. → https://eunkyoung529.github.io/

빌드 과정 없는 정적 사이트라 `main` 브랜치에 push 하면 GitHub Pages 가 그대로 서비스합니다.

## 구조

```
index.html              홈 (소개 · 프로젝트 · 기술 스택 · 경력 · 자격증/수상/활동 · 연락처)
projects/
  moida.html            PROJECT 01  MOIDA
  codynow.html          PROJECT 02  CodyNow
  edunote.html          PROJECT 03  EduNote
  storydream.html       PROJECT 04  StoryDream
assets/
  css/style.css         전체 스타일 (색 · 글꼴은 맨 위 :root 변수)
  js/main.js            헤더, 모바일 메뉴, 스크롤 등장 효과, 이미지 확대
  img/                  프로필 사진 · 서비스 화면 · 구조도
  icons/                기술 로고 (devicon, MIT)
```

## 고칠 때

* **프로필 사진** — `assets/img/profile.jpg` 를 같은 이름으로 바꿔 넣으면 됩니다 (세로 4:5 로 잘려 보입니다).
* **문구** — 각 HTML 파일에서 바로 고칩니다. 홈의 프로젝트 카드와 상세 페이지 표지에 같은 소개 문구가 한 번씩 들어 있습니다.
* **프로젝트 추가** — `projects/` 의 파일 하나를 복사해 내용을 바꾸고, `index.html` 의 `#projects` 에 카드를 추가한 뒤 앞뒤 프로젝트의 이전/다음 링크를 잇습니다.
* **강조색** — `assets/css/style.css` 의 `--accent` (지금은 에메랄드 `#10B981`).

## 로컬에서 보기

`index.html` 을 브라우저로 열면 됩니다. 글꼴(Pretendard, JetBrains Mono)은 CDN 에서 받아 오므로 인터넷이 필요합니다.
