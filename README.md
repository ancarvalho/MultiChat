# MultiChat - A Unified Live Chat Client

MultiChat a client-side web application that aggregates live stream chats from Twitch, Kick, and YouTube into a single, customizable, and unified interface. Built with pure HTML, CSS, and  JS.
![MultiChat Screenshot](https://raw.githubusercontent.com/ancarvalho/MultiChat/release/images/image-03.jpeg)

### ✨ Live Demo

Experience MultiChat live on GitHub Pages: **[MultiChat/](https://ancarvalho.github.io/MultiChat/)**

---

## Features

-   **Multi-Platform Support:** View chats from Twitch, Kick, and YouTube simultaneously in one window.
-   **Unified & Customizable Interface:** A clean, Twitch-inspired layout with extensive customization options.
-   **Rich User Experience:**
    -   Official channel-specific subscriber badges for Twitch.
    -   Native emote support for Twitch and Kick.
    -   Dynamic, per-platform color accents in the UI.
-   **Powerful Customization & Filtering:**
    -   Light & Dark themes.
    -   Adjustable font size.
    -   Full-width and centered layout modes.
    -   **Highlighting:** Individually toggle highlights for Moderators, VIPs, and Subscribers.
    -   **Subscriber-Only Mode:** Filter out messages from non-subscribers.
    -   **Client-Side Blocking:** Click any username to block their past and future messages.
-   **Persistent Settings:** All your channels and settings are saved locally in your browser, so your setup is ready to go when you return.
-   **Internationalization:** Full UI translation support, currently available in English (EN) and Portuguese (PT).

---

## ⚠️ Important: Technical Requirements

Because this is a purely client-side application running in a browser, it is subject to modern web security policies. To function correctly, it requires a **CORS Proxy**.

### Why is a Proxy Needed?

Browsers enforce a **Cross-Origin Resource Sharing (CORS)** policy. This security feature prevents a web page (like `ancarvalho.github.io`) from making API requests to a different domain (like `api.twitch.tv` or `www.youtube.com`).

A CORS proxy acts as a middleman. Our application sends its requests to the proxy, which then forwards them to the official platform APIs. The proxy adds the necessary `Access-Control-Allow-Origin` headers to its response, telling the browser that it's safe to read the data.

### How to Set Up a Proxy

You must host your own CORS proxy instance. A popular and easy-to-deploy option is `cors-anywhere`.

1.  Go to the [cors-anywhere GitHub repository](https://github.com/Rob--W/cors-anywhere/).
2.  Click the "Deploy to Heroku" button and follow the instructions to create your own free instance.
3.  Once deployed, Heroku will give you a URL (e.g., `https://your-app-name.herokuapp.com/`).
4.  In MultiChat, go to **Settings**, paste this URL into the **Proxy URL** input field.

Your application should now be able to connect to Twitch and YouTube.

### Advanced Troubleshooting: Header Modification

Some services (or even some public proxies) can be extra strict and may still block requests based on the `Origin` or `Referer` headers sent by the browser. If the proxy alone is not enough, you may need a browser extension to modify these request headers.

1.  **Install a Header Modifier Extension:** Search for an extension like "ModHeader" for your browser.
2.  **Configure the Headers:** For requests going to your proxy URL, you may need to:
    *   **Set the `Origin` header to null.**
    *   **Remove the `Referer` header.**

**This step is needed in case you did not remove this headers on the proxy server, or is using a public available proxy server.**

---

## How to Use

1.  **Visit the Live Demo:** [ancarvalho.github.io/MultiChat/](https://ancarvalho.github.io/MultiChat/)
2.  **Configure Proxy:** Click the "Settings" tab at the bottom and enter the URL of your CORS proxy.
3.  **Add Chats:** Paste the full URL of a Twitch channel, Kick channel, or YouTube live stream into the input box at the top and click "Add Chat".
4.  **Customize:** Use the toggles in the Settings panel to customize the appearance, highlighting, and filtering to your liking.

---
