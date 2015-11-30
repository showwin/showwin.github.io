$(document).ready(function() {
  $('div.card').on({
    "mouseenter": function(e){
      $(this).find('.card-reveal').velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeOutQuad'});
    },
    "mouseleave": function(e){
      $(this).find('.card-reveal').velocity({translateY: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
    }
  });
});
