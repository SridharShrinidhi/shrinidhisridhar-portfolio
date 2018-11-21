$(function() {

   $("#main").mousewheel(function(event) {
     if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      this.scrollLeft -= event.deltaY * event.deltaFactor;
      event.preventDefault();
     }
   });

});
