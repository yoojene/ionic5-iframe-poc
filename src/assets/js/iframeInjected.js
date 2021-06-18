export function injectedScript() {
  console.log('THIS IS BEING INJECTED VIA THE PLUGIN');

  const [logo] = document.getElementsByClassName('landingIcon');

  if (logo) {
    console.log('found logo');
    logo.style.background = 'red';
  }

  // loop forever, wait for animation frame
  requestAnimationFrame(injectedScript);
}
