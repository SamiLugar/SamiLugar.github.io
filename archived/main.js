$(document).ready(function(){
  var $nav_toggle = $('button[data-target="#menuNav"]');
  var toggle_attr = $nav_toggle.attr('data-toggle');
  var $menu_nav = $('#menuNav');
  $nav_toggle.on('click', function(){
    $menu_nav.toggleClass(toggle_attr);
  });
});
