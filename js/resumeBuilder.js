// Object with BIO information
// And some more information

var bio = {

        "name" : "Gemius Simpson",
        "role" : " Student @ Elium Academy",
        "contacts" : {

            "mobile": "+32465995407",
            "email": "g.simpson@elium.academy",
            "github": "bytesorchestra",
            "location": "Brussels"

        },
        "welcomeMessage": "I Be Your Door To NodeJS   ",
        "skills": ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "NODE", "REACT"],
        "biopic": "images/fry.jpg"
        //"display": function taking no parameters

    };

// role
var formattedRole = HTMLheaderRole.replace('%data%', bio['role']);
$('#header').prepend(formattedRole);

// name
var formattedName = HTMLheaderName.replace('%data%', bio['name']);
$('#header').prepend(formattedName);



// Work experience object:
var work = {

    "jobs" : [

        {

            "employer" : "Elium Academy",
            "title" : "Intern",
            "dates" : "2016 - 2016",
            "location" : "Brussel",
            "description" : "Learn NodeJS"
        },

        {

            "employer" : "eni",
            "title" : "Advisor Retention and Care",
            "dates" : "2012 - 2014",
            "location" : "Vilvoord",
            "description" : "Customer contract optimization"
        },

        {

            "employer" : "Smals",
            "title" : "Support Center eGov Financial Applications",
            "dates" : "2009 - 2010",
            "location" : "Brussls",
            "description" : "Technical support eGov fiscal declarations"
        }

    ]

};

// Traverse jobs using 'For Loop'
// var workCount = work.jobs.length;
// var i;
// for (i=0; i < workCount; i+=1) {

//     $('#workExperience').append(HTMLworkEmployer.replace('%data%', work.jobs[i]["employer"]));
//     $('#workExperience').append(HTMLworkTitle.replace('%data%', work.jobs[i]["title"]));
//     $('#workExperience').append(HTMLworkDates.replace('%data%', work.jobs[i]["dates"]));
//     $('#workExperience').append(HTMLworkLocation.replace('%data%', work.jobs[i]["location"]));
//     $('#workExperience').append(HTMLworkDescription.replace('%data%', work.jobs[i]["description"]));
   
// }

// Traverse jobs using 'For In Loop'
// var job;
// for (job in work.jobs) {
//     
//     $('#workExperience').append(HTMLworkEmployer.replace('%data%', work.jobs[job]['employer']));
//     $('#workExperience').append(HTMLworkTitle.replace('%data%', work.jobs[job]['title']));
//     $('#workExperience').append(HTMLworkDates.replace('%data%', work.jobs[job]['dates']));
//     $('#workExperience').append(HTMLworkLocation.replace('%data%', work.jobs[job]['location']));
//     $('#workExperience').append(HTMLworkDescription.replace('%data%', work.jobs[job]['description']))
// }


// 'for in loop' to iterate jobs
var job;
for (job in work.jobs) {
         $('#workExperience').append(HTMLworkStart);
         //$('#workExperience').append(HTMLworkEmployer.replace('%data%', work.jobs[job]['employer']));
         //$('#workExperience').append(HTMLworkTitle.replace('%data%', work.jobs[job]['title']));
         //$('#workExperience').append(HTMLworkDates.replace('%data%', work.jobs[job]['dates']));
         //$('#workExperience').append(HTMLworkLocation.replace('%data%', work.jobs[job]['location']));
         //$('#workExperience').append(HTMLworkDescription.replace('%data%', work.jobs[job]['description']))

         var formattedEmployerTitle = ((HTMLworkEmployer.replace('%data%', work.jobs[job]['employer']))) + (HTMLworkTitle.replace('%data%', work.jobs[job]['title']));
         $('.work-entry:last').append(formattedEmployerTitle);


}



// Education history object:
var education = {

    "schools" : [
    {
        "school" : "Elium",
        "city" : "Brussels",
        "major" : ["Coder", "Programmer", "Preject Manager", "Scrum Master"],
        "graduation" : "2016",
        "courseInfo" : "We work from the inside out. Most cutting-edge tech businesses."
    },

     {
        "school" : "Twentse College",
        "city" : "Hengelo",
        "major" : ["Tranport Planner", "Production Planner", "Supply-Chain Assistant"],
        "graduation" : "1998",
        "courseInfo" : "Major in Logistics and Supply Chain Management. Having the distinct advantage of being the only college in the Chicago area to offer this undergraduate degree, graduates of the major in logistics and supply chain management study the distribution, material purchasing, warehousing and production operations."
    }

],

"onlineCourses" : [

        {
            "title" : "Javascript Basics",
            "school" : "Udemy",
            "date" : "2015 - 2016",
            "url" : "url"
        },

        {
            "title" : "Mean Stack",
            "school" : "Courera",
            "date" : "2015 - 2016",
            "url" : "url"
        },

        {
            "title" : "Javascript Basics",
            "school" : "Udacity",
            "date" : "2015 - 2016",
            "url" : "url"
        }

]

};

var formattedSchool = HTMLschoolLocation.replace('%data%', education.school);
$('#main').append(formattedSchool);



//Projects history object:
var projects = {

    "projects" : [

        {
            "title" : "Project manager",
            "dates" : "2011 - 2013",
            "description" : "Online Service transfer",
            "image" : "#"
        },

        {
            "title" : "CTO",
            "dates" : "2016 - 2016",
            "description" : "MenuApp",
            "image" : ["#"]
        }

    ]

};


// Variables added to topContact div

var formattedMobile = HTMLmobile.replace('%data%', bio.contacts['mobile']);
$('#topContacts').append(formattedMobile);

var formattedEmail = HTMLemail.replace('%data%', bio.contacts['email']);
$('#topContacts').append(formattedEmail);

var formattedGithub = HTMLgithub.replace('%data%', bio.contacts['github']);
$('#topContacts').append(formattedGithub);

var formattedLocation = HTMLlocation.replace('%data%', bio.contacts['location']);
$('#topContacts').append(formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio['welcomeMessage']);
$('#topContacts').append(formattedWelcomeMsg);

var formattedBiopic = HTMLbioPic.replace('%data%', bio['biopic']);
$('#topContacts').prepend(formattedBiopic);

// Iterate skils
if (bio.skills.length > 0) {

    $('#header').append(HTMLskillsStart);
    var totalSkills = bio.skills.length;
    var i;
    for (i = 0; i < totalSkills; i+=1){
    var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
    $('#skills').append(formattedSkills);
}

}


// ...
