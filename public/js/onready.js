// our functions that will be loaded on page ready

$(document).ready(function() {
    dashboard.dashboardCharts();

  });

  $(document).ready(function() {

    $sidebar = $('.sidebar');
  
    dashboard.initSidebarsCheck();
  
    window_width = $(window).width();
  
    dashboard.checkSidebarImage();
  
  });