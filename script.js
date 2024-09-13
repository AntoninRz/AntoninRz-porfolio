// Skills
function createProgressCircle(circleId, textId, percentage) {
    var circle = new ProgressBar.Circle(circleId, {
      color: '#fff',
      strokeWidth: 6,
      trailWidth: 3,
      easing: 'easeInOut',
      duration: 10000,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#ffab11', width: 6 },
      to: { color: '#ffab11', width: 6 },
      
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
  
        // var value = Math.round(circle.value() * 100);
        // if (value === 0) {
        //   circle.setText('');
        // } else {
        //   circle.setText(value + '%');
        // }
      }
    });
  
    circle.animate(percentage);
  }
  
  createProgressCircle(document.getElementById('skill-circle-1'), 'percentage-text-1', 0.95);
  createProgressCircle(document.getElementById('skill-circle-2'), 'percentage-text-2', 0.90);
  createProgressCircle(document.getElementById('skill-circle-3'), 'percentage-text-3', 0.60);
  createProgressCircle(document.getElementById('skill-circle-4'), 'percentage-text-4', 0.30);
  createProgressCircle(document.getElementById('skill-circle-5'), 'percentage-text-5', 0.25);
  createProgressCircle(document.getElementById('skill-circle-6'), 'percentage-text-5', 0.25);
  createProgressCircle(document.getElementById('skill-circle-7'), 'percentage-text-5', 0.75);
  createProgressCircle(document.getElementById('skill-circle-8'), 'percentage-text-5', 0.65);
  createProgressCircle(document.getElementById('skill-circle-9'), 'percentage-text-5', 0.60);
  createProgressCircle(document.getElementById('skill-circle-10'), 'percentage-text-5', 0.45);
  createProgressCircle(document.getElementById('skill-circle-11'), 'percentage-text-5', 0.45);
  createProgressCircle(document.getElementById('skill-circle-12'), 'percentage-text-5', 0.50);
  createProgressCircle(document.getElementById('skill-circle-13'), 'percentage-text-5', 0.40);
  createProgressCircle(document.getElementById('skill-circle-14'), 'percentage-text-5', 0.30);
  createProgressCircle(document.getElementById('skill-circle-15'), 'percentage-text-5', 0.65);
  
  // Services
  new Swiper('.card-wrapper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });