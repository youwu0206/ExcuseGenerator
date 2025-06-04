# Excuse Generator

An interactive web application that allows users to generate creative and personalized excuses for any situation. Users enter a reason (e.g., "finish homework") and choose a tone (serious, chill, or humorous). The app returns a customized excuse using the OpenAI API. Users can save their favorite excuses to view them later.

# Project Features

-Input field to describe what the excuse is for
-Tone selector
-Generate excuse button
-Ability to save and delete their favorite excuses
-Saved page with excuses displayed in a grid, color-coded by tone
-Generate another button to start over
-Navigation to go back and forth between generate and saved page

# Technologies Used

-React (Vite)
-Javascript
-OpenAI API
-Firebase (Firestore)
-HTML & CSS


# Setup Instructions

Clone the repo:
git clone https://github.com/youwu0206/ExcuseGenerator.git
Install npm:
npm install
Run the app:
npm run dev
Then open the browser using the link!

# Usage Guidelines

1.Enter a reason in the input field (e.g., 'finish homework')
2.Select a tone: serious, chill, humorous
3.Click "Generate Excuse!"
4.View your generated excuse
5.Click save to store it in the saved page
6.Navigate to saved page to view or delete excuses

# API Documentation

This app uses the OpenAI API to generate responses.
Prompt format: Generate a {tone} excuse for why someone couldn't {reason}.

# Future Enhancements

-Add the ability to edit saved excuses
-Add the option to share saved excuses with friends
-Implement dark mode
Known Issues:
-The saved excuses are not private and not tied to specific accounts
-UI designs are not very polished

# Code Comments

ExcuseForm.jsx: Handles user input and calls OpenAI API

openai.js: Contains the Axios request with appropriate prompt format

SavedPage.jsx: Fetches and displays saved excuses with delete functionality




