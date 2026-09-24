# Test Strategy

## Objective

Validate the principal API behaviours of a simulated fintech flow: authentication, customer information and transaction retrieval. The suite is designed as a portfolio example of maintainable API automation with Postman and Newman.

## Scope

| Area | Coverage |
| --- | --- |
| Authentication | Valid login, invalid password and missing credentials |
| Users | Successful retrieval, identifier and required-field validation |
| Transactions | Successful retrieval, ownership and response structure |
| Negative testing | Exact error status and message validation; non-existent resource behaviour |

## Test approach

- Each scenario validates an exact expected status instead of accepting multiple unrelated outcomes.
- Positive responses validate both payload type and relevant business fields.
- Negative responses validate the error message when the API provides one.
- Environment variables keep the base URL and test data outside request definitions.
- Newman provides repeatable command-line execution.
- GitHub Actions runs the collection on every push and pull request to `main`.

## Entry and exit criteria

Entry criteria:

- Fake Store API is available.
- Project dependencies are installed with `npm ci` or `npm install`.

Exit criteria:

- All requests execute.
- All assertions pass.
- Newman exits with code `0`.
- The HTML report is generated when using the report command.

## Known limitations

- Fake Store API is a public mock API and not a real banking platform.
- The user and cart endpoints do not enforce the authentication token.
- A non-existent user returns `200` with `null` instead of `404`; the suite asserts the observed API contract and documents the inconsistency.
- Performance thresholds are intentionally excluded because response times depend on a third-party public service.

## Risks not covered

- Token expiration and authorization roles.
- Idempotency and duplicate financial transactions.
- Concurrent balance updates and race conditions.
- Persistent data validation against a database.
- Load, stress and security testing.
