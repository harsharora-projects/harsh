// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("btnMachineAllocated");
console.log(btn);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

var btnYes = document.getElementById("btnMachineAllocatedYes");

btnYes.onclick = function(){
	modal.style.display = "none";
	
}

var previewModal = document.getElementById('previewModal');

// Get the button that opens the modal
var btnPreview = document.getElementById("btnPreview");
var introductionText = document.getElementById("introductionText");
console.log(introductionText.value);

// When the user clicks on the button, open the modal 
btnPreview.onclick = function() {
	previewModal.style.display = "block";
	previewText.value = introductionText.value;
}

// Get the <span> element that closes the modal
var spanPreview = document.getElementsByClassName("closePreview")[0];
// When the user clicks on <span> (x), close the modal
spanPreview.onclick = function() {
	previewModal.style.display = "none";
}

var picUploadModal = document.getElementById('picUploadModal');

// Get the button that opens the modal
var btnPicUpload = document.getElementById("profilePic");

// When the user clicks on the button, open the modal 
btnPicUpload.onclick = function() {
	picUploadModal.style.display = "block";
}

// Get the <span> element that closes the modal
var spanPicUpload = document.getElementsByClassName("closePicUpload")[0];
// When the user clicks on <span> (x), close the modal
spanPicUpload.onclick = function() {
	picUploadModal.style.display = "none";
}

