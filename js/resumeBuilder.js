var bio = {
	"name" : "Nora Hamacher",
	"role" : "Frontend Developer",
	"contacts" : {
		"mobile" : "123-456-789",
		"email" : "nora.hamacher@gmail.com",
		"github" : "bluebee123",
		"twitter" : "N/A",
		"location" : "Melbourne VIC, Australia"
	},
	"welcomeMsg" : "Welcome to my resume!",
	"skills" : ["Frontend Developer", "Java","Fast worker","Independent Worker","SQL","Search Algorithms"],
	"biopic" : "http://www.csctradeshow.com/images/female.png",
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedLocation);

		$("#header").append(formattedPic);
		$("#header").append(formattedwelcome);

		if ( bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill;
			for (var i = 0; i < bio.skills.length; i++) {
				formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			//	console.log(bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedLocation);
	}
}

var work = {
	"jobs": [
	{
		"title" : "Programmer",
		"dates" : "2006-2011",
		"employer" : "Universitätsklinikum Aachen (UKA)",
		"location" : "Aachen, Germany",
		"description" : "After three years of apprenticeship parralel to my Bachelor, the UKA took me over for a 2 year full-time contract.\
						My main responsibilites consisted in Java programming, SAP Webservice and APM module administration and developing a new web mask\
						for ordering purposes within the house."
	}

	],
	"display" : function() {
		for(job in work.jobs) {
			$("#collapseWork").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var concat = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(concat);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [
	{
		"title" : "Responsive Website",
		"dates" : "2015",
		"description" : "I programmed a responsive website which displays well on different devices with different sizes. ",
		"images": ["images/portfolio.jpg","images/portfolio_mob.jpg"]
	},
	{
		"title" : "Placeholder",
		"dates" : "2015",
		"description" : "This is just a placeholder, which will be replaced by real projects, as I continue my nanodegree.",
		"images": ["images/kang.JPG"]
	}
	],
	"display" : function() {
		for ( proj in projects.projects) {
			$("#collapseProjects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[proj].images.length > 0) {
				for ( ima in projects.projects[proj].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[ima]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};

var education = {
	"schools": [
	{
		"name": "Maastricht University",
		"location": "Maastricht, Netherlands",
		"degree": "Master",
		"majors" : ["Artificial Intelligence","Data Mining","Search algorithms","Robotics"],
		"dates" : 2013,
		"url" : "http://www.maastrichtuniversity.nl/"
	},
	{
		"name": "FH Aachen/Jülich",
		"location": "Aachen, Germany",
		"degree": "Bachelor",
		"majors" :["Scientific Programming","Java"],
		"dates" : 2009,
		"url" : "https://www.fh-aachen.de/"
	}

	],
	"onlineCourses": [
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd/"
	},
	{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd/"
	},
	{
		"title" : "Responsive Images",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/viewer#!/c-ud882-nd/"
	},
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd/"
	},
	{
		"title" : "Intro to jQuery",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/viewer#!/c-ud245-nd/"
	}
	],
	"display" : function() {
	//display schools, if there are any
		if(education.schools.length > 0) {
			$(".education-box").append(HTMLschoolTitle);
			for ( school in education.schools) {
				$(".education-box").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				formattedSchoolName = formattedSchoolName.replace("#data#", education.schools[school].url);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

				$(".education-entry:last").append(formattedSchoolName + formattedDegree);
				//$(".education-entry:last").append(formattedDegree);
				$(".education-entry:last").append(formattedDates);
				$(".education-entry:last").append(formattedLocation);

				var majors = "";
				for (var major = 0; major < education.schools[school].majors.length; major++) {
					majors += education.schools[school].majors[major];
					if(major < education.schools[school].majors.length-1){
						majors+= " ★ ";
					}
				}
				var formattedMajor = HTMLschoolMajor.replace("%data%", majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}
		//display online courses, if there are any
		if(education.onlineCourses.length > 0) {
			$(".education-box").append(HTMLonlineClasses);
			for ( course in education.onlineCourses) {
				$(".education-box").append(HTMLschoolStart);
				/*var HTMLonlineClasses = '<h3>Online Classes</h3>';
		var HTMLonlineTitle = '<a href="#">%data%';
		var HTMLonlineSchool = ' - %data%</a>';
		var HTMLonlineDates = '<div class="date-text">%data%</div>';
		var HTMLonlineURL*/
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				formattedOnlineTitle = formattedOnlineTitle.replace("%datalink%", education.onlineCourses[course].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			//	var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				//$(".education-entry:last").append(formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDate);
			//	$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};

//call all the display functions
education.display();
bio.display();
projects.display();
work.display();

//$("#main").append(internationalizeButton);
//I don't want the internationalize Button
/*
function inName(){
	var returnString;
	var arrayName = bio.name.split(" ");
	var firstChar = arrayName[0].charAt(0);
	arrayName[0]= firstChar.toUpperCase() + arrayName[0].slice(1).toLowerCase();
	arrayName[1] = arrayName[1].toUpperCase();
	returnString = arrayName[0] + " " + arrayName[1];
	return returnString;
}
*/

//add the google Map
$("#collapseMap").append(googleMap);