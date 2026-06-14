/* ===========================
   FairPrice AI — App Engine
   Light, Clean, Minimal
   =========================== */

// ===========================
// 1. Price Database
// ===========================
const priceDatabase = {
  "음식/외식": {
    emoji: "",
    riskLevel: 35,
    items: [
      { name: "짜장면", avg: 7000, min: 5000, max: 12000, unit: "1인분", tips: ["배달보다 직접 방문이 1,000~2,000원 저렴합니다", "점심 특선 메뉴를 이용하면 할인됩니다"], alternatives: ["짬뽕 (비슷한 가격대)", "비빔밥 (건강한 대안)", "편의점 도시락 (저렴한 대안)"] },
      { name: "짬뽕", avg: 8000, min: 6000, max: 13000, unit: "1인분", tips: ["중식당마다 가격 편차가 크니 비교해보세요", "곱빼기는 보통 1,000원 추가입니다"], alternatives: ["짜장면 (더 저렴한 대안)", "우동 (비슷한 국물 요리)"] },
      { name: "탕수육", avg: 18000, min: 13000, max: 28000, unit: "소 기준", tips: ["중 사이즈 대신 소+다른 메뉴 조합이 가성비 좋습니다", "포장 시 할인되는 곳도 있습니다"], alternatives: ["깐풍기 (비슷한 가격)", "군만두 (저렴한 사이드)"] },
      { name: "김밥", avg: 3500, min: 2500, max: 6000, unit: "1줄", tips: ["참치, 소고기 등 특수 김밥은 1,000~2,000원 비쌉니다", "분식집이 편의점보다 대체로 저렴합니다"], alternatives: ["삼각김밥 (더 저렴한 대안)", "주먹밥 (비슷한 간편식)"] },
      { name: "떡볶이", avg: 4500, min: 3000, max: 8000, unit: "1인분", tips: ["길거리 포장마차가 가장 저렴합니다", "프랜차이즈보다 동네 분식집이 양이 많습니다"], alternatives: ["라볶이 (비슷한 가격)", "순대 (비슷한 간식류)"] },
      { name: "라면", avg: 4500, min: 3000, max: 7000, unit: "1그릇", tips: ["분식집 라면은 편의점 조리 라면보다 저렴합니다", "계란, 떡 추가는 보통 500원입니다"], alternatives: ["컵라면 (더 저렴한 대안)", "우동 (비슷한 면 요리)"] },
      { name: "비빔밥", avg: 9000, min: 7000, max: 15000, unit: "1인분", tips: ["한식 뷔페에서 비빔밥을 먹으면 반찬까지 포함입니다", "돌솥 비빔밥은 일반보다 2,000원 정도 비쌉니다"], alternatives: ["덮밥류 (비슷한 가격)", "백반 (더 다양한 반찬)"] },
      { name: "삼겹살", avg: 16000, min: 12000, max: 25000, unit: "1인분 200g", tips: ["점심 특선은 저녁보다 2,000~3,000원 저렴합니다", "마트에서 사서 집에서 구우면 절반 가격입니다"], alternatives: ["목살 (더 저렴한 부위)", "닭갈비 (저렴한 대안)"] },
      { name: "치킨", avg: 20000, min: 17000, max: 28000, unit: "1마리", tips: ["앱 주문 시 할인 쿠폰을 활용하세요", "반반 치킨은 두 가지 맛을 즐길 수 있어 가성비 좋습니다"], alternatives: ["치킨 텐더 (소량 구매)", "핫도그 (저렴한 대안)"] },
      { name: "피자", avg: 22000, min: 15000, max: 35000, unit: "라지 기준", tips: ["1+1 행사나 쿠폰을 활용하면 절반 가격에 구매 가능합니다", "포장 할인이 있는 매장이 많습니다"], alternatives: ["피자 한 조각 (소량 구매)", "토스트 (저렴한 대안)"] },
      { name: "아메리카노", avg: 4500, min: 1500, max: 7000, unit: "1잔", tips: ["구독 서비스나 스탬프 적립을 활용하세요", "편의점 커피는 1,500원부터 가능합니다"], alternatives: ["편의점 커피 (저렴한 대안)", "텀블러 지참 시 할인"] },
      { name: "카페라떼", avg: 5500, min: 3000, max: 8000, unit: "1잔", tips: ["사이즈업보다 샷 추가가 더 저렴할 수 있습니다", "일부 카페는 오전 할인이 있습니다"], alternatives: ["아메리카노 (더 저렴한 옵션)", "바닐라라떼 (비슷한 가격대)"] },
      { name: "냉면", avg: 11000, min: 8000, max: 16000, unit: "1그릇", tips: ["여름 성수기에 가격이 오르는 경향이 있습니다", "비빔냉면이 물냉면보다 약간 저렴한 곳도 있습니다"], alternatives: ["콩국수 (비슷한 여름 메뉴)", "밀면 (부산식 대안)"] },
      { name: "불고기", avg: 12000, min: 9000, max: 20000, unit: "1인분", tips: ["한식 뷔페에서 먹으면 다양한 반찬과 함께 즐길 수 있습니다"], alternatives: ["제육볶음 (저렴한 대안)", "닭볶음탕 (가성비 좋은 대안)"] },
      { name: "된장찌개", avg: 8000, min: 6000, max: 12000, unit: "1인분", tips: ["백반집에서 먹으면 밥, 반찬이 모두 포함됩니다"], alternatives: ["김치찌개 (비슷한 가격)", "순두부찌개 (비슷한 메뉴)"] },
      { name: "김치찌개", avg: 8000, min: 6000, max: 12000, unit: "1인분", tips: ["참치김치찌개는 일반보다 1,000~2,000원 비쌉니다"], alternatives: ["된장찌개 (비슷한 가격)", "부대찌개 (2인 이상 가성비)"] },
      { name: "순두부찌개", avg: 8500, min: 6000, max: 13000, unit: "1인분", tips: ["해물 순두부가 일반보다 비싸지만 만족도 높습니다"], alternatives: ["된장찌개 (더 저렴한 대안)", "콩나물국밥 (저렴한 국물 요리)"] },
      { name: "갈비탕", avg: 13000, min: 10000, max: 20000, unit: "1그릇", tips: ["유명 맛집은 가격이 높지만 양도 많습니다"], alternatives: ["설렁탕 (더 저렴한 대안)", "곰탕 (비슷한 국물 요리)"] },
      { name: "설렁탕", avg: 10000, min: 8000, max: 15000, unit: "1그릇", tips: ["24시간 영업 매장은 약간 비싼 편입니다"], alternatives: ["곰탕 (비슷한 가격)", "뼈해장국 (저렴한 대안)"] },
      { name: "칼국수", avg: 8000, min: 6000, max: 12000, unit: "1그릇", tips: ["해물칼국수가 일반보다 2,000원 정도 비쌉니다"], alternatives: ["수제비 (비슷한 가격)", "우동 (비슷한 면 요리)"] },
      { name: "초밥", avg: 15000, min: 10000, max: 30000, unit: "10피스", tips: ["런치 세트가 저녁보다 30% 이상 저렴합니다", "회전초밥은 가성비가 좋습니다"], alternatives: ["회덮밥 (저렴한 대안)", "연어덮밥 (인기 대안)"] },
      { name: "족발", avg: 32000, min: 25000, max: 45000, unit: "소 기준", tips: ["배달앱 쿠폰을 활용하면 할인 가능합니다", "포장 시 할인되는 매장이 많습니다"], alternatives: ["보쌈 (비슷한 가격대)", "닭발 (저렴한 대안)"] },
      { name: "보쌈", avg: 30000, min: 22000, max: 42000, unit: "소 기준", tips: ["마트에서 수육용 고기를 사면 절반 가격입니다"], alternatives: ["족발 (비슷한 가격대)", "삼겹살 (더 저렴한 대안)"] },
    ]
  },
  "교통": {
    emoji: "",
    riskLevel: 45,
    items: [
      { name: "택시 기본요금", avg: 4800, min: 4000, max: 6000, unit: "기본 1.6km", tips: ["카카오택시 등 앱 호출이 바가지 방지에 효과적입니다", "심야 할증(밤 10시~새벽 4시)은 20~40% 추가됩니다"], alternatives: ["지하철 (가장 저렴한 대안)", "버스 (1,400원 내외)"] },
      { name: "택시 10km", avg: 15000, min: 12000, max: 22000, unit: "약 10km", tips: ["경로 이탈이 의심되면 앱에서 경로를 확인하세요", "합승 서비스를 이용하면 30% 절약 가능합니다"], alternatives: ["지하철+버스 환승 (2,000원 이하)", "따릉이/킥보드 (단거리)"] },
      { name: "버스", avg: 1400, min: 1200, max: 1800, unit: "1회 탑승", tips: ["교통카드 사용 시 100원 할인됩니다", "환승 할인을 적극 활용하세요"], alternatives: ["지하철 (비슷한 가격)", "자전거 (무료~1,000원)"] },
      { name: "지하철", avg: 1400, min: 1250, max: 2150, unit: "1회 탑승", tips: ["정기권이 월 40회 이상 이용 시 유리합니다", "거리비례제이므로 장거리 시 추가 요금 확인하세요"], alternatives: ["버스 (비슷한 가격)", "광역버스 (장거리 대안)"] },
      { name: "KTX 서울-부산", avg: 59800, min: 50000, max: 65000, unit: "일반실 편도", tips: ["KTX 특가(최대 40% 할인)를 노려보세요", "역에서 미리 예매하면 할인됩니다"], alternatives: ["SRT (약 5,000원 저렴)", "고속버스 (약 25,000원)"] },
      { name: "고속버스 서울-부산", avg: 25000, min: 20000, max: 40000, unit: "편도", tips: ["심야 버스가 약간 저렴합니다", "우등은 일반보다 약 30% 비쌉니다"], alternatives: ["KTX (더 빠른 대안)", "무궁화호 (저렴한 기차)"] },
      { name: "주유 휘발유", avg: 1650, min: 1400, max: 1900, unit: "1리터", tips: ["오피넷 앱으로 주변 최저가 주유소를 확인하세요", "셀프 주유가 리터당 50~100원 저렴합니다"], alternatives: ["경유 차량 (연비 좋음)", "전기차 충전 (장기적 절약)"] },
      { name: "주유 경유", avg: 1450, min: 1200, max: 1700, unit: "1리터", tips: ["마트 주유소가 보통 50~100원 저렴합니다"], alternatives: ["셀프 주유 (할인)", "LPG (더 저렴)"] },
      { name: "주차 요금", avg: 3000, min: 1000, max: 6000, unit: "시간당", tips: ["공영주차장이 민영보다 50% 이상 저렴합니다", "주차 앱으로 미리 예약하면 할인됩니다"], alternatives: ["대중교통 이용 (무료)", "카셰어링 (주차 걱정 없음)"] },
      { name: "세차", avg: 15000, min: 5000, max: 30000, unit: "1회", tips: ["셀프 세차장은 5,000~7,000원으로 저렴합니다", "자동세차는 손세차보다 시간과 비용 모두 절약됩니다"], alternatives: ["셀프 세차 (5,000원)", "자동 세차 (7,000원)"] },
      { name: "대리운전", avg: 15000, min: 10000, max: 30000, unit: "10km 기준", tips: ["앱을 통해 미리 요금을 확인하세요", "심야 시간대는 할증이 적용됩니다"], alternatives: ["택시 (짐 없을 때)", "대중교통 (경제적 대안)"] },
    ]
  },
  "수리/서비스": {
    emoji: "",
    riskLevel: 65,
    items: [
      { name: "에어컨 청소", avg: 80000, min: 50000, max: 150000, unit: "벽걸이 1대", tips: ["여름 성수기를 피하면 20~30% 저렴합니다", "2대 이상 동시 청소 시 할인받을 수 있습니다"], alternatives: ["직접 필터 청소 (무료)", "에어컨 청소 스프레이 (15,000원)"] },
      { name: "보일러 수리", avg: 150000, min: 50000, max: 350000, unit: "출장 수리", tips: ["겨울 성수기에는 가격이 2배까지 오릅니다", "AS 센터 공식 수리가 사설보다 투명합니다"], alternatives: ["보일러 교체 (오래된 경우)", "관리사무소 문의 (아파트)"] },
      { name: "배관 수리", avg: 120000, min: 50000, max: 300000, unit: "출장 수리", tips: ["야간/주말 출장비가 추가될 수 있으니 확인하세요", "견적을 2~3곳에서 받아 비교하세요"], alternatives: ["관리사무소 (아파트 공용)", "DIY 수리 (간단한 경우)"] },
      { name: "잠금장치 수리", avg: 80000, min: 30000, max: 200000, unit: "1건", tips: ["야간에는 2배 이상 바가지 위험이 높습니다", "사전에 여분 열쇠를 만들어두는 것이 최선입니다"], alternatives: ["디지털 도어락 설치 (장기 해결)", "관리사무소 (비상시)"] },
      { name: "이사 원룸", avg: 350000, min: 200000, max: 600000, unit: "원룸 이사", tips: ["이사 비수기(3~5월 제외)에 하면 30% 절약됩니다", "견적 비교 플랫폼을 활용하세요"], alternatives: ["용달 이사 (짐 적을 때)", "직접 이사 (소량 짐)"] },
      { name: "이사 투룸", avg: 600000, min: 400000, max: 1000000, unit: "투룸 이사", tips: ["포장이사와 반포장이사 가격 차이가 큽니다", "평일 이사가 주말보다 저렴합니다"], alternatives: ["반포장 이사 (비용 절감)", "이사 업체 비교 앱 활용"] },
      { name: "세탁 드라이클리닝", avg: 7000, min: 4000, max: 15000, unit: "코트 1벌", tips: ["묶음 할인이 있는 세탁소를 이용하세요", "계절 전환기에 할인 이벤트가 많습니다"], alternatives: ["홈클리닝 키트 (2,000원)", "셀프 세탁 (일부 소재)"] },
      { name: "미용실 남성 커트", avg: 15000, min: 8000, max: 25000, unit: "1회", tips: ["동네 미용실이 프랜차이즈보다 저렴합니다", "정기 이용 시 멤버십 할인을 받으세요"], alternatives: ["바리깡 셀프 커트 (장기 절약)", "미용학원 (저렴한 커트)"] },
      { name: "미용실 여성 커트", avg: 25000, min: 15000, max: 50000, unit: "1회", tips: ["디자이너 레벨에 따라 가격 차이가 큽니다", "첫 방문 할인을 활용하세요"], alternatives: ["인턴 디자이너 (할인)", "지역 미용실 (합리적 가격)"] },
      { name: "미용실 염색", avg: 80000, min: 40000, max: 200000, unit: "1회", tips: ["셀프 염색약은 10,000원 이하로 가능합니다", "뿌리 염색만 하면 전체 염색보다 저렴합니다"], alternatives: ["셀프 염색 (10,000원)", "반영구 염색 (오래 유지)"] },
      { name: "핸드폰 화면 수리", avg: 200000, min: 100000, max: 350000, unit: "1건", tips: ["공식 서비스센터가 사설보다 부품 품질이 보장됩니다", "보험에 가입되어 있다면 활용하세요"], alternatives: ["보험 청구 (가입 시)", "중고폰 구매 (심한 파손 시)"] },
    ]
  },
  "전자제품": {
    emoji: "",
    riskLevel: 25,
    items: [
      { name: "아이폰", avg: 1350000, min: 1100000, max: 1700000, unit: "최신 기본모델", tips: ["자급제 구매가 통신사 약정보다 총 비용이 저렴할 수 있습니다", "출시 3개월 후 가격이 안정됩니다"], alternatives: ["이전 세대 모델 (30% 저렴)", "갤럭시 (비슷한 성능)"] },
      { name: "갤럭시", avg: 1200000, min: 900000, max: 1600000, unit: "최신 기본모델", tips: ["삼성닷컴 트레이드인 프로그램을 활용하세요", "통신사 공시지원금 비교가 필수입니다"], alternatives: ["이전 세대 모델 (할인)", "중고폰 (50% 절약)"] },
      { name: "에어팟", avg: 260000, min: 200000, max: 350000, unit: "프로 기준", tips: ["쿠팡, 11번가 등 온라인 최저가를 비교하세요", "리퍼 제품도 품질이 좋습니다"], alternatives: ["갤럭시 버즈 (비슷한 성능)", "QCY 등 가성비 이어폰"] },
      { name: "노트북", avg: 1200000, min: 600000, max: 3000000, unit: "중급 사양", tips: ["학생 할인(교육 스토어)을 활용하세요", "블랙프라이데이, 11월 할인 시즌을 노리세요"], alternatives: ["리퍼 노트북 (30% 저렴)", "태블릿+키보드 (가벼운 용도)"] },
      { name: "태블릿", avg: 700000, min: 350000, max: 1500000, unit: "중급 사양", tips: ["이전 세대 모델이 가성비가 뛰어납니다", "Wi-Fi 모델이 셀룰러보다 10만원 이상 저렴합니다"], alternatives: ["이전 세대 아이패드 (저렴)", "갤럭시탭 (안드로이드 대안)"] },
      { name: "블루투스 스피커", avg: 80000, min: 20000, max: 300000, unit: "1개", tips: ["JBL, 소니 등 브랜드별 성능 대비 가격을 비교하세요"], alternatives: ["유선 스피커 (더 저렴)", "사운드바 (TV용)"] },
      { name: "보조배터리", avg: 30000, min: 15000, max: 60000, unit: "10000mAh", tips: ["용량 대비 가격을 비교하세요", "고속충전 지원 여부를 확인하세요"], alternatives: ["다이소 보조배터리 (5,000원)", "차량 충전기 (이동 시)"] },
      { name: "충전기 고속", avg: 25000, min: 10000, max: 50000, unit: "1개", tips: ["정품 인증 제품을 구매하세요 (안전)", "멀티포트 충전기가 개별 구매보다 저렴합니다"], alternatives: ["일반 충전기 (5,000원)", "멀티 충전기 (여러 기기용)"] },
      { name: "모니터", avg: 350000, min: 150000, max: 800000, unit: "27인치 기준", tips: ["리퍼 모니터도 품질이 좋은 경우가 많습니다", "피봇, 높이조절 기능 유무를 확인하세요"], alternatives: ["24인치 (더 저렴)", "중고 모니터 (50% 절약)"] },
      { name: "키보드", avg: 80000, min: 20000, max: 200000, unit: "기계식 기준", tips: ["스위치 종류에 따라 가격 차이가 큽니다", "입문용 기계식은 3~5만원이면 충분합니다"], alternatives: ["멤브레인 키보드 (저렴)", "로지텍 K380 (가성비)"] },
    ]
  },
  "생활용품": {
    emoji: "",
    riskLevel: 20,
    items: [
      { name: "생수 2L", avg: 800, min: 400, max: 2000, unit: "1병", tips: ["대형마트 PB 생수가 가장 저렴합니다", "묶음 구매 시 개당 400원대 가능합니다"], alternatives: ["정수기 (장기적 절약)", "수돗물 (무료)"] },
      { name: "우유 1L", avg: 2800, min: 2200, max: 4000, unit: "1팩", tips: ["마트 PB 우유가 브랜드보다 30% 저렴합니다", "유통기한 임박 할인 제품을 노려보세요"], alternatives: ["두유 (비슷한 가격)", "귀리음료 (대안)"] },
      { name: "계란 30개", avg: 7500, min: 5000, max: 12000, unit: "30구 1판", tips: ["마트 행사 시 30% 이상 할인됩니다", "직접 농장 구매가 가장 저렴합니다"], alternatives: ["15구 구매 (소량)", "마트 PB 계란 (저렴)"] },
      { name: "쌀 10kg", avg: 30000, min: 20000, max: 50000, unit: "10kg", tips: ["햅쌀 시즌(10~11월)에 구매하면 저렴합니다", "온라인 직거래가 마트보다 저렴한 경우가 많습니다"], alternatives: ["5kg (소량 구매)", "혼합곡 (건강한 대안)"] },
      { name: "라면 5개입", avg: 4000, min: 3000, max: 5500, unit: "5봉지", tips: ["1+1 행사를 적극 활용하세요", "대용량 박스 구매가 개당 가격이 저렴합니다"], alternatives: ["PB 라면 (저렴)", "컵라면 (편의성)"] },
      { name: "치약", avg: 4000, min: 2000, max: 8000, unit: "1개", tips: ["1+1 행사가 자주 있으니 확인하세요", "대용량이 그램당 더 저렴합니다"], alternatives: ["다이소 치약 (1,000원)", "PB 치약 (저렴)"] },
      { name: "샴푸", avg: 10000, min: 5000, max: 25000, unit: "500ml", tips: ["대용량 리필을 구매하면 50% 절약됩니다", "마트 행사를 체크하세요"], alternatives: ["다이소 샴푸 (저렴)", "바 형태 샴푸 (오래 사용)"] },
      { name: "세제", avg: 12000, min: 7000, max: 20000, unit: "액체세제 2L", tips: ["대용량 리필이 가장 경제적입니다", "쿠팡 로켓배송 가격을 비교해보세요"], alternatives: ["세탁비누 (저렴한 대안)", "PB 세제 (가성비)"] },
      { name: "화장지 30롤", avg: 15000, min: 9000, max: 25000, unit: "30롤", tips: ["온라인 대량 구매가 가장 저렴합니다", "3겹보다 2겹이 경제적입니다"], alternatives: ["비데 사용 (장기 절약)", "PB 화장지 (저렴)"] },
      { name: "마스크 50개", avg: 10000, min: 5000, max: 20000, unit: "50매", tips: ["대량 구매 시 개당 100원대 가능합니다", "약국보다 온라인이 저렴합니다"], alternatives: ["면 마스크 (재사용)", "KF94 낱개 (소량)"] },
    ]
  },
  "여행": {
    emoji: "",
    riskLevel: 55,
    items: [
      { name: "호텔 서울 1박", avg: 150000, min: 60000, max: 400000, unit: "2인 기준", tips: ["주중이 주말보다 30~50% 저렴합니다", "호텔 예약 앱 비교는 필수입니다 (야놀자, 여기어때 등)"], alternatives: ["에어비앤비 (가성비)", "게스트하우스 (저렴)"] },
      { name: "호텔 제주 1박", avg: 180000, min: 70000, max: 500000, unit: "2인 기준", tips: ["비성수기(3~5월, 9~11월)가 절반 가격입니다", "렌터카+숙소 패키지가 유리합니다"], alternatives: ["펜션 (그룹 여행)", "게스트하우스 (1인 여행)"] },
      { name: "게스트하우스 1박", avg: 35000, min: 15000, max: 70000, unit: "1인 기준", tips: ["도미토리는 15,000원부터 가능합니다", "장기 숙박 할인을 협상해보세요"], alternatives: ["호스텔 (비슷한 가격)", "캠핑 (자연 체험)"] },
      { name: "렌터카 1일", avg: 60000, min: 30000, max: 120000, unit: "소형차 기준", tips: ["보험은 반드시 풀커버로 가입하세요", "비수기 예약이 절반 가격입니다"], alternatives: ["대중교통 (제주 시내)", "카셰어링 (단시간)"] },
      { name: "테마파크 입장료", avg: 55000, min: 40000, max: 70000, unit: "성인 1인", tips: ["오후/야간 이용권이 30% 저렴합니다", "통신사 제휴 할인을 확인하세요"], alternatives: ["지역 축제 (무료/저렴)", "수목원/공원 (자연 체험)"] },
      { name: "해외여행 보험", avg: 20000, min: 8000, max: 50000, unit: "1주일 기준", tips: ["카드사 무료 여행보험을 먼저 확인하세요", "온라인 가입이 오프라인보다 저렴합니다"], alternatives: ["카드사 무료 보험 (확인)", "장기 보험 (한 달 이상)"] },
      { name: "수화물 포장", avg: 15000, min: 8000, max: 25000, unit: "1개", tips: ["직접 랩으로 포장하면 무료입니다", "공항 내 업체는 가격이 높으니 미리 준비하세요"], alternatives: ["직접 포장 (랩 구매)", "하드케이스 캐리어 (보호)"] },
      { name: "공항 리무진 버스", avg: 16000, min: 10000, max: 18000, unit: "편도", tips: ["교통카드로 결제하면 할인될 수 있습니다"], alternatives: ["공항철도 (4,150원~)", "택시 (그룹 시 가성비)"] },
      { name: "여행 캐리어", avg: 80000, min: 30000, max: 300000, unit: "24인치 기준", tips: ["브랜드보다 소재와 바퀴 품질을 확인하세요", "온라인 구매가 매장보다 저렴합니다"], alternatives: ["캐리어 대여 (단기 여행)", "백팩 (가벼운 여행)"] },
    ]
  },
"의류/패션": {
    emoji: "",
    riskLevel: 40,
    items: [
      { name: "기본 면티", avg: 15000, min: 5000, max: 30000, unit: "1벌", tips: ["스파 브랜드(SPA)를 활용하면 저렴합니다"], alternatives: [] }
    ]
  },
  "취미/여가": {
    emoji: "",
    riskLevel: 30,
    items: [
      { name: "영화 관람권", avg: 15000, min: 10000, max: 18000, unit: "1매", tips: ["통신사 할인을 적극 활용하세요"], alternatives: [] }
    ]
  },
  "반려동물": {
    emoji: "",
    riskLevel: 60,
    items: [
      { name: "강아지 사료", avg: 20000, min: 10000, max: 40000, unit: "1kg", tips: ["대용량 구매 시 kg당 단가가 낮아집니다"], alternatives: [] }
    ]
  },
  "기타": {
    emoji: "",
    riskLevel: 50,
    items: [
      { name: "종량제 봉투", avg: 490, min: 490, max: 490, unit: "20L", tips: ["지역별로 가격이 고정되어 있습니다"], alternatives: [] }
    ]
  }
};


// ===========================
// 2. AI Analysis Engine
// ===========================
class FairPriceAI {
  constructor(database) {
    this.db = database;
    this.allItems = this._flattenItems();
  }

  _flattenItems() {
    const items = [];
    for (const [category, data] of Object.entries(this.db)) {
      for (const item of data.items) {
        items.push({ ...item, category, categoryEmoji: data.emoji });
      }
    }
    return items;
  }

  search(query) {
    if (!query || query.trim().length === 0) return [];
    const q = query.trim().toLowerCase();
    const exact = this.allItems.filter(item => item.name.toLowerCase() === q);
    if (exact.length > 0) return exact;
    const partial = this.allItems.filter(item =>
      item.name.toLowerCase().includes(q) || q.includes(item.name.toLowerCase())
    );
    if (partial.length > 0) return partial;
    const fuzzy = this.allItems.filter(item => {
      const name = item.name.toLowerCase();
      let matchCount = 0;
      for (const char of q) { if (name.includes(char)) matchCount++; }
      return matchCount / q.length >= 0.6;
    });
    return fuzzy.sort((a, b) => this._sim(b.name.toLowerCase(), q) - this._sim(a.name.toLowerCase(), q));
  }

  _sim(a, b) {
    let m = 0;
    for (const c of b) { if (a.includes(c)) m++; }
    return m / Math.max(a.length, b.length);
  }

  analyze(productName, price, location = 'general') {
    const matches = this.search(productName);
    if (matches.length === 0) return this._noMatch(productName, price);

    const item = matches[0];
    const mult = { general: 1.0, tourist: 1.35, market: 0.85, online: 0.90, abroad: 1.50 }[location] || 1.0;
    const avg = Math.round(item.avg * mult);
    const max = Math.round(item.max * mult);
    const min = Math.round(item.min * (location === 'market' ? 0.8 : 1.0));

    const range = max - min;
    const percentile = range > 0 ? Math.max(0, Math.min(100, Math.round(((price - min) / range) * 100))) : 50;

    let verdict, emoji, badgeClass, badgeText, verdictText;
    if (price <= min * 1.05) {
      verdict = 'cheap'; emoji = ''; badgeClass = 'badge-cheap'; badgeText = '저렴'; verdictText = '매우 합리적인 가격입니다!';
    } else if (price <= avg * 1.1) {
      verdict = 'fair'; emoji = ''; badgeClass = 'badge-fair'; badgeText = '적정'; verdictText = '적정한 가격 범위입니다.';
    } else if (price <= max * 0.85) {
      verdict = 'caution'; emoji = ''; badgeClass = 'badge-caution'; badgeText = '주의'; verdictText = '평균보다 다소 높은 가격입니다.';
    } else {
      verdict = 'ripoff'; emoji = ''; badgeClass = 'badge-ripoff'; badgeText = '바가지'; verdictText = '바가지 가격일 가능성이 높습니다!';
    }

    const savings = price - avg;
    const savingsPercent = Math.round((savings / avg) * 100);
    const locNames = { general: '일반 매장', tourist: '관광지', market: '재래시장', online: '온라인', abroad: '해외' };
    const locName = locNames[location] || '일반 매장';

    let analysis = `「${item.name}」의 ${locName} 기준 시장 평균가는 ₩${avg.toLocaleString()}입니다. `;
    analysis += `가격대 범위는 ₩${min.toLocaleString()} ~ ₩${max.toLocaleString()}이며, `;
    if (verdict === 'cheap') {
      analysis += `입력하신 ₩${price.toLocaleString()}은(는) 평균 대비 ${Math.abs(savingsPercent)}% 저렴한 가격으로, 매우 합리적인 소비입니다. 이 가격이라면 안심하고 구매하셔도 좋습니다!`;
    } else if (verdict === 'fair') {
      analysis += `입력하신 ₩${price.toLocaleString()}은(는) 시장 평균과 유사한 적정 가격입니다. 합리적인 가격대이므로 걱정하지 않으셔도 됩니다.`;
    } else if (verdict === 'caution') {
      analysis += `입력하신 ₩${price.toLocaleString()}은(는) 평균 대비 ${savingsPercent}% 높은 가격입니다. 다른 곳과 비교해보시는 것을 권장합니다. 약 ₩${savings.toLocaleString()}을 절약할 수 있을 가능성이 있습니다.`;
    } else {
      analysis += `입력하신 ₩${price.toLocaleString()}은(는) 평균 대비 ${savingsPercent}% 높은 가격으로, 바가지 가능성이 높습니다! 약 ₩${savings.toLocaleString()}을 과다 지불할 수 있으니, 반드시 다른 곳과 비교하거나 흥정해보세요.`;
    }
    if (location === 'tourist') analysis += ` 관광지 특성상 일반 지역보다 30~50% 높은 가격이 형성되는 점 참고해주세요.`;

    return {
      found: true, productName: item.name, category: item.category, categoryEmoji: item.categoryEmoji,
      unit: item.unit, inputPrice: price, avgPrice: avg, minPrice: min, maxPrice: max, percentile,
      verdict, emoji, badgeClass, badgeText, verdictText, savings, savingsPercent, analysisText: analysis,
      tips: item.tips || [], alternatives: item.alternatives || [],
      gaugePosition: Math.max(2, Math.min(98, percentile))
    };
  }

  _noMatch(name, price) {
    return {
      found: false, productName: name, inputPrice: price, emoji: '',
      badgeClass: 'badge-fair', badgeText: '미등록', verdictText: '데이터베이스에 없는 품목입니다',
      analysisText: `죄송합니다. 「${name}」은(는) 아직 데이터베이스에 등록되지 않은 품목입니다. 현재 6개 카테고리 127개 이상의 품목을 지원하고 있으며, 지속적으로 데이터를 확장하고 있습니다. 카테고리에서 유사한 품목을 검색해보세요.`,
      tips: ['유사한 상품명으로 다시 검색해보세요', '카테고리에서 비슷한 품목을 찾아보세요'],
      alternatives: [], savings: 0, savingsPercent: 0, percentile: 50
    };
  }
}

// ===========================
// 3. App Controller
// ===========================
const ai = new FairPriceAI(priceDatabase);

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM refs ---
  const form = document.getElementById('analyze-form');
  const productInput = document.getElementById('product-name');
  const priceInput = document.getElementById('product-price');
  const locationSelect = document.getElementById('product-location');
  const analyzeBtn = document.getElementById('analyze-btn');
  const resultContainer = document.getElementById('result-container');
  const autocompleteList = document.getElementById('autocomplete-list');

  // --- Mobile menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('active'));
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('active')));

  // --- Nav scroll ---
  window.addEventListener('scroll', () => {
    document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 50);
  });

  // --- Hero counter animation ---
  const heroObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-num[data-count]').forEach(el => {
          const target = parseInt(el.dataset.count);
          const start = performance.now();
          (function tick(now) {
            const p = Math.min((now - start) / 1800, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          })(start);
        });
        heroObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  const hero = document.getElementById('hero');
  if (hero) heroObs.observe(hero);

  // --- Autocomplete ---
  productInput.addEventListener('input', (e) => {
    const q = e.target.value.trim();
    if (q.length < 1) { autocompleteList.classList.remove('active'); return; }
    const results = ai.search(q).slice(0, 8);
    if (results.length === 0) { autocompleteList.classList.remove('active'); return; }
    autocompleteList.innerHTML = results.map(item =>
      `<div class="autocomplete-item" data-name="${item.name}">
        <span>${item.name} <small style="color:var(--text-muted)">— 평균 ₩${item.avg.toLocaleString()}</small></span>
        <span class="item-category">${item.category}</span>
      </div>`
    ).join('');
    autocompleteList.classList.add('active');
    autocompleteList.querySelectorAll('.autocomplete-item').forEach(el => {
      el.addEventListener('click', () => {
        productInput.value = el.dataset.name;
        autocompleteList.classList.remove('active');
        priceInput.focus();
      });
    });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.field-input-wrap')) autocompleteList.classList.remove('active'); });

  // --- Quick chips ---
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      productInput.value = chip.dataset.name;
      priceInput.value = chip.dataset.price;
      form.dispatchEvent(new Event('submit'));
    });
  });

  // --- Form submit ---
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = productInput.value.trim();
    const price = parseInt(priceInput.value);
    if (!name || isNaN(price) || price <= 0) return;
    analyzeBtn.classList.add('loading');
    await new Promise(r => setTimeout(r, 1500));
    const result = ai.analyze(name, price, locationSelect.value);
    renderResult(result);
    analyzeBtn.classList.remove('loading');
  });

  // --- Render result ---
  let resultChart = null;

  function renderResult(r) {
    resultContainer.classList.remove('hidden');
    resultContainer.classList.add('visible');

    document.getElementById('result-emoji').textContent = r.emoji;
    document.getElementById('result-product-name').textContent = r.productName;
    document.getElementById('result-verdict').textContent = r.verdictText;
    const badge = document.getElementById('result-badge');
    badge.textContent = r.badgeText;
    badge.className = `badge ${r.badgeClass}`;

    const displayStyle = r.found ? 'block' : 'none';
    document.getElementById('gauge-section').style.display = displayStyle;
    document.getElementById('metrics-section').style.display = displayStyle;
    document.getElementById('chart-section').style.display = displayStyle;
    document.getElementById('add-data-container').style.display = r.found ? 'none' : 'block';

    if (r.found) {
      document.getElementById('stat-input-price').textContent = `₩${r.inputPrice.toLocaleString()}`;
      document.getElementById('stat-avg-price').textContent = `₩${r.avgPrice.toLocaleString()}`;
      document.getElementById('stat-percentile').textContent = `상위 ${r.percentile}%`;

      const savingsEl = document.getElementById('stat-savings');
      const savingsLabel = document.getElementById('savings-label');
      if (r.savings > 0) {
        savingsEl.textContent = `+₩${r.savings.toLocaleString()}`;
        savingsEl.className = 'metric-value text-loss';
        savingsLabel.textContent = '초과 지불 금액';
      } else {
        savingsEl.textContent = `₩${Math.abs(r.savings).toLocaleString()} 절약`;
        savingsEl.className = 'metric-value text-gain';
        savingsLabel.textContent = '절약한 금액';
      }

      document.getElementById('gauge-marker').style.left = `${r.gaugePosition}%`;
      document.getElementById('marker-tooltip').textContent = `₩${r.inputPrice.toLocaleString()}`;
      document.getElementById('gauge-min').textContent = `₩${r.minPrice.toLocaleString()}`;
      document.getElementById('gauge-avg').textContent = `₩${r.avgPrice.toLocaleString()}`;
      document.getElementById('gauge-max').textContent = `₩${r.maxPrice.toLocaleString()}`;

      // Chart
      const ctx = document.getElementById('result-chart').getContext('2d');
      if (resultChart) resultChart.destroy();
      const colors = {
        cheap: 'rgba(0, 196, 113, 0.7)',
        fair: 'rgba(25, 31, 40, 0.7)',
        caution: 'rgba(250, 219, 20, 0.7)',
        ripoff: 'rgba(240, 68, 82, 0.7)'
      };
      resultChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['최저가', '평균가', '입력 가격', '최고가'],
          datasets: [{
            data: [r.minPrice, r.avgPrice, r.inputPrice, r.maxPrice],
            backgroundColor: [colors.cheap, colors.fair, colors[r.verdict], colors.ripoff],
            borderRadius: 6, barThickness: 36
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `₩${c.parsed.y.toLocaleString()}` }, backgroundColor: '#191F28', cornerRadius: 8 } },
          scales: {
            y: { beginAtZero: true, grid: { color: '#F2F3F6' }, ticks: { color: '#8B95A1', callback: v => `₩${v.toLocaleString()}` } },
            x: { grid: { display: false }, ticks: { color: '#4E5968', font: { weight: '600' } } }
          }
        }
      });
    }

    document.getElementById('ai-analysis-text').textContent = r.analysisText;
    document.getElementById('tips-list').innerHTML = r.tips.map(t => `<li>${t}</li>`).join('');
    document.getElementById('alternatives-list').innerHTML = (r.alternatives.length > 0)
      ? r.alternatives.map(a => `<li>${a}</li>`).join('')
      : '<li>등록된 대안 정보가 없습니다</li>';

    setTimeout(() => resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
  }

  // --- Categories ---
  function renderCategories() {
    const grid = document.getElementById('category-grid');
    grid.innerHTML = '';
    for (const [name, data] of Object.entries(priceDatabase)) {
      const tags = data.items.slice(0, 4).map(i => `<span class="cat-tag">${i.name}</span>`).join('');
      const card = document.createElement('div');
      card.className = 'cat-card';
      card.innerHTML = `
        <span class="cat-emoji" style="display:none;">${data.emoji}</span>
        <h3 class="cat-name">${name}</h3>
        <p class="cat-count">${data.items.length}개 품목</p>
        <div class="cat-tags">${tags}</div>
      `;
      card.addEventListener('click', () => openModal(name, data));
      grid.appendChild(card);
    }
  }

  function openModal(name, data) {
    document.getElementById('modal-title').textContent = `${name}`;
    document.getElementById('modal-body').innerHTML = data.items.map(item => `
      <div class="modal-row">
        <div>
          <div class="modal-row-name">${item.name}</div>
          <div class="modal-row-range">₩${item.min.toLocaleString()} ~ ₩${item.max.toLocaleString()} (${item.unit})</div>
        </div>
        <div class="modal-row-right">
          <span class="modal-row-avg">평균 ₩${item.avg.toLocaleString()}</span>
          <button class="modal-analyze-btn" data-name="${item.name}">분석하기</button>
        </div>
      </div>
    `).join('');
    document.getElementById('modal-body').querySelectorAll('.modal-analyze-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        productInput.value = btn.dataset.name;
        priceInput.focus();
        closeModal();
        document.getElementById('analyze').scrollIntoView({ behavior: 'smooth' });
      });
    });
    document.getElementById('category-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('category-modal').classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);

  // --- Trend Charts ---
  function renderTrends() {
    const cats = Object.entries(priceDatabase);

    // Risk chart
    new Chart(document.getElementById('risk-chart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: cats.map(([n]) => n),
        datasets: [{
          label: '위험도 (%)',
          data: cats.map(([, d]) => d.riskLevel),
          backgroundColor: cats.map(([, d]) => {
            if (d.riskLevel <= 25) return 'rgba(0,196,113,0.6)';
            if (d.riskLevel <= 40) return 'rgba(25,31,40,0.6)';
            if (d.riskLevel <= 55) return 'rgba(250,219,20,0.6)';
            return 'rgba(240,68,82,0.6)';
          }),
          borderRadius: 6, barThickness: 28
        }]
      },
      options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `위험도: ${c.parsed.x}%` }, backgroundColor: '#191F28', cornerRadius: 8 } },
        scales: {
          x: { beginAtZero: true, max: 100, grid: { color: '#F2F3F6' }, ticks: { color: '#8B95A1', callback: v => `${v}%` } },
          y: { grid: { display: false }, ticks: { color: '#4E5968', font: { weight: '600', size: 12 } } }
        }
      }
    });

    // Avg price radar
    new Chart(document.getElementById('price-chart').getContext('2d'), {
      type: 'radar',
      data: {
        labels: cats.map(([n]) => n),
        datasets: [{
          label: '평균 가격',
          data: cats.map(([, d]) => Math.round(d.items.reduce((s, i) => s + i.avg, 0) / d.items.length)),
          backgroundColor: 'rgba(211,47,47,0.1)',
          borderColor: 'rgba(211,47,47,0.7)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(211,47,47,1)',
          pointBorderColor: '#fff', pointBorderWidth: 1, pointRadius: 5
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `평균 ₩${c.parsed.r.toLocaleString()}` }, backgroundColor: '#191F28', cornerRadius: 8 } },
        scales: { r: { beginAtZero: true, grid: { color: '#E5E8EB' }, angleLines: { color: '#E5E8EB' }, pointLabels: { color: '#4E5968', font: { size: 11, weight: '600' } }, ticks: { display: false } } }
      }
    });
  }

  // --- Init ---
  renderCategories();
  renderTrends();

  // --- Add Data Logic ---
  const addDataModal = document.getElementById('add-data-modal');
  const addNameInput = document.getElementById('add-name');
  
  const navAddData = document.getElementById('nav-add-data');
  if(navAddData) {
    navAddData.addEventListener('click', (e) => {
      e.preventDefault();
      addNameInput.value = '';
      addDataModal.classList.remove('hidden');
    });
  }
  const mobileAddData = document.getElementById('mobile-add-data');
  if(mobileAddData) {
    mobileAddData.addEventListener('click', (e) => {
      e.preventDefault();
      if(typeof mobileMenu !== 'undefined') mobileMenu.classList.remove('active');
      addNameInput.value = '';
      addDataModal.classList.remove('hidden');
    });
  }

  
  const openAddDataBtn = document.getElementById('open-add-data-btn');
  if(openAddDataBtn) {
    openAddDataBtn.addEventListener('click', () => {
      addNameInput.value = document.getElementById('product-name').value.trim();
      addDataModal.classList.remove('hidden');
    });
  }

  const addModalClose = document.getElementById('add-modal-close');
  if(addModalClose) {
    addModalClose.addEventListener('click', () => {
      addDataModal.classList.add('hidden');
    });
  }
  
  const addDataBackdrop = document.getElementById('add-data-backdrop');
  if(addDataBackdrop) {
    addDataBackdrop.addEventListener('click', () => {
      addDataModal.classList.add('hidden');
    });
  }

  const addDataForm = document.getElementById('add-data-form');
  if(addDataForm) {
    addDataForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cat = document.getElementById('add-category').value;
      const name = document.getElementById('add-name').value.trim();
      const min = parseInt(document.getElementById('add-min').value);
      const avg = parseInt(document.getElementById('add-avg').value);
      const max = parseInt(document.getElementById('add-max').value);
      const unit = document.getElementById('add-unit').value.trim();

      if (priceDatabase[cat]) {
        priceDatabase[cat].items.push({
          name: name, min: min, avg: avg, max: max, unit: unit, tips: ["소비자가 직접 추가한 데이터입니다. 향후 AI가 추가 검증을 수행할 예정입니다."], alternatives: []
        });
        
        // Re-init the AI to reflect new items
        ai.allItems = ai._flattenItems();
        
        // Close modal and re-search
        addDataModal.classList.add('hidden');
        productInput.value = name;
        form.dispatchEvent(new Event('submit'));
        
        // Optionally update categories view
        renderCategories();
      }
    });
  }

});
