# Team Profile Generator

## About
Creates a webpage composed of cards that represent the members of your staff or next project. The application will ask a series of questions to determine information about the people included, and uses your input to generate an HTML page with stylesheet that will automatically generates the cards that house the info provided. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credit](#credit)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
After cloning the code from the repository, open your terminal and navigate to the directoy where it was installed. Type "npm i" into your terminal to download the required node modules to run the application. 

## Usage
For a full visual walkthrough of the application, refer to [this video.](https://drive.google.com/file/d/10PbiADtvTimnut9DX-_g2iGhAgRHiMcy/view?usp=sharing)

Once the modules have been installed, run the application by typing "node index" into your terminal window. The prompts will begin. Answer each question, any attempt to leave an answer blank will be met with an error asking your to resubmit your answer. 

First you will be met with a series of questions about the manager of the team. Once you have answered these questions, you will be presented with a series of questions pertaining to the next member of the team. Select either 'Engineer' or 'Intern' by using your arrow keys, and then pressing enter on the applicable role. If at any point you need to leave the process or start over, you can press ctrl+c to quit the process. 

At the end of the questions pertaining to the current employee, you will be asked if you would like to add an additional employee. If you select yes, the prompts will begin again, and you will enter the information for the next employee. If you select no, you will be given two confirmation messages, one for the HTML file being generated, and one for the stylesheet being copied. 

After you see these messages, navigate to the /dist folder in the applications directory. You will find two files, one for the index.html and one for style.css. The css file is a stylesheet that is automatically attached to the html file. Open index.html in your preffered browser to see your page and the cards containing your staff info. 

## Contributing
I am not looking for contributors at this time. If you have adjustments you would like to make, or features you would like to add, feel free to fork the repo and host them on your own Github profile.

## Tests
The repo includes tests to make sure the roles are functioning as intended. Upon navigating to the application's directory and installing the node packages, you can run "npm test" to ensure those tests are working. This application uses Jest for all test. All suits as well as all tests should give a positive confirmation indicating there were no failtures. In the event of a failure, reinstall the application. 