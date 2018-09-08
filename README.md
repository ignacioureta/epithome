Welcome to the DealSyte react code challenge!

- You are given 45 minutes for this challenge. It is perfectly OK to submit an incomplete solution! **This challenge is designed to take longer than 45 minutes**, and part of the assesment will involve continuing on this challenge with a member of the DealSyte team. There is a grace period after that, but please try and stay close to 45 minutes. If you exceed the time limit too much, the system will not accept your submission. This is designed to be fair to you and ensure we do not use too much of your time.

## To get started

- Clone this repo
- Install the project dependencies `npm install`
- Start the project `npm start`

## Instructions

This project displays a list of trivia questions with two arrow buttons to the right.
Some basic styling is applied, and all styles live in the App.css file. You will find the project's top-level component in App.js

The challenge will be to add the following functionality to this react app. Please complete these items in order:

1. Add the ability to click on an item in the trivia list to select that item. You can only select one item at a time. The selected item should have a black border and a black background behind the list number.

2. Add functionality to the existing arrow buttons so that clicking the up arrow will select the previous item in the trivia list, and clicking the down arrow will select the next item in the trivia list. If the first or last item in the list is selected, and the arrow is pressed that would make the selection go 'out of bounds', we should just leave the selection where it is.

3. Add keyboard functionality to the selection. Allow the user to use the up and down arrow keys on the keyboard to change the selected item in the trivia list. This should behave similar to step 2.

4. Add scrolling functionality to the selection. If the user uses the keyboard or arrow buttons to select an item that is currently off the screen, scroll the screen to keep the selected item in view.

## Other guidelines

- We do not expect 'perfect' code or 100% completion. We are looking for a functional solution that displays familiarity with react.
- Please adjust or add any styling as necessary to the App.css file, but styling is not the focus of this challenge.
- Feel free to modify the existing code or component structure as much or as little as you see fit.
- You are welcome to use the internet to look up anything you need to complete the challenge.
