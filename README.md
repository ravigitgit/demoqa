# DemoQA Playwright Automation Framework

[![GitHub release](https://img.shields.io/github/v/release/ravigitgit/demoqa)](https://github.com/ravigitgit/demoqa/releases)
[![Playwright Tests](https://github.com/ravigitgit/demoqa/actions/workflows/playwright-demoqa.yml/badge.svg)](https://github.com/ravigitgit/demoqa/actions)

Automation framework for **DemoQA** built using **Playwright**, featuring:

* 📌 Page Object Model (POM)
* 🧪 Multi-browser testing (Chromium / Firefox / WebKit)
* 🚀 GitHub Actions CI Pipeline
* 🌐 Test Report hosted via GitHub Pages
* 🔐 Secure secrets for credentials

---

## 🛠️ Installation & Local Setup

1. **Clone the Repo**

```bash
git clone https://github.com/ravigitgit/demoqa.git
cd demoqa
```

2. **Install Dependencies**

```bash
npm install
```

3. **Install Browsers**

```bash
npx playwright install --with-deps
```

4. **Run Tests**

```bash
npx playwright test
# or
npm run test
```

5. **View HTML Report (Local)**

```bash
npx playwright show-report
# or
npm run test:report
```

6. **View Report (GitHub Pages)**
   Reports are auto-published on CI ✅
   👉 https://ravigitgit.github.io/demoqa

---

## 📂 Project Structure

```
demoqa/
 ├─ .github/workflows      # CI pipelines
 ├─ pageObject/            # Page Objects
 ├─ tests/                 # Test specs (UI + API)
 ├─ fixtures/              # Custom fixtures (API auth etc.)
 ├─ userData/              # Test data & helpers
 └─ playwright.config.js   # Playwright configuration
```

---

## ✅ CI / CD Pipeline Features

* Multi-browser test matrix (**Chromium | Firefox | WebKit**)
* Scheduled runs (daily execution ⏱️)
* Upload test artifacts (HTML report + traces)
* Deploy HTML report to GitHub Pages
* PR auto-comment with test summary

---

## 🔗 Useful Links

| Resource            | Link                                          |
| ------------------- | --------------------------------------------- |
| DemoQA Site         | https://demoqa.com                            |
| GitHub Pages Report | https://ravigitgit.github.io/demoqa           |
| Releases            | https://github.com/ravigitgit/demoqa/releases |

---

## 👨‍💻 Author

**Ravi** — QA Engineer | Playwright | CI/CD

Feel free to ⭐ this repo if it helped you!

---

## 📬 Contribution & Support

PRs are welcome 🙌

For issues or suggestions:
https://github.com/ravigitgit/demoqa/issues
