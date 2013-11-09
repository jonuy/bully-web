Crafty.scene('TestScene', function() {
  var testMap = new TestMap();
  testMap.create();

  var player = new PlayerController();
  var craftyPlayer = player.create(2, 2);

  Crafty.viewport.follow(craftyPlayer, 0, 0);
},
function() {

});