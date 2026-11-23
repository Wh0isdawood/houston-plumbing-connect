# Houston Plumbing Connect — website starter

This is a responsive, multi-page static website starter for a plumbing lead-generation/referral brand.

## Included
- Homepage
- Services index + 6 individual service pages
- Service areas index + 6 city pages (Houston, Pasadena, Pearland, Sugar Land, Katy, Spring)
- About, Contact, Privacy Policy and Terms pages
- Responsive layout, navigation, enquiry form, SEO titles and meta descriptions
- No paid theme, plugin, hosting account or domain is required to preview the site

## Important before publishing
This is a fictional starter brand, not a verified plumbing contractor. It intentionally does not claim that the operator is licensed, insured, locally established, employs technicians, or provides emergency dispatch. Keep the referral disclosure unless the business model changes and the statements are accurate.

Do not use fabricated reviews, fake addresses, fake phone numbers, fake license numbers, or claims such as "licensed and insured" unless verified for the actual provider. Confirm all Texas legal and advertising requirements for your lead-generation/referral model.

## Preview locally
Open `index.html` in a browser, or upload the folder to a static host.

## Free hosting
Recommended: Cloudflare Pages (static hosting).
1. Create a free Cloudflare account.
2. Create a GitHub repository and upload the contents of this folder.
3. In Cloudflare, go to Workers & Pages → Create → Pages → Connect to Git.
4. Select the repository and deploy. For a plain HTML site, no build command is needed; set the output directory to `/` (or the repository root as prompted).
5. The free `*.pages.dev` address can be used while testing. Connect a purchased domain later.

Alternative: drag-and-drop deployment using a static hosting provider that supports direct uploads. Check its current free-plan terms before relying on it.

## Configure lead form delivery
The form is intentionally not connected to a live inbox. Do not advertise or publish it as working until configured.
1. Choose a form delivery provider that supports your needs and review its privacy/data-processing terms. FormSubmit is one possible simple option; a free plan may have limits or verification requirements.
2. Follow the provider's current instructions to create your endpoint.
3. Edit `assets/config.js` and set `formEndpoint` to the endpoint supplied by that provider, for example `https://formsubmit.co/your-inbox@example.com`.
4. Submit a test enquiry and verify it arrives. Check spam folders and verify consent wording.
5. Add your actual business/operator contact details and update the Privacy Policy to disclose the form provider and data sharing.

## Configure phone calls
Edit `assets/config.js`:
- `phoneDisplay`: the number to display after you add a phone display component.
- `phoneLink`: digits in international format, e.g. `+17135551234`.

The current starter uses contact-form CTAs and does not contain a fabricated phone number. Add a real number you control or are authorized to use. If using tracking numbers, disclose call recording where required and comply with applicable consent laws.

## Customization
- Brand text: edit the HTML files and replace "Houston Plumbing Connect".
- Colors and layout: edit `assets/style.css`.
- Services/cities: edit the corresponding HTML pages and add internal links.
- SEO: each page has a title and meta description; add unique, genuinely useful content before scaling city pages. Avoid thin or near-duplicate location pages.
- Add a sitemap.xml and robots.txt before a full SEO launch; generate these after final URLs/domains are chosen.

## Not included
- WordPress / Elementor editing
- A backend or database
- A live form inbox
- Call tracking or call recording
- CRM / lead routing automation
- Verified provider network, reviews or credentials
