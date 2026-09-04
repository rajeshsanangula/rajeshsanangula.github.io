// @ts-nocheck
"use strict";
const app = document.querySelector('#app');
const certs = [
    ['Professional Integration Developer Certification', 'Valid: July 21, 2025 → July 21, 2027', './assets/certifications/cert-1.jpg'],
    ['Associate EDI for X12 Certification - Legacy', 'Valid: October 29, 2022 → October 29, 2027', './assets/certifications/cert-2.jpg'],
    ['Associate Administrator Certification', 'Valid: August 29, 2025 → August 29, 2030', './assets/certifications/cert-3.jpg'],
    ['Associate Integration Architect Certification', 'Valid: August 30, 2025 → August 30, 2030', './assets/certifications/cert-4.jpg'],
    ['Professional Linux Operational Administrator Certification', 'Valid: September 11, 2025 → September 11, 2027', './assets/certifications/cert-5.jpg'],
    ['Professional API Design Certification', 'Valid: August 26, 2026 → August 26, 2028', './assets/certifications/cert-7.jpg'],
    ['Professional API Management Certification', 'Valid: August 26, 2026 → August 26, 2028', './assets/certifications/cert-8.jpg'],
    ['Associate Integration Developer Certification - Legacy', 'Valid: November 17, 2022 → November 17, 2027', './assets/certifications/cert-9.png']
];
const awards = [
    ['On The Spot Award', '02 Aug 2023', './assets/awards/on-the-spot-2023.jpg'],
    ['Star Team Award', '12 Jan 2024', './assets/awards/star-team-2024.jpg'],
    ['Applause for Team Award', '31 Jan 2024', './assets/awards/applause-team-2024.jpg'],
    ['Fresco Play Miles Award', '11 Jun 2024', './assets/awards/fresco-play-miles-2024.jpg'],
    ['Appreciation — WFO Index', '02 Aug 2024', './assets/awards/appreciation-wfo-2024.jpg'],
    ['Appreciation — RTO Index', '20 Aug 2024', './assets/awards/appreciation-rto-2024.jpg'],
    ['On The Spot (Team) Award', '14 Jan 2025', './assets/awards/on-the-spot-team-2025.jpg'],
    ['Service & Commitment Award — 3 Years', '21 Jul 2025', './assets/awards/service-commitment-3-years-2025.jpg'],
    ['Best Team Award', '14 Aug 2025', './assets/awards/best-team-2025.jpg'],
    ['Hackathon — Spark', '22 Sep 2025', './assets/awards/hackathon-spark-2025.jpg'],
    ['Hackathon — Idea Igniter', '07 Nov 2025', './assets/awards/hackathon-idea-igniter-2025.jpg'],
    ['Xcelerate Warrior', 'Date not shown', './assets/awards/xcelerate-warrior.jpg']
];
app.innerHTML = `
<header class="site-header"><a class="brand" href="#top">RAJESH SANANGULA<span>/</span>PORTFOLIO</a><nav class="nav" aria-label="Primary navigation">
<a href="#profile"><small>01</small>PROFILE</a><a href="#systems"><small>02</small>SYSTEMS</a><a href="#experience"><small>03</small>EXPERIENCE</a><a href="#certifications"><small>04</small>CERTS</a><a href="#contact"><small>05</small>CONTACT</a></nav><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span></button></header>
<main>
<section id="top" class="hero section-pad"><div class="hero-grid"><div class="hero-copy reveal"><div class="eyebrow"><i></i>INTEGRATION ENGINEER PORTFOLIO · BERLIN, GERMANY</div><h1><span>CONNECT</span><span>WHAT</span><em>MATTERS.</em></h1><p class="hero-lede">Boomi Integration Developer · API · iPaaS & Middleware</p><div class="hero-meta"><span>8× BOOMI CERTIFIED</span><span>NEARLY 4 YEARS</span><span>50+ PRODUCTION INTEGRATIONS</span><span>BERLIN · AVAILABLE IMMEDIATELY</span></div><div class="hero-actions"><a class="button button-primary" href="#systems">EXPLORE THE CONTROL PLANE <b>↘</b></a><button class="button button-cv" id="view-cv" type="button">VIEW RESUME <b>↗</b></button></div></div>
<div class="hero-visual reveal"><div class="hero-orbit orbit-a"></div><div class="hero-orbit orbit-b"></div><div class="hero-node node-one">SAP</div><div class="hero-node node-two">API</div><div class="hero-node node-three">KAFKA</div><div class="hero-node node-four">BOOMI</div><div class="person-frame"><div class="person-halo"></div><video class="person-video" src="./assets/media/motion-Picsart-BackgroundRemover.webm" muted autoplay loop playsinline preload="metadata" aria-label="Supplied background-removed walking video"></video><div class="person-vignette"></div></div><div class="person-caption"><span>RAJESH · BERLIN · BOOMI INTEGRATION PORTFOLIO</span><strong>CONNECTING ENTERPRISE SYSTEMS</strong></div></div></div></section>
<section id="profile" class="section section-profile section-pad"><div class="section-kicker reveal"><span>01</span><b>PROFILE / PORTFOLIO</b></div><div class="profile-grid"><div class="reveal"><h2>Integration is<br><em>the connective tissue.</em></h2></div><div class="profile-copy reveal"><p>Dell Boomi Integration Developer with nearly 4 years of hands-on experience designing, developing, deploying and supporting enterprise integration solutions for international clients across EMEA, USA and APAC.</p><p>Experienced with Boomi AtomSphere, API-led integration, EDI/B2B and event-driven architectures across SAP, Salesforce and ERP environments, with hands-on delivery spanning REST/SOAP, XML/JSON, EDI X12, EDIFACT, Kafka, JMS, AS2 and SFTP. Across 50+ production integrations, I have focused on reliable delivery, automation and operational excellence.</p><div class="target-roles"><span>OPEN TO</span><strong>Integration Developer</strong><strong>Integration Engineer</strong><strong>iPaaS Engineer</strong><strong>Middleware Engineer</strong><strong>API Integration Engineer</strong></div><div class="proof-line"><span>BASED IN <strong>BERLIN</strong></span><span>AVAILABLE <strong>IMMEDIATELY</strong></span><span>WORK STATUS <strong>OPPORTUNITY CARD</strong></span><span>ENGLISH <strong>C1</strong></span><span>GERMAN <strong>A2 · IMPROVING</strong></span></div></div></div></section>
<section id="systems" class="section section-systems section-pad"><div class="section-kicker reveal"><span>02</span><b>THE INTEGRATION CONTROL PLANE</b></div><div class="systems-head reveal"><div><h2>One system.<br><em>Many paths.</em></h2></div><p>Trace the flow from SAP into Boomi, through APIs, EDI/B2B and event streams, toward connected enterprise systems. The visual model reflects Rajesh’s production integration work, while the wider Boomi Enterprise Platform context now includes integration, API management, B2B/EDI and event-driven capabilities.</p></div>
<div class="architecture reveal"><svg viewBox="0 0 1000 520" preserveAspectRatio="none" aria-label="Enterprise integration architecture"><defs><linearGradient id="edge" x1="0" x2="1"><stop stop-color="#2ce6ff"/><stop offset="1" stop-color="#8f65ff"/></linearGradient></defs>${[[11, 50, 36, 50], [36, 50, 60, 28], [36, 50, 60, 72], [60, 28, 78, 50], [60, 72, 78, 50], [78, 50, 94, 50]].map((e, i) => `<path class="edge" d="M ${e[0] * 10} ${e[1] * 5.2} C ${(Number(e[0]) + Number(e[2])) * 5} ${e[1] * 5.2}, ${(Number(e[0]) + Number(e[2])) * 5} ${e[3] * 5.2}, ${e[2] * 10} ${e[3] * 5.2}"/>`).join('')}</svg>
${[['SAP', 11, 50, 'SAP ECC / S4HANA, IDocs, SAP BTP and SAP CPI working knowledge.'], ['BOOMI', 36, 50, 'Dell Boomi AtomSphere — core iPaaS platform and certified discipline.'], ['API', 60, 28, 'REST / SOAP orchestration, JSON / XML transformation, Azure APIM.'], ['EDI / B2B', 60, 72, 'ANSI X12, EDIFACT, AS2, SFTP and trading partner onboarding.'], ['EVENTS', 78, 50, 'Confluent Kafka and JMS event streaming for near-real-time delivery.'], ['ENTERPRISE', 94, 50, 'ERP / CRM / analytics destinations and connected enterprise systems.']].map((n, i) => `<button class="arch-node ${i === 1 ? 'active' : ''}" style="left:${n[1]}%;top:${n[2]}%" data-node="${n[0]}" data-detail="${n[3]}"><span class="pulse"></span><b>${n[0]}</b><small>NODE / 0${i + 1}</small></button>`).join('')}
<div class="packet p1"></div><div class="packet p2"></div><div class="packet p3"></div><aside class="node-inspector"><span>ACTIVE NODE</span><strong>BOOMI</strong><p>Dell Boomi AtomSphere — core iPaaS platform and certified discipline.</p></aside><div class="system-footer"><span>PACKET FLOW <b>LIVE</b></span><span>6 NODES / 6 PATHS</span><span>ENTERPRISE INTEGRATION</span></div></div></section>
<section class="section metrics section-pad"><div class="section-kicker reveal"><span>03</span><b>OPERATIONS / PROOF</b></div><div class="metrics-intro reveal"><h2>Production reality,<br><em>measured.</em></h2><p>Selected outcomes from production integration and support work.</p></div><div class="metrics-grid">${[['99.9%', 'UPTIME', '50+ Boomi production integrations', '74'], ['75%', 'ERROR REDUCTION', 'RCA + retry + error-handling frameworks', '57'], ['95%', 'LESS MANUAL INTERVENTION', 'Self-healing and monitoring automation', '65'], ['50+', 'PRODUCTION INTEGRATIONS', 'SAP ECC, Salesforce and ERP systems', '82']].map((m, i) => `<article class="metric reveal" style="--delay:${i * 90}ms"><div class="ring r${i}"><div><strong>${m[0]}</strong><span>${m[1]}</span></div></div><p>${m[2]}</p><div class="metric-line"><i style="width:${m[3]}%"></i></div></article>`).join('')}</div></section>
<section id="experience" class="section experience section-pad"><div class="section-kicker reveal"><span>04</span><b>EXPERIENCE / TCS</b></div><div class="experience-intro reveal"><div><h2>From integration delivery<br><em>to operational resilience.</em></h2><p class="experience-subline">Tata Consultancy Services (TCS) · Systems Engineer · Bangalore, India</p></div><span>07 / 2022 — 04 / 2026</span></div><div class="tcs-overview reveal"><div><span>EMPLOYER</span><strong>Tata Consultancy Services (TCS)</strong></div><div><span>ROLE</span><strong>Systems Engineer</strong></div><div><span>CAREER SCOPE</span><strong>Boomi integration · automation · production support · SRE</strong></div><div><span>CLIENT LANDSCAPE</span><strong>EMEA energy & logistics · Fortune 500 semiconductor</strong></div></div><div class="timeline">
<article class="role reveal"><div class="role-year">07.2024 — 04.2026</div><div class="role-marker">02</div><div class="role-body"><div class="role-top"><span>TCS / CLIENT 2</span><h3>Global LPG Energy &amp; Logistics Provider</h3><p>Integration &amp; Automation Engineer / Site Reliability Engineer</p></div><div class="role-columns"><div><h4>ARCHITECTURE</h4><p>Multi-tenant Boomi environments, SAP → Boomi touchpoints, Kafka-to-Boomi streaming, UNIX monitoring, Azure APIM.</p></div><div><h4>DELIVERY</h4><p>JMS, AS2, SFTP, FTP; SIT/UAT; releases; incident ownership; RCA; runbooks and knowledge transfer for 3 international teams.</p></div><div><h4>RESULT</h4><p><strong>95%</strong> less manual intervention; <strong>10+</strong> legacy integrations migrated; monitoring across <strong>30+</strong> components.</p></div></div><div class="role-stack"><span>BOOMI</span><span>KAFKA</span><span>SAP</span><span>UNIX</span><span>AZURE APIM</span><span>SSO</span></div></div></article>
<article class="role reveal"><div class="role-year">07.2022 — 07.2024</div><div class="role-marker">01</div><div class="role-body"><div class="role-top"><span>TCS / CLIENT 1</span><h3>Fortune 500 Global Semiconductor Leader</h3><p>Boomi Integration Developer &amp; Support Engineer</p></div><div class="role-columns"><div><h4>ARCHITECTURE</h4><p>50+ production integrations across SAP ECC, Salesforce and ERP systems; REST/SOAP orchestration.</p></div><div><h4>DELIVERY</h4><p>EDI X12, EDIFACT, AS2; trading partner onboarding; data transformation; UNIX automation; production support.</p></div><div><h4>RESULT</h4><p><strong>99.9%</strong> uptime; <strong>75%</strong> error-rate reduction; reporting automation saving <strong>5+ hours/week</strong> for 3 EMEA teams.</p></div></div><div class="role-stack"><span>BOOMI</span><span>SAP ECC</span><span>SALESFORCE</span><span>EDI</span><span>REST / SOAP</span><span>UNIX</span></div></div></article></div></section>
<section class="section cases section-pad"><div class="section-kicker reveal"><span>05</span><b>CASE STUDIES / SELECTED</b></div><div class="case-grid">${[['01', 'BOOMI RUNTIME MONITORING & AUTO-HEALING', '30+ components', 'Runtime monitoring, alerting and recovery for enterprise Boomi environments, covering Atoms, Molecules, Nodes and listeners with proactive operations and self-healing automation.', 'Boomi AtomSphere · Boomi Platform APIs · UNIX Shell · Azure APIM · Confluent Kafka'], ['02', 'REAL-TIME KAFKA DATA PIPELINES', 'Near-real-time delivery', 'Kafka-to-Boomi streaming and transformation replacing batch-based processing for analytics systems.', 'Boomi AtomSphere · Confluent Kafka · REST APIs · XML / JSON'], ['03', 'LEGACY INTEGRATION MODERNIZATION', '10+ migrations', 'Reusable Boomi subprocesses for SAP IDoc transformation and modernization of legacy integrations.', 'Boomi AtomSphere · SAP IDocs · iPaaS'], ['04', 'API ORCHESTRATION', '8+ enterprise systems', 'REST/SOAP orchestration with automated transformation and dynamic document handling.', 'REST · SOAP · JSON · XML · Azure APIM'], ['05', 'EDI / B2B INTEGRATION', '5+ trading partners', 'Configured secure B2B document exchange and trading-partner communication profiles using ANSI X12, EDIFACT and AS2.', 'ANSI X12 · EDIFACT · AS2 · SFTP · Boomi']].map(c => `<article class="case reveal"><div class="case-index">${c[0]}</div><div class="case-signal">${c[2]}</div><h3>${c[1]}</h3><p>${c[3]}</p><div class="case-flow"><span>PROBLEM</span><i>→</i><span>ARCHITECTURE</span><i>→</i><span>RESULT</span></div><small>${c[4]}</small></article>`).join('')}</div></section>
<section id="certifications" class="section certs section-pad"><div class="section-kicker reveal"><span>06</span><b>CREDENTIALS / BOOMI</b></div><div class="cert-head reveal"><div><h2>8× certified.<br><em>One integration discipline.</em></h2></div><div class="cert-count"><strong>08</strong><span>BOOMI CERTIFICATIONS</span><small>Eight active certification records, plus one separate SAP-focused Boomi assessment shown below.</small></div></div><div class="credential-carousel reveal"><button class="carousel-arrow prev" type="button" data-carousel="cert-track" data-direction="-1" aria-label="Previous certification">←</button><div class="cert-track" id="cert-track" tabindex="0" aria-label="Certifications, horizontal carousel">${certs.map((c, i) => `<article class="cert-slide"><button class="cert-card ${c[2] ? 'has-artifact' : 'record-only'}" data-image="${c[2]}" data-name="${c[0]}" data-date="${c[1]}" aria-label="${c[2] ? `View ${c[0]} certificate` : c[0]}"><div class="cert-visual">${c[2] ? `<img src="${c[2]}" alt="${c[0]} certificate">` : `<div class="cert-placeholder"><span>CV RECORD</span><strong>Certificate visual not supplied</strong><small>The credential is listed on the CV; no matching image was supplied in the certificate PDF.</small></div>`}</div><div class="cert-info"><div class="cert-num">0${i + 1}</div><div class="cert-seal">b<span>+</span></div><div class="cert-label">BOOMI CREDENTIAL</div><h3>${c[0]}</h3><small>${c[1]}</small><span class="view ${c[2] ? '' : 'muted'}">${c[2] ? 'OPEN CERTIFICATE ↗' : 'CV-LISTED CREDENTIAL'}</span></div></button></article>`).join('')}</div><button class="carousel-arrow next" type="button" data-carousel="cert-track" data-direction="1" aria-label="Next certification">→</button><div class="carousel-status"><span id="cert-status">01 / 08</span><i>SWIPE OR USE ARROWS</i></div></div><div class="assessment-card reveal"><div class="assessment-visual"><img src="./assets/certifications/cert-6.jpg" alt="Installing and Configuring Boomi for SAP Assessment certificate"></div><div class="assessment-copy"><span>ADDITIONAL BOOMI ASSESSMENT</span><h3>Installing and Configuring Boomi for SAP</h3><p><strong>Assessment completed</strong> · Valid June 10, 2026 → June 10, 2031</p><small>This credential is presented separately from the eight certifications because the supplied Boomi document identifies it as an <em>Assessment</em> / Certificate of Completion.</small></div></div></section><section class="section tech section-pad"><div class="section-kicker reveal"><span>07</span><b>THE TECHNOLOGY STACK</b></div><div class="tech-layout"><div class="reveal"><h2>The stack behind<br><em>my integration work.</em></h2><p>Rajesh builds and supports enterprise integrations across iPaaS, APIs, EDI/B2B, event streams and production operations. The readable stack stays text-led; the visual constellation below shows the tools and platforms that shape the work.</p><div class="tech-focus"><span>CORE POSITIONING</span><strong>Boomi + SAP + APIs + Kafka + EDI</strong><small>Integration engineering · iPaaS · middleware · production reliability</small></div><div class="platform-context"><span>CURRENT BOOMI PLATFORM CONTEXT</span><p>Boomi’s current platform positioning brings Integration together with API Management, B2B/EDI, event-driven Event Streams and hybrid deployment capabilities. This portfolio keeps that context grounded in Rajesh’s hands-on Boomi delivery rather than treating platform features as personal experience.</p></div></div><div class="tech-text-grid reveal"><div><span>INTEGRATION</span><p>Dell Boomi AtomSphere · MuleSoft · reusable processes · mappings · subprocesses</p></div><div><span>ENTERPRISE</span><p>SAP ECC / S4HANA · IDocs · SAP BTP · SAP CPI · Salesforce · ERP</p></div><div><span>APIs / DATA</span><p>REST · SOAP · JSON · XML · OData · API Service / Proxy concepts · OAuth 2.0 · Azure APIM</p></div><div><span>EVENTS / MESSAGING</span><p>Confluent Kafka · JMS · event-driven pipelines · asynchronous delivery</p></div><div><span>EDI / B2B</span><p>ANSI X12 · EDIFACT · AS2 · SFTP · trading-partner onboarding</p></div><div><span>OPERATIONS</span><p>UNIX/Linux · shell automation · monitoring · alerting · RCA · ServiceNow</p></div></div></div></section>
<section class="section constellation section-pad"><div class="section-kicker reveal"><span>08</span><b>PORTFOLIO / TECHNOLOGY CONSTELLATION</b></div><div class="constellation-head reveal"><div><h2>The systems and tools<br><em>behind my delivery.</em></h2></div><p>These are the platforms and engineering tools that best represent Rajesh's integration practice. Move across the field to shift the depth; select a node to see how it connects to his work.</p></div><div class="constellation-scene reveal" id="tech-constellation" tabindex="0" aria-label="Interactive technology constellation"><div class="constellation-grid"></div><div class="constellation-orbit orbit-one"></div><div class="constellation-orbit orbit-two"></div><div class="constellation-orbit orbit-three"></div><div class="constellation-center"><span>CORE</span><strong>BOOMI</strong><small>iPaaS / INTEGRATION</small></div>${[['Boomi', 'https://static.cdnlogo.com/logos/b/34/boomi.svg', 'Primary iPaaS platform; production integrations, runtime operations and Boomi API usage.', 'node-j', 'b'], ['SAP', 'https://cdn.simpleicons.org/sap', 'SAP ECC / S4HANA IDoc integration, SAP BTP and SAP CPI working knowledge.', 'node-b', 'SAP'], ['Kafka', 'https://cdn.simpleicons.org/apachekafka', 'Confluent Kafka real-time pipelines and event-driven delivery into Boomi.', 'node-c', 'K'], ['Azure', 'https://icons.iconarchive.com/icons/simpleicons-team/simple/128/microsoft-azure-icon.png', 'Azure services and Azure APIM used in monitoring and integration landscapes.', 'node-d', 'A'], ['Salesforce', 'https://icons.iconarchive.com/icons/simpleicons-team/simple/128/salesforce-icon.png', 'Connected with SAP and ERP environments through production Boomi integrations.', 'node-e', 'S'], ['MuleSoft', 'https://icons.iconarchive.com/icons/simpleicons-team/simple/128/mulesoft-icon.png', 'Listed on the professional integration technology stack.', 'node-f', 'M'], ['Postman', 'https://cdn.simpleicons.org/postman', 'API development and validation tooling in the engineering stack.', 'node-g', 'P'], ['Git', 'https://cdn.simpleicons.org/git', 'Version control in the engineering workflow.', 'node-h', 'G'], ['Linux', 'https://cdn.simpleicons.org/linux', 'UNIX/Linux monitoring, shell automation and operational recovery workflows.', 'node-i', 'L'], ['JavaScript', 'https://cdn.simpleicons.org/javascript', 'Scripting capability used within the wider integration engineering toolkit.', 'node-a', 'JS'], ['Groovy', 'https://cdn.simpleicons.org/apachegroovy', 'Scripting capability in the integration engineering toolkit.', 'node-k', 'Gr'], ['Jira', 'https://cdn.simpleicons.org/jira', 'Delivery and ticketing workflow.', 'node-l', 'J']].map(n => `<button class="constellation-node ${n[3]}" data-tech="${n[0]}" data-context="${n[2]}" aria-label="${n[0]}"><span class="constellation-icon"><img src="${n[1]}" alt="" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><b hidden>${n[4]}</b></span><span>${n[0]}</span></button>`).join('')}<div class="constellation-detail" aria-live="polite"><span>SELECTED SYSTEM</span><strong>Boomi</strong><p>Primary iPaaS platform; production integrations, runtime operations and Boomi API usage.</p></div></div><div class="constellation-legend reveal"><span><i></i>CORE PLATFORM</span><span><i></i>ENTERPRISE SYSTEM</span><span><i></i>EVENT / API</span><span><i></i>ENGINEERING TOOL</span></div></section><section class="section awards section-pad"><div class="section-kicker reveal"><span>09</span><b>AWARDS / RECOGNITION</b></div><div class="awards-head reveal"><h2>Recognition beyond<br><em>the delivery layer.</em></h2><p>Twelve TCS recognition artifacts from Rajesh's supplied awards collection, presented one at a time so every document can be inspected clearly.</p></div><div class="recognition-carousel reveal"><button class="carousel-arrow prev" type="button" data-carousel="award-track" data-direction="-1" aria-label="Previous recognition">←</button><div class="award-track" id="award-track" tabindex="0" aria-label="TCS awards and recognition, horizontal carousel">${awards.map((a, i) => `<article class="award-slide"><button class="award" data-image="${a[2]}" data-name="${a[0]}" data-date="${a[1]}" aria-label="View ${a[0]}"><div class="award-visual"><img src="${a[2]}" alt="${a[0]} — ${a[1]}" loading="lazy"></div><div class="award-info"><div class="cert-num">${String(i + 1).padStart(2, '0')}</div><span>${a[1]}</span><strong>${a[0]}</strong><small>TCS RECOGNITION ARTIFACT</small><em>OPEN FULL VIEW ↗</em></div></button></article>`).join('')}</div><button class="carousel-arrow next" type="button" data-carousel="award-track" data-direction="1" aria-label="Next recognition">→</button><div class="carousel-status"><span id="award-status">01 / 12</span><i>SWIPE OR USE ARROWS</i></div></div></section><section id="contact" class="section contact section-pad"><div class="contact-grid"><div class="reveal"><div class="section-kicker"><span>10</span><b>CONTACT / NEXT CONNECTION</b></div><h2>LET’S CONNECT.<br><em>BUILD WHAT MATTERS.</em></h2><p>Berlin-based Dell Boomi Integration Developer, available immediately for Integration Developer, Integration Engineer, iPaaS Engineer, Middleware Engineer and API Integration roles across Germany. I bring hands-on production delivery across Boomi, SAP, Salesforce, Kafka, APIs and EDI/B2B, with experience spanning development, go-live, support and operational resilience.</p><div class="contact-signal"><i></i><span>OPEN TO THE NEXT INTEGRATION CHALLENGE</span><b>BERLIN · GERMANY</b></div></div><div class="contact-panel reveal"><a class="contact-link" href="mailto:sanangularajesh9@gmail.com" aria-label="Email Rajesh Sanangula"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3.5 5.5h17v13h-17z"/><path d="m4 6 8 6 8-6"/></svg></span><small>EMAIL</small></a><a class="contact-link" href="tel:+4915216189281" aria-label="Call Rajesh Sanangula"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.1 3.8 9.7 6l-1.5 2.7a15.4 15.4 0 0 0 7.1 7.1l2.7-1.5 2.2 2.6c.5.6.4 1.5-.2 2-1 .9-2.5 1.2-3.8.8C9.7 17.6 6.4 14.3 4.3 7.8c-.4-1.3-.1-2.8.8-3.8.5-.6 1.4-.7 2-.2Z"/></svg></span><small>PHONE</small></a><a class="contact-link" href="https://www.linkedin.com/in/rajesh-sanangula-346b77212" target="_blank" rel="noreferrer" aria-label="Open Rajesh Sanangula LinkedIn profile"><span class="contact-icon brand-icon linkedin-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" aria-label="LinkedIn"><path fill="currentColor" d="M5.2 3.6A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.4ZM3.4 9.7h3.6v10.7H3.4V9.7Zm5.8 0h3.4v1.46h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v5.67h-3.55v-5.03c0-1.2-.02-2.74-1.67-2.74-1.68 0-1.94 1.31-1.94 2.65v5.12H9.2V9.7Z"/></svg></span><small>LINKEDIN</small></a><a class="contact-link" href="https://www.xing.com/profile/Rajesh_Sanangula" target="_blank" rel="noreferrer" aria-label="Open Rajesh Sanangula XING profile"><span class="contact-icon brand-icon" aria-hidden="true"><img src="https://cdn.simpleicons.org/xing" alt=""></span><small>XING</small></a></div></div><div class="contact-foot"><span>RAJESH SANANGULA</span><span>BOOMI / iPaaS / API / MIDDLEWARE / KAFKA / SAP</span><span>BERLIN, GERMANY · OPEN TO GERMANY-WIDE ROLES</span></div></section>
</main><div class="pdf-viewer" id="cv-viewer" hidden><div class="pdf-viewer-inner"><button class="close pdf-close" aria-label="Close CV viewer">×</button><div class="pdf-viewer-head"><span>PROTECTED DOCUMENT VIEW</span><strong>Rajesh Sanangula — CV</strong><small>PAGE 01 / 02</small></div><div class="cv-pages" id="cv-pages" aria-label="Resume pages"><img src="./assets/resume-pages/page-1.png" alt="Rajesh Sanangula CV — page 1" draggable="false"><img src="./assets/resume-pages/page-2.png" alt="Rajesh Sanangula CV — page 2" draggable="false"></div></div></div>`;
const canvas = document.querySelector('.ambient-canvas');
const ctx = canvas.getContext('2d');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const particles = Array.from({ length: reduced ? 18 : 56 }, (_, i) => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.5 + .25, speed: Math.random() * .0003 + .00008, phase: i * 1.7 }));
let w = 0, h = 0, dpr = 1, t = 0, raf = 0;
function resize() { const b = canvas.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 1.5); w = Math.max(1, b.width); h = Math.max(1, b.height); canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
function draw() {
    t++;
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w * .72, h * .25, 0, w * .72, h * .25, w * .62);
    g.addColorStop(0, 'rgba(0,217,255,.09)');
    g.addColorStop(.48, 'rgba(109,69,255,.035)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    particles.forEach(p => { const x = p.x * w + Math.sin(t * p.speed * 7 + p.phase) * 16, y = ((p.y + t * p.speed) % 1) * h; ctx.beginPath(); ctx.arc(x, y, p.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(188,232,255,.22)'; ctx.fill(); });
    if (!reduced)
        raf = requestAnimationFrame(draw);
}
resize();
addEventListener('resize', resize, { passive: true });
draw();
addEventListener('pointermove', e => { document.documentElement.style.setProperty('--mx', `${e.clientX}px`); document.documentElement.style.setProperty('--my', `${e.clientY}px`); }, { passive: true });
const observer = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
    }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// Cinematic 3D cursor field for pointer devices. It adds depth without competing with the portfolio content.
if (window.matchMedia('(pointer:fine) and (min-width:761px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const field = document.createElement('div');
    field.className = 'cursor-field';
    field.innerHTML = '<span class=\"cursor-core\"></span><span class=\"cursor-ring\"></span><span class=\"cursor-trail\"></span>'.repeat(1);
    document.body.appendChild(field);
    const core = field.querySelector('.cursor-core');
    const ring = field.querySelector('.cursor-ring');
    const trail = field.querySelector('.cursor-trail');
    let tx = innerWidth / 2, ty = innerHeight / 2, rx = tx, ry = ty, visible = false, raf = 0;
    const draw = () => {
        rx += (tx - rx) * .18;
        ry += (ty - ry) * .18;
        core.style.transform = `translate3d(${tx}px,${ty}px,0)`;
        ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
        trail.style.transform = `translate3d(${rx + (tx - rx) * .55}px,${ry + (ty - ry) * .55}px,0) scale(${visible ? 1 : .2})`;
        trail.style.opacity = visible ? '.42' : '0';
        raf = requestAnimationFrame(draw);
    };
    window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; visible = true; document.body.classList.add('cursor-active'); }, { passive: true });
    window.addEventListener('pointerleave', () => { visible = false; document.body.classList.remove('cursor-active'); });
    window.addEventListener('pointerdown', () => { document.body.classList.add('cursor-press'); setTimeout(() => document.body.classList.remove('cursor-press'), 180); }, { passive: true });
    document.addEventListener('mouseover', e => { if (e.target.closest('a,button'))
        document.body.classList.add('cursor-active'); }, { passive: true });
    document.addEventListener('mouseout', e => { if (e.target.closest('a,button'))
        document.body.classList.remove('cursor-active'); }, { passive: true });
    draw();
    window.addEventListener('beforeunload', () => cancelAnimationFrame(raf), { once: true });
}
const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.querySelectorAll('.arch-node').forEach(node => node.addEventListener('click', () => { document.querySelectorAll('.arch-node').forEach(n => n.classList.remove('active')); node.classList.add('active'); const i = document.querySelector('.node-inspector'); i.querySelector('strong').textContent = node.dataset.node || ''; i.querySelector('p').textContent = node.dataset.detail || ''; }));
document.querySelectorAll('.tech-chip').forEach(chip => chip.addEventListener('click', () => { document.querySelectorAll('.tech-chip').forEach(c => c.classList.remove('active')); chip.classList.add('active'); const detail = document.querySelector('.tech-detail'); detail.querySelector('strong').textContent = chip.querySelector('.tech-name')?.textContent || ''; detail.querySelector('p').textContent = chip.dataset.context || ''; }));
const constellation = document.querySelector('#tech-constellation');
if (constellation) {
    const nodes = constellation.querySelectorAll('.constellation-node');
    const detail = constellation.querySelector('.constellation-detail');
    const positionDetail = node => {
        if (!detail || !node)
            return;
        detail.classList.remove('detail-left', 'detail-right', 'detail-top', 'detail-bottom');
        const sceneRect = constellation.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        const nodeX = nodeRect.left + nodeRect.width / 2 - sceneRect.left;
        const nodeY = nodeRect.top + nodeRect.height / 2 - sceneRect.top;
        const onRight = nodeX > sceneRect.width / 2;
        const onBottom = nodeY > sceneRect.height / 2;
        detail.classList.add(onRight ? 'detail-left' : 'detail-right');
        detail.classList.add(onBottom ? 'detail-top' : 'detail-bottom');
    };
    const selectNode = node => {
        nodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        detail.querySelector('strong').textContent = node.dataset.tech || '';
        detail.querySelector('p').textContent = node.dataset.context || '';
        positionDetail(node);
    };
    let draggedNode = null;
    let dragMoved = false;
    let suppressClick = false;
    const dragState = { offsetX: 0, offsetY: 0 };
    nodes.forEach(node => {
        node.addEventListener('pointerdown', e => {
            if (e.pointerType === 'touch' || e.button !== 0)
                return;
            const r = constellation.getBoundingClientRect();
            const nr = node.getBoundingClientRect();
            draggedNode = node;
            dragMoved = false;
            dragState.offsetX = e.clientX - nr.left;
            dragState.offsetY = e.clientY - nr.top;
            node.classList.add('is-dragging');
            node.setPointerCapture?.(e.pointerId);
            selectNode(node);
            e.preventDefault();
        });
        node.addEventListener('click', e => {
            if (suppressClick) {
                e.preventDefault();
                suppressClick = false;
                return;
            }
            selectNode(node);
        });
    });
    constellation.addEventListener('pointermove', e => {
        const r = constellation.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        constellation.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
        constellation.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`);
        if (draggedNode && e.buttons === 1) {
            const nr = draggedNode.getBoundingClientRect();
            const maxX = r.width - nr.width;
            const maxY = r.height - nr.height;
            const localX = Math.max(8, Math.min(maxX - 8, e.clientX - r.left - dragState.offsetX));
            const localY = Math.max(8, Math.min(maxY - 8, e.clientY - r.top - dragState.offsetY));
            draggedNode.style.left = `${localX}px`;
            draggedNode.style.top = `${localY}px`;
            draggedNode.style.right = 'auto';
            draggedNode.style.bottom = 'auto';
            dragMoved = true;
        }
    }, { passive: true });
    constellation.addEventListener('pointerup', e => {
        if (!draggedNode)
            return;
        draggedNode.classList.remove('is-dragging');
        draggedNode.releasePointerCapture?.(e.pointerId);
        if (dragMoved) {
            suppressClick = true;
            positionDetail(draggedNode);
        }
        draggedNode = null;
    });
    constellation.addEventListener('pointercancel', () => {
        if (draggedNode)
            draggedNode.classList.remove('is-dragging');
        draggedNode = null;
    });
    constellation.addEventListener('pointermove', e => {
        const r = constellation.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        constellation.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
        constellation.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`);
    }, { passive: true });
    constellation.addEventListener('pointerleave', () => { constellation.style.setProperty('--rx', '0deg'); constellation.style.setProperty('--ry', '0deg'); });
    selectNode(constellation.querySelector('.constellation-node'));
}
function openLightbox(button) {
    const image = button.dataset.image;
    if (!image)
        return;
    const name = button.dataset.name || '', date = button.dataset.date || '';
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = `<div class="lightbox-inner"><button class="close" aria-label="Close">×</button><img src="${image}" alt="${name}"><div><b>${name}</b><span>${date}</span></div></div>`;
    document.body.appendChild(box);
    const close = () => box.remove();
    box.addEventListener('click', e => {
        if (e.target === box)
            close();
    });
    box.querySelector('.close').addEventListener('click', close);
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') {
            close();
            document.removeEventListener('keydown', esc);
        }
    });
}
document.querySelectorAll('.cert-card,.award').forEach(b => b.addEventListener('click', () => openLightbox(b)));
function setupCarousel(trackId, statusId) {
    const track = document.getElementById(trackId);
    const status = document.getElementById(statusId);
    if (!track || !status)
        return;
    const slides = Array.from(track.children);
    const total = slides.length;
    const update = () => {
        const width = track.clientWidth || 1;
        const index = Math.max(0, Math.min(total - 1, Math.round(track.scrollLeft / width)));
        status.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    };
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    track.addEventListener('keydown', e => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')
            return;
        e.preventDefault();
        track.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * track.clientWidth, behavior: 'smooth' });
    });
    document.querySelectorAll(`[data-carousel="${trackId}"]`).forEach(button => button.addEventListener('click', () => {
        track.scrollBy({ left: Number(button.dataset.direction || 1) * track.clientWidth, behavior: 'smooth' });
    }));
    update();
}
setupCarousel('cert-track', 'cert-status');
setupCarousel('award-track', 'award-status');
const cvViewer = document.querySelector('#cv-viewer');
const cvButton = document.querySelector('#view-cv');
const closeCv = () => { if (!cvViewer)
    return; cvViewer.hidden = true; document.body.classList.remove('modal-open'); };
const openCv = () => { if (!cvViewer)
    return; cvViewer.hidden = false; document.body.classList.add('modal-open'); };
cvButton?.addEventListener('click', openCv);
cvViewer?.addEventListener('contextmenu', e => e.preventDefault());
cvViewer?.addEventListener('dragstart', e => e.preventDefault());
cvViewer?.addEventListener('click', e => { if (e.target === cvViewer || e.target.classList.contains('pdf-close'))
    closeCv(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape')
    closeCv(); });
