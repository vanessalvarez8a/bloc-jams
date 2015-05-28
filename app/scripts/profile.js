// holds the name of our tab button container for selection later in the function

var tabsContainer = ".user-profile-tabs-container"

var selectTabHandler = function(event) {
   
   
   $(tabsContainer + " li").removeClass('active');
   $(this).parent().addClass('active');
   
   
   $(".tab-pane").hide(); //$(".tab-pane").addClass('hidden');
   $($(this).attr('href')).show(); //$(selectedTabName).removeClass('hidden');
   event.preventDefault();
};

 if (document.URL.match(/\/profile.html/)) {
   $(document).ready(function() {
     var $tabs = $(tabsContainer + " a");
     $tabs.click(selectTabHandler);
     $tabs[0].click();
   });
 }