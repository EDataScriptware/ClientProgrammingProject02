// ajax.js - RESPONSIBLE FOR CALLING THE DATA FROM THE API

$(document).ready(function(){
		
		//HEADER

		$('#header').html('<img src="media/RIT_logo.png" alt="RIT_logo" id="RIT_logo"><h1 id="headerTitle">IST Department Site</h1>');

		// PEOPLE
		myXHR('get',{'path':'/people/faculty'}).done(function(json){
			var x = '';
			x += '<h2 id="facultyTitle">GCCIS Faculty</h2>'
			$.each(json.faculty, function(k, ktem){
				//console.log(k + ' -- ' + ktem)

				// An interesting jQuery approach showed to me by Aaron Kelly 
				// - I have decided not to use this approach
				x += '<div class="faculty" onclick="facMore(this)"';

				x += ' data-id="' + $(this)[0].username + '"';
				x += 'style ="cursor:pointer;">';
				x += '<img class="facultyImages" src = "' + $(this)[0].imagePath + '"/>';
				x += '<h4>' + $(this)[0].name + '</h4>';
				x += '<p>' + $(this)[0].title + '</p>';
				x += "</div>";

			})
			$('#people').html(x);

		}); // end people/faculty
		
		

		// get the /about/ information onto the page
		myXHR('get',{'path':'/about/'}).done(function(json){
			var x = '<h2 id="aboutTitle">'+json.title+'</h2>';
			x+='<p>'+json.description+'</p>';
			x+='<p>'+json.quote+'</p>';
			x+='<p>'+json.quoteAuthor+'</p>';
		
			// add this 'x' to the page
			$('#about').html(x);
		}); // end /about/
		



		// degrees undergraudate
		
		myXHR('get',{'path':'/degrees/undergraduate/'}).done(function(json){
		//	console.log(json);
			
			var x='';
			
			x+='<h2>Undergraduate Degrees</h2>';

			$.each(json.undergraduate,function(i,item){
				//console.log(i+' = '+item);
				
				if (item.title != null)
				{
					x+='<h3>'+item.title+' ('+item.degreeName+')</h3>';

					x+='<p>'+item.description+'</p>';
				
				var y='<ul>';
					$.each(item.concentrations,function(j,jtem){
						y+='<li>'+jtem+'</li>';
					});
				y+='</ul>';

				}
				else 
				{
					x+='<h2> (' + item.degreeName + ')</h2>';
				
				var y='<ul>';
					$.each(item.availableCertificates,function(j,jtem){
						y+='<li>'+jtem+'</li>';
					});
				y+='</ul>';
				}

				
				
				x+=y;		// add the concentrations to the program information				
				
				$('#undergraduate').html(x);
			});
			
		
		
		}); // end undergraduate/


// degrees graduate
myXHR('get',{'path':'/degrees/graduate/'}).done(function(json){
		//	console.log(json);
			
			var x='';
			
			x+='<h2>Graduate Degrees</h2>';

			$.each(json.graduate,function(i,item){
				//console.log(i+' = '+item);
				
				if (item.title != null)
				{
					x+='<h3>'+item.title+' ('+item.degreeName+')</h3>';

					x+='<p>'+item.description+'</p>';
				
				var y='<ul>';
					$.each(item.concentrations,function(j,jtem){
						y+='<li>'+jtem+'</li>';
					});
				y+='</ul>';

				}
				else 
				{
					x+='<h2> (' + item.degreeName + ')</h2>';
				
				var y='<ul>';
					$.each(item.availableCertificates,function(j,jtem){
						y+='<li>'+jtem+'</li>';
					});
				y+='</ul>';
				x+= y;
				}

				$('#graduate').html(x);
			});
			
		
		
		}); // end graduate/

		
// get the /minors/ information onto the page
myXHR('get',{'path':'/minors/'}).done(function(json){
	// console.log(json);
	var x = '';

	x+='<h2>Undergraduate Minors</h2>';

	$.each(json.UgMinors,function(i,item)
	{
			x += '<h3>'+item.name+'</h3>';
			x +='<h4>'+item.title+'</h4>';
			x +='<p>'+item.description+'</p>';
			x +='<p>'+item.courses+'</p>';		
		

		$('#minors').html(x);
	}); // end UgMinors
}); //end /minors


// get the /employment/ information onto the page
myXHR('get',{'path':'/employment/'}).done(function(json){
	

	// console.log(json);
	var x = '';

	x+='<h2>Careers</h2>';

	x+= "<h3>" + json.introduction.title + "</h3>"

	$.each(json.introduction.content,function(i, item)
	{
		// console.log(item);

		x+= "<h4>" + item.title + "</h4>";
		x+= "<p>" + item.description + "</p>";
		
	}); // end introduction

	x += "<h4>" + json.degreeStatistics.title + "</h4>"

	$.each(json.degreeStatistics.statistics,function(i, item)
	{
		// console.log(item);

		x+= "<h5>" + item.value + "</h5>";
		x+= "<h6>" + item.description + "</h6>";
	}); // end degreeStatistics

	x += "<h4>" + json.employers.title + "</h4>"

	$.each(json.employers.employerNames,function(i, item)
	{
		// console.log(item);

		x+= "<h5>" + item + "</h5>";
	}); // end employerNames

	x += "<h3>" + json.careers.title + "</h3>"

	$.each(json.careers.careerNames,function(i, item)
	{
		// console.log(item);

		x+= "<h5>" + item + "</h5>";
	}); // end employerNames

		x += '<table div class="men_ex">';
		
		x += "<caption>" + json.coopTable.title + "</caption>";
	
		x += '<p><button id="hidediv">Hide menu</button>'
		x += '<button id="showdiv">Show menu</button></p>';

		 
 // testing
 $("#hidediv").click(function()
 {
	 alert("Am I being clicked?");
 });


	 $.each(json.coopTable.coopInformation,function(i, item)
	{
		// console.log(item);



		x+= "<tr><th>" + item.employer + "</th>";
		x+= "<th>" + item.degree + "</th>";
		x+= "<th>" + item.city + "</th>";
		x+= "<th>" + item.term + "</th></tr>";

	}); // end employerNames
	x += "</table>";

	x += "<table>"
	x += "<caption>" + json.employmentTable.title + "</caption>";
	$.each(json.employmentTable.professionalEmploymentInformation,function(i, item)
	{
		// console.log(item);



		x+= "<tr><th>" + item.employer + "</th>";
		x+= "<th>" + item.degree + "</th>";
		x+= "<th>" + item.city + "</th>";
		x+= "<th>" + item.title + "</th>";
		x+= "<th>" + item.startDate + "</th></tr>";

	}); // end employerNames
	x += "</table>";

	$('#employment').html(x);


}); //end /employment




myXHR('get',{'path':'/research/'}).done(function(json){
	// console.log(json);
	var x = '';
	x += '<h2>Research</h2>';
	x += '<h3>By Faculty</h3>';

	$.each(json.byFaculty,function(i,item)
	{
			x += '<h4>'+item.facultyName+'</h4>';
			x +='<h5>'+item.username+'</h5>';

			var y='<ul>';

				$.each(item.citations,function(j,jtem){
					y+='<li>'+jtem+'</li>';
				});
				y+='</ul>';

			x+=y

		$('#research').html(x);
	}); // end byFaculty
	x += '<h3>By Faculty</h3>';

	$.each(json.byInterestArea,function(i,item)
	{
			x += '<h4>'+item.areaName+'</h4>';

			var y='<ul>';

				$.each(item.citations,function(j,jtem){
					y+='<li>'+jtem+'</li>';
				});

				y+='</ul>';

			x+=y

		$('#research').html(x);
	}); // end byInterestName


}); //end research


// resources
myXHR('get',{'path':'/resources/'}).done(function(json){
			
			var x = '';
			// console.log("resource ->")
			// console.log(json);
			x += '<div class="resourceBlock">';
			x += '<h3>'+json.title+'</h3>';
			x += '<h4>'+json.subTitle+'</h4>';


			x += "<h3>" + json.studyAbroad.title + "</h3>";
			x += "<p>" + json.studyAbroad.description + "</p>";


			$.each(json.studyAbroad.places,function(j, item)
			{
				// console.log(jtem);
				x += '<h5>' + item.nameOfPlace + '</h5>';
				x += '<h6>' + item.description + '</h6>';
			}); //end places
			x += '</div>';

			x += '<div class="resourceBlock">';
			// student services
			x+= "<h3>" + json.studentServices.title + "</h3>";
			x+= "<h4>" + json.studentServices.academicAdvisors.title + "</h4>";
			x+= "<p>" + json.studentServices.academicAdvisors.description + "</p>";
			x+= '<a href="' + json.studentServices.academicAdvisors.faq.contentHref + '">' + json.studentServices.academicAdvisors.faq.title + "</h5></a>";

			console.log(json.studentServices.professonalAdvisors);
			x+= "<h3>" + json.studentServices.professonalAdvisors.title + "</h3>";
			$.each(json.studentServices.professonalAdvisors.advisorInformation,function(j, item)
			{
				x += '<div class="resourceStudentServicesAdvisors">';
				 console.log(item);
				x += '<h5>' + item.name + '</h5>';
				x += '<h6>' + item.department + '</h6>';
				x += '<h6>' + item.email + '</h6>';
				x += '</div>';



			}); //end profesonalAdvisors
			x += '</div>';

			x += '<div class="studentServicesFacultyAdvisors">'
			x+= "<h3>" + json.studentServices.facultyAdvisors.title + "</h3>";
			x+= "<p>" + json.studentServices.facultyAdvisors.description + "</p>";

			x+= "<h3>" + json.studentServices.istMinorAdvising.title + "</h3>";
			$.each(json.studentServices.istMinorAdvising.minorAdvisorInformation,function(j, item)
			{
				x += '<div class="studentServicesIndividualFacultyAdvisors">'
				x += '<h4>' + item.title + '</h4>';
				x += '<p>' + item.advisor + '</p>';
				x += '<p>' + item.email + '</p>';
				x += '</div>'

			}); //end minorAdvisorInformation
			x+= '</div>'

			x += '<div class="tutorAndLabInformation">'
			x+= "<h2>" + json.tutorsAndLabInformation.title + "</h2>";
			x+= "<h4>" + json.tutorsAndLabInformation.description + "</h4>";
			x+= '<p><a href="' + json.tutorsAndLabInformation.tutoringLabHoursLink+ '">'+ json.tutorsAndLabInformation.tutoringLabHoursLink + "</a></p>";
			x += '</div>';

			// Student Ambassdors
			x += '<div class ="studentAmbassadors">'
			x += '<div class ="studentAmbassadorsHeader">'
			x+= "<h3>" + json.studentAmbassadors.title + "</h3>";
			x+= '<img src = "' + json.studentAmbassadors.ambassadorsImageSource + '">';
			x += '</div>';
			x += '<div class ="studentAmbassorsDetail">'
			$.each(json.studentAmbassadors.subSectionContent,function(j, item)
			{
				 //console.log(item);
			
				if (item.title == "apply")
				{
					x+= '<a href="' + json.studentAmbassadors.applicationFormLink + '">' + item.description + "</h5></a>";

				}
				else 
				{
					x += '<h4>' + item.title + '</h4>';
					x += '<p>' + item.description + '</p>';
				}

				
			

			}); //end subSectionContent
			x+= "<p>" + json.studentAmbassadors.note + "</p>";

	
			x+= "</div>"
			x+= "</div>"

			x += "<h4>Undergraduate Forms</h4><h5>"
			$.each(json.forms.undergraduateForms,function(i, item)
			{
				x+= '<div class="formButton"><a href="' + item.href + '">' + item.formName + "</h5></a></div>";
			}); //end undergraduateForms
			x += "</h5>"

			x += "<h4>Graduate Forms</h4><h5>"
			$.each(json.forms.graduateForms,function(i, item)
			{
				x+= '<div class="formButton"><a href="' + item.href + '">' + item.formName + "</a></div>";
			}); //end graduateForms
			x += "</h5>"

			
			x += '<div class="coopEnrollment">'
			x += '<h2><a href="' + json.coopEnrollment.RITJobZoneGuidelink + '">' + json.coopEnrollment.title + "</h2></a>";

			$.each(json.coopEnrollment.enrollmentInformationContent,function(i, item)
			{

				x += "<h4>" + item.title + "</h4>";		
				x += "<h5>" + item.description + "</h5>";		
	
			}); //end undergraduateForms
			x += '</div>'


			$('#resources').html(x);
		}); //end /resource

myXHR('get',{'path':'/news/'}).done(function(json){

			var x = '';

			x += "<table>"
	x += "<caption> Old News </caption>";
	x += "<tr><th>date</th><th>title</th><th>description</th>"
	$.each(json.older,function(i, item)
	{
		// console.log(item);


		x+= "<tr><th>" + item.date + "</th>";
		x+= "<th>" + item.title + "</th>";
		x+= "<th>" + item.description + "</th></tr>";

	}); // end older
	x += "</table>";


			$('#news').html(x);
});

myXHR('get',{'path':'/footer/'}).done(function(json){

	var x = '';
	x += '<div class="footerAdvertisement">'

	x += "<h2>" + json.social.title + "</h2>";
	x += "<h3>" + json.social.tweet + "</h3>";
	x += "<h5>" + json.social.by + "</h5>";
	x += "<h6>" + json.social.twitter + "</h6>";
	x += "<h6>" + json.social.facebook + "</h6>";
	

	x += '<h3>'
	$.each(json.quickLinks,function(i, item)
	{
		// console.log(item);
		x+= '<div class="formButtonAd"><a href="' + item.href + '">' + item.title + "</a></div>";


	}); // end employerNames
	x += '</h3>'
	x += '</div>'

	x += '<div class= "copyright">'
	x += "<h6>" + json.copyright.title + " " + json.copyright.html + " "  + json.news + "</h6>";
	x += '</div>';

	$('#footer').html(x);
});
/*
{
var x = '';
	x += '<iframe id="map-iframe" src="http://ist.rit.edu/api/map/" width="100%" height="600px">';
	x += '<p>Your browser does not show the employment map.  You are using an old browser. Update your browser. </p>'
	x += '</iframe>'
	$('#map').html(x);
}
*/

		// ------------------------------------------------------------

		
		
	});	// end document ready
	
	function facMore ( who ){
		var id = $(who).attr('data-id');
myXHR('get',{'path':'/people/faculty/username=' + id}).done(function(json){

	// console.log('facMore = ' + json.interestArea);	
	}) // end path


} // end facMore
	
	// AJAX function to get information 
	// XHR is XML HTTP Request
	// t = get or post
	// d = path : /about/
	function myXHR(t,d){
		return $.ajax({
			type: t,
			cache: false,
			async: true,
			dataType:'json',
			url:'proxy.php',
			data:d,
			beforeSend:function(){
				// do this before sending the request
				$('<img src="gears.gif" id="spinner" '+
					'style="position:relative;top:50px;left:50px;z-index:2000"/>')
					.appendTo("body");
			}
		}).always(function(){
			// happens at the end, no matter what
			$('#spinner').remove();
		}).fail(function(){
			// if our request doesn't work
			console.log('Failure with '+d.path);
        });
        
    
    } // end myXHR
    
    
