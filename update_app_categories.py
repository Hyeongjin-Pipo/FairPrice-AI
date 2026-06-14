import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Add new categories to priceDatabase
new_categories = """
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
"""
js = js.replace("    ]\n  }\n};", "    ]\n  },\n" + new_categories.strip() + "\n")

# 2. Add event listeners for the nav add data buttons
nav_listeners = """  const addDataModal = document.getElementById('add-data-modal');
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
"""

js = js.replace("  const addDataModal = document.getElementById('add-data-modal');\n  const addNameInput = document.getElementById('add-name');", nav_listeners)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("app.js Updated with new categories and nav links.")
