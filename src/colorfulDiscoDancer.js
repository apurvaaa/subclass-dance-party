var MakeColorfulDiscoDancer = function(top, left, timeBetweenSteps) {
 
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.colors = ['red', 'yellow', 'green', 'blue', 'purple'];

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

MakeColorfulDiscoDancer.prototype = Object.create(MakeDancer.prototype);

MakeColorfulDiscoDancer.prototype.constructor = MakeColorfulDiscoDancer;

MakeColorfulDiscoDancer.prototype.step = function() {
  MakeDancer.prototype.step.apply(this);
  var color = this.colors[Math.floor(Math.random() * this.colors.length)]; 
  this.$node.css({
    'border': '10px solid ' + color,
  });
};