//var formattedRole;
//var formattedName;
//var formattedMobile;
//var formattedEmail;
//var formattedGithub;
//var formattedLocation;
//var formattedLocation;
//var formattedWelcomeMsg;


// Object with BIO information

var bio = {
    
        "name" : "Elium Genius",
        "role" : " Student @ Elium Academy",
        "contacts" : {
            
            "mobile": "+32465995407",
            "email": "e.genius@elium.academy",
            "github": "bytesorchestra/udacity_resume",
            "location": "Brussels"
            
        },
        "welcomeMessage": "Your Door To NodeJS World",
        "skills": ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSRAP', 'NODE', 'REACT'],
        "biopic": "images/fry.jpg"
        //"display": function taking no parameters
    
    };


// Variables to replace %data% placeholders and pre/append to id header

// role
var formattedRole = HTMLheaderRole.replace('%data%', bio['role']);
$('#header').prepend(formattedRole);

// name
var formattedName = HTMLheaderName.replace('%data%', bio['name']);
$('#header').prepend(formattedName);



// Variables added to topContact div

var formattedMobile = HTMLmobile.replace('%data%', bio['mobile']);
$('#topContacts').append(formattedMobile);

var formattedEmail = HTMLemail.replace('%data%', bio['email']);
$('#topContacts').append(formattedEmail);

var formattedGithub = HTMLgithub.replace('%data%', bio['github']);
$('#topContacts').append(formattedGithub);

var formattedLocation = HTMLlocation.replace('%data%', bio['location']);
$('#topContacts').append(formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio['welcomeMessage']);
$('#topContacts').append(formattedWelcomeMsg);

var formattedBiopic = HTMLbioPic.replace('%data%', bio['biopic']);
$('#topContacts').prepend(formattedBiopic);

// ...
