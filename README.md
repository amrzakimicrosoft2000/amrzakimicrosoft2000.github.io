# amrzakimicrosoft2000.github.io

Static site for testing the integration between **Microsoft Clarity** and **UET**
(Universal Event Tracking).

- Clarity is installed through **Google Tag Manager** only (no hand-rolled UET on
  the page). UET is expected to be injected by Clarity when MsAds linking is
  enabled on the Clarity project.
- The GTM container is configured to load Clarity from the staging endpoint:
  `https://claritydashboard.asgfalcon-staging.io`.

## Pages
- Home: `index.html`
- About: `pages/about.html`
- Products: `pages/products.html`
- Contact: `pages/contact.html`

## Configuration
The GTM container id used across every page is `GTM-242578999`. Configure that
container to load Clarity from the staging tag host.

## Verifying the integration
1. Open the site in a browser.
2. In DevTools → Network, filter on `clarity` to confirm the tag is loaded via
   GTM, and on `bat.bing.com` to confirm the UET tag injected by Clarity is
   firing.

## Local preview
Open `index.html` in a browser, or serve the folder with any static server.

