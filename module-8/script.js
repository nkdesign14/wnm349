let textWrapper = document.querySelector('.h1anim');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.h1anim .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.h1anim',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });