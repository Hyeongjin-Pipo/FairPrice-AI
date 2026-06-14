import re

with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

# Update root variables
css = css.replace(
    "  /* Primary Colors */\n  --blue: #3182F6;\n  --blue-light: #E8F3FF;\n  --blue-bg: #F0F6FF;",
    "  /* Primary Colors */\n  --primary-black: #191F28;\n  --primary-red: #D32F2F;\n  --blue: #3182F6;\n  --blue-light: #E8F3FF;\n  --blue-bg: #F0F6FF;"
)

# logo-mark
css = css.replace("background: var(--blue);", "background: var(--primary-black);", 1)

# hero-eyebrow
css = css.replace("color: var(--blue);\n  margin-bottom: 16px;", "color: var(--primary-red);\n  margin-bottom: 16px;")

# hero-cta
css = css.replace("background: var(--blue);\n  color: #fff;", "background: var(--primary-black);\n  color: #fff;")
css = css.replace("box-shadow: 0 2px 8px rgba(49, 130, 246, 0.25);", "box-shadow: 0 2px 8px rgba(25, 31, 40, 0.25);")
css = css.replace("background: #1B6CED;", "background: var(--primary-red);")
css = css.replace("box-shadow: 0 4px 14px rgba(49, 130, 246, 0.3);", "box-shadow: 0 4px 14px rgba(211, 47, 47, 0.3);")

# form input focus
css = css.replace("border-color: var(--blue);\n  box-shadow: 0 0 0 3px var(--blue-light);", "border-color: var(--primary-red);\n  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);")

# btn-primary
css = css.replace("background: var(--blue);\n  color: #fff;", "background: var(--primary-black);\n  color: #fff;")

# chip hover colorful
chip_hover_old = """.chip:hover {
  border-color: var(--blue);
  color: var(--blue);
  background: var(--blue-light);
}"""
chip_hover_new = """.chip:nth-child(3n+1):hover { border-color: var(--green); color: var(--green); background: var(--green-light); }
.chip:nth-child(3n+2):hover { border-color: var(--yellow); color: var(--yellow); background: var(--yellow-light); }
.chip:nth-child(3n):hover { border-color: var(--red); color: var(--red); background: var(--red-light); }"""
css = css.replace(chip_hover_old, chip_hover_new)

# ai-report and tip-box pseudo elements
css = css.replace("background: var(--blue-bg);", "background: #FAFAFA;")
css = css.replace("color: var(--blue);\n}\n\n.ai-report p", "color: var(--primary-red);\n}\n\n.ai-report p")
css = css.replace("color: var(--blue);\n}\n\n/* Chart */", "color: var(--primary-red);\n}\n\n/* Chart */")

# cat-card hover colorful
cat_card_hover_old = """.cat-card:hover {
  border-color: var(--blue);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}"""
cat_card_hover_new = """.cat-card:nth-child(3n+1):hover { border-color: var(--green); box-shadow: 0 4px 14px rgba(0, 196, 113, 0.15); transform: translateY(-2px); }
.cat-card:nth-child(3n+2):hover { border-color: var(--yellow); box-shadow: 0 4px 14px rgba(250, 219, 20, 0.15); transform: translateY(-2px); }
.cat-card:nth-child(3n):hover { border-color: var(--red); box-shadow: 0 4px 14px rgba(240, 68, 82, 0.15); transform: translateY(-2px); }"""
css = css.replace(cat_card_hover_old, cat_card_hover_new)

# modal-analyze-btn
css = css.replace("border: 1px solid var(--blue);\n  background: var(--blue-light);\n  color: var(--blue);", "border: 1px solid var(--primary-black);\n  background: #fff;\n  color: var(--primary-black);")
css = css.replace(".modal-analyze-btn:hover {\n  background: var(--blue);\n  color: #fff;\n}", ".modal-analyze-btn:hover {\n  background: var(--primary-red);\n  border-color: var(--primary-red);\n  color: #fff;\n}")

# feature-card hover
feature_card_hover_old = """.feature-card:hover {
  border-color: var(--blue);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}"""
feature_card_hover_new = """.feature-card:nth-child(odd):hover { border-color: var(--primary-red); box-shadow: 0 4px 14px rgba(211, 47, 47, 0.15); transform: translateY(-2px); }
.feature-card:nth-child(even):hover { border-color: var(--primary-black); box-shadow: var(--shadow-md); transform: translateY(-2px); }"""
css = css.replace(feature_card_hover_old, feature_card_hover_new)

# bm-price
css = css.replace("color: var(--blue);\n  font-weight: 600;\n}", "color: var(--primary-red);\n  font-weight: 600;\n}")

with open("style.css", "w", encoding="utf-8") as f:
    f.write(css)
print("CSS Updated")
