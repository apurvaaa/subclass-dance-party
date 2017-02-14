var MakeShapeShiftDancer = function(top, left, timeBetweenSteps) {
 
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.shapes = {
    0: 'triangleUp',
    1: 'star',
    2: 'trapezoid',
    3: 'heart'
  };
  this.currShape = null;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  

  // blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
  // };
  
  this.step();
};

MakeShapeShiftDancer.prototype = Object.create(MakeDancer.prototype);

MakeShapeShiftDancer.prototype.constructor = MakeShapeShiftDancer;

MakeShapeShiftDancer.prototype.step = function() {
  MakeDancer.prototype.step.apply(this);
  var shape = this.shapes[Math.floor(Math.random() * 4)];
  this.$node.removeClass(this.currShape);
  this.$node.css({
    'border': 'none',
  });
  this.$node.addClass(shape);
  this.currShape = shape;
};