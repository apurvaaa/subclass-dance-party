describe('blinkyDancer', function() {

  var shyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shyDancer = new MakeShyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shyDancer, 'step');
      expect(shyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shyDancer.step.callCount).to.be.equal(2);
    });
  });

  it('should have a have a function beshy', function() {
    expect(shyDancer.$node.hasClass('shy')).to.be.true;
  });

  it('should add lineUp class on invocation', function() {
    shyDancer.lineUp();
    expect(shyDancer.$node.hasClass('lineUp')).to.be.true;
  });

});
