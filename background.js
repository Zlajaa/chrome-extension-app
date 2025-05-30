chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  console.log("Received message", request);

  if (request.name !== 'example_content-script' && request.name !== 'example_popup') {
    console.log(`[Background] Unknown request from "${request.name}".`);
    return;
  }

  switch (request.method) {
    case 'send': {
      sendResponse({ status: 'ok' });
      break;
    }
    default: {
      sendResponse({ status: 'unknown' });
      break;
    }
  }
})
