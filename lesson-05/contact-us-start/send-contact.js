// wait for the page to fully load
$(document).ready(function() {
	// wait for the send button to be clicked
	$("#send-contact").click(function() {
		// get the data from the form 
		var services = [];
		$('.services:checked').each(function(index) {
			services[index] = $(this).val();
		});
		var contact = {customername: $("#customername").val() , customeremail: $("#customeremail").val() , services: services };
		$.ajax({
			type:"POST",
			url:'send-contact.php',
			data:contact
			}).done(function() {
			  alert("Your contact information has been sent, we will call you soon.");
			});	
	});
	
	
});