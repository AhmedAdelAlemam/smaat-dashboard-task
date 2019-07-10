// activate collapse right menu when the windows is resized
$(window).resize(function() {
    dashboard.initSidebarsCheck();
  
    // reset the seq for charts drawing animations
    seq = seq2 = 0;
  
    setTimeout(function() {
      dashboard.dashboardCharts();
    }, 500);
  });
  