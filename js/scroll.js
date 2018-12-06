$(function() {

  var hidden = false

   $("#main").mousewheel(function(event) {
     if (!hidden) {
       hidden = true
       $(".arrow").hide()
     }
     if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      this.scrollLeft -= event.deltaY * event.deltaFactor;
      event.preventDefault();
     }
   })
});
