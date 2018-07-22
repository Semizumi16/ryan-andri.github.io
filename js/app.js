/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 50,
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#6f8cf7"
      },
      "shape": {
        "type": "circle",
        "value": "#ff4949"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.4,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 28,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#919191",
        "opacity": 0.8,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "bubble": {
          "distance": 300,
          "size": 5,
          "duration": 1,
          "opacity": 5,
          "speed": 5
        },
        "repulse": {
          "distance": 300
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  }
);
