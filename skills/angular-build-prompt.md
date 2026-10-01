# Build Ohemaa’s Time With Kids in Angular

Act as a senior Angular engineer and UI designer. Implement a complete, polished, responsive website in the current workspace. Write the working project, install compatible dependencies, run it, fix errors and verify the result. Do not stop at a plan or snippets. Use the supplied homepage mockup as the visual reference and the supplied individual artwork as assets. Do not render the mockup screenshot as the website.

## Business and content

Brand: Ohemaa’s Time With Kids.
Audience: parents and guardians in Accra, especially working parents seeking reliable after-school childcare and engaging activities.
About copy: “Ohemaa’s Time With Kids provides safe, engaging, and nurturing after-school childcare support for children while helping parents manage their daily responsibilities. Our activities encourage learning, creativity, good character, and positive social development in a caring environment.”
Phone displayed: 0550794321. Telephone link: tel:+233550794321.
Email: ohemaastimewithkids@gmail.com. Email link: mailto:ohemaastimewithkids@gmail.com.
Location wording: Accra, Ghana. Do not invent a street address, hours, prices, age ranges, staff qualifications, availability, testimonials, statistics or accreditation. Generated illustrations are brand artwork, not photographs of actual staff or children.

## Assets supplied

- design-reference.png: approved desktop composition; visual reference only.
- ohemaa-logo.jpg: original brand logo, preserve lettering, proportions and colours; show on a white circular badge without stretching.
- brand-illustration.jpg: additional character/style reference.
- hero-garden.png: wide text-free garden illustration; characters are on the right and dark foliage on the left.
- activity-learn.png: boy building with blocks, mint background.
- activity-create.png: girl painting, lilac background.
- activity-play.png: children playing together, warm cream background.
- sylva-source.html: supplied authored HTML from Pasted text.txt; inspect it before integrating.

Copy final assets into public/images/ with these readable names. Produce optimized WebP/AVIF variants and responsive sizes where available; retain originals. Preserve subjects and aspect ratio. All headings, copy, icons, navigation and buttons must be actual accessible HTML, never baked into images. No placeholder images or remote hotlinks. Use local assets. If the package does not include a font, obtain and locally host a licensed Lexend font when possible; otherwise use a suitable rounded system fallback and document this.

## Angular implementation

Inspect the workspace first. Preserve any existing project and its conventions. For a new project use a current stable compatible Angular CLI/Angular/TypeScript combination, standalone components, strict typing and SCSS. Verify compatible versions using official Angular documentation. Use Angular templates and native elements; do not use React, JSX, Next.js or the React @designcodeio/threeui component. Use signals for small local UI state and OnPush change detection. Avoid adding a global state library, UI framework or backend for this single-page site.

Suggested components: site-header, hero-section, benefits-strip, activities-section, activity-card, about-section, contact-section and site-footer. Keep content and contact details in one typed configuration object. Use shared CSS variables for spacing, colours, typography and radii. Organize code clearly under src/app with separate component TS, HTML and SCSS files. Supply scripts for development, production build and meaningful checks. Pin dependencies via a lockfile.

## Design direction

Match the supplied mockup closely: an immersive forest-green garden hero, warm cream lower sections, orange pill buttons, rounded typography and restrained purple/cyan accents drawn from the logo. Aim for welcoming, professional childcare branding. Suggested tokens: forest #063D2A, deep green #03291D, cream #FFF8E8, orange #FF7900, purple #7C2FC1, cyan #13B9DF. Adjust for visual fidelity and accessible contrast. Use a centered content container around 1280px, fluid horizontal padding, a generous spacing scale, soft shadows and rounded cards. Do not force the entire webpage to fit inside one viewport; the mockup is a composition reference and real content must breathe.

## Page sections and exact copy

1. Header inside the hero. Logo left; links Home, About, Activities, Contact; orange Enquire Now action right. Section IDs: home, about, activities, contact. On scroll use a readable compact header treatment if sticky. Set scroll offsets so headings are not obscured. Mobile menu must open and close with a native button, aria-expanded and aria-controls; close on link selection and Escape. Support keyboard use and appropriate focus handling.

2. Hero. Desktop text left and illustrated caregiver/children right. Use hero-garden.png as a positioned background or picture with a restrained left-side dark gradient. Eyebrow: “AFTER-SCHOOL CARE IN ACCRA”. H1: “A happy place to learn, play & grow.” Body: “Safe, caring after-school support for your child. Peace of mind for you.” Buttons: Enquire Now scrolls to contact; Explore Activities scrolls to activities. Use readable white type, fluid heading size around 40–64px, sensible line length, and sufficient contrast. Keep faces visible. On narrow screens use a deliberate stacked layout with text above or separated from the right-hand artwork; do not crop everyone out to retain desktop positioning.

3. Benefits. A frosted green panel with three items: Safe & nurturing; Creative learning; Positive friendships. Use small consistent inline SVG icons (shield, lightbulb, people), with icons decorative when the adjacent text conveys meaning. Panel stacks cleanly on mobile. Never present these as independently verified accreditation badges.

4. Activities. Cream background, centered heading “Little moments. Big discoveries.” with short orange accent rule. Three rounded cards in green, lilac and cream tones. Titles and subtitles: “Learn & Discover” / “Engaging learning activities”; “Create & Imagine” / “Art, stories and creativity”; “Play & Connect” / “Friendship and positive social skills”. Use each matching artwork and real HTML text over its quiet left side. At desktop maintain a balanced three-column grid; on smaller screens use two then one column as content allows. Arrow actions must have meaningful labels such as “Enquire about creative activities” and lead to contact with an appropriate enquiry subject, or use a single clearly labelled link per card. Do not create dead decorative buttons or nested interactive controls.

5. About. Heading: “Care for your child. Support for your day.” Include the full About copy provided above. Two-column desktop layout, stacked mobile. A simple leaf icon or reuse of supplied artwork is enough; do not require another image.

6. Contact. Heading: “Let’s talk about your child’s after-school care.” Show telephone, email and Accra, Ghana, with working tel/mailto links. Provide clear Call Us and Email Us actions. Enquire Now lands here. Optional enquiry composer: native labelled fields for parent/guardian name, reply email, optional phone and message. Use Angular reactive forms with trimming, validation and accessible errors. Since no backend is supplied, label its action “Open email app”; construct an encoded mailto draft, explain that it opens the visitor’s email application, and show a copyable email alternative. Never display “Message sent”, silently save personal information, or pretend a submission was delivered. Do not collect children’s names, medical information or documents. No payment/enrolment system, WhatsApp assumption or fake live chat.

7. Footer. Compact forest-green footer with original brand name, useful anchor links, contact details and current year. Do not invent social links or legal policies.

## Sylva / Three.js source handling

The supplied React usage is a host wrapper, not an Angular component. The supplied instructions refer to complete authored HTML, local Three.js, Lexend and two card images. Inspect sylva-source.html for its actual dependencies, scripts, renderer, shaders, interactions and lifecycle; do not assume it is already offline. The provided HTML may contain external asset URLs despite the original skill claiming local assets. Identify those and use legitimate local copies if available. Do not invent missing source, claim byte-exact fidelity without checking, or substitute a different demo while describing it as original Sylva.

Build the childcare page as the Angular DOM described above. Preserve the original Sylva file separately and byte-for-byte. If its genuine scene-only renderer can be isolated without losing essential behaviour, integrate that renderer in a dedicated lazy-loaded browser-only Angular service/component behind the page artwork, using the actual supplied source and documenting the extraction. Do not embed the complete Sylva page with its unrelated text and native controls behind the childcare page. Do not load React merely to host HTML.

An iframe is only appropriate for an explicitly separate original Sylva preview; it is not a substitute for the accessible Angular homepage. If exposing one, use a fixed local URL, meaningful title and least-privilege sandbox permissions required by its actual operation. Do not bypass Angular sanitization for untrusted URLs or add broad forms/popups/download permissions by default.

Prioritize the approved childcare composition. If assets or an appropriate scene entry are unavailable, implement the complete page with the generated hero image and subtle lightweight CSS motion. Report precisely what prevents exact Sylva rendering. A static branded hero is an acceptable working fallback; a generated illustration does not become real 3D geometry. Do not claim that the PNG is an interactive Three.js world.

Any actual Three.js integration must use locally bundled runtime/assets and Angular lifecycle APIs, browser guards for SSR, and run animation outside Angular change detection. Cap pixel ratio, observe container size, pause offscreen and when the tab is hidden, respect prefers-reduced-motion, disable pointer parallax for coarse pointers, handle WebGL/context failure with the hero-image fallback, and dispose animation frames, listeners, observers, geometry, textures, materials and renderer on teardown. Motion must be restrained, decorative and never required for navigation. Avoid global listeners without cleanup.

## Responsive, accessibility and performance requirements

Check 360, 390, 768, 1024 and 1440px widths. No horizontal overflow, clipped email address, text over faces, inaccessible menus or overlapping buttons. Use logical reading order, semantic header/nav/main/section/footer, one H1, useful H2s, a skip link, visible focus indicators and adequately sized touch targets. Support 200% text zoom, keyboard-only use, sufficient text contrast and reduced motion. Background images are decorative; meaningful inline illustrations receive concise alt text, logo alt is the brand name. Never use white text on pale orange/lilac without checking contrast.

Load the hero eagerly with appropriate priority; lazy-load lower images. Set dimensions/aspect ratios to prevent layout shifts. Use responsive image sources, compressed assets and local font-display: swap. Avoid unnecessary dependencies and heavy animation. Do not block content rendering on WebGL. No API keys, secrets, tracking scripts or third-party contact service should be embedded.

Set title to “Ohemaa’s Time With Kids | After-School Care in Accra”. Add a factual meta description, theme colour and logo-derived favicon. Supply Open Graph metadata using a real deployed URL only when known; do not invent a canonical domain. Basic Organization structured data can include only supplied facts; omit unknown addresses and hours. Document any hosting fallback configuration required for Angular routing. Do not publish automatically for this task.

## Verification and final deliverables

Run the production build and relevant lint/type checks when configured. Add meaningful tests for menu state and enquiry composition/validation if those behaviours are implemented. Inspect the rendered site at desktop and mobile widths and correct differences from the mockup. Confirm image paths resolve, navigation scrolls correctly, tel/mailto links are accurate, every action works, reduced-motion behaviour works and there are no console/runtime errors. Clearly distinguish checks actually run from checks that could not be performed.

Deliver the complete Angular source, local optimized assets, dependency lockfile, README with exact prerequisites/install/run/build commands, configuration notes, asset map, animation/fallback explanation and remaining limitations. Include desktop and mobile screenshots if browser tools are available. Explain how I can run the project locally. Complete the work without stopping for routine design choices; ask only if essential missing information blocks implementation.
