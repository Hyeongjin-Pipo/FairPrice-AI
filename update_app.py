import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Update renderResult visibility logic
old_logic = "    if (r.found) {"
new_logic = """    const displayStyle = r.found ? 'block' : 'none';
    document.getElementById('gauge-section').style.display = displayStyle;
    document.getElementById('metrics-section').style.display = displayStyle;
    document.getElementById('chart-section').style.display = displayStyle;
    document.getElementById('add-data-container').style.display = r.found ? 'none' : 'block';

    if (r.found) {"""
js = js.replace(old_logic, new_logic)

# 2. Append Event Listeners at the end of DOMContentLoaded
old_end = "  renderCategories();\n  renderTrends();\n});"
new_end = """  renderCategories();
  renderTrends();

  // --- Add Data Logic ---
  const addDataModal = document.getElementById('add-data-modal');
  const addNameInput = document.getElementById('add-name');
  
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

});"""
js = js.replace(old_end, new_end)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)
print("app.js Updated")
