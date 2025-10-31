//your JS code here. If required.
const p = document.getElementById("timer");

function updateTimer(){
	const date = new Date();

	let time = date.toLocaleString();
	
	p.textContent = time;
};
setInterval(()=>{
	updateTimer();
},1000)
