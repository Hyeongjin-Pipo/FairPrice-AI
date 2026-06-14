import os

css_addition = """
.chart-wrap {
  position: relative;
  height: 300px;
  width: 100%;
}

.chart-wrap-lg {
  position: relative;
  height: 400px;
  width: 100%;
}
"""

with open("style.css", "a", encoding="utf-8") as f:
    f.write(css_addition)

print("Added chart wrap classes to style.css")
