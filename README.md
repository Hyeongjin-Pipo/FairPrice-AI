# FairPrice AI

**당신의 지갑을 지키는 AI** — AI 기반 가격 적정성 분석 서비스

## 소개

상품이나 서비스의 이름과 가격을 입력하면, AI가 시장 데이터를 기반으로 해당 가격이 적정한지 분석해 줍니다.

- 6개 카테고리, 127개 이상 품목 데이터
- 4단계 판정 (저렴 / 적정 / 주의 / 바가지)
- 구매 장소별 보정 (관광지, 재래시장, 온라인 등)
- 절약 팁 & 대안 추천

## 실행 방법

### 방법 1: 터미널로 실행 (권장)

```bash
# 1. 저장소 클론
git clone https://github.com/Hyeongjin-Pipo/FairPrice-AI.git

# 2. 폴더 이동
cd FairPrice-AI

# 3. 로컬 서버 실행 (Python 3 필요)
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속

### 방법 2: 파일로 직접 열기

`index.html` 파일을 브라우저에서 더블클릭하여 열기

### 방법 3: GitHub Pages

https://hyeongjin-pipo.github.io/FairPrice-AI/

## 기술 스택

- HTML5 / CSS3 / JavaScript (ES6)
- Chart.js (차트 시각화)
- 자체 제작 가격 데이터베이스

## 파일 구성

| 파일 | 설명 |
|------|------|
| `index.html` | 메인 웹 페이지 |
| `style.css` | 스타일시트 |
| `app.js` | AI 분석 엔진 + 데이터베이스 |
| `proposal.html` | 기획서 문서 |
