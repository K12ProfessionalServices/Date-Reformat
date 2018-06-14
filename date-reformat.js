<script>
/*this script reformats dates.*/

/*creates an Event Listener that executes the dateReformat
function when the DOM content has loaded*/
window.addEventListener("DOMContentLoaded", dateReformat);

/*The dateReformat function loops through the allTheDates array and stores
each NodeList in theDates. It then loops through all the items in each
NodeList and stores each individual date in thisDate, then converts it
to the format specified in the arguments of the toLocalDateString method.*/
function dateReformat() {
  /*Each of the following variables stores a NodeList of every instance
  of a CSS selector on a page. All the following CSS selectors are
  ones that are associated with dates in OnMessage.*/
  var newsDates = document.querySelectorAll("time .label");
  var newsCommentDates = document.querySelectorAll(".post-date");
  var newsPhotoCarouselDates = document.querySelectorAll(".crl-date");
  var eventStartDates = document.querySelectorAll("time .start-date");
  var eventEndDates = document.querySelectorAll("time .end-date");
  var announcementDates = document.querySelectorAll(".announcement > .content-wrap > .no-bullets time");
  var announcementDetail = document.querySelectorAll(".announcementdetail time");
  var teamScheduleDates = document.querySelectorAll(".schedule-date:first-child");
  /*allTheDates is an array of all the variables we just created*/
  var allTheDates = [newsDates, newsCommentDates, newsPhotoCarouselDates, eventStartDates, eventEndDates, announcementDates, announcementDetail, teamScheduleDates];
  /*options for displaying date.change value of month
  from long to short for abbreviated month name*/
  var options = { year: "numeric", month: "short", day: "numeric" };
  var dateString;
    /*thisDate stores each individual date during each execution of the loop*/
  var thisDate;
    for (var a = 0; a < allTheDates.length; a++){
      var theDates = allTheDates[a];
      /*if the dates are News Detail page comment dates,we remove the
      time (starting at '@') from the date before reformatting*/
      if (theDates == newsCommentDates) {
        for(var b = 0; b < theDates.length; b++){
          commentDateToFix = theDates[b].innerHTML;
          //thisDate stores each individual News Detail comment date during loop
          fixedCommentDate = commentDateToFix.substring(0, commentDateToFix.indexOf('@'));
          theDates[b].innerHTML = fixedCommentDate;
        }
      }
        for(var c = 0; c < theDates.length; c++){
          dateString = theDates[c].innerHTML;
          //thisDate stores each individual date during loop
          thisDate = new Date(dateString);
          /*Language tag syntax is defined by the IETF's BCP 47. Learn more about
          language tags here - https://www.w3.org/International/questions/qa-choosing-language-tags*/
          theDates[c].innerHTML = thisDate.toLocaleDateString("en-GB", options);
          }
    }
  }
  </script>
