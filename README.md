# Code-Quiz README

![Pete Scale Webpage](./Assets/password_generator.png)

Used JavaScript to create a random password generator.

## Table of Contents
[Description](#description)

[Features](#features)

[Usage](#usage)

[Credits](#credits)

---

## Description

Created a randomly generated password that takes into account several users choices:

* length of password
* include lowercase letters
* include uppercase letters
* include numbers
* include special characters

This way I can create a strong password that provides greater security based on these user preferences.

---

## Features

* Click-able "Generate Password" button

* Prompt for desired password length from of at least 8 characters and no more than 128 characters long

    * If USER enters password length as anything other than a number from the set range then the page is refreshed after the character type prompts and no password is generated (must click the button again)

* Prompt to choose whether to include lowercase, uppercase, numeric, and/or special characters after the desired password length is chosen

    * If USER chooses to include none of the characters then the page is refreshed and no password is generated (must click the button again)

* Generated password is displayed on to the page in the "Your Secure Password" field

---

## Usage

* Click the "Generate Password" button to trigger the password criteria prompts

* Once the criteria prompts are appropriately answered a password is generated based on your answers

* To create a different password just click the "Generate Password" button again!

---

## Credits

Special thanks to Josh and the gang for their help!

Also thanks to my sister for helping me think through the some of logic when my brain turned to soup!

https://www.w3schools.com/

https://www.ascii-code.com/

https://www.youtube.com/watch?v=iKo9pDKKHnc&t=309s

https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript