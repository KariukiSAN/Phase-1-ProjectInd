# Phase-1-ProjectInd

## Project Name
Lights Out and Away we go.
## Description
A simple web-based quiz application designed to test your knowledge on various topics. 

This project aims to familiarize users with Phase 1 front-end development concepts.

The Web Quiz App is a basic front-end project created to introduce beginners to Phase 1 front-end development. 

It provides an interactive quiz where users can answer multiple-choice questions on different topics.

## AUthor Name
<NAME>: A.N.Kariuki


## Features

- Multiple-choice questions with varying levels of difficulty.
- Simple and intuitive user interface.



## API Integration


The Web Quiz App integrates with the Open Trivia Database API to fetch a variety of trivia questions for the quizzes. The app makes API requests to retrieve questions based on the user’s chosen category and difficulty level.

To integrate the API into the app:

Access the following url: https://opentdb.com/api_config.php

Get an API key from the website by setting specifications. 
Copy this API Key and paste it inside the index.html file under the <script> tag
The API will return a JSON object containing information about the question asked. This includes the correct.
In order for the answers to appear correctly, you need to use the data-correct attribute.


For our site, we’ve settled on 40 questions and the topic to be tested is musical knowledge.

Open the script.js file in the project directory.
Replace our API Key in the API request URL with our actual API key in the script.js code when making the fetch request.
We have created a function called displayQuestion() which takes one parameter as input i.e.,
the number of questions that needs to be displayed at once. We are calling this function when the page
loads initially so that the first few questions can be shown immediately without waiting until they're answered.
loads initially so that the first batch of questions gets loaded upfront without any delay. The next time
a new question is requested, the previous answer options would remain visible until they are selected again.

This ensures that users can see their selections even after refreshing the browser window.
Next step involves creating another function called checkAnswer(). 

It receives two parameters;
1st paramter is the id of the button clicked & second parameter is the value of the option
selected by user. Inside this function there exists logic to compare if the user has answered the current
question properly based upon whether he selects the right option or not. 

## Project Setup Instructions
Clone or download the repository onto your local machine using git clone command.
Run npm install to get all dependencies required to run the program locally
Run gulp serve --open to open the live server on localhost port 3000


## Technologies Used
HTML5 - Hypertext Markup Language
CSS3 – Cascading Style Sheets
JavaScript ES6+
Node Package Manager (NPM)
Git Version Control System
Visual Studio Code Editor

## Contact
<NAME>: A.N.Kariuki
<Email>:annette.kariuki@student.moringaschool.com
<Github>: https://github.com/KariukiSAN

## License Information
MIT License Copyright(c)2021
Permission is hereby granted, free of charge, to any person obtaining a copyofthis softwareand associated documentation files(the "Software"),to dealing the Software without restriction, includingwithout limitation the rights. 







