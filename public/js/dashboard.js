
var mobile_menu_initialized = false,
    mobile_menu_visible = 0,
    toggle_initialized = false,
    bootstrap_nav_initialized = false,
    seq = 0,
    delays = 8,
    durations = 500,
    seq2 = 0,
    delays2 = 80,
    durations2 = 500,

    dashboard = {
      checkSidebarImage: function() {
      $sidebar = $('.sidebar');
      image_src = $sidebar.data('image');

      if (image_src !== undefined) {
          sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') ">';
          $sidebar.append(sidebar_container);
        }
      },

      initSidebarsCheck: function() {
        if ($(window).width() <= 991) {
            dashboard.initRightMenu();
        }
      },
  
      // Charts
      dashboardCharts: function() {

        if ($('#dailySalesChart').length != 0 || $('#completedTasksChart').length != 0 || $('#websiteViewsChart').length != 0) {

          // Daily Sales Chart

          dailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
              ]
            };

          dailySalesChartOptions = {
              lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
            }
          ),
            low: 0,
            high: 50, 
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
          };

          var dailySalesChart = new Chartist.Line('#dailySalesChart', dailySalesChart, dailySalesChartOptions);

          dashboard.lineChartAnimation(dailySalesChart);

          // Completed Tasks Chart 
      completedTasksChart = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
            ]
          };

        completedTasksChartOptions = {
            lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
          }),
            low: 0,
            high: 1000, 
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          };

          var completedTasksChart = new Chartist.Line('#completedTasksChart', completedTasksChart, completedTasksChartOptions);

          dashboard.lineChartAnimation(completedTasksChart);

          // Emails Chart  
          var emailsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
              ]
            };
          var emailsChartOptions = {
                axisX: {
                  showGrid: false
                },
                low: 0,
                high: 1000,
                chartPadding: {
                top: 0,
                right: 5,
                bottom: 0,
                left: 0
              }
            };

          var responsiveOptions = [
              ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                  labelInterpolationFnc: function(value) {
                    return value[0];
                  }
                }
              }]
            ];
      
          var websiteViewsChart = Chartist.Bar('#websiteViewsChart', emailsChart, emailsChartOptions, responsiveOptions);
          dashboard.emailsChartAnimation(websiteViewsChart);
        }
      },

    initMinimizeSidebar: function() {

      $('#minimizeSidebar').click(function() {
      var $btn = $(this);

      if (dashboard.misc.sidebar_mini_active == true) {
        $('body').removeClass('sidebar-mini');
        dashboard.misc.sidebar_mini_active = false;
      } else {
        $('body').addClass('sidebar-mini');
        dashboard.misc.sidebar_mini_active = true;
      }

      // simulate the window Resize so the charts will get updated in realtime.
      var simulateWindowResize = setInterval(function() {
        window.dispatchEvent(new Event('resize'));
      }, 180);

      // stop the simulation of Window Resize after the animations are completed
      setTimeout(function() {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
  },

  initRightMenu: debounce(function() {
    $sidebar_wrapper = $('.sidebar-wrapper');

    if (!mobile_menu_initialized) {
      $navbar = $('nav').find('.navbar-collapse').children('.navbar-nav');

      mobile_menu_content = '';

      nav_content = $navbar.html();

      nav_content = '<ul class="nav navbar-nav nav-mobile-menu">' + nav_content + '</ul>';

      navbar_form = $('nav').find('.navbar-form').get(0).outerHTML;

      $sidebar_nav = $sidebar_wrapper.find(' > .nav');

      // insert the navbar form before the sidebar list
      $nav_content = $(nav_content);
      $navbar_form = $(navbar_form);
      $nav_content.insertBefore($sidebar_nav);
      $navbar_form.insertBefore($nav_content);

      $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
        event.stopPropagation();

      });

      // simulate resize so all the charts/maps will be redrawn
      window.dispatchEvent(new Event('resize'));

      mobile_menu_initialized = true;
    } else {
      if ($(window).width() > 991) {
        // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
        $sidebar_wrapper.find('.navbar-form').remove();
        $sidebar_wrapper.find('.nav-mobile-menu').remove();

        mobile_menu_initialized = false;
      }
    }
  }, 200),

    // Line (sales & tasks) chart animation

  lineChartAnimation: function(chart) {

    chart.on('draw', function(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  },

  // emails chart animation

  emailsChartAnimation: function(chart) {

    chart.on('draw', function(data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });
    seq2 = 0;
  },
};

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
