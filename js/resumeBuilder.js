var bio = {
	"name" : "Nora Hamacher",
	"role" : "Frontend Web Developer",
	"contacts" : {
		"mobile" : "0491159566",
		"email" : "nora.hamacher@gmail.com",
		"github" : "norahamacher",
		"twitter" : "N/A",
		"location" : "Melbourne VIC, Australia"
	},
	"welcomeMsg" : "Welcome to my resume!",
	"skills" : ["Frontend Developer", "Responsive Web Design", "knockoutJS", "test-driven development", "Javascript/HTML5/CSS3", "Java","Fast worker","Independent worker","SQL","Search Algorithms"],
	"biopic" : "images/pic.jpg",
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
		//$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedLocation);

		$("#header").append(formattedPic);
		//$("#header").append(formattedwelcome);

		if ( bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill;
			for (var i = 0; i < bio.skills.length; i++) {
				formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			//	console.log(bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}

	//	$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedLocation);
	}
}

var work = {
	"jobs": [
	{
		"title" : "Software Developer",
		"dates" : "2006-2011",
		"employer" : "Universitätsklinikum Aachen (UKA)",
		"location" : "Aachen, Germany",
		"description" : "After three years of apprenticeship parralel to my Bachelor, the UKA took me over for a 2 year full-time contract. During the apprenticeship my main responsibilities were: Java programming --- Conceptualization and development of a corporate booking website enabling clinics to book beds as well as heads of clinics to confirm these bookings. A connection to a SAS datawarehouse was established as well. After my fulltime emplyment I worked in the SAP department, creating Webservices and doing administration and support tasks in the SAP environment."

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
		"title" : "Movies and Shows",
		"dates" : "2016",
		"description" : "I built my own site from scratch, where I comment or review movies and shows I have watched. The site uses bootstrap and AngularJS. themovieDB.com API is used to pull the poster pictures for each item, and the IMDB API is used for the other information. The movies can be sorted by different critera and there is a search implemented. The data is stored in a simple Google Spreadsheet, and the  Google Apps Script Execution API is used to access it.",
		"images": ["images/movieshows.jpg"],
		"url": "http://norahamacher.github.io/MovieShows/"
	},
	{
		"title" : "Wildlife Sightings",
		"dates" : "2015",
		"description" : "Using the google Maps API markers with Australian Wildlife sightings are displayed. Upon clicking the markers or their corresponding entry in the search list of the menu, information from Wikipedia and Flickr is retrieved using AJAX. MVC is encorporated using knockoutJS, the site is responsive and displays well on different sized devices. Grunt and Bower were used for automated build process and package management. ",
		"images": ["images/neighborhoodMap_desktop.jpg","images/neighborhoodMap_mobile.jpg"],
		"url": "http://norahamacher.github.io/FEND_P5_Neighborhoodmap/"
	},
	{
		"title" : "Arcade Game",
		"dates" : "2015",
		"description" : "Using HTML5 Canvas I programmed a clone of the Arcade Game Frogger.",
		"images": ["images/arcade.jpg"],
		"url": "http://norahamacher.github.io/FEND_P4_ArcadeGame"
	}
	],
	"display" : function() {
		for ( proj in projects.projects) {
			$("#collapseProjects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
			formattedTitle = formattedTitle.replace("%url%", projects.projects[proj].url);
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
		"name": "Udacity",
		"location": "USA (online)",
		"degree": "Nanodegree",
		"majors" : ["Frontend Webdeveloper","Responsive Webdesign","Javascript/CSS3/HTML5","knockoutJS"],
		"dates" : 2015,
		"url" : "http://www.udacity.com",
		"images": ["images/certificate.jpg"]
	},
	{
		"name": "Maastricht University",
		"location": "Maastricht, Netherlands",
		"degree": "Master",
		"majors" : ["Artificial Intelligence","Data Mining","Search algorithms","Robotics"],
		"dates" : 2013,
		"url" : "http://www.maastrichtuniversity.nl/",
		"images": null
	},
	{
		"name": "FH Aachen/Jülich",
		"location": "Aachen, Germany",
		"degree": "Bachelor",
		"majors" :["Scientific Programming","Java"],
		"dates" : 2009,
		"url" : "https://www.fh-aachen.de/",
		"images": null
	}

	],
	"onlineCourses": [

	{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
	},
	{
		"title" : "Object-oriented Javascript",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/object-oriented-javascript--ud015"
	},


	{
		"title" : "Responsive Images",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/responsive-images--ud882"
	},

	{
		"title" : "Javascript Design Patterns",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/javascript-design-patterns--ud989"
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
				if (education.schools[school].images !== null) {
					$(".education-entry:last").append("<br>");
				for ( ima in education.schools[school].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", education.schools[school].images[ima]);
					$(".education-entry:last").append(formattedImage);
				}
			}
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