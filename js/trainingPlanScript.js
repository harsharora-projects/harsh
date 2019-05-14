// Get the button that opens the modal
var btnActiveTab = document.getElementsByClassName("btnActiveTab")[0];
var btnPassiveTab = document.getElementsByClassName("btnPassiveTab")[0];
var btnAddTrainings = document.getElementById("btnAddTrainings");

var activeTabContent = document.getElementsByClassName("activeTabContent")[0];
var passiveTabContent = document.getElementsByClassName("passiveTabContent")[0];

console.log(btnActiveTab);

console.log(btnActiveTab.classList.contains("btnActiveTab"));

// 
btnPassiveTab.onclick = function() {
	btnActiveTab.classList.remove("btnActiveTab");
	btnPassiveTab.classList.add("btnActiveTab");
	
	passiveTabContent.classList.remove("passiveTabContent");
	passiveTabContent.classList.add("activeTabContent");
	
	activeTabContent.classList.remove("activeTabContent");
	activeTabContent.classList.add("passiveTabContent");
	
	btnAddTrainings.style.display = "none";
	
}

btnActiveTab.onclick = function() {
	btnPassiveTab.classList.remove("btnActiveTab");
	btnActiveTab.classList.add("btnActiveTab");
	
	activeTabContent.classList.remove("passiveTabContent");
	activeTabContent.classList.add("activeTabContent");
	
	passiveTabContent.classList.remove("activeTabContent");
	passiveTabContent.classList.add("passiveTabContent");
	
	btnAddTrainings.style.display = "inline";
}
