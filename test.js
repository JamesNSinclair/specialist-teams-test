const marketing = document.querySelector('.marketing');
  const leader = document.querySelector('.leader');
const staff = document.querySelectorAll('.staff');


marketing.onmouseover = function() {
    leader.style.transform = "translateX(-400px)";
        leader.style.transitionDelay = "";
      for (i = 0; i<staff.length; i++) {
        let segments = 800/staff.length;
      let moveValue = segments * (i);
      let staffSegments = moveValue + 'px';
          staff[i].style.transitionDelay = "";
      staff[i].style.visibility = "visible !important";
      staff[i].style.transform = "translateX(" + `${staffSegments}` + ")";
  };
};


marketing.onmouseout = function() {
  leader.style.transitionDelay = "1.05s";
  leader.style.transform = "";
 for (i = 0; i<staff.length; i++) {
staff[i].style.transitionDelay = "0";
 staff[i].style.visibility = "";
 staff[i].style.transform = "";

   };
};
