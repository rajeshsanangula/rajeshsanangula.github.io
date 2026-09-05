(() => {
"use strict";
// @ts-nocheck
// Rajesh Sanangula Portfolio — immersive spatial layer v4 production spatial edition.
// Additive only: the conventional portfolio remains untouched.
const nodes = [
    { name: 'SAP', p: [-4.8, 1.25, 0], kind: 'enterprise', detail: 'SAP ECC / S4HANA, IDocs, SAP BTP and SAP CPI working knowledge.' },
    { name: 'BOOMI', p: [0, 1.1, 0], kind: 'core', detail: 'Dell Boomi AtomSphere — core iPaaS platform and certified discipline.' },
    { name: 'API', p: [3.1, 2.75, -.2], kind: 'api', detail: 'REST / SOAP orchestration, JSON / XML transformation, Azure APIM.' },
    { name: 'EDI / B2B', p: [3.1, -.55, -.2], kind: 'b2b', detail: 'ANSI X12, EDIFACT, AS2, SFTP and trading partner onboarding.' },
    { name: 'KAFKA', p: [5.55, 1.1, -.25], kind: 'event', detail: 'Confluent Kafka and JMS event streaming for near-real-time delivery.' },
    { name: 'ENTERPRISE', p: [8.15, 1.1, -.25], kind: 'enterprise', detail: 'ERP / CRM / analytics destinations and connected enterprise systems.' }
];
const edges = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5]];
const certImages = ['cert-1.jpg', 'cert-2.jpg', 'cert-3.jpg', 'cert-4.jpg', 'cert-5.jpg', 'cert-7.jpg', 'cert-8.jpg', 'cert-9.jpg'];
const certNames = ['Professional Integration Developer', 'Associate EDI for X12', 'Associate Administrator', 'Associate Integration Architect', 'Professional Linux Operational Administrator', 'Professional API Design', 'Professional API Management', 'Associate Integration Developer'];
const css = document.createElement('style');
css.textContent = `

.immersive-launch{position:relative;overflow:hidden;border:1px solid rgba(102,224,255,.42)!important;background:linear-gradient(135deg,rgba(27,221,255,.12),rgba(120,85,255,.12))!important;box-shadow:0 0 28px rgba(0,217,255,.10),inset 0 0 22px rgba(130,100,255,.06)}
.immersive-launch:after{content:'VR / MR';position:absolute;right:10px;top:6px;font-size:8px;letter-spacing:.16em;opacity:.65}
.spatial-shell{position:fixed;inset:0;z-index:9999;background:#02040b;display:none;overflow:hidden;color:#eef7ff;font-family:inherit}.spatial-shell.open{display:block}.spatial-shell.xr-ar{background:transparent}.spatial-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none}.spatial-ui{position:absolute;inset:0;pointer-events:none;padding:28px;display:flex;flex-direction:column;justify-content:space-between}.spatial-top{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.spatial-brand{font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:#a9eaff}.spatial-title{margin-top:7px;font-size:clamp(25px,3.2vw,52px);font-weight:600;letter-spacing:-.04em;line-height:.95}.spatial-title em{font-style:normal;color:#a989ff}.spatial-status{padding:10px 13px;border:1px solid rgba(150,220,255,.25);background:rgba(5,10,24,.45);backdrop-filter:blur(18px);font-size:9px;letter-spacing:.16em;text-transform:uppercase}.spatial-bottom{display:flex;justify-content:space-between;align-items:flex-end;gap:18px}.spatial-hint{max-width:650px;font-size:11px;line-height:1.65;letter-spacing:.04em;color:rgba(229,242,255,.68)}.spatial-hint strong{color:#fff}.spatial-actions{pointer-events:auto;display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.spatial-actions button{font:inherit;color:#edf8ff;background:rgba(8,14,31,.72);border:1px solid rgba(141,219,255,.28);padding:11px 14px;letter-spacing:.13em;font-size:9px;text-transform:uppercase;cursor:pointer;backdrop-filter:blur(18px)}.spatial-actions button:hover{border-color:rgba(100,230,255,.75);box-shadow:0 0 22px rgba(0,217,255,.13)}.spatial-actions button:disabled{opacity:.35;cursor:not-allowed}.spatial-nodebar{position:absolute;left:50%;bottom:86px;transform:translateX(-50%);display:flex;gap:6px;flex-wrap:wrap;justify-content:center;max-width:min(760px,90vw);pointer-events:auto;z-index:2}.spatial-nodebar button{font:inherit;color:rgba(235,248,255,.82);background:rgba(5,10,24,.56);border:1px solid rgba(141,219,255,.2);padding:7px 9px;font-size:8px;letter-spacing:.11em;text-transform:uppercase;cursor:pointer;backdrop-filter:blur(14px)}.spatial-nodebar button:hover,.spatial-nodebar button:focus-visible{border-color:rgba(100,230,255,.72);outline:none}.spatial-nodebar button[aria-current="true"]{border-color:rgba(100,230,255,.62);box-shadow:0 0 18px rgba(0,217,255,.1)}.spatial-inspector{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(390px,76vw);padding:18px 20px;border:1px solid rgba(142,218,255,.28);background:rgba(5,10,24,.62);backdrop-filter:blur(24px);box-shadow:0 18px 70px rgba(0,0,0,.38);opacity:0;pointer-events:none;transition:.22s ease}.spatial-inspector.show{opacity:1}.spatial-inspector span{font-size:8px;letter-spacing:.18em;color:#8feaff}.spatial-inspector strong{display:block;margin:6px 0 7px;font-size:23px}.spatial-inspector p{margin:0;color:rgba(232,243,255,.72);font-size:11px;line-height:1.6}.spatial-close{pointer-events:auto;position:absolute;right:28px;top:88px;width:42px;height:42px;border:1px solid rgba(145,216,255,.3);background:rgba(5,10,24,.58);color:#fff;font-size:22px;cursor:pointer;backdrop-filter:blur(18px);z-index:2}.spatial-onboarding{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(2,4,11,.72);backdrop-filter:blur(10px);z-index:3;opacity:1;transition:opacity .35s ease}.spatial-onboarding.hide{opacity:0;pointer-events:none}.spatial-card{width:min(620px,92vw);padding:30px;border:1px solid rgba(141,219,255,.3);background:linear-gradient(145deg,rgba(7,14,32,.9),rgba(11,8,28,.84));box-shadow:0 30px 100px rgba(0,0,0,.45),inset 0 0 50px rgba(75,112,255,.05)}.spatial-card-kicker{font-size:9px;letter-spacing:.22em;color:#8feaff}.spatial-card h2{margin:10px 0 12px;font-size:clamp(28px,5vw,54px);line-height:.92;letter-spacing:-.045em}.spatial-card h2 em{font-style:normal;color:#a989ff}.spatial-card p{margin:0 0 20px;color:rgba(232,243,255,.72);font-size:12px;line-height:1.7}.spatial-checks{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 0 20px}.spatial-check{padding:12px;border:1px solid rgba(141,219,255,.16);background:rgba(255,255,255,.025);font-size:8px;line-height:1.5;letter-spacing:.12em;text-transform:uppercase;color:rgba(235,247,255,.72)}.spatial-check b{display:block;color:#fff;margin-bottom:4px}.spatial-ready{pointer-events:auto}.spatial-ready button{font:inherit;color:#eefaff;background:linear-gradient(135deg,rgba(33,210,255,.18),rgba(126,91,255,.2));border:1px solid rgba(111,226,255,.48);padding:13px 18px;letter-spacing:.15em;font-size:9px;text-transform:uppercase;cursor:pointer}.spatial-ready button:hover{box-shadow:0 0 30px rgba(0,217,255,.14)}@media(max-width:760px){.spatial-ui{padding:18px}.spatial-status{display:none}.spatial-bottom{align-items:stretch;flex-direction:column}.spatial-actions{justify-content:flex-start}.spatial-close{right:18px;top:76px}.spatial-nodebar{bottom:118px;max-width:92vw}.spatial-card{padding:22px}.spatial-checks{grid-template-columns:1fr}.spatial-onboarding{align-items:flex-end;padding:14px}}.spatial-nodebar button:focus-visible,.spatial-actions button:focus-visible,.spatial-close:focus-visible,.spatial-ready button:focus-visible{outline:2px solid rgba(111,226,255,.85);outline-offset:3px}@media (prefers-reduced-motion:reduce){.spatial-shell *{animation:none!important;transition:none!important}.spatial-onboarding{backdrop-filter:none}.spatial-nodebar button:hover,.spatial-actions button:hover{box-shadow:none}}
`;
document.head.appendChild(css);
const shell = document.createElement('section');
shell.className = 'spatial-shell';
shell.setAttribute('aria-label', 'Rajesh Sanangula immersive portfolio');
shell.innerHTML = `<canvas class="spatial-canvas"></canvas><button class="spatial-close" type="button" aria-label="Exit immersive mode">×</button><div class="spatial-onboarding" id="spatial-onboarding"><div class="spatial-card"><div class="spatial-card-kicker">RAJESH SANANGULA · IMMERSIVE EDITION</div><h2>ENTER THE <em>INTEGRATION CONTROL PLANE.</em></h2><p>A spatial presentation of the enterprise systems, credentials and career milestones behind Rajesh's Boomi integration work.</p><div class="spatial-checks"><div class="spatial-check"><b>DESKTOP</b>Drag to orbit · click nodes</div><div class="spatial-check"><b>VR</b>Look · point · select</div><div class="spatial-check"><b>MR</b>Passthrough where supported</div></div><div class="spatial-ready"><button type="button" data-action="ready">INITIALIZE SPATIAL SPACE ↗</button></div></div></div><div class="spatial-ui"><div class="spatial-top"><div><div class="spatial-brand">RAJESH SANANGULA · SPATIAL PORTFOLIO</div><div class="spatial-title">CONNECT / <em>WHAT MATTERS.</em></div></div><div class="spatial-status" id="spatial-status">3D SPATIAL MODE</div></div><div class="spatial-bottom"><div class="spatial-hint"><strong>Spatial Integration Control Plane</strong><br>Desktop: drag to orbit and click a system. Headset: look around, use a controller trigger or hand pinch to select. Explore the integration topology, credential gallery and career milestones.</div><div class="spatial-actions"><button type="button" data-action="vr">ENTER VR</button><button type="button" data-action="ar">ENTER MR</button><button type="button" data-action="reset">RESET SPACE</button></div></div></div><nav class="spatial-nodebar" aria-label="Spatial systems">${nodes.map((n, i) => `<button type="button" data-node="${i}" aria-label="Select ${n.name}">${n.name}</button>`).join('')}</nav><aside class="spatial-inspector" id="spatial-inspector"><span>SELECTED SYSTEM</span><strong>BOOMI</strong><p>${nodes[1].detail}</p></aside>`;
document.body.appendChild(shell);
const canvas = shell.querySelector('.spatial-canvas');
const gl = canvas.getContext('webgl', { alpha: true, antialias: true, preserveDrawingBuffer: false });
const statusEl = shell.querySelector('#spatial-status');
const onboarding = shell.querySelector('#spatial-onboarding');
const readyButton = shell.querySelector('[data-action="ready"]');
const inspector = shell.querySelector('#spatial-inspector');
const closeButton = shell.querySelector('.spatial-close');
const nodeButtons = [...shell.querySelectorAll('[data-node]')];
const vrButton = shell.querySelector('[data-action="vr"]');
const arButton = shell.querySelector('[data-action="ar"]');
const resetButton = shell.querySelector('[data-action="reset"]');
if (!gl) {
    vrButton.disabled = true;
    arButton.disabled = true;
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionReduced = reducedMotion.matches;
reducedMotion.addEventListener?.('change', e => { motionReduced = e.matches; });
let mode = 'space', xrSession = null, xrRef = null, xrLayer = null, raf = 0, selected = 1, yaw = 0, pitch = 0, targetYaw = 0, targetPitch = 0, dragging = false, lastX = 0, lastY = 0, textureTimer = 0, ready = false, audioCtx = null, audioGain = null, lastFrame = 0, renderW = 0, renderH = 0, frameCount = 0, fps = 60, fpsWindow = performance.now();
let colorProgram = null, texProgram = null, sphereVBO = null, sphereCBO = null, lineVBO = null, lineCBO = null, quadVBO = null, quadIBO = null;
const certTextures = [];
const labelTextures = {};
const staticBuffers = { starPos: null, starColor: null, spherePos: null, sphereColor: null, sphereIndex: null, quadVerts: null, quadIndex: null };
function matMul(a, b) { const o = new Float32Array(16); for (let c = 0; c < 4; c++)
    for (let r = 0; r < 4; r++)
        o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3]; return o; }
function matPerspective(fov, aspect, n, f) { const q = 1 / Math.tan(fov / 2), nf = 1 / (n - f); return new Float32Array([q / aspect, 0, 0, 0, 0, q, 0, 0, 0, 0, (f + n) * nf, -1, 0, 0, 2 * f * n * nf, 0]); }
function translate(x, y, z) { return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]); }
function scale(x, y = x, z = y) { return new Float32Array([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]); }
function rotateX(a) { const c = Math.cos(a), s = Math.sin(a); return new Float32Array([1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]); }
function rotateY(a) { const c = Math.cos(a), s = Math.sin(a); return new Float32Array([c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]); }
function rotateZ(a) { const c = Math.cos(a), s = Math.sin(a); return new Float32Array([c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]); }
function shader(type, src) { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
    throw new Error(gl.getShaderInfoLog(s)); return s; }
function makeProgram(v, f) { const p = gl.createProgram(); gl.attachShader(p, shader(gl.VERTEX_SHADER, v)); gl.attachShader(p, shader(gl.FRAGMENT_SHADER, f)); gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS))
    throw new Error(gl.getProgramInfoLog(p)); return p; }
function initGL() { if (!gl)
    return; colorProgram = makeProgram(`attribute vec3 aPos;attribute vec4 aColor;uniform mat4 uMVP;uniform mat4 uModel;varying vec4 vColor;void main(){gl_Position=uMVP*uModel*vec4(aPos,1.0);vColor=aColor;}`, `precision mediump float;varying vec4 vColor;void main(){gl_FragColor=vColor;}`); texProgram = makeProgram(`attribute vec3 aPos;attribute vec2 aUV;uniform mat4 uMVP;uniform mat4 uModel;varying vec2 vUV;void main(){gl_Position=uMVP*uModel*vec4(aPos,1.0);vUV=aUV;}`, `precision mediump float;varying vec2 vUV;uniform sampler2D uTex;uniform float uAlpha;void main(){vec4 c=texture2D(uTex,vUV);gl_FragColor=vec4(c.rgb,c.a*uAlpha);}`); sphereVBO = gl.createBuffer(); sphereCBO = gl.createBuffer(); lineVBO = gl.createBuffer(); lineCBO = gl.createBuffer(); quadVBO = gl.createBuffer(); quadIBO = gl.createBuffer(); gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); gl.enable(gl.DEPTH_TEST); }
function sphereGeometry(lat = 12, lon = 18) { const p = [], idx = []; for (let y = 0; y <= lat; y++) {
    const v = y / lat, phi = v * Math.PI;
    for (let x = 0; x <= lon; x++) {
        const u = x / lon, th = u * Math.PI * 2;
        p.push(Math.sin(phi) * Math.cos(th), Math.cos(phi), Math.sin(phi) * Math.sin(th));
    }
} for (let y = 0; y < lat; y++)
    for (let x = 0; x < lon; x++) {
        const a = y * (lon + 1) + x, b = a + lon + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
    } return { p, idx }; }
const sphere = sphereGeometry();
function drawSpheres(vp, time) {
    if (!staticBuffers.spherePos) {
        staticBuffers.spherePos = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.spherePos);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sphere.p), gl.STATIC_DRAW);
        staticBuffers.sphereColor = gl.createBuffer();
        const colors = new Float32Array(sphere.p.length / 3 * 4);
        for (let j = 0; j < sphere.p.length / 3; j++) {
            colors[j * 4] = .08;
            colors[j * 4 + 1] = .72;
            colors[j * 4 + 2] = 1;
            colors[j * 4 + 3] = .82;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.sphereColor);
        gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
        staticBuffers.sphereIndex = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, staticBuffers.sphereIndex);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sphere.idx), gl.STATIC_DRAW);
    }
    gl.useProgram(colorProgram);
    const ap = gl.getAttribLocation(colorProgram, 'aPos'), c = gl.getUniformLocation(colorProgram, 'uMVP'), m = gl.getUniformLocation(colorProgram, 'uModel'), color = gl.getAttribLocation(colorProgram, 'aColor');
    gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.spherePos);
    gl.enableVertexAttribArray(ap);
    gl.vertexAttribPointer(ap, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.sphereColor);
    gl.enableVertexAttribArray(color);
    gl.vertexAttribPointer(color, 4, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, staticBuffers.sphereIndex);
    for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i], active = i === selected, p = .28 + (active ? .10 : 0) + .035 * (motionReduced ? 0 : Math.sin(time * .003 + i));
        const model = matMul(translate(n.p[0], n.p[1], n.p[2]), scale(p));
        gl.uniformMatrix4fv(c, false, vp);
        gl.uniformMatrix4fv(m, false, model);
        gl.drawElements(gl.TRIANGLES, sphere.idx.length, gl.UNSIGNED_SHORT, 0);
        if (active) {
            const pulse = motionReduced ? 1 : (1 + .05 * Math.sin(time * .004));
            const halo = matMul(translate(n.p[0], n.p[1], n.p[2]), matMul(rotateY(motionReduced ? 0 : time * .0007), scale(p * 1.65 * pulse)));
            gl.uniformMatrix4fv(m, false, halo);
            gl.drawElements(gl.TRIANGLES, sphere.idx.length, gl.UNSIGNED_SHORT, 0);
        }
    }
    gl.disableVertexAttribArray(ap);
    gl.disableVertexAttribArray(color);
}
function drawLines(points, colors, vp, modeDraw = gl.LINES) { gl.useProgram(colorProgram); gl.bindBuffer(gl.ARRAY_BUFFER, lineVBO); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.DYNAMIC_DRAW); const ap = gl.getAttribLocation(colorProgram, 'aPos'); gl.enableVertexAttribArray(ap); gl.vertexAttribPointer(ap, 3, gl.FLOAT, false, 0, 0); gl.bindBuffer(gl.ARRAY_BUFFER, lineCBO); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW); const ac = gl.getAttribLocation(colorProgram, 'aColor'); gl.enableVertexAttribArray(ac); gl.vertexAttribPointer(ac, 4, gl.FLOAT, false, 0, 0); gl.uniformMatrix4fv(gl.getUniformLocation(colorProgram, 'uMVP'), false, vp); gl.uniformMatrix4fv(gl.getUniformLocation(colorProgram, 'uModel'), false, scale(1)); gl.drawArrays(modeDraw, 0, points.length / 3); gl.disableVertexAttribArray(ap); gl.disableVertexAttribArray(ac); }
function drawQuad(vp, model, texture, alpha = 1) { if (!texture)
    return; if (!staticBuffers.quadVerts) {
    staticBuffers.quadVerts = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.quadVerts);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-.95, .7, 0, 0, 1, .95, .7, 0, 1, 1, .95, -.7, 0, 1, 0, -.95, -.7, 0, 0, 0]), gl.STATIC_DRAW);
    staticBuffers.quadIndex = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, staticBuffers.quadIndex);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
} gl.useProgram(texProgram); gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.quadVerts); const ap = gl.getAttribLocation(texProgram, 'aPos'), au = gl.getAttribLocation(texProgram, 'aUV'); gl.enableVertexAttribArray(ap); gl.vertexAttribPointer(ap, 3, gl.FLOAT, false, 20, 0); gl.enableVertexAttribArray(au); gl.vertexAttribPointer(au, 2, gl.FLOAT, false, 20, 12); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, staticBuffers.quadIndex); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texture); gl.uniform1i(gl.getUniformLocation(texProgram, 'uTex'), 0); gl.uniform1f(gl.getUniformLocation(texProgram, 'uAlpha'), alpha); gl.uniformMatrix4fv(gl.getUniformLocation(texProgram, 'uMVP'), false, vp); gl.uniformMatrix4fv(gl.getUniformLocation(texProgram, 'uModel'), false, model); gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0); gl.disableVertexAttribArray(ap); gl.disableVertexAttribArray(au); }
function makeTextTexture(text, key) { if (labelTextures[key])
    return labelTextures[key]; const c = document.createElement('canvas'); c.width = 1024; c.height = 256; const x = c.getContext('2d'); x.clearRect(0, 0, c.width, c.height); x.fillStyle = 'rgba(3,9,22,.82)'; x.fillRect(8, 8, 1008, 240); x.strokeStyle = 'rgba(111,226,255,.75)'; x.lineWidth = 3; x.strokeRect(8, 8, 1008, 240); x.font = '600 56px Arial'; x.fillStyle = '#eafaff'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 512, 128); const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); labelTextures[key] = t; return t; }
function loadTextures() { certImages.forEach((file, i) => { const img = new Image(); img.src = `./assets/certifications/${file}`; img.onload = () => { const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); certTextures[i] = t; }; }); }
function stars() { const p = [], c = []; for (let i = 0; i < 1000; i++) {
    const a = i * 2.39996, r = 13 + ((i * 41) % 100) / 100 * 19;
    p.push(Math.cos(a) * r, (Math.sin(i * 1.31) * .38) * r, Math.sin(a) * r - 4);
    const h = i % 23 === 0;
    c.push(h ? .18 : .04, h ? .72 : .14, 1, h ? .75 : .18);
} return { p, c }; }
const star = stars();
function renderWorld(view, proj, time) {
    const vp = matMul(proj, view);
    gl.clearColor(0, 0, 0, mode === 'ar' ? 0 : 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    const starModel = motionReduced ? scale(1) : rotateY(time * .000025);
    gl.useProgram(colorProgram);
    if (!staticBuffers.starPos) {
        staticBuffers.starPos = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.starPos);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(star.p), gl.STATIC_DRAW);
        staticBuffers.starColor = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.starColor);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(star.c), gl.STATIC_DRAW);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.starPos);
    const ap = gl.getAttribLocation(colorProgram, 'aPos');
    gl.enableVertexAttribArray(ap);
    gl.vertexAttribPointer(ap, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, staticBuffers.starColor);
    const ac = gl.getAttribLocation(colorProgram, 'aColor');
    gl.enableVertexAttribArray(ac);
    gl.vertexAttribPointer(ac, 4, gl.FLOAT, false, 0, 0);
    gl.uniformMatrix4fv(gl.getUniformLocation(colorProgram, 'uMVP'), false, vp);
    gl.uniformMatrix4fv(gl.getUniformLocation(colorProgram, 'uModel'), false, starModel);
    gl.drawArrays(gl.POINTS, 0, star.p.length / 3);
    gl.disableVertexAttribArray(ap);
    gl.disableVertexAttribArray(ac);
    const lp = [], lc = [];
    for (const [a, b] of edges) {
        lp.push(...nodes[a].p, ...nodes[b].p);
        for (let j = 0; j < 2; j++)
            lc.push(.10, .70, 1, .62);
    }
    drawLines(lp, lc, vp);
    // animated packets on each integration edge
    const packet = [];
    for (let e = 0; e < edges.length; e++) {
        const A = nodes[edges[e][0]].p, B = nodes[edges[e][1]].p;
        const f = motionReduced ? 0.5 : (time * .00035 + e * .17) % 1;
        packet.push(A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f, A[2] + (B[2] - A[2]) * f);
    }
    const pc = [];
    for (let i = 0; i < packet.length / 3; i++)
        pc.push(.35, .95, 1, 1);
    drawLines(packet, pc, vp, gl.POINTS);
    drawSpheres(vp, time);
    for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const label = makeTextTexture(n.name, `node-${i}`);
        const m = matMul(translate(n.p[0], n.p[1] + .62, n.p[2]), scale(1.15, .29, 1));
        drawQuad(vp, m, label, .88);
    }
    // credential wall, angled around the core
    for (let i = 0; i < certTextures.length; i++) {
        const a = (i - 3.5) * .30;
        const pos = [Math.sin(a) * 6.6, 3.55 + Math.cos(a) * .28, -3.9 + Math.cos(a) * 1.1];
        const m = matMul(translate(pos[0], pos[1], pos[2]), matMul(rotateY(-a), scale(1.18, 1.42, 1)));
        drawQuad(vp, m, certTextures[i], .93);
        const title = makeTextTexture(certNames[i], `cert-${i}`);
        const tm = matMul(translate(pos[0], pos[1] - 1.02, pos[2] + .03), matMul(rotateY(-a), scale(1.18, .23, 1)));
        drawQuad(vp, tm, title, .84);
    }
    // career rail and milestone beacons
    const rail = [[-6, -2.35, -1.3], [-1, -2.35, -1.3], [4, -2.35, -1.3]];
    drawLines([...rail[0], ...rail[1], ...rail[1], ...rail[2]], [.2, .72, 1, .5, .2, .72, 1, .5, .2, .72, 1, .5, .2, .72, 1, .5], vp);
    for (let i = 0; i < 3; i++) {
        const title = makeTextTexture(i === 0 ? '2022 · TCS' : i === 1 ? '2024 · EMEA CLIENT' : '2026 · SYSTEMS ENGINEER', `career-${i}`);
        const p = rail[i];
        const m = matMul(translate(p[0], p[1] + .52, p[2]), scale(1.45, .29, 1));
        drawQuad(vp, m, title, .78);
    }
}
function cameraView() { return matMul(rotateX(pitch), rotateY(yaw)); }
function resize(force = false) { const d = Math.min(devicePixelRatio || 1, mode === 'space' ? 1.75 : 1.5); const w = Math.max(1, Math.floor(canvas.clientWidth * d)), h = Math.max(1, Math.floor(canvas.clientHeight * d)); if (force || w !== renderW || h !== renderH) {
    canvas.width = w;
    canvas.height = h;
    renderW = w;
    renderH = h;
    gl.viewport(0, 0, w, h);
} }
function frame(time = performance.now()) { if (!shell.classList.contains('open') || mode !== 'space')
    return; resize(); if (!motionReduced) {
    const dt = Math.min(.05, Math.max(.001, (time - lastFrame) / 1000 || .016));
    const ease = 1 - Math.pow(.001, dt);
    yaw += (targetYaw - yaw) * ease;
    pitch += (targetPitch - pitch) * ease;
} lastFrame = time; frameCount++; if (time - fpsWindow > 1000) {
    fps = Math.round(frameCount * 1000 / (time - fpsWindow));
    frameCount = 0;
    fpsWindow = time;
    statusEl.textContent = `3D SPATIAL MODE · ${fps} FPS`;
} const w = canvas.clientWidth, h = canvas.clientHeight; const proj = matPerspective(Math.PI / 3, w / Math.max(h, 1), .05, 100); const view = matMul(translate(0, 0, -16), cameraView()); renderWorld(view, proj, time); raf = requestAnimationFrame(frame); }
function playSpatialCue() { if (motionReduced)
    return; try {
    audioCtx ??= new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended')
        audioCtx.resume();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    const p = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;
    o.frequency.value = 520 + selected * 18;
    o.type = 'sine';
    g.gain.setValueAtTime(.0001, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(.016, audioCtx.currentTime + .012);
    g.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + .16);
    if (p) {
        p.pan.value = Math.max(-.75, Math.min(.75, (nodes[selected].p[0] / 8)));
        o.connect(g).connect(p).connect(audioCtx.destination);
    }
    else {
        o.connect(g).connect(audioCtx.destination);
    }
    o.start();
    o.stop(audioCtx.currentTime + .18);
}
catch { } }
function showInspector(i) { selected = i; const n = nodes[i]; targetYaw = Math.atan2(n.p[0], Math.max(6, Math.abs(n.p[2]) + 6)); targetPitch = Math.max(-.28, Math.min(.28, -n.p[1] * .045)); playSpatialCue(); inspector.classList.add('show'); inspector.setAttribute('aria-label', `Selected system: ${nodes[i].name}. ${nodes[i].detail}`); inspector.querySelector('strong').textContent = nodes[i].name; inspector.querySelector('p').textContent = nodes[i].detail; nodeButtons.forEach((b, j) => b.setAttribute('aria-current', j === i ? 'true' : 'false')); clearTimeout(textureTimer); textureTimer = setTimeout(() => inspector.classList.remove('show'), 5000); }
function openSpace() { mode = 'space'; ready = false; onboarding.classList.remove('hide'); shell.classList.add('open'); document.body.style.overflow = 'hidden'; shell.classList.remove('xr-ar'); statusEl.textContent = 'SPATIAL ENVIRONMENT · READY'; resize(); if (!raf)
    frame(); }
function closeSpace() { if (xrSession)
    xrSession.end(); shell.classList.remove('open', 'xr-ar'); document.body.style.overflow = ''; cancelAnimationFrame(raf); raf = 0; ready = false; }
function quatForward(q) { return [2 * (q.x * q.z + q.w * q.y), 2 * (q.y * q.z - q.w * q.x), 1 - 2 * (q.x * q.x + q.y * q.y)]; }
function chooseByRay(origin, dir) { let best = -1, bd = 999; nodes.forEach((n, i) => { const v = [n.p[0] - origin.x, n.p[1] - origin.y, n.p[2] - origin.z]; const along = v[0] * dir[0] + v[1] * dir[1] + v[2] * dir[2]; if (along < 0)
    return; const px = v[0] - dir[0] * along, py = v[1] - dir[1] * along, pz = v[2] - dir[2] * along; const d = Math.hypot(px, py, pz); if (d < bd) {
    bd = d;
    best = i;
} }); if (best >= 0 && bd < 1.0)
    showInspector(best); }
function onXRSelect(e) { if (!xrRef)
    return; const pose = e.frame.getPose(e.inputSource.targetRaySpace, xrRef); if (!pose)
    return; chooseByRay(pose.transform.position, quatForward(pose.transform.orientation)); }
async function startXR(kind) { if (!ready) {
    onboarding.classList.add('hide');
    ready = true;
} const xr = navigator.xr; if (!xr) {
    statusEl.textContent = 'WEBXR UNAVAILABLE · 3D SPACE ACTIVE';
    return;
} try {
    const type = kind === 'vr' ? 'immersive-vr' : 'immersive-ar';
    if (!(await xr.isSessionSupported(type))) {
        mode = 'space'; ready = false; shell.classList.remove('xr-ar'); onboarding.classList.remove('hide');
        statusEl.textContent = `${kind === 'vr' ? 'VR' : 'MR'} NOT AVAILABLE · 3D SPACE ACTIVE`;
        resize(); if (!raf) frame();
        return;
    }
    if (xrSession)
        await xrSession.end();
    await gl.makeXRCompatible();
    const optional = ['local-floor', 'bounded-floor', 'hand-tracking'];
    const init = { requiredFeatures: ['local-floor'], optionalFeatures: kind === 'ar' ? [...optional, 'dom-overlay'] : optional };
    if (kind === 'ar')
        init.domOverlay = { root: shell };
    try { xrSession = await xr.requestSession(type, init); } catch (firstError) { delete init.requiredFeatures; xrSession = await xr.requestSession(type, init); }
    xrLayer = new XRWebGLLayer(xrSession, gl, { alpha: kind === 'ar', antialias: true });
    xrSession.updateRenderState({ baseLayer: xrLayer });
    try {
        xrRef = await xrSession.requestReferenceSpace('local-floor');
    }
    catch {
        xrRef = await xrSession.requestReferenceSpace('local');
    }
    mode = kind;
    shell.classList.toggle('xr-ar', kind === 'ar');
    onboarding.classList.add('hide');
    statusEl.textContent = kind === 'vr' ? 'IMMERSIVE VR · SPATIAL ROOM' : 'IMMERSIVE MR · PASSTHROUGH';
    cancelAnimationFrame(raf);
    raf = 0;
    xrSession.addEventListener('end', () => { xrSession = null; xrRef = null; xrLayer = null; mode = 'space'; shell.classList.remove('xr-ar'); statusEl.textContent = '3D SPATIAL MODE · DESKTOP'; if (shell.classList.contains('open'))
        frame(); });
    xrSession.addEventListener('select', onXRSelect);
    xrSession.addEventListener('selectstart', () => { });
    xrSession.addEventListener('visibilitychange', () => { statusEl.textContent = xrSession.visibilityState === 'visible' ? (kind === 'vr' ? 'IMMERSIVE VR · SPATIAL ROOM' : 'IMMERSIVE MR · PASSTHROUGH') : 'IMMERSIVE SESSION PAUSED'; });
    xrSession.requestAnimationFrame(xrFrame);
}
catch (e) {
    console.error(e);
    mode = 'space'; ready = false; shell.classList.remove('xr-ar'); onboarding.classList.remove('hide');
    statusEl.textContent = 'IMMERSIVE SESSION FAILED · 3D SPACE ACTIVE';
    resize(); if (!raf) frame();
} }
function xrFrame(t, frameObj) { if (!xrSession || !xrLayer || !xrRef)
    return; const pose = frameObj.getViewerPose(xrRef); if (pose) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, xrLayer.framebuffer);
    for (const view of pose.views) {
        const vp = xrLayer.getViewport(view);
        gl.viewport(vp.x, vp.y, vp.width, vp.height);
        renderWorld(view.transform.inverse.matrix, view.projectionMatrix, t);
    }
    // Keep the XR render loop alive. Without scheduling the next frame, the
    // immersive session can appear as a blank/black view after entering VR/MR.
    if (xrSession) xrSession.requestAnimationFrame(xrFrame);
} xrSession.requestAnimationFrame(xrFrame); }
canvas.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; lastY = e.clientY; });
window.addEventListener('pointerup', () => dragging = false);
canvas.addEventListener('pointermove', e => { if (!dragging)
    return; targetYaw += (e.clientX - lastX) * .006; targetPitch = Math.max(-.7, Math.min(.7, targetPitch + (e.clientY - lastY) * .004)); lastX = e.clientX; lastY = e.clientY; });
canvas.addEventListener('click', e => { const r = canvas.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, w = canvas.clientWidth, h = canvas.clientHeight; let best = -1, bd = 58; nodes.forEach((n, i) => { const s = 420 / (420 + n.p[2] + 16), px = w / 2 + n.p[0] * s, py = h / 2 - n.p[1] * s, d = Math.hypot(px - x, py - y); if (d < bd) {
    bd = d;
    best = i;
} }); if (best >= 0)
    showInspector(best); });
readyButton.addEventListener('click', () => { ready = true; onboarding.classList.add('hide'); statusEl.textContent = '3D SPATIAL MODE · DESKTOP'; resize(); if (!raf)
    frame(); });
vrButton.addEventListener('click', () => startXR('vr'));
arButton.addEventListener('click', () => startXR('ar'));
resetButton.addEventListener('click', () => { yaw = 0; pitch = 0; targetYaw = 0; targetPitch = 0; showInspector(1); });
nodeButtons.forEach((b, i) => b.addEventListener('click', () => showInspector(i)));
closeButton.addEventListener('click', closeSpace);
window.addEventListener('keydown', e => { if (!shell.classList.contains('open'))
    return; if (e.key === 'Escape')
    closeSpace(); if (e.key === 'ArrowRight') {
    showInspector((selected + 1) % nodes.length);
} if (e.key === 'ArrowLeft') {
    showInspector((selected - 1 + nodes.length) % nodes.length);
} });
window.addEventListener('resize', () => { if (shell.classList.contains('open') && mode === 'space')
    resize(); });
const launch = document.createElement('button');
launch.className = 'button button-primary immersive-launch';
launch.type = 'button';
launch.textContent = 'ENTER IMMERSIVE EXPERIENCE ↗';
const actions = document.querySelector('.hero-actions');
if (actions)
    actions.appendChild(launch);
launch.addEventListener('click', openSpace);
canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); cancelAnimationFrame(raf); raf = 0; statusEl.textContent = 'GRAPHICS CONTEXT LOST · PLEASE REOPEN IMMERSIVE MODE'; });
window.addEventListener('beforeunload', () => { try {
    audioCtx?.close();
}
catch { } });
initGL();
if (gl)
    loadTextures();

})();
