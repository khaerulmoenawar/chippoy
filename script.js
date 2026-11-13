/* November the 2nd - same love, smoother and lighter */
"use strict";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
const rand = (a, b) => a + Math.random() * (b - a);

const memoryDetails = {
  "first-date": {
    title: "The Beginning of Our Love Story",
    content: `
            <p>November 2, 2023 will forever be the day our beautiful love story began. I remember the mix of nervous excitement and anticipation as I prepared to meet you, little knowing this evening would become the foundation of our forever.</p>
            <p>That magical afternoon at GBK Urban Forest witnessed the start of something extraordinary. As the golden hour embraced us, we found ourselves opening our hearts beneath the canopy of trees. The way your smile caught the fading sunlight, the gentle rhythm of our conversation, and the unspoken understanding that grew between us - every moment felt like destiny unfolding.</p>
            <p>Walking together as dusk settled around us, I realized I had found not just someone special, but my person. The connection we discovered that evening felt like coming home to a place I never knew existed, yet had been searching for my entire life.</p>
        `,
  },
  "my-birthday": {
    title: "My Birthday Celebration at the Aquarium",
    content: `
            <p>December 5, 2023 (the day is December 7th honestly) became our own personal festival of joy as we celebrated my birthday in the most magical way possible. The aquarium transformed into our underwater wonderland, where colorful fish danced around us like living confetti celebrating your special day.</p>
            <p>I'll never forget the priceless moment you gifted me that analog camera - and how we managed to ruin the film roll in the most hilariously typical us fashion that very same day! That became our most extravagantly wonderful date, filled with laughter that echoed through the ocean tunnels.</p>
            <p>Our first and only motorcycle adventure through Jakarta's chaotic streets, though utterly exhausting, became our romantic comedy - two souls navigating the city's heartbeat while finding our rhythm together. That day taught me that the most precious gifts are the memories we create, not the things we possess.</p>
        `,
  },
  "our-cafe-spot": {
    title: "Our First Cafe Sanctuary in Bogor",
    content: `
            <p>February 7, 2024 marked our discovery of what would become our sacred space - Jiwan Cafe. That first visit felt like uncovering a hidden gem where time slowed down just for us, where every corner seemed designed for whispered secrets and shared dreams.</p>
            <p>I remember the warmth of our hands clasped across the table, the way the afternoon light painted your features, and how our conversations flowed as smoothly as the drink we enjoyed. In that cozy sanctuary, we built another layer of our story.</p>
            <p>That cafe became more than just a place - it transformed into the backdrop of our growing love, witness to our laughter, our dreams, and the quiet comfort of simply being together. Every visit since has felt like adding another beautiful chapter to our ongoing romance.</p>
        `,
  },
  "your-birthday": {
    title: "Your First Birthday Celebration as My Love",
    content: `
            <p>July 28, 2024 (well 29 July to be precised) became a testament to love's creativity when resources were scarce but affection overflowed. Your first birthday celebration during our relationship challenged me to find magic in simplicity, and what emerged was more beautiful than any store-bought gift.</p>
            <p>The cake that my mother and sister baked with such heartfelt effort - though not quite bakery-perfect - represented something purer: the welcoming of you into our family fold. Their slightly lopsided creation became a symbol of how many hearts you had touched.</p>
            <p>Our adventure at Bogor Botanical Gardens, punctuated by sudden rain showers that we have to wait there until the rain stopped, became our liquid sunshine memory. Getting drenched together felt like nature's blessing on our journey, washing us clean for the beautiful year ahead.</p>
        `,
  },
  "our-graduation": {
    title: "Our Graduation Day & Family Encounters",
    content: `
            <p>September 19, 2024 marked not just our academic achievement but the beautiful merging of our worlds. As we stood there in our graduation gowns, we were celebrating more than degrees - we were honoring the journey we had navigated together.</p>
            <p>The profound moment you met my families, and I first met you mother, felt like the official weaving of our lives together. These weren't just first meetings; they were the beginning of family bonds that would strengthen and grow alongside our love.</p>
            <p>That day symbolized how far we had come - not just as individuals pursuing dreams, but as partners building a future. Our families' proud smiles reflected the joy we had found in each other, making the achievement doubly sweet.</p>
        `,
  },
  "one-year": {
    title: "One Year Anniversary - Surviving and Thriving",
    content: `
            <p>November 2, 2024 marked our first anniversary - a milestone that proved our love could withstand any storm. Looking back on those 366 days, I marveled at how we navigated emotional rollercoasters, survived near-breakups, and emerged stronger than ever.</p>
            <p>Our journey through that first year was like a dramatic novel filled with intense emotions, passionate reconciliations, and hard-won understanding. The challenges we faced didn't break us; they forged our bond in fire, teaching us the depth of our commitment to each other.</p>
            <p>Amidst all the emotional turbulence, we somehow managed to achieve our academic goals together, proving that our love could be both our greatest challenge and our strongest motivation. That first anniversary wasn't just about celebrating time - it was about honoring the resilience we built and the love that refused to give up, even when things got tough.</p>
        `,
  },
  "second-year": {
    title: "Growing Through Distance - Our Separate Battles",
    content: `
            <p>Our second year unfolded differently than our passionate first - it became a season of quiet support and individual growth. While I navigated the turbulent waters of career searching, you embarked on your own challenging quest for scholarship opportunities abroad.</p>
            <p>The distance between us grew not just emotionally but physically, with fewer meetings and simpler conversations. Yet, in that space, we discovered a new depth to our love - one that didn't need constant drama or grand gestures to survive. Our support became subtler but no less profound: late-night video calls of encouragement, understanding when plans changed, and celebrating small victories together or even us doing our own things but still spend it together.</p>
            <p>I'll always cherish our first movie date during this period - a simple evening that felt like an oasis in our busy lives. Sitting there in the dark theater, your hand in mine, we forgot about resumes and applications and just existed together. The shared laughter during the comedy scenes and the comfortable silence during the dramatic moments reminded me that despite our separate struggles, we were still very much together in what mattered most.</p>
            <p>This chapter taught us that love isn't always about being in the same place physically or even emotionally every moment. Sometimes, it's about trusting that the other person is fighting their own battles while still holding space for you in their heart. Our separate journeys didn't pull us apart; they showed us that our bond could withstand the pressure of real-world challenges.</p>
            <p>Through job rejections and scholarship applications, through quiet weeks and brief meetings, we learned to love each other not just in the grand romantic moments, but in the mundane, difficult spaces of adult life. And somehow, that felt even more meaningful than all the dramatic declarations of our first year.</p>
        `,
  },
  today: {
    title: "Two Years of Growing Together",
    content: `
            <p>Today, as we celebrate two years together, my heart overflows with gratitude for every sunrise we've witnessed as partners. These 731 days have been a beautiful tapestry woven with threads of growth, understanding, and ever-deepening love.</p>
            <p>This second year has brought a different rhythm to our relationship - fewer dramatic storms, but new opportunities for growth. Though we've spent less physical time together than in our passionate first year, this has become our unexpected blessing.</p>
            <p>The distance has taught us that love isn't measured by constant proximity, but by the unwavering connection that survives separation. It has proven that our bond can evolve, adapt, and strengthen through changing circumstances.</p>
            <p>We've learned that love matures not by eliminating challenges, but by facing them with wisdom earned from our history together. The improvements we continue to make aren't repairs to something broken, but enhancements to something already beautiful.</p>
            <p>As I look toward our future, I see not perfection, but promise - the beautiful, ongoing journey of two souls choosing each other day after day, growing together while allowing space for individual blossoming. Here's to the love that has learned, adapted, and flourished - and to all the beautiful evolution still to come.</p>
        `,
  },
};

const galleryAssets = {
  galleryTrigger: [
    { type: "image", src: "kw1.jpg" },
    { type: "image", src: "kw2.jpg" },
    { type: "image", src: "kw3.jpg" },
    { type: "image", src: "kw4.jpg" },
    { type: "image", src: "kw5.jpg" },
    { type: "image", src: "kw6.jpg" },
  ],
  galleryTrigger2: [
    { type: "image", src: "mr1.jpg" },
    { type: "image", src: "mr2.jpg" },
    { type: "image", src: "mr3.jpg" },
    { type: "image", src: "mr4.jpg" },
    { type: "image", src: "mr5.jpg" },
    { type: "image", src: "mr6.jpg" },
  ],
  galleryTrigger3: [
    { type: "image", src: "lv1.jpg" },
    { type: "image", src: "lv2.jpg" },
    { type: "image", src: "lv3.jpg" },
    { type: "image", src: "lv4.jpg" },
    { type: "image", src: "lv5.jpg" },
    { type: "image", src: "lv6.jpg" },
  ],
  galleryTrigger4: [
    { type: "image", src: "pb1.jpg" },
    { type: "image", src: "pb2.jpg" },
    { type: "image", src: "pb3.jpg" },
    { type: "image", src: "pb4.jpg" },
    { type: "image", src: "pb5.jpg" },
    { type: "image", src: "pb6.jpg" },
  ],
  galleryTrigger5: [
    { type: "video", src: "vid1.mp4" },
    { type: "video", src: "vid2.mp4" },
    { type: "video", src: "vid3.mp4" },
    { type: "video", src: "vid4.mp4" },
    { type: "video", src: "vid5.mp4" },
    { type: "video", src: "vid6.mp4" },
  ],
  galleryTrigger6: [
    { type: "image", src: "fn1.jpg" },
    { type: "image", src: "fn2.jpg" },
    { type: "image", src: "fn3.jpg" },
    { type: "image", src: "fn4.jpg" },
    { type: "image", src: "fn5.jpg" },
    { type: "image", src: "fn6.jpg" },
  ],
  "all-memories": [],
};

(function () {
  const all = [];
  Object.keys(galleryAssets).filter((k) => k !== "all-memories").forEach((k) => all.push(...galleryAssets[k]));
  galleryAssets["all-memories"] = all;
})();

/* ---------- ambient background (hearts + soft orbs), cheap and paused when not visible ---------- */
function createHearts() {
  const box = $("#heartsContainer");
  if (!box || REDUCE) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < (FINE ? 26 : 12); i++) {
    const h = document.createElement("div");
    h.className = "heart"; h.textContent = "\u2764"; h.setAttribute("aria-hidden", "true");
    h.style.cssText = `left:${rand(0, 100)}%;font-size:${rand(10, 30)}px;opacity:${rand(0.15, 0.65)};animation-duration:${rand(12, 22)}s;animation-delay:${-rand(0, 20)}s`;
    frag.appendChild(h);
  }
  box.appendChild(frag);
}
function createAnimatedBackground() {
  const box = $("#animatedBg");
  if (!box || REDUCE) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < (FINE ? 9 : 5); i++) {
    const el = document.createElement("div");
    const size = rand(120, 300);
    el.className = "bg-element";
    el.style.cssText = `width:${size}px;height:${size}px;left:${rand(0, 95)}%;animation-duration:${rand(28, 50)}s;animation-delay:${-rand(0, 40)}s`;
    frag.appendChild(el);
  }
  box.appendChild(frag);
}
function initAmbientPause() {
  const root = document.documentElement;
  document.addEventListener("visibilitychange", () => root.classList.toggle("paused", document.hidden));
  const hdr = $("header");
  if (hdr && "IntersectionObserver" in window)
    new IntersectionObserver(([e]) => hdr.classList.toggle("offscreen", !e.isIntersecting)).observe(hdr);
  if ("IntersectionObserver" in window) {
    const so = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("offscreen", !e.isIntersecting)), { rootMargin: "120px" });
    $$("section").forEach((s) => so.observe(s));
  }
}

/* ---------- theme ---------- */
function initThemeToggle() {
  const btn = $("#themeToggle"), root = document.documentElement, meta = $('meta[name="theme-color"]');
  const apply = (t) => {
    root.setAttribute("data-theme", t);
    const i = btn.querySelector("i");
    if (i) i.className = t === "pink" ? "fas fa-moon" : "fas fa-sun";
    if (meta) meta.content = t === "pink" ? "#fff9fb" : "#121212";
  };
  let saved = "pink";
  try { saved = localStorage.getItem("anniversaryTheme") || "pink"; } catch (e) {}
  apply(saved);
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "pink" ? "dark" : "pink";
    const flip = () => { apply(next); try { localStorage.setItem("anniversaryTheme", next); } catch (e) {} };
    if (!document.startViewTransition || REDUCE) return flip();
    const r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    const rad = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.classList.add("theme-vt");
    const t = document.startViewTransition(flip);
    t.ready.then(() => root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${rad}px at ${x}px ${y}px)`] },
      { duration: 750, easing: "cubic-bezier(0.19,1,0.22,1)", pseudoElement: "::view-transition-new(root)" })).catch(() => {});
    t.finished.finally(() => root.classList.remove("theme-vt"));
  });
}

/* ---------- custom heart cursor: transform only, runs only while it moves ---------- */
function initCustomCursor() {
  if (!FINE) return;
  const c = $(".cursor"), f = $(".cursor-follower");
  if (!c || !f) return;
  let mx = 0, my = 0, fx = 0, fy = 0, raf = 0, last = 0;
  const loop = (now) => {
    const k = 1 - Math.exp(-Math.min(now - last, 50) / 90);
    last = now; fx += (mx - fx) * k; fy += (my - fy) * k;
    c.style.translate = `${mx}px ${my}px`;
    f.style.translate = `${fx}px ${fy}px`;
    raf = Math.abs(mx - fx) > 0.1 || Math.abs(my - fy) > 0.1 ? requestAnimationFrame(loop) : 0;
  };
  document.addEventListener("mousemove", (e) => {
    if (!raf) { last = performance.now(); if (!document.documentElement.classList.contains("cursor-on")) { fx = e.clientX; fy = e.clientY; document.documentElement.classList.add("cursor-on"); } raf = requestAnimationFrame(loop); }
    mx = e.clientX; my = e.clientY;
  }, { passive: true });
  document.addEventListener("mousedown", (e) => {
    c.classList.add("clicked");
    const ring = document.createElement("div");
    ring.className = "click-effect";
    ring.style.translate = `${e.clientX - 10}px ${e.clientY - 10}px`;
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 500);
  });
  document.addEventListener("mouseup", () => c.classList.remove("clicked"));
  const sel = 'a, button, [role="button"], .gallery-item, .love-lock, .note, .promise, .memory-content, .popup-gallery-item img, .popup-gallery-item video, .image-lightbox-media';
  let on = false;
  document.addEventListener("mouseover", (e) => {
    const hit = !!(e.target.closest && e.target.closest(sel));
    if (hit !== on) { on = hit; c.style.transform = hit ? "scale(1.5)" : ""; }
  }, { passive: true });
}

/* ---------- particles (Web Animations, no timers, no layout) ---------- */
function spawn(text, style, frames, opts) {
  const el = document.createElement("div");
  el.className = "fx-particle"; el.setAttribute("aria-hidden", "true"); el.textContent = text;
  Object.assign(el.style, style);
  document.body.appendChild(el);
  const a = el.animate(frames, Object.assign({ fill: "both" }, opts));
  a.onfinish = () => el.remove();
}
function palette() {
  const cs = getComputedStyle(document.documentElement);
  return [cs.getPropertyValue("--primary").trim() || "#ff6b8b", cs.getPropertyValue("--accent").trim() || "#ffacc7", "#ff6b8b", "#8db600", "#ffcc00", "#00b4d8", "#ff6b6b"];
}
function heartBurst(x, y) {
  const c = palette();
  for (let i = 0; i < 15; i++)
    spawn("\u2764", { color: c[i % 2], fontSize: "20px" }, [
      { transform: `translate(${x}px,${y}px) scale(1)`, opacity: 1 },
      { transform: `translate(${x + rand(-50, 50)}px,${y - 100}px) scale(0.5)`, opacity: 0 }], { duration: 2000, delay: i * 100, easing: "ease-out" });
  for (let i = 0; i < 10; i++)
    spawn("", { width: "10px", height: "10px", background: "#fff", borderRadius: "50%" }, [
      { transform: `translate(${x + rand(-50, 50)}px,${y + rand(-50, 50)}px) scale(1)`, opacity: 1 },
      { transform: `translate(${x + rand(-50, 50)}px,${y + rand(-50, 50)}px) scale(2)`, opacity: 0 }], { duration: 1000, delay: i * 150, easing: "ease-out" });
}
function heartConfetti(n = 36) {
  const c = palette();
  for (let i = 0; i < n; i++) {
    const x = rand(0, innerWidth);
    spawn("\u2764", { color: c[Math.floor(rand(0, c.length))], fontSize: rand(15, 35) + "px" }, [
      { transform: `translate(${x}px,-30px) rotate(${rand(0, 360)}deg)`, opacity: 1 },
      { transform: `translate(${x + rand(-80, 80)}px,${innerHeight + 30}px) rotate(${rand(360, 720)}deg)`, opacity: 0 }], { duration: rand(2000, 5000), delay: i * 110, easing: "ease-in" });
  }
}

/* ---------- love lock ---------- */
function initLoveLock() {
  const lock = $("#loveLock");
  if (!lock) return;
  lock.setAttribute("role", "button"); lock.tabIndex = 0; lock.setAttribute("aria-pressed", "false");
  lock.setAttribute("aria-label", "Love lock: press to open or close");
  const toggle = () => {
    const open = lock.classList.toggle("unlocked");
    lock.setAttribute("aria-pressed", String(open));
    if (!open || REDUCE) return;
    const r = lock.getBoundingClientRect();
    heartBurst(r.left + r.width / 2, r.top + r.height / 2);
    heartConfetti();
  };
  lock.addEventListener("click", toggle);
  lock.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
}

/* ---------- music ---------- */
function initMusicPlayer() {
  const btn = $("#playPauseBtn"), info = $(".music-info");
  const audio = new Audio("November the 2nd.aac");
  audio.loop = true;
  const set = (playing, text) => {
    btn.innerHTML = `<i class="fas fa-${playing ? "pause" : "play"}"></i>`;
    btn.setAttribute("aria-pressed", String(playing));
    if (info) info.textContent = `November the 2nd - ${text}`;
    if ("mediaSession" in navigator) navigator.mediaSession.playbackState = playing ? "playing" : "paused";
  };
  const play = () => audio.play().then(() => set(true, "Playing")).catch(() => set(false, "Click to play"));
  const pause = () => { audio.pause(); set(false, "Paused"); };
  btn.addEventListener("click", () => (audio.paused ? play() : pause()));
  audio.addEventListener("error", () => set(false, "Music unavailable"));
  if ("mediaSession" in navigator && typeof MediaMetadata !== "undefined") {
    navigator.mediaSession.metadata = new MediaMetadata({ title: "November the 2nd", artist: "Adhitya Sofyan" });
    navigator.mediaSession.setActionHandler("play", play);
    navigator.mediaSession.setActionHandler("pause", pause);
  }
  play();
}

/* ---------- popups ---------- */
let lastFocus = null;
function openPopup(popup, trigger) {
  lastFocus = trigger || document.activeElement;
  popup.classList.add("active"); popup.setAttribute("aria-hidden", "false");
  document.body.classList.add("popup-open");
  setTimeout(() => { const b = $(".popup-close", popup); if (b) b.focus({ preventScroll: true }); }, 60);
}
function closePopup(popup) {
  popup.classList.remove("active"); popup.setAttribute("aria-hidden", "true");
  popup.dispatchEvent(new Event("closed"));
  if (!$(".popup-modal.active") && !$(".image-lightbox-overlay")) document.body.classList.remove("popup-open");
  if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
}
function initPopups() {
  $$(".popup-modal").forEach((p) => {
    p.setAttribute("role", "dialog"); p.setAttribute("aria-modal", "true"); p.setAttribute("aria-hidden", "true");
    p.addEventListener("click", (e) => { if (e.target === p) closePopup(p); });
    const x = $(".popup-close", p);
    if (x) x.addEventListener("click", () => closePopup(p));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || $(".image-lightbox-overlay")) return;
    const a = $(".popup-modal.active");
    if (a) closePopup(a);
  });
  const memory = $("#memoryPopup");
  $$(".memory-content").forEach((el) => {
    el.setAttribute("role", "button"); el.tabIndex = 0;
    const open = () => {
      const m = memoryDetails[el.getAttribute("data-memory")];
      if (!m) return;
      $("#memoryPopupTitle").textContent = m.title;
      $("#memoryPopupContent").innerHTML = m.content;
      openPopup(memory, el);
    };
    el.addEventListener("click", open);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

/* ---------- gallery + photo viewer (arrows, keys, swipe) ---------- */
function openLightbox(list, start) {
  if ($(".image-lightbox-overlay")) return;
  const opener = document.activeElement;
  let i = start;
  const overlay = document.createElement("div");
  overlay.className = "image-lightbox-overlay"; overlay.tabIndex = -1;
  overlay.setAttribute("role", "dialog"); overlay.setAttribute("aria-modal", "true"); overlay.setAttribute("aria-label", "Photo viewer");
  const stage = document.createElement("div"); stage.className = "image-lightbox-stage"; overlay.appendChild(stage);
  const count = document.createElement("div"); count.className = "image-lightbox-count";
  const btn = (cls, label, html, fn) => {
    const b = document.createElement("button");
    b.className = cls; b.setAttribute("aria-label", label); b.innerHTML = html;
    b.addEventListener("click", (e) => { e.stopPropagation(); fn(); });
    overlay.appendChild(b); return b;
  };
  const closeBtn = btn("image-lightbox-close", "Close", "&times;", close);
  const prev = btn("image-lightbox-nav prev", "Previous", "&#8249;", () => go(-1));
  const next = btn("image-lightbox-nav next", "Next", "&#8250;", () => go(1));
  overlay.appendChild(count);
  document.body.appendChild(overlay); document.body.classList.add("popup-open");
  function show(dir) {
    const a = list[i]; let m;
    if (a.type === "video") { m = document.createElement("video"); m.src = a.src; m.controls = true; m.autoplay = true; m.playsInline = true; }
    else { m = new Image(); m.decoding = "async"; m.alt = a.alt || "Our memory"; m.src = a.src; }
    m.className = "image-lightbox-media";
    stage.replaceChildren(m);
    if (!REDUCE) m.animate([{ opacity: 0, transform: `translateX(${dir * 28}px) scale(0.98)` }, { opacity: 1, transform: "none" }], { duration: 320, easing: "cubic-bezier(0.2,0.8,0.2,1)" });
    count.textContent = `${i + 1} / ${list.length}`;
    prev.hidden = next.hidden = list.length < 2;
    [1, -1].forEach((d) => { const n = list[(i + d + list.length) % list.length]; if (n.type !== "video") new Image().src = n.src; });
  }
  function go(d) { i = (i + d + list.length) % list.length; show(d); }
  function close() {
    document.removeEventListener("keydown", onKey);
    overlay.classList.remove("visible");
    setTimeout(() => {
      overlay.remove();
      if (!$(".popup-modal.active")) document.body.classList.remove("popup-open");
      if (opener && opener.focus) opener.focus({ preventScroll: true });
    }, 260);
  }
  function onKey(e) {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  }
  document.addEventListener("keydown", onKey);
  overlay.addEventListener("click", (e) => { if (e.target === overlay || e.target === stage) close(); });
  let sx = 0, sy = 0;
  overlay.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  overlay.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
  }, { passive: true });
  requestAnimationFrame(() => overlay.classList.add("visible"));
  show(0); closeBtn.focus({ preventScroll: true });
}
function initGalleryAndLightbox() {
  const popup = $("#galleryPopup"), grid = $(".popup-gallery", popup);
  popup.addEventListener("closed", () => grid.replaceChildren());
  function populate(key) {
    const list = (galleryAssets[key] || galleryAssets["all-memories"]).slice(0, 6);
    grid.replaceChildren();
    list.forEach((a, idx) => {
      const cell = document.createElement("div");
      cell.className = "popup-gallery-item";
      let m;
      if (a.type === "video") { m = document.createElement("video"); m.src = a.src; m.controls = true; m.preload = "metadata"; m.playsInline = true; }
      else {
        m = new Image(); m.loading = "lazy"; m.decoding = "async"; m.alt = a.alt || "Our beautiful memory"; m.src = a.src;
        m.addEventListener("load", () => cell.classList.add("loaded"));
        m.addEventListener("error", () => cell.classList.add("is-error"));
      }
      m.tabIndex = 0; m.setAttribute("role", "button");
      const open = (e) => { e.stopPropagation(); openLightbox(list, idx); };
      m.addEventListener("click", open);
      m.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(e); } });
      cell.appendChild(m); grid.appendChild(cell);
    });
  }
  $$(".gallery-item").forEach((el, n) => {
    el.setAttribute("role", "button"); el.tabIndex = 0; el.setAttribute("aria-label", `Open memories gallery ${n + 1}`);
    const open = () => { populate(el.id || "all-memories"); openPopup(popup, el); };
    el.addEventListener("click", open);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

/* ---------- reveal on scroll (IntersectionObserver, replaces the scroll handler that re-measured everything) ---------- */
function startLetter() {
  const t = $("#typewriterGreeting");
  if (t && !t.classList.contains("typing")) t.classList.add("typing");
}
function initReveal() {
  const targets = $$("section, .section-title, .note, .promise, .gallery-item, .memory-item, .love-letter, .letter-content p, .signature");
  if (REDUCE || !("IntersectionObserver" in window)) { targets.forEach((t) => t.classList.add("visible")); startLetter(); return; }
  const letter = $(".love-letter"), cards = ".note, .promise, .gallery-item, .memory-item";
  targets.forEach((t) => {
    if (!t.matches(cards) || !t.parentElement) return;
    const n = [...t.parentElement.children].filter((c) => c.matches(cards)).indexOf(t);
    if (n > 0) t.style.transitionDelay = `${Math.min(n, 5) * 90}ms`;
  });
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    const t = e.target;
    t.classList.add("visible"); io.unobserve(t);
    if (t.style.transitionDelay) setTimeout(() => (t.style.transitionDelay = ""), 1400);
    if (t === letter) startLetter();
  }), { rootMargin: "0px 0px -12% 0px", threshold: 0 });
  targets.forEach((t) => io.observe(t));
}

/* ---------- countdown (Jakarta time, so it is right wherever you open it) ---------- */
const JAKARTA = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hourCycle: "h23" });
const shown = {};
function setText(id, v) { if (shown[id] !== v) { shown[id] = v; const el = document.getElementById(id); if (el) el.textContent = v; } }
function updateCountdown() {
  const n = {};
  JAKARTA.formatToParts(new Date()).forEach((p) => { if (p.type !== "literal") n[p.type] = +p.value; });
  let y = n.year - 2023, mo = n.month - 11, d = n.day - 2;
  if (d < 0) { d += new Date(Date.UTC(n.year, n.month - 1, 0)).getUTCDate(); mo--; }
  if (mo < 0) { mo += 12; y--; }
  setText("years", y); setText("months", mo); setText("days", d); setText("hours", n.hour); setText("minutes", n.minute); setText("seconds", n.second);
  const today = Date.UTC(n.year, n.month - 1, n.day);
  const total = Math.floor((today - Date.UTC(2023, 10, 2)) / 864e5);
  const ny = n.month > 11 || (n.month === 11 && n.day > 2) ? n.year + 1 : n.year;
  const left = Math.round((Date.UTC(ny, 10, 2) - today) / 864e5);
  let sub = $("#countdownSub");
  if (!sub) { sub = document.createElement("p"); sub.id = "countdownSub"; sub.className = "countdown-sub"; $(".countdown").after(sub); }
  const text = left === 0 ? `Happy anniversary! ${total.toLocaleString()} days of us` : `${total.toLocaleString()} days together \u00b7 ${left.toLocaleString()} days until our next anniversary`;
  if (sub.textContent !== text) sub.textContent = text;
  if (left === 0 && !REDUCE) {
    let done = false;
    try { done = sessionStorage.getItem("annivConfetti"); sessionStorage.setItem("annivConfetti", "1"); } catch (e) {}
    if (!done) setTimeout(() => heartConfetti(60), 1200);
  }
}
function initCountdown() {
  const tick = () => { updateCountdown(); setTimeout(tick, 1000 - (Date.now() % 1000) + 20); };
  tick();
  document.addEventListener("visibilitychange", () => { if (!document.hidden) updateCountdown(); });
}

/* ---------- scroll effects: one rAF-throttled handler (progress bar, memory-lane line, back-to-top) ---------- */
function initScrollFx() {
  const top = $("#scrollToTop"), lane = $(".memory-lane");
  const bar = document.createElement("div"); bar.className = "scroll-progress"; bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  let fill = null;
  if (lane) { fill = document.createElement("div"); fill.className = "lane-fill"; fill.setAttribute("aria-hidden", "true"); lane.appendChild(fill); }
  let busy = false;
  const update = () => {
    busy = false;
    const y = Math.max(0, scrollY), max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    bar.style.transform = `scaleX(${Math.min(1, y / max)})`;
    top.classList.toggle("active", y > 300);
    if (fill) { const r = lane.getBoundingClientRect(); fill.style.transform = `scaleY(${Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height))})`; }
  };
  addEventListener("scroll", () => { if (!busy) { busy = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update, { passive: true });
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: REDUCE ? "auto" : "smooth" }));
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initReveal();
  initCountdown();
  initPopups();
  initGalleryAndLightbox();
  initLoveLock();
  initMusicPlayer();
  initScrollFx();
  initCustomCursor();
  (window.requestIdleCallback || ((f) => setTimeout(f, 200)))(() => { createHearts(); createAnimatedBackground(); initAmbientPause(); });
});
