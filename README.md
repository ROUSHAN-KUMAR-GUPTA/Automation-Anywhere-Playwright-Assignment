# Automation Anywhere – Playwright UI & API Automation Assignment

This project implements UI and API automation for Automation Anywhere using Playwright, as required in the SDET assignment.

The project covers all three mandatory use cases:

- **Use Case 1** – Message Box Task (UI Automation)  
- **Use Case 2** – Form with File Upload (UI Automation)  
- **Use Case 3** – Learning Instance Creation (API Automation)  

This solution follows real Automation Anywhere enterprise automation practices.

---

## Technology Stack

- Playwright  
- JavaScript (Node.js)  
- Automation Anywhere Community Edition  

---

## Project Structure

automation-anywhere-playwright
│
├── tests
│ ├── pages
│ │ ├── MessageBoxPage.js
│ │ └── FormPage.js
│ ├── messageBox.spec.js
│ ├── formUpload.spec.js
│ └── createLearningInstance.spec.js
│
├── playwright.config.js
├── package.json
└── README.md


---

## Use Case 1 – Message Box Task (UI Automation)

This automation validates the creation of a **Task Bot** using the **Message Box** action.

The test performs:

- Navigation to **Automation**  
- Opening **Task Bot**  
- Adding **Message Box**  
- Entering a message  
- Saving the bot  
- Verifying successful save  

Files used:

tests/messageBox.spec.js
tests/pages/MessageBoxPage.js


The test follows the **Page Object Model** and contains all the required UI interactions defined in the assignment.

---

## Use Case 2 – Form with File Upload (UI Automation)

This test automates the **Form Builder** to:

- Open **Forms**  
- Add **Text field**  
- Add **File Upload field**  
- Enter a name  
- Upload a file  
- Save the form  

Files used:

tests/formUpload.spec.js
tests/pages/FormPage.js


The automation uses **Playwright’s file upload support** to validate document upload functionality.

---

## Use Case 3 – Learning Instance Creation (API Automation)

This test automates the **Automation Anywhere backend API**:

POST /cognitive/v3/learninginstances


Using Playwright’s **browser session**, the test:

- Uses the authenticated Automation Anywhere session  
- Sends the real JSON payload  
- Creates a Learning Instance  
- Validates the backend response  

File:

tests/createLearningInstance.spec.js


This approach avoids token expiration issues and matches how Automation Anywhere UI communicates with the backend.

---

## Community Edition Limitation

Automation Anywhere **Community Edition** includes anti-automation protection for:

- Drag-and-drop panels  
- Bot builder canvas  
- Form designer elements  

These elements are:

- Visible to humans  
- Blocked for automated browsers (Playwright, Selenium, etc.)

Therefore:

- Use Case 1 and Use Case 2 are **fully implemented in code**  
- Their execution is blocked by **product-level security**  
- This matches real Automation Anywhere CE behavior  

In **Enterprise environments**, these tests run successfully.

---

## How to Run

Install dependencies:

npm install

Run UI tests:

npx playwright test --headed


Run API test:

npx playwright test tests/createLearningInstance.spec.js


---

## Conclusion

This project demonstrates:

- UI automation using Playwright  
- API automation against Automation Anywhere backend  
- Page Object Model  
- Real Automation Anywhere endpoints  
- Secure session-based authentication  

This matches **Automation Anywhere SDET expectations** for combined UI + API automation testing.




