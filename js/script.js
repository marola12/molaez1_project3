// QUESTIONS BUTTON
function init() {
  const btn = document.getElementById("questions-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nmolaez1@hawk.illinoistech.edu");
    });
  }
}


function initMap() {
  // feature 1 
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 21.1619, lng: -86.8515 },
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.HYBRID, 
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    streetViewControl: true,
    zoomControl: true,
    fullscreenControl: true
  });

  // feature 2 
  const marker1 = new google.maps.Marker({
    position: { lat: 21.1355, lng: -86.7477 },
    map: map,
    title: "Hotel Zone Beaches",
    animation: google.maps.Animation.DROP
  });

  // feature 3 
  const marker2 = new google.maps.Marker({
    position: { lat: 21.0957, lng: -86.7731 },
    map: map,
    title: "Xcaret Park",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" // custom icon color
    }
  });

  // feature 4
  const marker3 = new google.maps.Marker({
    position: { lat: 21.0423, lng: -86.8742 },
    map: map,
    title: "Downtown Cancun"
  });

  // feature 5 
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="padding: 10px; max-width: 200px;">
        <h3 style="margin: 0; color: #E74C3C;">🏖️ Hotel Zone Beaches</h3>
        <p style="margin: 8px 0;">Beautiful crystal-clear water and white sand beaches where I spent most of my vacation!</p>
        <small>Click other markers to learn more</small>
      </div>
    `
  });

  // feature 6
  const infoWindow2 = new google.maps.InfoWindow({
    content: `
      <div style="padding: 10px; max-width: 200px;">
        <h3 style="margin: 0; color: #2980B9;">🐬 Xcaret Park</h3>
        <p style="margin: 8px 0;">Amazing eco-park with wildlife, rivers, and cultural shows about Mexican history!</p>
      </div>
    `
  });

  // feature 7
  const infoWindow3 = new google.maps.InfoWindow({
    content: `
      <div style="padding: 10px; max-width: 200px;">
        <h3 style="margin: 0; color: #16A085;">🛍️ Downtown Cancun</h3>
        <p style="margin: 8px 0;">Great place to experience local culture and try authentic Mexican food!</p>
      </div>
    `
  });

  
  marker1.addListener("click", () => {
    infoWindow.open(map, marker1);
  });

  marker2.addListener("click", () => {
    infoWindow2.open(map, marker2);
  });

  marker3.addListener("click", () => {
    infoWindow3.open(map, marker3);
  });

  
  setTimeout(() => {
    infoWindow.open(map, marker1);
  }, 2000);

  console.log("");
}

document.addEventListener("DOMContentLoaded", init);


