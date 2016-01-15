var cell = function(){
  var that = Object.create(cell.prototype);
  var alive = false;

  that.swapLife = function(){
    alive = !alive;
  }
  that.kill = function(){
    alive = false;
  }
  that.revive = function(){
    alive = true;
  }
  that.getLife = function(){
    return alive;
  }
  Object.freeze(that);
  return that;
};