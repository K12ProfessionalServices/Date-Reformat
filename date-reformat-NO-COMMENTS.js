<script>
window.addEventListener("DOMContentLoaded", dateReformat);
function dateReformat() {
  var newsDates = document.querySelectorAll("time .label");
  var newsCommentDates = document.querySelectorAll(".post-date");
  var newsPhotoCarouselDates = document.querySelectorAll(".crl-date");
  var eventStartDates = document.querySelectorAll("time .start-date");
  var eventEndDates = document.querySelectorAll("time .end-date");
  var announcementDates = document.querySelectorAll(".announcement > .content-wrap > .no-bullets time");
  var announcementDetail = document.querySelectorAll(".announcementdetail time");
  var teamScheduleDates = document.querySelectorAll(".schedule-date:first-child");
  var allTheDates = [newsDates, newsCommentDates, newsPhotoCarouselDates, eventStartDates, eventEndDates, announcementDates, announcementDetail, teamScheduleDates];
  var options = { year: "numeric", month: "short", day: "numeric" };
  var dateString;
  var thisDate;
    for (var a = 0; a < allTheDates.length; a++){
      var theDates = allTheDates[a];
      if (theDates == newsCommentDates) {
        for(var b = 0; b < theDates.length; b++){
          commentDateToFix = theDates[b].innerHTML;
          fixedCommentDate = commentDateToFix.substring(0, commentDateToFix.indexOf('@'));
          theDates[b].innerHTML = fixedCommentDate;
        }
      }
        for(var c = 0; c < theDates.length; c++){
          dateString = theDates[c].innerHTML;
          thisDate = new Date(dateString);
          theDates[c].innerHTML = thisDate.toLocaleDateString("en-GB", options);
          }
    }
  }
  </script>
