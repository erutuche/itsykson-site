function switchToCard(id) {
  $(".card").hide();
  $("[data-card='" + id + "']").show();
  $(".menu-button").removeClass('selected');
  $(".menu-button[data-card-id='" + id + "']").addClass("selected");
}

function switchCardByHash() {
  var hash = location.hash.replace('#','');
  if (hash) {
    switchToCard(hash);
  } else {
    switchToCard('about');
  }
}

$(function() {
  switchCardByHash();

  window.onpopstate = function(event) {
    switchCardByHash();
  };
})

$(function() {
  var x = $(".mobile-menu-button");
  x.click(function() {
    $(".menu-button").toggleClass("menu-button-visible");
  })
  var y = $(".menu-button");
  y.click(function() {
    y.removeClass("menu-button-visible");
  })
})