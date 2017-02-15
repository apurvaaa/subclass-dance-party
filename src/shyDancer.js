var MakeShyDancer = function(top, left, timeBetweenSteps) {
 
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.dancePosition = 100;
  //this.keepStill = false;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  

  // blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
  // };
  
  this.$node.addClass('shy');
  this.step();
};

MakeShyDancer.prototype = Object.create(MakeDancer.prototype);

MakeShyDancer.prototype.constructor = MakeShyDancer;

MakeShyDancer.prototype.step = function() {
  MakeDancer.prototype.step.apply(this);
  // if (this.keepStill === false) {

  //   this.dance();
  // }
  //this.beShy();
};
