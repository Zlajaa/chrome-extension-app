const registerSwButton = document.querySelector('#registerSW');
const sendMessageButton = document.querySelector('#sendMessage');
const backgroundMessage = document.querySelector('#backgroundMessage');

registerSwButton.addEventListener('click', async (evt) => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('service-worker.js', {scope: 'additional-service-worker'})
    console.log('Service Worker registered with scope:', registration.scope);
    registerSwButton.textContent = 'Service Worker Registered';
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    registerSwButton.textContent = 'Registration Failed';
  }
});

sendMessageButton.addEventListener('click', async (evt) => {
  const { status } = await chrome.runtime.sendMessage({ name: 'example_popup', method: 'send' });

  backgroundMessage.innerHTML = `Response: ${status}`;
})
