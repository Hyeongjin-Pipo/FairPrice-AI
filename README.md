# 페어프라이스 AI (FairPrice AI)

수집품 시장의 정보 비대칭을 해결하는 **AI 기반 적정 가격 평가 및 사기 방지 플랫폼**입니다. 복잡한 설치 없이 브라우저 환경에서 즉각적으로 작동하는 경량화된 구조(Vanilla JS + HTML + CSS)를 채택했습니다.

## 준비물

- `index.html`
- `style.css`
- `app.js`
- `proposal.md`
> 이 4개의 파일이 모두 같은 폴더 안에 모여 있어야 합니다. (예: 바탕화면의 `FairPrice-AI` 폴더)

---

## 실행 순서 (터미널에 한 줄씩 복사 → 붙여넣기 → 엔터)

요구 사항: 컴퓨터에 **Python 3.x** 이상이 설치되어 있어야 합니다.

1. **파일이 있는 폴더로 이동**
   ```bash
   cd ~/Desktop/FairPrice-AI
   ```
   *(Windows 운영체제인 경우: `cd Desktop\FairPrice-AI`)*

2. **로컬 웹 서버 실행**
   ```bash
   python -m http.server 8000
   ```
   *(Mac인 경우 `python3 -m http.server 8000` 입력)*

3. **웹 브라우저 접속**
   터미널에 `Serving HTTP on :: port 8000 ...` 이라는 메시지가 떴다면 **크롬 브라우저** 주소창에 아래 주소를 복사해서 들어가세요.
   > **http://localhost:8000**

---

## 끌 때

실행을 종료하려면 터미널 창을 클릭한 뒤 키보드의 **`Control + C`** (Windows는 `Ctrl + C`)를 누르시면 서버가 완전히 종료됩니다.

---

## 자주 나는 오류 (Troubleshooting)

- **`"python: command not found"`** 👉 [https://www.python.org](https://www.python.org) 에서 Python을 설치하세요. (Windows는 설치 시 반드시 'Add python.exe to PATH' 체크박스를 체크해야 합니다.)
- **`"Address already in use"`** 👉 이미 8000번 포트가 사용 중입니다. 명령어 맨 끝 숫자를 바꿔서 `python -m http.server 8080` 으로 실행 후 `http://localhost:8080` 에 접속하세요.
- **화면 디자인이 깨지거나 CSS가 적용 안 될 때** 👉 브라우저 캐시 문제일 확률이 높습니다. `Ctrl + Shift + R` (맥은 `Cmd + Shift + R`)을 눌러 강력 새로고침을 진행하세요.

---

## AI 기능 명세 (Core Logic)

심화 가격 분석 및 투자의견 작성은 `app.js` 내부에 구현된 **자체 추론 엔진**을 통해 브라우저에서 직접 연산됩니다. 외부 API(OpenAI 등) 연결 없이도 동작하는 완전 독립형(Stand-alone) 구조입니다.

*   **상태 가중치 매핑**: 사용자가 선택한 아이템의 희소성, 개봉 여부(Mint, Played), 공식 등급(PSA/BGS) 데이터를 기반으로 베이스 가격에 곱연산(Multiplier) 적용.
*   **변동성(Volatility) 기반 모멘텀 평가**: 가상 알고리즘(Randomized Hash Modeling)을 통해 품목별로 6개월간의 가상 시세 등락폭을 생성하고, 이를 기반으로 **[저렴/바가지/적정/주의]** 뱃지를 자동 생성 및 투자 가이드 제공.
