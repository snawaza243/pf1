// menu button
// sideNav
// menuBtn
function showOffMenu () {
  var menuBtn = document.getElementById('menuBtn');
  var sideNav = document.getElementById('sideNav');

  sideNav.style.right == '-250px';

  if (sideNav.style.right == '-250px') {
    sideNav.style.right = '0';
    sideNav.style.transform = 'translate(5px, 0)';
    sideNav.style.transition= '0.3s';
  } else {
    sideNav.style.right = '-250px';
  }
}

// menuBtn.onclick = function () {...}

// smooth scroll with menu button
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})
