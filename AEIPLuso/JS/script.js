window.onload = function () {
    Particles.init({
      selector: '.background',
      maxParticles: 100,
      connectParticles: 'true',
      speed: 0.75,
      minDistance: 500,
      sizeVariations: 5,
      color: ['#FBF8CF', '#BC0021', '#A7D18F', '#6E5299', '#89CFF0', '#FFAA96'],
      out_mode: 'bounce'
    })
  
    var lastTimeOnFrame = 0;
    Particles.pJS.fn.modes.pushParticles = function (nb, pos) {
      Particles.modes.pushParticles.call(this, nb, pos);
      lastTimeOnFrame = Date.now();
    };
    Particles.pJS.fn.modes.removeParticles = function (nb) {
      Particles.modes.removeParticles.call(this, nb);
      if (Date.now() - lastTimeOnFrame < 3000) {
        for (var i = 0; i < nb; i++) {
          this.particles.push(this.particles.slice(-1)[0]);
        }
      }
    }
  };