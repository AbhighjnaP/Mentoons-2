//function openModal(imagePath) {
   // var modalContainer = document.getElementById("modal-container");
  //  var modalImage = document.getElementById("modal-image");
   // modalImage.src = imagePath;
  //  modalContainer.style.display = "block";
//  }
  
 // function closeModal() {
//    var modalContainer = document.getElementById("modal-container");
 //   modalContainer.style.display = "none";
  //}
  if (localStorage.getItem('modalOpened') !== 'true') {
    openModal('./Images/final logo-01 (1).png');
    localStorage.setItem('modalOpened', 'true');
  }

  function openModal(imageUrl) {
    var modal = document.getElementById("modal-container");
    var modalImage = document.getElementById("modal-image");
    
    // Check if the modal is already open
    if (modal.style.display === "block") {
      // Close the modal if it is already open
      closeModal();
    } else {
      // Open the modal with the specified image
      modalImage.src = imageUrl;
      modal.style.display = "block";
    }
  }
  
  function closeModal() {
    var modal = document.getElementById("modal-container");
    modal.style.display = "none";
  }

  function redirectToForm() {
    window.location.href = "Featured.html";
  }
  
  