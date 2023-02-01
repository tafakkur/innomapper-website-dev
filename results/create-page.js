document.getElementById("loading").style.display = "block";
let venturer_clr = "#E20778";
let voyager_clr = "#FCAF17";
let daytripper_clr = "#B6CD2D";
let tourist_clr = "#41C3DC";
let commuter_clr = "#004990";

// Traits Colors
let emotional_stability = "#E20778";
let openness_clr = "#EACC1B";
let agreeableness_clr = "#B6CD2D";
let extraversion_clr = "#ED7D33";
let conscientiousness_clr = "#41C3DC";

// Traveler images
var traveler_images = {
	voyager: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_d42xfd3Dp0gj5fE",
	venturer: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cvS4F0BFVPcVSIK",
	tourist: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8qRo5j8IUsce0dg",
	commuter: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9nJKaYbw60b6kjs",
	daytripper: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cMeU2noU8xanvEi",
};
let marker_images = {
	commuter: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8Dnc4BG8K19A2do",
	daytripper: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9no4IwReTDWnpVs",
	tourist: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6wZj2v08q1l8Kge",
	venturer: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6r4QrWYoKLzlMSq",
	voyager: "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_daST7JXluKKq8f4",
};

//For pdfs
let header_url = "https://rotman.az1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_7QgPhrlA0MMWQBg";
let type_url = "https://iima.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3BJJLuzQRHVqRLM";
let marker_url;
let venturer_url = traveler_images.venturer;
let voyager_url = traveler_images.voyager;
let daytripper_url = traveler_images.daytripper;
let tourist_url = traveler_images.tourist;
let commuter_url = traveler_images.commuter;

let all_svgs_graphs = [];

let normal = fonts.thin;
let bold = fonts.bold;
let boldItalic = fonts.boldItalic;
let reguler = fonts.reguler;
let medium = fonts.medium;
var doc = new jsPDF("p", "pt", "letter");

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let { type, traits, adqt, rid } = params;

// Error Handler
let error = false;
let error_message = [];
const types = ["tourist", "voyager", "venturer", "daytripper", "commuter"];

try {
	type = type.toLowerCase();
	traits = traits.split("_").map((a) => parseInt(a));
	adqt = adqt.split("_").map((a) => parseInt(a));
	if (traits.length != 5 || adqt.length != 5) {
		error = true;
		error_message.push("invalid traits or adqt");
	}
} catch (err) {
	error = true;
	error_message.push("unable to compute traits or adqt");
}

if (types.indexOf(type) == -1) {
	error = true;
	error_message.push("invalid type");
}

console.log(error_message.join());

if (error) {
	document.querySelector(
		"body"
	).innerHTML = `<div style="display: flex; align-items: center; width: 74vw; text-align: center; height: 75vh; margin: auto">
	<span>
	Thank you for completing the <i><b>innomapper (beta)</b></i>.<br>Our servers are down at the moment; please <a href="mailto:anjana.dattani@rotman.utoronto.ca?subject=innomapper Report Error: ${rid}">email us</a> to receive a copy of your report, with the following Subject Line: <b>${rid}</b>
	</span>
	</div>`;
}

let traveler = { ...traveler_types[type] };

marker_url = marker_images[type];
document.querySelector("#location_image").src = marker_url;

document.getElementById("top-details").innerHTML = traveler.top_details;
document.getElementById("left-para-1").innerHTML = traveler.left_para_1;
document.getElementById("left-para-2").innerHTML = traveler.left_para_2;
document.getElementById("left-para-3").innerHTML = traveler.left_para_3;
document.getElementById("among-others").innerHTML = traveler.among_other;
document.getElementById("card1").innerHTML = traveler.other_cards.card1;
document.getElementById("card2").innerHTML = traveler.other_cards.card2;
document.getElementById("card3").innerHTML = traveler.other_cards.card3;
document.getElementById("card4").innerHTML = traveler.other_cards.card4;
document.getElementById("second-page-image").src = traveler_images[type];

let main_color = "";
if (type === "tourist") main_color = tourist_clr;
if (type === "voyager") main_color = voyager_clr;
if (type === "venturer") main_color = venturer_clr;
if (type === "daytripper") main_color = daytripper_clr;
if (type === "commuter") main_color = commuter_clr;

var elements = document.getElementsByClassName("primary_color"); // get all elements
for (var i = 0; i < elements.length; i++) {
	elements[i].style.color = main_color;
}

var wrapper_divs = document.getElementsByClassName("wrapper-div");
for (var i = 0; i < wrapper_divs.length; i++) {
	wrapper_divs[i].style.border = `3px solid ${main_color}`;
}

let container = "container",
	container1 = "container1";

if (window["chart_1"]) {
	chart_1.destroy();
}
if (window["chart_2"]) {
	chart_2.destroy();
}

let my_colors = [openness_clr, agreeableness_clr, emotional_stability, conscientiousness_clr, extraversion_clr];

let all_traits = ["OPENNESS", "AGREEABLENESS", "EMOTIONAL", "CONSCIENTIOUSNESS", "EXTRAVERSION"];

let quotient = ["EXPERIMENTAL", "CULTURAL", "SITUATIONAL", "EDUCATIONAL", "INTERPERSONAL"];

// NOTE: Replace these arrays by values from survery
// Sequence: [OPENNESS, AGREEABLENESS, EMOTIONAL STABILITY, CONSCIENTIOUSNESS, EXTRAVERSION]
// let trait_way = [2, 3, 5, 4, 1];
let trait_sum = traits.reduce((a, b) => a + b);
let trait_way = traits.map((val) => val / 10);
// Sequence: [EXPERIMENTAL, CULTURAL, SITUATIONAL, EDUCATIONAL, INTERPERSONAL]
// let qoutient_way = [2, 5, 4, 1, 3];
let adqt_sum = adqt.reduce((a, b) => a + b);
let qoutient_way = adqt.map((val) => val / 10);

// Make traits data for graph
// let data_obj = [];
// for (let i = 0; i < trait_way.length; i++) {
// 	data_obj.push({
// 		name: all_traits[i],
// 		y: trait_way[i],
// 		color: my_colors[i],
// 	});
// }

const make_trait_data = function () {
	const trait_values = trait_way.map((a, index) => {
		const val = a * 10;
		const range = { x: val - 5, x2: val + 5, y: index, pointWidth: 25 };
		if (val <= 5) {
			range.x = 0;
			range.x2 = val + 5;
		}
		if (val >= 95) {
			range.x = val - 5;
			range.x2 = 100;
		}
		return range;
	});
	const trait_base = [];
	for (let i = 0; i < trait_values.length; i++) {
		trait_base.push({
			x: 0,
			x2: 100,
			y: i,
			pointWidth: 5,
		});
	}

	// const trait_series = [...trait_base, ...trait_values];
	const trait_series = [...trait_values];
	return trait_series;
};

let data_obj_qoutient = [];
for (let i = 0; i < qoutient_way.length; i++) {
	let new_value = qoutient_way[i] * 10;
	new_value = new_value - 20;
	new_value = new_value / 0.8;
	data_obj_qoutient.push({
		name: quotient[i],
		y: new_value,
		color: my_colors[i],
	});
}
const data_obj = make_trait_data();
var chart_1 = Highcharts.chart(container, {
	colors: my_colors,
	chart: {
		type: "xrange",
		backgroundColor: "transparent",
		borderWidth: 0,
	},
	credits: {
		enabled: false,
	},
	title: {
		text: "",
	},
	yAxis: {
		title: {
			text: "",
		},
		categories: ["OPENNESS", "AGREEABLENESS", "EMOTIONAL", "CONSCIENTIOUSNESS", "EXTRAVERSION"],
		reversed: true,
		labels: {
			enabled: false,
		},
		gridLineWidth: 0,
		lineWidth: 0,
	},
	xAxis: {
		gridLineColor: "transparent",
		gridLineWidth: 0,
		lineWidth: 0,
		labels: {
			enabled: false,
		},
		tickLength: 0,
		max: 70,
		min: 30,
	},
	legend: {
		enabled: false,
	},
	plotOptions: {
		series: {
			borderWidth: 0,
			events: {
				legendItemClick: function () {
					return false;
				},
			},
		},
	},
	series: [
		{
			pointPadding: 0,
			groupPadding: 0,
			data: data_obj,
			dataLabels: {
				enabled: false,
			},
		},
	],
});

var chart_2 = Highcharts.chart(container1, {
	title: {
		text: "",
	},
	chart: {
		type: "bar",
		backgroundColor: null,
		borderWidth: 0,
	},
	credits: {
		enabled: false,
	},
	plotOptions: {
		series: {
			pointWidth: 20,
			// borderWidth: 1,
			borderRadius: "3%",
			events: {
				legendItemClick: function () {
					return false;
				},
			},
		},
	},
	legend: {
		enabled: false,
	},
	yAxis: {
		title: {
			text: "",
		},
		labels: {
			enabled: false,
		},
		max: 100,
		min: 0,
		gridLineColor: "transparent",
		gridLineWidth: 0,
		lineWidth: 0,
	},
	xAxis: {
		type: "category",
		labels: {
			enabled: false,
		},
		lineWidth: 0,
		title: {
			text: "",
		},
		max: 6,
		gridLineColor: "transparent",
		gridLineWidth: 0,
	},
	series: [
		{
			name: "1",
			colorByPoint: true,
			data: data_obj_qoutient,
		},
	],
});

setTimeout(() => {
	createDataUriFromSvg();
}, 300);
