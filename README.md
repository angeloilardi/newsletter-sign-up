# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop preview](./public/assets/images/desktop-screenshot.png)
![Error state](public/assets/images/error-state.png)


### Links

- Solution URL: (https://www.frontendmentor.io/solutions/newsletter-signup-form-with-success-message-solution-pARubPoW0k)
- Live Site URL: (https://newsletter-sign-up-jade.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles


### What I learned

Customising validation is a great thing. No one wants to see the browser's default message. The problem is that it's not as easy as it should be. Once again, Tailwind came to the rescue with some great handling of CSS pseudo classes like :invalid and :placeholder-shown.

Another take away is that, if you only need a redirection on submit, then using the HTML action attribute remains the most simple and effective solution.


### Continued development

Form validation and submission are on my to-do list, especially when coupled with Next Server Actions.


### Useful resources

- [DEV Coomunity article](https://dev.to/deyemiobaa/adding-custom-validation-to-a-form-with-tailwindcss-1e7d#:~:text=Preventing%20Form%20Submission&text=Since%20the%20input%20fields%20are,the%20form%20from%20being%20submitted.&text=We%20use%20the%20%3Ainvalid%20pseudo,when%20the%20form%20is%20invalid.) - This blog post helped me big time. The trick to disable the sumbit button if the form is invalid is genius!

## Author

- Website - [https://angelo-ilardi.vercel.app/](https://angelo-ilardi.vercel.app/)
- Frontend Mentor - [@helldorado82](https://www.frontendmentor.io/profile/helldorado82)
