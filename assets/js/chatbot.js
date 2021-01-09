/*
CHATBOT DATA
*/
const data = {
    // Level 0
    1: {
        question: "How can I help you?",
        options: {
            a: "Information Technology Services",
            b: "SDS Management Services",
            c: "BPO Services",
            d: "Digital Marketing"
        },
        optionSelected: {
            a: 2,
            b: 3,
            c: 4,
            d: 5,
        }
    },

    // level 1
    2: {
        question: "That's a good decision, Could you please asist me with below options.",
        options: {
            a: "Web Design and Development",
            b: "UI/UX Design"
        },
        optionSelected: {
            a: 6,
            b: 8
        }
    },
    3: {
        question: "That's a good decision, Could you please asist me with below options.",
        options: {
            a: "SDS Sourcing",
            b: "SDS Indexing"
        },
        optionSelected: {
            a: 9,
            b: 11
        }
    },
    4: {
        question: "That's a good decision, Could you please asist me with below options.",
        options: {
            a: "Web Research",
            b: "Data Entry",
            c: "Data Processing",
            d: "Data Analytics Services"
        },
        optionSelected: {
            a: 12,
            b: 13,
            c: 14,
            d: 15,
        }
    },
    5: {
        question: "That's a good decision, Could you please asist me with below options.'",
        options: {
            a: "Social Media Marketing",
            b: "Google Advertisements",
            c: "Search Engine Marketing"
        },
        optionSelected: {
            a: 16,
            b: 16,
            c: 16
        }
    },

    // Level 2 - IT Services
    6: {
        question: "Which type of website would you like to design and develop?",
        options: {
            a: "Website for business",
            b: "e-Commerce Website",
            c: "Landing page, blog or portfolio website",
            d: "CMS Panel",
            e: "Social Media Website"
        },
        optionSelected: {
            a: 7,
            b: 7,
            c: 7,
            d: 7,
            e: 7
        }
    },
    7: {
        question: "In how much time do you need the web application",
        options: {
            a: "less than 1 month",
            b: "1-2 months",
            c: "more than 2 months"
        },
        optionSelected: {
            a: 16,
            b: 16,
            c: 16
        }
    },
    8: {
        question: "What is the device you need the design for?",
        options: {
            a: "Mobile Application",
            b: "Website Design"
        },
        optionSelected: {
            a: 7,
            b: 7
        }
    },

    // Level 2 - SDS management
    9: {
        question: "Which type of SDS Services do you have?",
        options: {
            a: "Update SDS",
            b: "Renewal of SDS",
            c: "Updating library database time to time"
        },
        optionSelected: {
            a: 10,
            b: 10,
            c: 10
        }
    },
    10: {
        question: "What type of SDS do you like to search",
        options: {
            a: "GHS",
            b: "WHMIS",
            c: "OSHA"
        },
        optionSelected: {
            a: 7,
            b: 7,
            c: 7
        }
    },
    11: {
        question: "Please asist with the following options for the requirement of your service",
        options: {
            a: "Product Number",
            b: "Product Use",
            c: "CAS ID",
            d: "Ingredients",
            e: "Physical and chemical properties",
            f: "Transport",
            g: "Handling & Storage",
            h: "First Aid"
        },
        optionSelected: {
            a: 7,
            b: 7,
            c: 7,
            d: 7,
            e: 7,
            f: 7,
            g: 7,
            h: 7
        }
    },

    // Level 2 - BPO Services
    12: {
        question: "Which type of data would you like to search for?",
        options: {
            a: "Online Market Research",
            b: "Business Analytics services",
            c: "Media Research",
            d: "Market Research"
        },
        optionSelected: {
            a: 7,
            b: 7,
            c: 7,
            d: 7
        }
    },
    13: {
        question: "What data do you wish to enter?",
        options: {
            a: "Online Data",
            b: "Image data",
            c: "Copy paste"
        },
        optionSelected: {
            a: 7,
            b: 7,
            c: 7
        }
    },
    14: {
        question: "Which type of data or file would you like to process?",
        options: {
            a: "Excel Data processing",
            b: "Word Data Processing",
            c: "Forms Data Processing",
            d: "Image processing"
        },
        optionSelected: {
            a: 7,
            b: 7,
            c: 7,
            d: 7
        }
    },
    15: {
        question: "Which service do you want us to help you out with?",
        options: {
            a: "Data Collection",
            b: "Data Cleaning",
            c: "Data Modeling"
        },
        optionSelected: {
            a: 7,
            b: 7,
            c: 7
        }
    },
    16: {
        question: "Get a Quote?",
        options: {
            a: "Yes!",
            b: "No!"
        },
        optionSelected: {
            a: -1,
            b: -1
        }
    }
}

// Array to store the users interests.
var userInterests = new Array();
var user = {};

const talk = (question_id) => {
    // Removing onfocus to prevent function call repeatedly!
    document.querySelector('#chat-input').removeAttribute('onclick');
    start(question_id);
}

const start = (question_id) => {
    if (question_id === -1) {
        messageBot(-1);
    } else {
        messageBot(question_id);
        for (const opt in data[question_id].options) {
            showAnswer(question_id, data[question_id].options[opt], opt);
        }
    }
}

// Display message of chatbot
const messageBot = (question_id) => {
    // Creating all the elements
    let message_bot_div = document.createElement('div');
    let icon_div = document.createElement('div');
    let icon_img = document.createElement('img');

    // Selecting parent element
    let message = document.querySelector('.message');

    message_bot_div.classList.add('message-bot');
    message_bot_div.classList.add('animate__animated');
    message_bot_div.classList.add('animate__fadeInUp');

    message_bot_div.style.display = 'flex';
    icon_div.classList.add('icon');
    icon_img.src = "assets/img/bot.png";
    icon_img.alt = "chatbot-icon";

    // message.appendChild(message_bot_div);
    message_bot_div.appendChild(icon_div);
    icon_div.appendChild(icon_img);

    if (question_id === 1) {
        message_bot_div.appendChild(messageBotElement('Hello!'));
        message_bot_div.appendChild(messageBotElement('I am chatbot, here to help you!'));
        message_bot_div.appendChild(messageBotElement(data[question_id].question));
    } else if (question_id === -1) {
        document.querySelector('.form').style.display = 'block';
        
        document.querySelector('#quote').addEventListener('click', () => {
            user.name = document.querySelector('#chat-name').value;
            user.email = document.querySelector('#chat-email').value;
            user.interests = userInterests
            writeDataToFirebase(user);
            message_bot_div.appendChild(messageBotElement('Thanks for your interest in our company! Will be contacting you soon!'));
            document.querySelector('.form').style.display = 'none';
        });
        
    } else {
        message_bot_div.appendChild(messageBotElement(data[question_id].question));
    }

    message.appendChild(message_bot_div);
}

// Creates the single text message element for chatbot
const messageBotElement = (message) => {
    let message_area = document.createElement('p');
    let message_content = document.createTextNode(message);

    message_area.classList.add('message-area');
    message_area.classList.add('animate__animated');
    message_area.classList.add('animate__fadeInUp');

    message_area.appendChild(message_content);
    return message_area;
}

const showAnswer = (question_id, message, key) => {
    let options = document.querySelector('#options');

    let optionArea = document.createElement('span');
    let message_content = document.createTextNode(message);

    optionArea.classList.add('options');
    optionArea.classList.add('col-md-12');
    optionArea.classList.add('animate__animated');
    optionArea.classList.add('animate__fadeInUp');
    optionArea.setAttribute('id', key)

    optionArea.appendChild(message_content);

    optionArea.addEventListener('click', (e) => {
        userInterests.push(e.target.innerText);
        userAnswer(e.target.innerText);
        while (options.firstChild) {
            options.removeChild(options.firstChild);
        }
        start(returnNextQuestion(question_id, e.target.id));
        document.querySelector('.chat-logs').scrollTop = document.querySelector('.chat-logs').scrollHeight;
    })

    options.appendChild(optionArea);
    options.style.display = 'flex'
}


// Display user answer
const userAnswer = (result) => {
    // Creating all required elements
    let message_user_div = document.createElement('div');
    let user_icon_div = document.createElement('div');
    let icon_img = document.createElement('img');
    let message_area = document.createElement('p');
    let message_content = document.createTextNode(result);

    // Selecting the parent element
    let message = document.querySelector('.message');

    message_user_div.classList.add('message-user');
    message_user_div.classList.add('animate__animated');
    message_user_div.classList.add('animate__fadeInUp');

    user_icon_div.classList.add('chatbot-icon');
    user_icon_div.classList.add('animate__animated');
    user_icon_div.classList.add('animate__fadeInUp');

    icon_img.src = "assets/img/user.png";
    icon_img.alt = "user-icon";

    message_user_div.appendChild(user_icon_div);
    user_icon_div.appendChild(icon_img);
    message_user_div.style.display = 'flex';
    message_area.classList.add('message-area');
    message_area.classList.add('animate__animated');
    message_area.classList.add('animate__fadeInUp');

    message_area.appendChild(message_content);
    message_user_div.appendChild(message_area);
    message.appendChild(message_user_div);
}

// Function to return question id
const returnNextQuestion = (question__id, optionKey) => {
    return data[question__id].optionSelected[optionKey];
}

const writeDataToFirebase = (user) => {
    firebase.database().ref('users/' + user.email.replace('.',',')).set({
        name: user.name,
        email: user.email,
        interest: user.interests
    });
}