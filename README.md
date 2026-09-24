# Fintech API Testing with Postman and Newman

[![API Tests](https://github.com/JuanJAtencio/fintech-api-testing-postman/actions/workflows/api-tests.yml/badge.svg)](https://github.com/JuanJAtencio/fintech-api-testing-postman/actions/workflows/api-tests.yml)

API testing portfolio project that automates authentication, user and transaction scenarios against [Fake Store API](https://fakestoreapi.com/). It demonstrates functional and negative testing, reusable environments, command-line execution, HTML reporting and continuous integration.

## Test coverage

| Module | Scenario | Expected result |
| --- | --- | --- |
| Authentication | Login with valid credentials | `201` and a non-empty token |
| Authentication | Login with an invalid password | `401` and an error message |
| Authentication | Login without credentials | `400` and an error message |
| Users | Retrieve user `1` | `200`, correct ID and required fields |
| Users | Retrieve a non-existent user | `200` and `null`, per mock API behaviour |
| Transactions | Retrieve carts for user `1` | `200`, non-empty array and matching ownership |

Assertions validate exact status codes, payload structures and relevant field values. See the complete [test strategy](docs/test-strategy.md), including scope, exit criteria and known limitations.

## Technologies

- Postman collections and environments
- JavaScript assertions
- Newman CLI
- newman-reporter-htmlextra
- Node.js and npm
- GitHub Actions

## Project structure

```text
.
├── .github/workflows/api-tests.yml
├── collections/fintech-api.postman_collection.json
├── docs/test-strategy.md
├── environments/fintech-api.postman_environment.json
├── reports/
├── package.json
└── README.md
```

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
git clone https://github.com/JuanJAtencio/fintech-api-testing-postman.git
cd fintech-api-testing-postman
npm install
npm test
```

No global Newman installation is required. The scripts use the project dependency declared in `package.json`.

## Generate the HTML report

```bash
npm run test:api:report
```

Open `reports/newman-report.html` after execution. Generated reports are excluded from Git to keep the repository clean. In GitHub Actions, the report is available as a downloadable workflow artifact for 14 days.

## Continuous integration

The `API Tests` workflow runs automatically on:

- pushes to `main`;
- pull requests targeting `main`;
- manual execution from the Actions tab.

The workflow installs locked dependencies, runs the complete Newman collection and uploads the HTML report even when an assertion fails.

## Author

**Juan José Atencio** — QA Analyst focused on API testing and test automation.
