function changePage(p){
    switch(p){
        case 0:
            document.getElementById("mainframe").src="main.html";
            break;
        case 1:
            document.getElementById("mainframe").src="history.html";
            break;
        case 3:
            document.getElementById("mainframe").src="online.html";
            break;
        case 4:
            document.getElementById("mainframe").src="newold.html";
            break;
        case 5:
            document.getElementById("mainframe").src="basic.html";
            break;
        case 6:
            document.getElementById("mainframe").src="geo.html";
            break;
        case 7:
            document.getElementById("mainframe").src="extra.html";
            break;
        case 10:
            document.getElementById("mainframe").src="OX.html";
            break;
        case 11:
            document.getElementById("mainframe").src="line.html";
            break;
        case 12:
            document.getElementById("mainframe").src="selection.html";
            break;
        case 20:
            document.getElementById("mainframe").src="photo.html";
            break;
        case 21:
            document.getElementById("mainframe").src="project.html";
            break;
        case 22:
            document.getElementById("mainframe").src="contact.html";
            break;
    }
}
window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  };
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }