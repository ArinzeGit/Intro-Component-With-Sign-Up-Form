# Frontend Mentor - 'Intro component with sign up form' solution

This is my solution to the ['Intro component with sign up form' challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

Desktop version:  
![Intro Component With Sign Up Form Screenshot1](/public/Intro%20Component%20With%20Sign%20Up%20Form%20Screenshot1.PNG)  
![Intro Component With Sign Up Form Screenshot2](/public/Intro%20Component%20With%20Sign%20Up%20Form%20Screenshot2.PNG)

Mobile version:  
![Intro Component With Sign Up Form Screenshot1-mobile](/public/Intro%20Component%20With%20Sign%20Up%20Form%20Screenshot1-mobile.PNG)  
![Intro Component With Sign Up Form Screenshot2-mobile](/public/Intro%20Component%20With%20Sign%20Up%20Form%20Screenshot2-mobile.PNG)

### Links

- Solution URL: View the GitHub repository [here](https://github.com/ArinzeGit/Intro-Component-With-Sign-Up-Form)
- Live Site URL: I have hosted the project on GitHub Pages [here](https://arinzegit.github.io/Intro-Component-With-Sign-Up-Form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Flexbox](https://www.w3.org/TR/css-flexbox-1/) - CSS web layout model
- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language that extends JavaScript
- [React](https://react.dev/) - JavaScript library
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Vite](https://vitejs.dev/) - React build tool with local development server

### What I learned

- I learned the `Clearfix` CSS technique used to make parent elements wrap around their floating child elements to prevent their margins or paddings from affecting layout of subsequent elements. This technique creates a `HTML Pseudo-element` after all children of parent element using `::after`, then uses CSS attributes `clear:both` and `display:table` or `display:block` to ensure it appears beneath the floating elements and takes up the entire viewport width. This pseudo-element is usually empty and its main purpose is to make the container wrap around it, thereby wrapping around the floating child elements.

```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

- I learned `Regex` for my client side form validation. 'Regular expressions' are used for matching text strings. I learned the key concepts like patterns, metacharacters, quatifiers, character classes, anchors and grouping and capturing

```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
```

### Continued development

- Bootstrap
- Flexbox
- Typescript
- React

I found these techniques very useful. I will continue focusing on them in future projects to refine and perfect them.

### Useful resources

- [CSS Clearfix](https://youtu.be/2tC4PIlEz_o?si=YXKXOB1QXEEYqeFb) - This is an amazing YouTube tutorial that helped me understand clearfix. I'd recommend it to anyone having difficulties with it.

## Author

- GitHub - [@ArinzeGit](https://github.com/ArinzeGit)
- Frontend Mentor - [@ArinzeGit](https://www.frontendmentor.io/profile/ArinzeGit)
- LinkedIn - [@Dennings-Owoh](https://www.linkedin.com/in/dennings-owoh-4839971b1/)
- Instagram - [@\_.arinze.\_](https://www.instagram.com/_.arinze._/)
- Twitter - [@Arinze98433402](https://twitter.com/Arinze98433402)
