# Fintech API Testing - Postman + Newman

## 📌 Description

API testing project simulating fintech scenarios using Postman and Newman.

Includes:

* Authentication (token-based)
* User data validation
* Transactions validation
* Negative testing scenarios

---

## 🛠️ Technologies

* Postman
* Newman (CLI)
* JavaScript (Tests)
* Git & GitHub

---

## 🚀 How to Run

```bash
git clone https://github.com/JuanJAtencio/fintech-api-testing-postman.git
cd fintech-api-testing-postman
npx newman run "Fintech API Testing - Postman Portfolio.postman_collection.json" -e Fintech-Env.postman_environment.json
```

---

## 📊 HTML Report

```bash
npx newman run "Fintech API Testing - Postman Portfolio.postman_collection.json" -e Fintech-Env.postman_environment.json -r htmlextra
```

After execution, open:

```
newman/*.html
```

---

## ✅ Features

* Environment-based configuration
* Authentication handling (token storage)
* Automated assertions
* Error handling for non-JSON responses
* CLI execution with Newman
* HTML reporting

---

## 🎯 Author

Juan Atencio
