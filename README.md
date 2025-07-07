# Interactive Registration Form

## Project Overview

This project is a responsive, interactive user registration form built using HTML, CSS, and JavaScript. 
It performs real-time client-side validation for form fields such as username, email, password, and password confirmation. 
Basic styling is included for usability and accessibility. A user's username is also saved in localStorage upon submission.

---

## How to Use

 Open index.html in any modern web browser. Fill out all form fields with valid information.
 Click **Register** to trigger validation logic. If successful, the username is saved to localStorage.

---

## Features

Real-time validation with custom error messages
Inline display of validation feedback
Password confirmation logic
HTML5 built-in validation used in combination with JavaScript
Form submission is prevented until all fields pass validation
Username is stored in localStorage upon successful submission

---

---

## Known Issues

 **No form reset after submission:**  
  Upon successful submission, input fields aren't cleared, and there’s no feedback confirming data was saved.

 **No password strength check beyond character count:**  
  Only length is checked. Requirements such as uppercase/lowercase/numbers are mentioned in the UI but not enforced in logic.

  **LocalStorage limitations:**  
  Only the username is stored, and localStorage cannot securely store sensitive data like passwords.
  Also, it doesn't sync across tabs or devices and may be cleared by the browser.

---

## Developer Reflection

### How did event.preventDefault() help in handling form submission?

event.preventDefault() prevented the browser’s default behavior of reloading the page when the form is submitted.
This allowed full control over the form validation and localStorage logic through JavaScript before any actual data submission.

---

### What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 validation (required, type="email") provides a simple way to catch common issues, while JavaScript offers flexibility to implement custom rules and error messages. 
Using a more user-friendly form experience, especially for edge cases or complex logic like matching passwords.

---

### How was `localStorage` used to persist and retrieve the username? What are its limitations?

The username value was stored with:

```javascript
localStorage.setItem("inputUsername", input.value);


