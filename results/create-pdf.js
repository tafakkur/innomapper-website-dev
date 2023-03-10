// Extra colors
let footer_copyrights = "#757575";
let vertical_graph_line = "#d7d8d9";
let right_box = "#2a2a2a";
let traits_heading = "#8d8c8c";
let list_bullet = "\u2022 ";
let attempts = 0;
let header_img = "";
let venturer_img = "";
let voyager_img = "";
let marker_img = "";
let daytripper_img = "";
let commuter_img = "";
let tourist_img = "";
let openness_img = "";
let agreeableness_img = "";
let emotional_stability_img = "";
let conscientiousness_img = "";
let extraversion_img = "";
let cultural_img = "";
let situational_img = "";
let educational_img = "";
let interpersonal_img = "";
let experimental_img = "";
let openness_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6rJTKwq93wGX9R4",
	agreeableness_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4U7HCI2Vy6VPOBg",
	emotional_stability_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_724GoVU3rEpUf30",
	conscientiousness_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2sDE22Ab1RcDoJo",
	extraversion_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_e4zt1gJ3FPkekDk",
	experimental_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4UCD9HqPDLsOQYu",
	cultural_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9YatLvhvJJyYxcW",
	situational_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8AF97djqTCPumyO",
	educational_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3UCI759PkH36mr4",
	interpersonal_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4Gu8XAUVZXmRjzE";

let type_img, my_pdf, gen_pdf, upload_pdf;
let big_5_graph;
let adapt_qt_graph;

createDataUrls();

async function createDataUrls() {
	// create_images();
	getDataUri(marker_url, (dataUri) => (marker_img = dataUri));
	getDataUri(header_url, (dataUri) => (header_img = dataUri));
	getDataUri(type_url, (dataUri) => (type_img = dataUri));
	getDataUri(venturer_url, (dataUri) => (venturer_img = dataUri));
	getDataUri(voyager_url, (dataUri) => (voyager_img = dataUri));
	getDataUri(daytripper_url, (dataUri) => (daytripper_img = dataUri));
	getDataUri(tourist_url, (dataUri) => (tourist_img = dataUri));
	getDataUri(commuter_url, (dataUri) => (commuter_img = dataUri));
	getDataUri(openness_url, (dataUri) => (openness_img = dataUri));
	getDataUri(agreeableness_url, (dataUri) => (agreeableness_img = dataUri));
	getDataUri(emotional_stability_url, (dataUri) => (emotional_stability_img = dataUri));
	getDataUri(conscientiousness_url, (dataUri) => (conscientiousness_img = dataUri));
	getDataUri(extraversion_url, (dataUri) => (extraversion_img = dataUri));
	getDataUri(experimental_url, (dataUri) => (experimental_img = dataUri));
	getDataUri(interpersonal_url, (dataUri) => (interpersonal_img = dataUri));
	getDataUri(educational_url, (dataUri) => (educational_img = dataUri));
	getDataUri(cultural_url, (dataUri) => (cultural_img = dataUri));
	getDataUri(situational_url, (dataUri) => (situational_img = dataUri));
}
function getDataUri(url, callback) {
	var image = new Image();
	image.crossOrigin = "anonymous";
	image.onload = function () {
		var canvas = document.createElement("canvas");
		canvas.width = this.naturalWidth;
		canvas.height = this.naturalHeight;
		canvas.getContext("2d").drawImage(this, 0, 0);

		// Get raw image data
		// callback(canvas.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/, ""));

		// ... or get as Data URI
		callback(canvas.toDataURL("image/png", 0.3));
	};

	image.src = url;
	// debugger
}

function makePDFContent() {
	doc = new jsPDF("p", "pt", "letter");
	doc.addFileToVFS("Inter-Thin.ttf", normal);
	doc.addFont("Inter-Thin.ttf", "Inter", "normal");
	doc.addFileToVFS("Inter-Bold.ttf", bold);
	doc.addFont("Inter-Bold.ttf", "Inter", "bold");
	doc.addFileToVFS("Inter-Regular.ttf", reguler);
	doc.addFont("Inter-Regular.ttf", "Inter", "regular");
	doc.addFileToVFS("Inter-Medium.ttf", medium);
	doc.addFont("Inter-Medium.ttf", "Inter", "medium");
	doc.addFileToVFS("Roboto-BoldItalic.ttf", boldItalic);
	doc.addFont("Roboto-BoldItalic.ttf", "Roboto", "bolditalic");
	let primary_clr = "";
	let primary_img = "";
	let firstpage_heading = "";
	let firstpage_description = "";

	switch (type) {
		case "venturer":
			primary_clr = venturer_clr;
			primary_img = venturer_img;
			firstpage_heading = "You are a Venturer";
			firstpage_description = "You lead with new ideas and embody innovation-readiness.";
			break;
		case "voyager":
			primary_clr = voyager_clr;
			primary_img = voyager_img;
			firstpage_heading = "You are a Voyager";
			firstpage_description = "You lead with influence and you champion invention or innovation-related initiatives.";
			break;
		case "daytripper":
			primary_clr = daytripper_clr;
			primary_img = daytripper_img;
			firstpage_heading = "You are a Daytripper";
			firstpage_description = "You lead with trusted knowledge and translate innovative ideas into action.";
			break;
		case "tourist":
			primary_clr = tourist_clr;
			primary_img = tourist_img;
			firstpage_heading = "You are a Tourist";
			firstpage_description = "You lead with proven systems and operationalize innovation initiatives.";
			break;
		case "commuter":
			primary_clr = commuter_clr;
			primary_img = commuter_img;
			firstpage_heading = "You are a Commuter";
			firstpage_description = "You lead within existing systems and challenge innovation initiatives.";
			break;
		default:
			console.log("Personality type doesn't match.");
			break;
	}

	doc.setFont("Inter");

	function header(params) {
		doc.addImage(header_img, "PNG", 35, 35, 543, 55, "header", "SLOW");
		doc.setFontType("normal");
		doc.setTextColor("white");
		doc.setFontSize(21);
		doc.text("Personal Profile", 238, 79);

		doc.setFillColor("#231f20");
		doc.rect(35, 88, 543, 57, "F");

		doc.setTextColor("white");
		doc.setFontType("medium");
		doc.setFontSize(9.5);
		doc.text(
			`Innovation is a journey and a destination. Discover where you are and innovate your way forward.`,
			95,
			110,
			{
				maxWidth: 452,
			}
		);
	}

	header();

	// PINK upper
	doc.setDrawColor(primary_clr); // draw red lines
	doc.setLineWidth(1);
	doc.line(35, 157, 577, 157);

	// PINK bottom
	doc.setDrawColor(primary_clr); // draw red lines
	doc.setLineWidth(1);
	doc.line(35, 722, 577, 722);

	// PINK left
	doc.setDrawColor(primary_clr); // draw red lines
	doc.setLineWidth(1);
	doc.line(35, 722, 35, 157);

	// PINK right
	doc.setDrawColor(primary_clr); // draw red lines
	doc.setLineWidth(1);
	doc.line(577, 722, 577, 157);

	//venturer image
	doc.addImage(primary_img, "PNG", 35, 172, 60, 60, "main", "SLOW");

	doc.setTextColor(primary_clr);
	doc.setFontSize(17);
	doc.setFontType("bold");
	doc.text(firstpage_heading, 108, 205);
	doc.setFontSize(11);
	doc.setFontType("medium");
	doc.text(firstpage_description, 108, 220);

	//first left column text

	// Start Right paras
	if (type === "voyager") {
		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFont("Inter");
		doc.setFontType("bold");
		doc.text(`As an early adopter of new `, 50, 254);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`ideas or technologies, `, 178, 254);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`you enjoy influencing others with your choices of the latest and greatest approaches and gadgets. Change is a highly personal experience for you. You strive to influence disruptive change and are passionate and vocal about change.`,
			50,
			265,
			{
				maxWidth: 245,
				// lineHeightFactor: 1.30
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`At work, you seek to socialize new ideas`, 50, 333);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`and are`, 242, 333);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			"often described as an opinion leader. You are curious, adventurous, creative and interested in new ideas. People respect you for your thoughtful use of new ideas. You???re the one to carefully assess these ideas early on and convince others to adopt them. You excel at serving as the tester, first consumer or promoter of new products, services or new technologies.",
			50,
			343,
			{
				maxWidth: 245,
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`Voyagers travel to make an impression.`, 50, 435);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`As a seeker`, 237, 435);
		doc.setFontType("normal");
		doc.text(
			`of shiny objects, you enjoy discovering new places/products and experimenting with the latest ideas/technologies. Part of your motivation is the status associated with such ideas. You enthusiastically share your experiences with others and are mindful about maintaining your reputation as someone who is ahead of the curve on new ideas.`,
			50,
			445,
			{
				maxWidth: 245,
			}
		);
	}

	if (type === "venturer") {
		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`The first to adopt new ideas`, 50, 254);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`or technologies, you`, 184, 254);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`enjoy inventing new tools. Change is an exciting event for you. Because you see superior technology and innovation as the path to broad economic change, you feel the need to express yourself by creating ideas and tools that are new and exceptional.`,
			50,
			264,
			{
				maxWidth: 245,
				// lineHeightFactor: 1.30
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`At work you seek to bring visions to life`, 50, 333);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`and are`, 238, 333);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`often described as an inventor. You???re an intellectual, naturally curious, creative and enterprising. You???re the one to invite and introduce new ideas to fellow travelers from a wide range of sources, and you excel at identifying, refining or designing new products, services or technologies to move everyone forward on the innovation journey.`,
			50,
			345,
			{
				maxWidth: 245,
				// lineHeightFactor: 1.30
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`Venturers travel for the emotional charge of doing it.`, 50, 440);
		// doc.setFontSize(9.5);
		// doc.setFontType("bold");
		// doc.text(`it.`, 50, 451);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`A daredevil and risk-taker, you explore for the sake of`, 50, 451);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`exploring, and try new things simply because they are new. A young-at-heart, adrenaline junkie who is motivated by adventure and discovering new places, you will venture far and wide to find the world???s tallest mountains. You embrace pretty much anything extreme or previously unheard of.`,
			50,
			461,
			{
				maxWidth: 245,
				// lineHeightFactor: 1.30
			}
		);
	}

	if (type === "daytripper") {
		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`As early majority adopters of trusted new ideas,`, 50, 254);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`you enjoy learning about new ideas and getting inspired by others. For you, change is best understood in operational terms. You are motivated by usefulness and impact and are most concerned about the practical benefits of new ideas.`,
			50,
			264,
			{
				maxWidth: 245,
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`At work, you seek to be productive.`, 50, 335);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`You frequently`, 217, 335);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`interact with those around you to learn about an innovation, and gradually see how it will improve job-related performance. You may be a manager, project lead or connector, bringing together different parts of the organization to implement a certain project. As a team player, you serve as a consumer of new products and services, but only once they have been successfully used by others you know or trust.`,
			50,
			346,
			{
				maxWidth: 245,
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`Daytrippers travel for necessity,`, 50, 450);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`as a means`, 202, 450);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`to an end rather than as a goal in itself. Task and action-oriented, you may sometimes get too consumed by your email/task/business or too tired to really get the most out of the destinations you???re visiting. You work hard, are keen to develop necessary skills, and take pride in your work. `,
			50,
			461,
			{
				maxWidth: 245,
			}
		);
	}

	if (type === "tourist") {
		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`As a late majority adopter of new ideas,`, 50, 254);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text("you enjoy", 234, 254);
		doc.text(
			`managing and maintaining operational excellence. For you, change is necessary for belonging. You want to be involved in an innovation team while questioning the need for an innovation. You adopt new ideas only once they have been tried by most people around you, and you???re convinced of its utility.`,
			51,
			265,
			{
				maxWidth: 245,
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`At work, you seek to implement new ideas`, 50, 345);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`once you`, 250, 345);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`are convinced that they will work. You understand and identify with systems, norms and structures that might limit an innovation???s success, and slowly realize how the innovation might improve job-related performance. You thrive in regulated environments and prefer to focus on your own role in the organization rather than on interacting frequently with people to discuss new ideas.`,
			50,
			355,
			{
				maxWidth: 245,
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`Tourists travel only when pressured to.`, 50, 460);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`You find`, 234, 460);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`comfort following well-traveled routes and meeting similar tourists. You prefer sticking to the known destinations and activities that others might see as a clich??. You trot around destinations and enjoy sightseeing only with the assistance of a tour guide and detailed city map. `,
			50,
			470,
			{
				maxWidth: 245,
			}
		);
	}

	if (type === "commuter") {
		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`The last to adopt new ideas`, 50, 254);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text("or technologies, you", 179, 254);
		doc.text(
			`enjoy abiding by tradition. For you, change is a threat. Because you???re mindful of the logistics, coordination and the time it takes to learn and use an innovation, you???re slow to see how it will improve your job-related performance.`,
			50,
			264,
			{
				maxWidth: 245,
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`At work, you seek to adhere`, 50, 340);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(`to the set of rules,`, 181, 340);
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`ideologies and routines that you hold sacred, and you aggressively defend that position. You???re generally concerned with reliability and low cost, and will use a new product or service only after traditional alternatives are no longer available. You don???t follow trends and have a deep belief in existing systems. You tend to be apprehensive about innovations, innovators and change agents. `,
			50,
			350,
			{
				maxWidth: 245,
			}
		);

		doc.setTextColor(primary_clr);
		doc.setFontSize(9.5);
		doc.setFontType("bold");
		doc.text(`Commuters travel only for work or errands.`, 50, 460);
		doc.setTextColor("black");
		doc.setFontSize(9.5);
		doc.setFontType("normal");
		doc.text(
			`If forced to travel, you have a strong, clear plan for what you seek between destinations. You expect every detail to meet your expectations. Your favorite destinations are those places that are familiar or resemble your culture. `,
			50,
			470,
			{
				maxWidth: 245,
			}
		);
	}

	//End Right paras

	// marker image
	doc.addImage(marker_img, "PNG", 39, 545, 66, 66, "marker", "SLOW");

	//marker text
	doc.setTextColor(primary_clr);
	doc.setFontSize(9.5);
	doc.setFontType("bold");
	doc.text(`Use`, 105, 556);
	doc.setFont("Roboto", "bolditalic");
	doc.setFontSize(10);
	doc.text(`inno`, 126, 556);
	doc.setFont("Inter", "bold");
	doc.setFontSize(9.5);
	doc.text(`mapper as your compass`, 145, 556);

	doc.setTextColor("black");
	doc.setFontSize(9.5);
	doc.setFontType("normal");
	doc.text(
		`Providing you with a current state of readiness for innovation, your personal results are like a compass, helping you to map your innovative capacity over time and across contexts. Wherever you are on your innovation journey today,`,
		105,
		569,
		{
			maxWidth: 175,
			// lineHeightFactor: 1.30
		}
	);

	doc.setFont("Roboto", "bolditalic");
	doc.setFontSize(10);
	doc.text(`inno`, 136, 635);
	doc.setFont("Inter", "bold");
	doc.setFontSize(9.5);
	doc.text(`mapper (beta)`, 155, 635);
	doc.setFontType("normal");
	doc.text(`is designed`, 223, 635);
	doc.text(
		`to nudge you forward, helping you to participate in organizational journeys with those you work with.`,
		105,
		646,
		{
			maxWidth: 175,
		}
	);

	// innomapper (beta) is designed to nudge you forward,

	//footer
	function footer(params) {
		doc.setTextColor("#a9a9a9");
		doc.setFontSize(7);
		doc.setFontType("normal");
		doc.text(`Thank you for taking the`, 35, 737);
		doc.setFont("Roboto", "bolditalic"); // bolditalic
		// doc.setFontType("") // bolditalic
		doc.setFontSize(7.5);
		doc.text("inno", 117, 737);
		doc.setFont("Inter", "bold"); // bolditalic
		doc.setFontSize(7);
		doc.text(`mapper (beta).`, 132, 737);
		doc.setFontType("normal");
		doc.text(` If you have any questions about the test and/or your results, write to us at:`, 184, 737);
		doc.setFontSize(7);
		doc.setFont("Inter", "bold"); // bolditalic
		doc.text("businessdesign@rotman.utoronto.ca", 432, 737);
		doc.setTextColor(footer_copyrights);
		doc.setFontSize(6);
		doc.setTextColor("black");
		doc.setFontType("normal");
		doc.text(`?? 2017-2023 Dr.A.Beausoleil. All rights reserved.`, 35, 755);
		doc.text(`v3.0`, 568, 755);
	}

	footer();

	// Black upper
	doc.setDrawColor(right_box); // draw red lines
	doc.setLineWidth(0.3);
	doc.line(307, 235, 565, 235);

	// Black bottom
	doc.setDrawColor(right_box); // draw red lines
	doc.setLineWidth(0.3);
	doc.line(307, 710, 565, 710);

	// Black left
	doc.setDrawColor(right_box); // draw red lines
	doc.setLineWidth(0.3);
	doc.line(307, 710, 307, 235);

	// Black right
	doc.setDrawColor(right_box); // draw red lines
	doc.setLineWidth(0.3);
	doc.line(565, 710, 565, 235);

	//Personality types right box
	//voyager
	doc.setTextColor(primary_clr);
	doc.setFontSize(11);
	doc.setFontType("bold");
	doc.text(`Among other travelers `, 317, 253);
	doc.setTextColor("black");
	doc.setFontSize(9);
	doc.setFontType("normal");

	// Among other types text handling

	if (type === "venturer") {
		doc.setFontSize(8);
		doc.text(`(see below), Venturers `, 440, 252);
		doc.text(
			`are in the minority and are often described as \'innovators\'. At your best, you take risks and welcome adventure. While you are open-minded, to fellow travelers you may also appear rash and overly daring.`,
			316,
			262,
			{
				maxWidth: 240,
			}
		);
	}

	if (type === "voyager") {
		doc.setFontSize(8);
		doc.text(`(see below), Voyagers `, 440, 252);
		doc.text(
			`are often described as \'early adopters\'. At your best, you question the rules and encourage, facilitate or empower radical change. While you are open-minded, fellow travelers may see you as overly concerned with your own reputation.`,
			316,
			262,
			{
				maxWidth: 245,
			}
		);
	}

	if (type === "daytripper") {
		doc.setFontSize(8);
		doc.text(`(see below), Daytrippers `, 440, 252);
		doc.text(
			`are essential to translating ideas between leaders and late adopters. You are a part of the critical mass that ensures adoption of an idea or technology, just before the typical employee.`,
			316,
			262,
			{
				maxWidth: 245,
			}
		);
	}

	if (type === "tourist") {
		doc.setFontSize(8);
		doc.text(`(see below), Tourists `, 440, 252);
		doc.text(
			`are essential for questioning shiny new ideas and ensuring compliance and operational efficiency. You tend to be cautious about new ideas/tools until proven. As a result, you adopt or consume new products, technologies or services only after seeing that most of the population has.`,
			316,
			262,
			{
				maxWidth: 245,
			}
		);
	}

	if (type === "commuter") {
		doc.setFontSize(8);
		doc.text(`(see below), Commuters `, 440, 252);
		doc.text(
			`demand proof that a new idea or tool is better or useful. Once the new product or technology is enforced, you will gradually accept it and then become a believer in its value.`,
			316,
			262,
			{
				maxWidth: 245,
			}
		);
	}

	if (type === "venturer") {
		doc.addImage(voyager_img, "PNG", 317, 308, 28, 28, "type", "SLOW");

		doc.setTextColor("black");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`VOYAGERS`, 353, 313);
		doc.text(list_bullet + " Lead", 352, 323);
		doc.setFontType("normal");
		doc.text("with influence.", 380, 323);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are early-adopters", 352, 333);
		doc.setFontType("normal");
		doc.text("and opinion leaders, respected", 437, 333);
		doc.text("for support of new ideas.", 358, 343);

		doc.setFontType("bold");
		doc.text(list_bullet + " Excel in roles", 352, 353);
		doc.setFontType("normal");
		doc.text("that require them to serve as beta", 415, 353);
		doc.text(`testers, first consumers or promoters of new products or services.`, 358, 363, {
			maxWidth: 200,
		});

		doc.setFontType("bold");
		doc.text(list_bullet + " Question the rules,", 352, 383);
		doc.setFontType("normal");
		doc.text("encourage, facilitate or", 435, 383);
		doc.text("empower radical change.", 358, 392);

		doc.addImage(tourist_img, "PNG", 317, 500, 28, 28, "new", "SLOW");

		doc.setFontType("bold");
		doc.text(`TOURISTS`, 353, 505);
		doc.text(list_bullet + " Lead", 352, 515);
		doc.setFontType("normal");
		doc.text("with a proven system.", 380, 515);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are late majority adopters", 352, 525);
		doc.setFontType("normal");
		doc.text("of new ideas,", 464, 525);
		doc.text("adopting only after most others have.", 358, 535);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are cautious", 352, 545);
		doc.setFontType("normal");
		doc.text("and need to be persuaded about", 413, 545);
		doc.text("the utility of a new idea before adopting.", 358, 555);
		doc.setFontType("bold");
		doc.text(list_bullet + " Prefer to focus on their role", 352, 565);
		doc.setFontType("normal");
		doc.text("in the", 471, 565);
		doc.text("organization, rather than on new ideas.", 358, 575);
		doc.setFontType("bold");
		doc.text(list_bullet + " See change as a sense of belonging.", 352, 585);

		// Commuter
		doc.addImage(commuter_img, "PNG", 317, 596, 28, 28, "save", "SLOW");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`COMMUTERS`, 353, 601);
		doc.text(list_bullet + " Lead", 352, 611);
		doc.setFontType("normal");
		doc.text("within existing systems.", 381, 611);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are late majority adopters", 352, 621);
		doc.setFontType("normal");
		doc.text("who are suspicious", 465, 621);
		doc.text("of change or see it as a threat, from a deep belief in existing systems.", 358, 631, {
			maxWidth: 200,
		});
		doc.setFontType("bold");
		doc.text(list_bullet + " Will adopt when forced to,", 352, 651);
		doc.setFontType("normal");
		doc.text("gradually becoming", 465, 651);
		doc.text("a believer in its value.", 358, 661);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are concerned with reliability and cost.", 352, 671);
		doc.text(list_bullet + " Are the last to adopt", 352, 681);
		doc.setFontType("normal");
		doc.text("a new idea, process or", 443, 681);
		doc.text("technology.", 358, 691);

		doc.addImage(daytripper_img, "PNG", 317, 403, 28, 28, "next", "SLOW");
		doc.setFontType("bold");
		doc.setFontSize(8);
		doc.text(`DAYTRIPPERS`, 353, 407);
		doc.text(list_bullet + " Lead", 352, 418);
		doc.setFontType("normal");
		doc.text("with trusted knowledge.", 380, 418);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are early majority adopters", 352, 428);
		doc.setFontType("normal");
		doc.text("of trusted new", 470, 428);
		doc.text("ideas, and are inspired by others.", 358, 438);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are motivated by usefulness and impact.", 352, 448);
		doc.text(list_bullet + " Are team players", 352, 458);
		doc.setFontType("normal");
		doc.text("and could serve as", 430, 458);
		doc.text("product/service testers.", 358, 468);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are concerned about productivity", 352, 478);
		doc.setFontType("normal");
		doc.text("and the", 494, 478);
		doc.text("practical benefits of new ideas.", 358, 488);
	}

	if (type === "voyager") {
		doc.addImage(venturer_img, "PNG", 317, 320, 28, 28, "type", "SLOW");

		doc.setTextColor("black");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`VENTURERS`, 353, 324);
		doc.text(list_bullet + " Lead", 353, 334);
		doc.setFontType("normal");
		doc.text("with new ideas and embody innovation-", 381, 334);
		doc.text("readiness.", 359, 343);

		doc.setFontType("bold");
		doc.text(list_bullet + " Invent or introduce", 353, 352);
		doc.setFontType("normal");
		doc.text("new ideas and tools.", 438, 352);

		doc.setFontType("bold");
		doc.text(list_bullet + " Excel in roles", 353, 362);
		doc.setFontType("normal");
		doc.text("that require them to identify,", 415, 362);
		doc.text(`refine or design new products, services or technologies.`, 359, 372, {
			maxWidth: 200,
		});

		doc.setFontType("bold");
		doc.text(list_bullet + " Can be too consumed ", 353, 392);
		doc.setFontType("normal");
		doc.text("by shiny new objects.", 447, 392);

		doc.addImage(tourist_img, "PNG", 317, 500, 28, 28, "new", "SLOW");

		doc.setFontType("bold");
		doc.text(`TOURISTS`, 353, 505);
		doc.text(list_bullet + " Lead", 352, 515);
		doc.setFontType("normal");
		doc.text("with a proven system.", 380, 515);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are late majority adopters", 352, 525);
		doc.setFontType("normal");
		doc.text("of new ideas,", 464, 525);
		doc.text("adopting only after most others have.", 358, 535);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are cautious", 352, 545);
		doc.setFontType("normal");
		doc.text("and need to be persuaded about", 413, 545);
		doc.text("the utility of a new idea before adopting.", 358, 555);
		doc.setFontType("bold");
		doc.text(list_bullet + " Prefer to focus on their role", 352, 565);
		doc.setFontType("normal");
		doc.text("in the", 471, 565);
		doc.text("organization, rather than on new ideas.", 358, 575);
		doc.setFontType("bold");
		doc.text(list_bullet + " See change as a sense of belonging.", 352, 585);

		// Commuter
		doc.addImage(commuter_img, "PNG", 317, 596, 28, 28, "save", "SLOW");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`COMMUTERS`, 353, 601);
		doc.text(list_bullet + " Lead", 352, 611);
		doc.setFontType("normal");
		doc.text("within existing systems.", 381, 611);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are late majority adopters", 352, 621);
		doc.setFontType("normal");
		doc.text("who are suspicious", 465, 621);
		doc.text("of change or see it as a threat, from a deep belief in existing systems.", 358, 631, {
			maxWidth: 200,
		});
		doc.setFontType("bold");
		doc.text(list_bullet + " Will adopt when forced to,", 352, 651);
		doc.setFontType("normal");
		doc.text("gradually becoming", 465, 651);
		doc.text("a believer in its value.", 358, 661);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are concerned with reliability and cost.", 352, 671);
		doc.text(list_bullet + " Are the last to adopt", 352, 681);
		doc.setFontType("normal");
		doc.text("a new idea, process or", 443, 681);
		doc.text("technology.", 358, 691);

		doc.addImage(daytripper_img, "PNG", 317, 403, 28, 28, "next", "SLOW");
		doc.setFontType("bold");
		doc.setFontSize(8);
		doc.text(`DAYTRIPPERS`, 353, 407);
		doc.text(list_bullet + " Lead", 352, 418);
		doc.setFontType("normal");
		doc.text("with trusted knowledge.", 380, 418);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are early majority adopters", 352, 428);
		doc.setFontType("normal");
		doc.text("of trusted new", 470, 428);
		doc.text("ideas, and are inspired by others.", 358, 438);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are motivated by usefulness and impact.", 352, 448);
		doc.text(list_bullet + " Are team players", 352, 458);
		doc.setFontType("normal");
		doc.text("and could serve as", 430, 458);
		doc.text("product/service testers.", 358, 468);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are concerned about productivity", 352, 478);
		doc.setFontType("normal");
		doc.text("and the", 494, 478);
		doc.text("practical benefits of new ideas.", 358, 488);
	}

	if (type === "tourist") {
		doc.addImage(venturer_img, "PNG", 317, 316, 28, 28, "type", "SLOW");

		doc.setTextColor("black");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`VENTURERS`, 353, 320);
		doc.text(list_bullet + " Lead", 353, 330);
		doc.setFontType("normal");
		doc.text("with new ideas and embody innovation-", 381, 330);
		doc.text("readiness.", 359, 339);

		doc.setFontType("bold");
		doc.text(list_bullet + " Invent or introduce", 353, 348);
		doc.setFontType("normal");
		doc.text("new ideas and tools.", 438, 348);

		doc.setFontType("bold");
		doc.text(list_bullet + " Excel in roles", 353, 358);
		doc.setFontType("normal");
		doc.text("that require them to identify,", 415, 358);
		doc.text(`refine or design new products, services or technologies.`, 359, 368, {
			maxWidth: 200,
		});

		doc.setFontType("bold");
		doc.text(list_bullet + " Can be too consumed ", 353, 388);
		doc.setFontType("normal");
		doc.text("by shiny new objects.", 447, 388);

		doc.addImage(voyager_img, "PNG", 317, 402, 28, 28, "venturer", "SLOW");

		doc.setTextColor("black");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`VOYAGERS`, 353, 407);
		doc.text(list_bullet + " Lead", 353, 417);
		doc.setFontType("normal");
		doc.text(" with influence.", 380, 417);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are early-adopters", 353, 427);
		doc.setFontType("normal");
		doc.text("and opinion leaders, respected", 438, 427);
		doc.text("for support of new ideas.", 359, 437);

		doc.setFontType("bold");
		doc.text(list_bullet + " Excel in roles", 353, 447);
		doc.setFontType("normal");
		doc.text("that require them to serve as beta", 415, 447);
		doc.text(`testers, first consumers or promoters of new products or services.`, 359, 457, {
			maxWidth: 200,
		});

		doc.setFontType("bold");
		doc.text(list_bullet + " Question the rules,", 353, 477);
		doc.setFontType("normal");
		doc.text("encourage, facilitate or", 438, 477);
		doc.text("empower radical change.", 359, 487);

		doc.addImage(daytripper_img, "PNG", 317, 499, 28, 28, "right", "SLOW");
		doc.setFontType("bold");
		doc.setFontSize(8);
		doc.text(`DAYTRIPPERS`, 353, 504);
		doc.text(list_bullet + " Lead", 353, 514);
		doc.setFontType("normal");
		doc.text("with trusted knowledge.", 382, 514);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are early majority adopters", 353, 524);
		doc.setFontType("normal");
		doc.text("of trusted new", 472, 524);
		doc.text("ideas, and are inspired by others.", 359, 534);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are motivated by usefulness and impact.", 353, 544);
		doc.text(list_bullet + " Are team players", 353, 554);
		doc.setFontType("normal");
		doc.text("and could serve as", 430, 554);
		doc.text("product/service testers.", 359, 564);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are concerned about productivity", 353, 574);
		doc.setFontType("normal");
		doc.text("and the", 496, 574);
		doc.text("practical benefits of new ideas.", 359, 583);

		doc.addImage(commuter_img, "PNG", 317, 596, 28, 28, "save", "SLOW");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`COMMUTERS`, 353, 601);
		doc.text(list_bullet + " Lead", 352, 611);
		doc.setFontType("normal");
		doc.text("within existing systems.", 381, 611);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are late majority adopters", 352, 621);
		doc.setFontType("normal");
		doc.text("who are suspicious", 465, 621);
		doc.text("of change or see it as a threat, from a deep belief in existing systems.", 358, 631, {
			maxWidth: 200,
		});
		doc.setFontType("bold");
		doc.text(list_bullet + " Will adopt when forced to,", 352, 651);
		doc.setFontType("normal");
		doc.text("gradually becoming", 465, 651);
		doc.text("a believer in its value.", 358, 661);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are concerned with reliability and cost.", 352, 671);
		doc.text(list_bullet + " Are the last to adopt", 352, 681);
		doc.setFontType("normal");
		doc.text("a new idea, process or", 443, 681);
		doc.text("technology.", 358, 691);
	}

	if (type === "commuter") {
		doc.addImage(venturer_img, "PNG", 317, 316, 28, 28, "type", "SLOW");

		doc.setTextColor("black");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`VENTURERS`, 353, 320);
		doc.text(list_bullet + " Lead", 353, 330);
		doc.setFontType("normal");
		doc.text("with new ideas and embody innovation-", 381, 330);
		doc.text("readiness.", 359, 339);

		doc.setFontType("bold");
		doc.text(list_bullet + " Invent or introduce", 353, 348);
		doc.setFontType("normal");
		doc.text("new ideas and tools.", 438, 348);

		doc.setFontType("bold");
		doc.text(list_bullet + " Excel in roles", 353, 358);
		doc.setFontType("normal");
		doc.text("that require them to identify,", 415, 358);
		doc.text(`refine or design new products, services or technologies.`, 359, 368, {
			maxWidth: 200,
		});

		doc.setFontType("bold");
		doc.text(list_bullet + " Can be too consumed ", 353, 388);
		doc.setFontType("normal");
		doc.text("by shiny new objects.", 447, 388);

		doc.addImage(voyager_img, "PNG", 317, 402, 28, 28, "venturer", "SLOW");

		doc.setTextColor("black");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`VOYAGERS`, 353, 407);
		doc.text(list_bullet + " Lead", 353, 417);
		doc.setFontType("normal");
		doc.text(" with influence.", 380, 417);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are early-adopters", 353, 427);
		doc.setFontType("normal");
		doc.text("and opinion leaders, respected", 438, 427);
		doc.text("for support of new ideas.", 359, 437);

		doc.setFontType("bold");
		doc.text(list_bullet + " Excel in roles", 353, 447);
		doc.setFontType("normal");
		doc.text("that require them to serve as beta", 415, 447);
		doc.text(`testers, first consumers or promoters of new products or services.`, 359, 457, {
			maxWidth: 200,
		});

		doc.setFontType("bold");
		doc.text(list_bullet + " Question the rules,", 353, 477);
		doc.setFontType("normal");
		doc.text("encourage, facilitate or", 438, 477);
		doc.text("empower radical change.", 359, 487);

		// Tourist

		doc.addImage(tourist_img, "PNG", 317, 599, 28, 28, "another", "SLOW");

		doc.setFontType("bold");
		doc.text(`TOURISTS`, 353, 604);
		doc.text(list_bullet + " Lead", 353, 614);
		doc.setFontType("normal");
		doc.text("with a proven system.", 381, 614);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are late majority adopters", 353, 624);
		doc.setFontType("normal");
		doc.text("of new ideas,", 465, 624);
		doc.text("adopting only after most others have.", 359, 634);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are cautious", 353, 644);
		doc.setFontType("normal");
		doc.text("and need to be persuaded about", 411, 644);
		doc.text("the utility of a new idea before adopting.", 359, 654);
		doc.setFontType("bold");
		doc.text(list_bullet + " Prefer to focus on their role", 353, 664);
		doc.setFontType("normal");
		doc.text("in the", 471, 664);
		doc.text("organization, rather than on new ideas.", 359, 674);
		doc.setFontType("bold");
		doc.text(list_bullet + " See change as a sense of belonging.", 353, 684);

		doc.addImage(daytripper_img, "PNG", 317, 500, 28, 28, "right", "SLOW");
		doc.setFontType("bold");
		doc.setFontSize(8);
		doc.text(`DAYTRIPPERS`, 353, 505);
		doc.text(list_bullet + " Lead", 353, 515);
		doc.setFontType("normal");
		doc.text("with trusted knowledge.", 382, 515);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are early majority adopters", 353, 525);
		doc.setFontType("normal");
		doc.text("of trusted new", 472, 525);
		doc.text("ideas, and are inspired by others.", 359, 535);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are motivated by usefulness and impact.", 353, 545);
		doc.text(list_bullet + " Are team players", 353, 555);
		doc.setFontType("normal");
		doc.text("and could serve as", 430, 556);
		doc.text("product/service testers.", 359, 565);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are concerned about productivity", 353, 575);
		doc.setFontType("normal");
		doc.text("and the", 498, 575);
		doc.text("practical benefits of new ideas.", 359, 584);
	}

	if (type === "daytripper") {
		doc.addImage(venturer_img, "PNG", 317, 316, 28, 28, "type", "SLOW");

		doc.setTextColor("black");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`VENTURERS`, 353, 320);
		doc.text(list_bullet + " Lead", 353, 330);
		doc.setFontType("normal");
		doc.text("with new ideas and embody innovation-", 381, 330);
		doc.text("readiness.", 359, 339);

		doc.setFontType("bold");
		doc.text(list_bullet + " Invent or introduce", 353, 348);
		doc.setFontType("normal");
		doc.text("new ideas and tools.", 438, 348);

		doc.setFontType("bold");
		doc.text(list_bullet + " Excel in roles", 353, 358);
		doc.setFontType("normal");
		doc.text("that require them to identify,", 415, 358);
		doc.text(`refine or design new products, services or technologies.`, 359, 368, {
			maxWidth: 200,
		});

		doc.setFontType("bold");
		doc.text(list_bullet + " Can be too consumed ", 353, 388);
		doc.setFontType("normal");
		doc.text("by shiny new objects.", 447, 388);

		doc.addImage(voyager_img, "PNG", 317, 402, 28, 28, "venturer", "SLOW");

		doc.setTextColor("black");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`VOYAGERS`, 353, 407);
		doc.text(list_bullet + " Lead", 353, 417);
		doc.setFontType("normal");
		doc.text(" with influence.", 380, 417);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are early-adopters", 353, 427);
		doc.setFontType("normal");
		doc.text("and opinion leaders, respected", 438, 427);
		doc.text("for support of new ideas.", 359, 437);

		doc.setFontType("bold");
		doc.text(list_bullet + " Excel in roles", 353, 447);
		doc.setFontType("normal");
		doc.text("that require them to serve as beta", 415, 447);
		doc.text(`testers, first consumers or promoters of new products or services.`, 359, 457, {
			maxWidth: 200,
		});

		doc.setFontType("bold");
		doc.text(list_bullet + " Question the rules,", 353, 477);
		doc.setFontType("normal");
		doc.text("encourage, facilitate or", 438, 477);
		doc.text("empower radical change.", 359, 487);

		// Tourist
		doc.addImage(tourist_img, "PNG", 317, 500, 28, 28, "new", "SLOW");

		doc.setFontType("bold");
		doc.text(`TOURISTS`, 353, 505);
		doc.text(list_bullet + " Lead", 352, 515);
		doc.setFontType("normal");
		doc.text("with a proven system.", 380, 515);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are late majority adopters", 352, 525);
		doc.setFontType("normal");
		doc.text("of new ideas,", 464, 525);
		doc.text("adopting only after most others have.", 358, 535);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are cautious", 352, 545);
		doc.setFontType("normal");
		doc.text("and need to be persuaded about", 413, 545);
		doc.text("the utility of a new idea before adopting.", 358, 555);
		doc.setFontType("bold");
		doc.text(list_bullet + " Prefer to focus on their role", 352, 565);
		doc.setFontType("normal");
		doc.text("in the", 471, 565);
		doc.text("organization, rather than on new ideas.", 358, 575);
		doc.setFontType("bold");
		doc.text(list_bullet + " See change as a sense of belonging.", 352, 585);

		doc.addImage(commuter_img, "PNG", 317, 596, 28, 28, "save", "SLOW");
		doc.setFontSize(8);
		doc.setFontType("bold");
		doc.text(`COMMUTERS`, 353, 601);
		doc.text(list_bullet + " Lead", 352, 611);
		doc.setFontType("normal");
		doc.text("within existing systems.", 381, 611);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are late majority adopters", 352, 621);
		doc.setFontType("normal");
		doc.text("who are suspicious", 465, 621);
		doc.text("of change or see it as a threat, from a deep belief in existing systems.", 358, 631, {
			maxWidth: 200,
		});
		doc.setFontType("bold");
		doc.text(list_bullet + " Will adopt when forced to,", 352, 651);
		doc.setFontType("normal");
		doc.text("gradually becoming", 465, 651);
		doc.text("a believer in its value.", 358, 661);
		doc.setFontType("bold");
		doc.text(list_bullet + " Are concerned with reliability and cost.", 352, 671);
		doc.text(list_bullet + " Are the last to adopt", 352, 681);
		doc.setFontType("normal");
		doc.text("a new idea, process or", 443, 681);
		doc.text("technology.", 358, 691);
	}

	// Next page

	doc.addPage();
	header();

	// PINK upper
	doc.setDrawColor(primary_clr); // draw red lines
	doc.setLineWidth(1);
	doc.line(35, 250, 577, 250);

	// PINK bottom
	doc.setDrawColor(primary_clr); // draw red lines
	doc.setLineWidth(1);
	doc.line(35, 722, 577, 722);

	// PINK left
	doc.setDrawColor(primary_clr); // draw red lines
	doc.setLineWidth(1);
	doc.line(35, 722, 35, 250);

	// PINK right
	doc.setDrawColor(primary_clr); // draw red lines
	doc.setLineWidth(1);
	doc.line(577, 722, 577, 250);

	// page 2
	doc.addImage(primary_img, "PNG", 35, 167, 60, 60, "page2Primary", "SLOW");

	doc.setTextColor(primary_clr);
	doc.setFontSize(17);
	doc.setFontType("bold");
	doc.text(`Arriving at your traveler type`, 110, 180);
	doc.setTextColor("black");
	doc.setFontSize(9);
	doc.setFontType("normal");
	doc.text(`The`, 110, 195);
	doc.setFont("Roboto", "bolditalic");
	// doc.setFontStyle('');
	doc.setFontSize(10);
	doc.text(`inno`, 130, 195);
	doc.setFont("Inter", "bold");
	// doc.setFontType('');
	doc.setFontSize(9.5);
	doc.text(`mapper (beta)`, 149.5, 195);
	// innomapper (beta)
	doc.setFontType("normal");
	doc.setFontSize(9);
	doc.text(`relies on a combination of researched and accepted technology adoption`, 218, 195, {
		maxWidth: 445,
	});

	doc.text(
		`types, five personality traits and five adaptability quotients that are critical to innovative thinking and acting. We combine your results to help define your ability and willingness to undertake innovative thinking, processes and projects.`,
		110,
		205,
		{
			maxWidth: 445,
		}
	);

	//Vertical lines graph
	const verticalLineHeight = 415;
	const graphStart = 188;
	const graphEnd = 362;
	const graphPercent = (graphEnd - graphStart) / 100;

	const verticalLinePositions = [0, 15, 30, 45, 60, 75, 100];

	doc.setDrawColor(vertical_graph_line);
	doc.setLineDash([2, 1]);
	doc.setLineWidth(0.5);

	verticalLinePositions.forEach((item) => {
		const thisPosition = graphStart + graphPercent * item;
		doc.line(thisPosition, 252, thisPosition, verticalLineHeight);
	});

	// doc.line(183 + 5, 252, 183 + 5, verticalLineHeight); //0%
	// doc.line(218 + 5, 252, 218 + 5, verticalLineHeight); //20%
	// doc.line(252 + 5, 252, 252 + 5, verticalLineHeight); //40%
	// doc.line(270 + 5, 252, 270 + 5, verticalLineHeight); //50%
	// doc.line(287 + 5, 252, 287 + 5, verticalLineHeight); //60%
	// doc.line(357 + 5, 252, 357 + 5, verticalLineHeight); //100%
	doc.setLineWidth(1);
	doc.setDrawColor("#6b6c6c");
	// doc.line(322 + 5, 252, 322 + 5, verticalLineHeight); //80%
	doc.line(graphStart + graphPercent * 90, 252, graphStart + graphPercent * 90, verticalLineHeight); //90%

	// First Graph
	doc.setTextColor(traits_heading);
	doc.setFontSize(11);
	doc.setFontType("bold");
	doc.text(`Adaptability Quotient`, 48, 270);

	doc.setFontSize(8.5);
	doc.text(`Willingness & Ability to Adapt when`, 375, 275);

	// doc.setFontSize(7);
	// doc.text(`Measures`, 375, 288);

	doc.addImage(experimental_img, "PNG", 42, 295, 25, 22, "2PageOpenness", "SLOW");
	doc.setFontSize(7);
	doc.setTextColor(openness_clr);
	doc.text(`EXPERIMENTAL ADAPTABILITY`, 70, 305);
	doc.text(`Solving atypical, ill-defined & complex problems`, 375, 303);

	doc.addImage(cultural_img, "PNG", 42, 318, 25, 22, "TwoAgreeableness", "SLOW");
	doc.setFontSize(7);
	doc.setTextColor(agreeableness_clr);
	doc.text(`CULTURAL ADAPTABILITY`, 70, 330);
	doc.text(`Exploring & interacting with new & diverse cultures`, 375, 327);

	doc.addImage(situational_img, "PNG", 42, 341, 25, 22, "emotional", "SLOW");
	doc.setFontSize(7);
	doc.setTextColor(emotional_stability);
	doc.text(`SITUATIONAL ADAPTABILITY`, 70, 353);
	doc.text(`Managing reactions to uncertain or crisis situations`, 375, 352);

	doc.addImage(educational_img, "PNG", 42, 365, 25, 22, "conscientious", "SLOW");
	doc.setFontSize(7);
	doc.setTextColor(conscientiousness_clr);
	doc.text(`EDUCATIONAL ADAPTABILITY`, 70, 375);
	doc.text(`Learning new tasks, technologies and procedures`, 375, 375);

	doc.addImage(interpersonal_img, "PNG", 42, 388, 25, 22, "extraversion", "SLOW");
	doc.setFontSize(7);
	doc.setTextColor(extraversion_clr);
	doc.text(`INTERPERSONAL ADAPTABILITY`, 70, 399);
	doc.text(`Adjusting behaviour while working with others`, 375, 400);

	doc.setDrawColor(footer_copyrights);
	// For Chrome, Edge and Opera
	let y1 = 284,
		h1 = 180;
	// For Firefox
	if (navigator.userAgent.indexOf("Firefox") > -1) {
		y1 = 260;
		h1 = 228;
	}

	// doc.addImage(big_5_graph, "PNG", 170, y1, 400, h1, "graph1", "NONE");
	doc.addImage(adapt_qt_graph, "PNG", 185, y1, 180, h1, "graph2", "NONE");

	doc.setTextColor(footer_copyrights);
	doc.setDrawColor(footer_copyrights);
	doc.setFontSize(8);
	doc.setFontType("medium");
	// doc.setLineHeightFactor(1.5);
	doc.text(
		`Innovative capacity is strongly correlated with high levels of educational and experimental adaptability and a balance across the other dimensions. The dark line grey line indicates a high level. Reflect on your mapped levels across all dimensions. Do they validate or surprise you? How might you better adapt to unfamiliar, uncertain or ambiguous situations?`,
		45,
		428,
		{
			maxWidth: 505,
			lineHeightFactor: 1.5,
		}
	);
	// doc.setLineHeightFactor();
	// doc.setFontSize(7);
	// doc.setFontType("medium");
	// doc.text(
	// 	`Innovativeness is strongly correlated with a balanced score across all adaptability measures and with scores above 80% for experimental and cultural adaptability.`,
	// 	550,
	// 	425,
	// 	{
	// 		maxWidth: 150,
	// 		align: "right",
	// 	}
	// );

	doc.setFillColor(primary_clr);
	doc.rect(35, 472, 542, 3, "F");

	// doc.setTextColor("white");
	// doc.setFontSize(8);
	// doc.setFontType("bold");
	// doc.text(`PERCENT (%)`, 100, 484);
	// doc.setFontSize(11);
	// doc.setFontType("bold");
	// doc.text(`0`, 178, 485);
	// doc.text(`20`, 210, 485);
	// doc.text(`40`, 245, 485);
	// doc.text(`60`, 280, 485);
	// doc.text(`80`, 315, 485);
	// doc.text(`100`, 345, 485);

	// Second Graph
	//Big 5
	const labels = ["OPENNESS", "EMOTIONAL STABILITY", "AGREEABLENESS", "CONSCIENTIOUSNESS", "EXTRAVERSION"];
	const big5_colours = [openness_clr, emotional_stability, agreeableness_clr, conscientiousness_clr, extraversion_clr];
	const b5_images = [openness_img, agreeableness_img, emotional_stability_img, conscientiousness_img, extraversion_img];
	const y_pos = {
		last_line: 704,
		graph_title: 495,
	};
	// "arrow_positions": [544.5, 567.5, 592.5, 615.5, 639.5],

	const lab_start = 530;
	const lab_diff = 35;
	const arrow_positions = [];

	labels.forEach((item, index) => {
		const start_pos = lab_start + lab_diff * index;
		y_pos[item] = start_pos - 2;
		arrow_positions.push(start_pos - 3.5);
	});

	doc.setTextColor(traits_heading);
	doc.setFontSize(11);
	doc.setFontType("bold");
	doc.text(`Big 5 Personality Traits`, 48, y_pos.graph_title);

	// doc.setFontSize(8.5);
	// doc.text(`Innovativeness Scale & Indicators`, 250, 507);

	doc.setDrawColor(footer_copyrights);

	big5_colours.forEach((item, index) => {
		const arrow_height = 2;
		const arrow_length = 320;
		// const y_positions = [544.5, 567.5, 592.5, 615.5, 639.5];
		const y_positions = arrow_positions;
		const line_y_start = y_positions[index];
		const line_x_start = 210;
		const line_x_end = line_x_start + arrow_length;
		const line_y_end = line_y_start + arrow_height;
		const x_offset = 20;
		const y_offset = 12;
		const arrow_texts = [
			["cautious", "conventional", "curious", "creative"],
			["sensitive", "nervous", "resilient", "confident"],
			["competitive", "withdrawn", "cooperative", "optimistic"],
			["easy-going", "careless", "structured", "organized"],
			["self-reliant", "reserved", "outgoing", "expressive"],
		];

		doc.setDrawColor(item);
		doc.setFillColor(item);
		doc.setTextColor(item);

		doc.rect(line_x_start, line_y_start, arrow_length, arrow_height, "F");
		doc.triangle(
			line_x_start,
			line_y_start - 3,
			line_x_start - 5,
			(line_y_start + line_y_end) / 2,
			line_x_start,
			line_y_end + 3,
			"F"
		);
		doc.triangle(
			line_x_end - 2,
			line_y_start - 3,
			line_x_end - 2 + 5,
			(line_y_start + line_y_end) / 2,
			line_x_end - 2,
			line_y_end + 3,
			"F"
		);

		// Write Label Text
		doc.setFontType("bold");
		doc.setFontSize(8);
		doc.text(labels[index], 70, y_pos[labels[index]], {
			align: "left",
			baseline: "middle",
		});

		// Write Extra Text on Arrows
		doc.setFontType("medium");
		doc.setFontSize(8);
		doc.text(arrow_texts[index][0], line_x_start - x_offset, line_y_start - y_offset, {
			align: "left",
			baseline: "top",
		});
		doc.text(arrow_texts[index][1], line_x_start - x_offset, line_y_end + y_offset, {
			align: "left",
			baseline: "bottom",
		});
		doc.text(arrow_texts[index][2], line_x_end + x_offset, line_y_start - y_offset, {
			align: "right",
			baseline: "top",
		});
		doc.text(arrow_texts[index][3], line_x_end + x_offset, line_y_end + y_offset, {
			align: "right",
			baseline: "bottom",
		});

		// Plot values

		let trait_value = trait_way[index] * 10;
		let plot_start = trait_value;
		if (trait_value <= 5) {
			plot_start = 1.5;
		}
		plot_start = plot_start > 90 ? 90 : plot_start;
		doc.roundedRect(
			line_x_start + (plot_start * arrow_length) / 100,
			line_y_start - arrow_height,
			20,
			arrow_height * 3,
			arrow_height / 4,
			arrow_height / 4,
			"F"
		);
		// Add label image
		doc.rect(48, y_pos[labels[index]] - 8, 16.8, 16.8, "F");
		doc.setTextColor("white");
		doc.setFontType("bold");
		doc.setFontSize(16);
		doc.text(["O", "S", "A", "C", "E"][index], 56.4, y_pos[labels[index]] + 8, { align: "center", baseline: "bottom" });
		// doc.addImage(b5_images[index], "PNG", 42, y_pos[labels[index]] - 11, 22, 22, "", "SLOW");
	});

	doc.setTextColor(footer_copyrights);
	doc.setFontSize(8);
	// doc.setFontType("bold");
	// doc.text(`Score Ranges`, 45, 670);
	// doc.setFontSize(6.5);
	doc.setFontType("medium");
	doc.text(
		"Your personality traits represent your default state or how you generally respond in most situations. Innovative capacity is strongly correlated with high levels of openness and emotional stability. Reflect on your mapped results. Do they validate or surprise you?",
		45,
		y_pos.last_line,
		{
			maxWidth: 505,
		}
	);

	// doc.setFontSize(7);
	// doc.setFontType("medium");
	// doc.text(
	// 	`Innovativeness is strongly correlated with high levels of openness and balanced emotional stability and agreeableness.`,
	// 	550,
	// 	y_pos.last_line,
	// 	{
	// 		maxWidth: 220,
	// 		align: "right",
	// 	}
	// );

	/* // For Chrome, Edge and Opera
	let y2 = 531,
		h2 = 127;
	// For Firefox
	if (navigator.userAgent.indexOf("Firefox") > -1) {
		y2 = 502;
		h2 = 232;
	}
	// doc.addImage(big_5_graph, "PNG", 150, y2, 400, h2, "graph1", "NONE");
	// doc.addImage(adapt_qt_graph, "PMG", 180, y2, 180, h2, "graph2", "NONE"); */

	footer();
	// document.getElementById("pdf-wrapper").style.display = "block";
	// document.getElementById("loading").style.display = "none";
}
async function marker_chk() {
	if (marker_img === "") {
		await getDataUri(marker_url, (dataUri) => (marker_img = dataUri));
	}
	generateViewPDF();
}
function generateViewPDF() {
	try {
		makePDFContent();
		document.querySelector("#loading span").innerHTML =
			"Your customized <b><i>inno</i>mapper(beta)</b> report is ready.<br>Please click the button to download it.<br><br><br>";
		document.querySelector("#loading span").style.fontFamily = "sans-serif";
		document.querySelector(".loaders").outerHTML = "";
		document.querySelector("#loading span").insertAdjacentHTML(
			"afterend",
			'<button class="btn btn-primary" id="gen_pdf" onclick="doc.save(\'Report.pdf\');" style="margin: 0 auto" > Download PDF Report</button>'
			// '<button class="btn btn-primary" id="gen_pdf" onclick="window.open(doc.output(\'bloburl\'))" style="margin: 0 auto" > Download PDF Report</button>'
		);
		let update_message = JSON.stringify({
			type: "done",
		});
		parent.postMessage(update_message, "*");
	} catch (error) {
		console.log(attempts++);
		if (attempts > 5) {
			window.location.reload();
		}
		setTimeout(() => {
			generateViewPDF();
		}, 500);
	}
}

//NOTE: Using this to show demo
const toDataURL = (url) =>
	fetch(url)
		.then((response) => response.blob())
		.then(
			(blob) =>
				new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.onloadend = () => resolve(reader.result);
					reader.onerror = reject;
					reader.readAsDataURL(blob);
				})
		);

function createDataUriFromSvg() {
	Highcharts.charts.forEach((item, index) => {
		// For Chrome, Edge and Opera
		let wd = 720,
			ht = 540;
		// For Firefox
		if (navigator.userAgent.indexOf("Firefox") > -1) {
			wd = 462;
			ht = 360;
		}
		svgString2Image(item.getSVGForExport(), wd * 2, ht * 2, "png", function (pngData) {
			if (index === 0) {
				big_5_graph = pngData;
			}
			if (index === 1) {
				adapt_qt_graph = pngData;
			}
		});
	});

	setTimeout(() => {
		generateViewPDF();
	}, 500);
}

function svgString2Image(svgString, width, height, format, callback) {
	format = format ? format : "png";
	var svgData = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	var image = new Image();
	image.onload = function () {
		// async (happens later)
		context.clearRect(0, 0, width, height);
		context.drawImage(image, 0, 0, width, height);
		var pngData = canvas.toDataURL("image/" + format);
		callback(pngData);
	};
	image.src = svgData;
}
