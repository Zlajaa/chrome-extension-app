# Chrome Simple Extension

This is a minimal Chrome extension that reproduces a communication bug:  
the background script stops receiving messages from the content script and popup when an additional service worker is registered and becomes inactive.

## How It Works

- The **content script** sends a message to the background script and logs the response to the console.
- The **background script** listens for messages from both the content script and the popup, responding with `{ status: "ok" }`.
- The **popup script** sends a message to the background script and displays the response in the popup UI.

## Initial Setup

1. **Install** the extension.
2. Click the extension icon in the browser toolbar.
3. In the popup, click the **Register SW** button.
4. Click the **Send (Background)** button.  
   A response from the background script should appear below the button.

## Steps to Reproduce the Bug

1. Navigate to [`chrome://serviceworker-internals/`](chrome://serviceworker-internals/).
2. Locate the extension’s service worker, named:  
   `chrome-extension://{extension-id}/additional-service-worker`.
3. If the service worker is not running, click **Start**, then **Stop** to manually trigger it.
4. Return to the popup and click **Send (Background)** again to test communication.
5. At this point, the background script should stop responding to messages from both the popup and the content script.
