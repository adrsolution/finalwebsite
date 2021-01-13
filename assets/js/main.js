/**
* Template Name: Arsha - v2.3.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

 
  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  /*
  Chatbot
  */
 $(function() {
  // var INDEX = 0; 
  // $("#chat-input").click(function(e) {
  //   e.preventDefault();
  //   var msg = $("#chat-input").val(); 
  //   if(msg.trim() == ''){
  //     return false;
  //   }
  //   generate_message(msg, 'self');
  //   var buttons = [
  //       {
  //         name: 'Existing User',
  //         value: 'existing'
  //       },
  //       {
  //         name: 'New User',
  //         value: 'new'
  //       }
  //     ];
  //   setTimeout(function() {      
  //     generate_message(msg, 'user');  
  //   }, 1000)
    
  // });
  
  // function generate_message(msg, type) {
  //   INDEX++;
  //   var str="";
  //   str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
  //   str += "          <span class=\"msg-avatar\">";
  //   str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
  //   str += "          <\/span>";
  //   str += "          <div class=\"cm-msg-text\">";
  //   str += msg;
  //   str += "          <\/div>";
  //   str += "        <\/div>";
  //   $(".chat-logs").append(str);
  //   $("#cm-msg-"+INDEX).hide().fadeIn(300);
    
  //   if(type == 'self'){
  //    $("#chat-input").val(''); 
  //   }    
  //   $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  // }  
  
  // function generate_button_message(msg, buttons){    
  //   /* Buttons should be object array 
  //     [
  //       {
  //         name: 'Existing User',
  //         value: 'existing'
  //       },
  //       {
  //         name: 'New User',
  //         value: 'new'
  //       }
  //     ]
  //   */
  //   INDEX++;
  //   var btn_obj = buttons.map(function(button) {
  //      return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
  //   }).join('');
  //   var str="";
  //   str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
  //   str += "          <span class=\"msg-avatar\">";
  //   str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
  //   str += "          <\/span>";
  //   str += "          <div class=\"cm-msg-text\">";
  //   str += msg;
  //   str += "          <\/div>";
  //   str += "          <div class=\"cm-msg-button\">";
  //   str += "            <ul>";   
  //   str += btn_obj;
  //   str += "            <\/ul>";
  //   str += "          <\/div>";
  //   str += "        <\/div>";
  //   $(".chat-logs").append(str);
  //   $("#cm-msg-"+INDEX).hide().fadeIn(300);   
  //   $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
  //   $("#chat-input").attr("disabled", true);
  // }
  
  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })
  
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
});

})(jQuery);

/*----------------------------------------------------------------
CHAT BOT
----------------------------------------------------------------*/
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
  icon_img.src = "/assets/img/bot.png";
  icon_img.alt = "chatbot-icon";

  // message.appendChild(message_bot_div);
  message_bot_div.appendChild(icon_div);
  icon_div.appendChild(icon_img);

  if (question_id === 1) {
      message_bot_div.appendChild(messageBotElement('Hello!'));
      message_bot_div.appendChild(messageBotElement('I am Celia, from ADR Solutions'));
      message_bot_div.appendChild(messageBotElement(data[question_id].question));
  } else if (question_id === -1 && userInterests[4] == "Yes!") {
      document.querySelector('.form').style.display = 'block';
      console.log(userInterests);
      
      document.querySelector('#quote').addEventListener('click', () => {
          user.name = document.querySelector('#chat-name').value;
          user.email = document.querySelector('#chat-email').value;
          user.interests = userInterests
          if (user.name == '' || user.email == '') {
              message_bot_div.appendChild(messageBotElement('Please enter the details!'));
              document.querySelector('.form').style.display = 'block';
          } else {
              writeDataToFirebase(user);
              message_bot_div.appendChild(messageBotElement('Thanks for your interest in our company! Will be contacting you soon!'));
              document.querySelector('.form').style.display = 'none';
          }
      });
      
  } else if (question_id === -1 && userInterests[4] == "No!") {
      console.log(userInterests);
      document.querySelector('.form').style.display = 'none';
      message_bot_div.appendChild(messageBotElement('Thanks for your interest!'));
  } else {
      console.log(userInterests);
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

  icon_img.src = "/assets/img/user.png";
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