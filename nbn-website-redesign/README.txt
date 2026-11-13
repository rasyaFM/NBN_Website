NBN WEBSITE REDESIGN
====================

Files
- index.html       Homepage based on the supplied nbn-redesign(1).html, with navigation links updated to the new pages.
- about.html       About Us
- experience.html  Project experience with search and industry filter
- radio.html       Two Way Radio
- radiolink.html   Radio Link
- security.html    Security System
- contact.html     Contact and regional office details; mailto inquiry form
- download.html    Company Profile and Brochure listing
- assets/styles.css  Shared visual system matching the supplied Homepage (navy/blue/white, Inter, rounded cards)
- assets/app.js      Shared responsive navigation, experience filters, mailto form and download placeholder interaction

How to preview
1. Extract the ZIP file.
2. Open index.html in a modern browser.
3. Navigate through the top menu.

Important implementation notes
- Existing Homepage was retained as index.html; only navigation links were updated to connect the new pages.
- Page content was based on the seven NBN URLs supplied in the request. Wording and project names have been kept close to the published source.
- Images on product/about pages reference image URLs hosted by nbn.co.id. If a source image URL changes or blocks hotlinking, replace it with a local image in assets and update the HTML.
- The live Download page lists Company Profile and Brochure, but the retrieved page content did not expose actual PDF URLs. Download buttons are therefore explicitly placeholders. Add the real PDF paths to href attributes once the files are supplied.
- Contact form uses mailto:marketing@nbn.co.id and opens the visitor's default email app; it is not connected to a backend.
- This is a static HTML/CSS/JavaScript front-end prototype. No server, CMS, database or form-processing backend is included.
