# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./assets/Screenshot%202024-03-25%20at%202.18.43%20PM.png)


### Links

- Solution URL: [https://github.com/tho343/pod-landing-page](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

For this project, I use Javascript to:
- Add "submit event listener to the form
- Validate the email input
- Append the error message after validate
```js
const form = document.forms[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form[0].value;
    const errorMsg = document.getElementById("error-message");
    if(errorMsg){
        errorMsg.remove();
    }
    if (! email.includes("@")) {
        form.innerHTML += 
        `<p id="error-message">Oops! Please check your email</p>`
    }
    
})
```


### Continued development

Using API to send message to the real email

## Author

- Website - [Tran Ho](https://tho343.github.io/tran-website/)

