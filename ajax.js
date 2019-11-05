// ajax.js - RESPONSIBLE FOR CALLING THE DATA FROM THE API

$(document).ready(function(){
		
		//HEADER
		$('#header').html('<h1>IST Department Site</h1>');



		// PEOPLE
		myXHR('get',{'path':'/people/faculty'}).done(function(json){
			var x = '';
			x+= ''
			$.each(json.faculty, function(k, ktem){
				//console.log(k + ' -- ' + ktem)


                // An interesting approach showed to me by Aaron Kelly - I have decided not to use this approach
				x += '<div class="faculty" onclick="facMore(this)"';
				x += ' data-id="' + $(this)[0].username + '"';
				x += 'style ="cursor:pointer;">';
				x += '<h2>' + $(this)[0].name + '</h2>';
				x += '<p>' + $(this)[0].title + '</p>';
				x += '<img src = "' + $(this)[0].imagePath + '"/>';

				x += "</div>";
			})
			$('#people').html(x);

		}); // end people/faculty
		
		

		// get the /about/ information onto the page
		myXHR('get',{'path':'/about/'}).done(function(json){
			var x = '<h2>'+json.title+'</h2>';
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
			
			$.each(json.undergraduate,function(i,item){
				//console.log(i+' = '+item);
				
				if (item.title != null)
				{
					x+='<h2>'+item.title+' ('+item.degreeName+')</h2>';

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
			
			$.each(json.graduate,function(i,item){
				//console.log(i+' = '+item);
				
				if (item.title != null)
				{
					x+='<h2>'+item.title+' ('+item.degreeName+')</h2>';

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
	$.each(json.UgMinors,function(i,item)
	{
			x += '<h2>'+item.name+'</h2>';
			x +='<h3>'+item.title+'</h3>';
			x +='<p>'+item.description+'</p>';
			x +='<p>'+item.courses+'</p>';		
		

		$('#minors').html(x);
	}); // end UgMinors
}); //end /minors


// get the /employment/ information onto the page
myXHR('get',{'path':'/employment/'}).done(function(json){
	// console.log(json);
	var x = '';
	x+= "<h2>" + json.introduction.title + "</h2>"

	$.each(json.introduction.content,function(i, item)
	{
		// console.log(item);

		x+= "<h2>" + item.title + "</h2>";
		x+= "<p>" + item.description + "</p>";
		
	}); // end introduction

	x += "<h2>" + json.degreeStatistics.title + "</h2>"

	$.each(json.degreeStatistics.statistics,function(i, item)
	{
		// console.log(item);

		x+= "<h4>" + item.value + "</h4>";
		x+= "<h5>" + item.description + "</h5>";
	}); // end degreeStatistics

	x += "<h2>" + json.employers.title + "</h2>"

	$.each(json.employers.employerNames,function(i, item)
	{
		// console.log(item);

		x+= "<h4>" + item + "</h4>";
	}); // end employerNames

	x += "<h2>" + json.careers.title + "</h2>"

	$.each(json.careers.careerNames,function(i, item)
	{
		// console.log(item);

		x+= "<h4>" + item + "</h4>";
	}); // end employerNames

	 x += "<table>"
		x += "<caption>" + json.coopTable.title + "</caption>";
		x+="<tr><th>employer</th><th>degree</th><th>city</th><th>term</th>"
	
	
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
	x += "<tr><th>employer</th><th>degree</th><th>city</th><th>title</th><th>startDate</th>"
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
	$.each(json.byFaculty,function(i,item)
	{
			x += '<h2>'+item.facultyName+'</h2>';
			x +='<h3>'+item.username+'</h3>';

			var y='<ul>';

				$.each(item.citations,function(j,jtem){
					y+='<li>'+jtem+'</li>';
				});
				y+='</ul>';

			x+=y

		$('#research').html(x);
	}); // end byFaculty

	$.each(json.byInterestArea,function(i,item)
	{
			x += '<h2>'+item.areaName+'</h2>';

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
			x += '<h2>'+json.title+'</h2>';
			x += '<h3>'+json.subTitle+'</h3>';


			x += "<h2>" + json.studyAbroad.title + "</h2>";
			x += "<p>" + json.studyAbroad.description + "</p>";


			$.each(json.studyAbroad.places,function(j, item)
			{
				// console.log(jtem);
				x += '<h5>' + item.nameOfPlace + '</h5>';
				x += '<h6>' + item.description + '</h6>';

			}); //end places


			// student services
			x+= "<h2>" + json.studentServices.title + "</h2>";
			x+= "<h3>" + json.studentServices.academicAdvisors.title + "</h3>";
			x+= "<p>" + json.studentServices.academicAdvisors.description + "</p>";
			x+= '<a href="' + json.studentServices.academicAdvisors.faq.contentHref + '">' + json.studentServices.academicAdvisors.faq.title + "</h5></a>";

			console.log(json.studentServices.professonalAdvisors);
			x+= "<h2>" + json.studentServices.professonalAdvisors.title + "</h2>";
			$.each(json.studentServices.professonalAdvisors.advisorInformation,function(j, item)
			{
				 console.log(item);
				x += '<h5>' + item.name + '</h5>';
				x += '<h6>' + item.department + '</h6>';
				x += '<h6>' + item.email + '</h6>';


			}); //end profesonalAdvisors

			x+= "<h2>" + json.studentServices.facultyAdvisors.title + "</h2>";
			x+= "<h4>" + json.studentServices.facultyAdvisors.description + "</h4>";

			x+= "<h3>" + json.studentServices.istMinorAdvising.title + "</h3>";
			$.each(json.studentServices.istMinorAdvising.minorAdvisorInformation,function(j, item)
			{
				 //console.log(item);
				x += '<h5>' + item.title + '</h5>';
				x += '<h6>' + item.advisor + '</h6>';
				x += '<h6>' + item.email + '</h6>';


			}); //end minorAdvisorInformation

			x+= "<h2>" + json.tutorsAndLabInformation.title + "</h2>";
			x+= "<h4>" + json.tutorsAndLabInformation.description + "</h4>";
			x+= "<h6>" + json.tutorsAndLabInformation.tutoringLabHoursLink + "</h6>";

			x+= "<h2>" + json.studentAmbassadors.title + "</h2>";
			x+= '<img src = "' + json.studentAmbassadors.ambassadorsImageSource + '">';

			$.each(json.studentAmbassadors.subSectionContent,function(j, item)
			{
				 //console.log(item);
			
				if (item.title == "apply")
				{
					x+= '<a href="' + json.studentAmbassadors.applicationFormLink + '">' + item.description + "</h5></a>";

				}
				else 
				{
					x += '<h5>' + item.title + '</h5>';
					x += '<h6>' + item.description + '</h6>';

				}
			
				x+= '<a href="' + json.studentAmbassadors.applicationFormLink + '">' + item.description + "</h5></a>";

			}); //end subSectionContent

			


			x+= "<p>" + json.studentAmbassadors.note + "</p>";

			$.each(json.forms.graduateForms,function(i, item)
			{
					
			
				x+= '<h5><a href="' + item.href + '">' + item.formName + "</h5></a>";

			}); //end graduateForms

			$.each(json.forms.undergraduateForms,function(i, item)
			{
					
			
				x+= '<h5><a href="' + item.href + '">' + item.formName + "</h5></a>";

			}); //end undergraduateForms

			x+= '<h2><a href="' + json.coopEnrollment.RITJobZoneGuidelink + '">' + json.coopEnrollment.title + "</h2></a>";

			$.each(json.coopEnrollment.enrollmentInformationContent,function(i, item)
			{

			x += "<h4>" + item.title + "</h4>";		
			x += "<h5>" + item.description + "</h5>";		
	
			}); //end undergraduateForms


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

	x += "<h2>" + json.social.title + "</h2>";
	x += "<h3>" + json.social.tweet + "</h3>";
	x += "<h5>" + json.social.by + "</h5>";
	x += "<h6>" + json.social.twitter + "</h6>";
	x += "<h6>" + json.social.facebook + "</h6>";
	

	$.each(json.quickLinks,function(i, item)
	{
		// console.log(item);
		x+= '<h3><a href="' + item.href + '">' + item.title + "</h3></a>";


	}); // end employerNames

	x += "<h3>" + json.copyright.title + "</h3>";
	x += "<h6>" + json.copyright.html + "</h6>";
	x += "<h6>" + json.news + "</h6>";


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

		

		
        jquery_style()		
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
    
    