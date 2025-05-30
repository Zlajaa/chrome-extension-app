
(async () => {
  console.log('[Example App] Sending...');
  const { status } = await chrome.runtime.sendMessage({ name: 'example_content-script', method: 'send' });

  console.log(`[Example App] Background response ${status}`);
})();
