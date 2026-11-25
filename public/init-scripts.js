
window.cleanupSoftlife = function() {
  if (typeof window === 'undefined') return;
  if (window._softlifeObserver) {
    try { window._softlifeObserver.disconnect(); } catch (e) {}
    window._softlifeObserver = null;
  }
  if (window.lenis) {
    try { window.lenis.destroy(); } catch (e) {}
    window.lenis = null;
  }
  if (Array.isArray(window._softlifeContexts)) {
    window._softlifeContexts.forEach(ctx => {
      try { ctx.revert(); } catch (e) {}
    });
  }
  window._softlifeContexts = [];
  if (window.ScrollTrigger) {
    window.ScrollTrigger.getAll().forEach(t => t.kill());
  }
  window._softlifeInitDone = false;
};

window.initSoftlife = function() {
  if (typeof window === 'undefined') return;
  if (!window.gsap || !window.ScrollTrigger || !window.SplitText || !window.Lenis) {
    setTimeout(window.initSoftlife, 50);
    return;
  }
  if (window._softlifeInitDone) return;
  window.cleanupSoftlife();
  window._softlifeInitDone = true;
    try {
(() => {
  'use strict';
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
  const parsed = document.readyState === 'loading' ? new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true })) : Promise.resolve();
  const ready = () => Promise.all([fonts, parsed]).then(() => firsts);
  const nextTask = () => window.scheduler?.yield?.() ?? new Promise(resolve => setTimeout(resolve));
  const refresh = () => {
    if (typeof window.refreshScroll === 'function') return window.refreshScroll();
    window.ScrollTrigger?.sort(); window.ScrollTrigger?.refresh();
  };
  const run = (setup, name) => {
    for (const trigger of window.ScrollTrigger?.getAll() || []) if (!trigger.end && window.ScrollTrigger.getAll().includes(trigger)) trigger.refresh(0, 1);
    const context = window.gsap.context(() => {});
    window._softlifeContexts = window._softlifeContexts || [];
    window._softlifeContexts.push(context);
    const log = new MutationObserver(() => {});
    log.observe(document.documentElement, { attributes: true, attributeOldValue: true, subtree: true });
    let failure = null, records;
    try { context.add(() => { try { setup(); } catch (error) { failure = error; } }); }
    finally { records = log.takeRecords(); log.disconnect(); }
    if (!failure) return true;
    try { context.revert(); } catch (error) { console.error(name, 'revert failed', error); }
    for (const { target, attributeName, oldValue } of records.reverse()) {
      const now = target.getAttribute(attributeName);
      if (oldValue == null) { if (now != null) target.removeAttribute(attributeName); }
      else if (now !== oldValue) target.setAttribute(attributeName, oldValue);
    }
    console.error(name, failure);
    return false;
  };
  window.queueMotion = (setup, { first = false, near, id } = {}) => {
    if (!window.gsap || typeof setup !== 'function') return;
    const name = id || 'motion';
    try {
      run(setup, name);
    } catch(err) {
      console.error('queueMotion error:', name, err);
    }
  };
  window.adjacent = (a, b) => {
    const order = [...document.querySelectorAll('[data-8b-section]')].filter(section => section.getAttribute('data-8b-section') !== 'navigation').map(section => section.id);
    return order.indexOf(a) >= 0 && order[order.indexOf(a) + 1] === b;
  };
})();

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,resize' });
function refreshScroll() {
  const bar = document.querySelector('#nav .nav__bar');
  const offset = bar ? bar.offsetHeight : 0;
  document.documentElement.style.scrollPaddingTop = offset + 'px';
  if (window.lenis && typeof window.lenis.options.anchors === 'object') window.lenis.options.anchors.offset = -offset;
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
}
gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  // Smooth scroll Lenis ala lestari.kejuruan.id (autoRaf + sinkronisasi ScrollTrigger)
  if (window.Lenis) {
    window.lenis = new window.Lenis({ autoRaf: true });
    window.lenis.on('scroll', () => {
      window.ScrollTrigger?.update();
    });
  }
  return () => {
    if (window.lenis) {
      try { window.lenis.destroy(); } catch (e) {}
      window.lenis = null;
    }
  };
});

const effects = {
  embolden(targets, { from = 200, stagger = .06, duration = 1.1, ...vars } = {}) {
    const list = gsap.utils.toArray(targets);
    const rest = list.map(element => getComputedStyle(element).fontWeight);
    return gsap.timeline(vars).fromTo(list, { fontWeight: from }, { fontWeight: i => rest[i], duration, ease: 'power2.out', stagger });
  },
  setdown(element, vars = {}) {
    const index = Array.prototype.indexOf.call(element.parentElement.children, element);
    return gsap.timeline(vars)
      .fromTo(element, 
        { y: 30, rotation: index % 2 ? 2 : -2, scale: .97, opacity: 0.3 }, 
        { y: 0, rotation: 0, scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out', clearProps: 'all' }
      );
  },
  rule(element, vars = {}) {
    const tl = gsap.timeline(vars);
    const lines = element.querySelectorAll('.m-rule__line');
    const label = element.querySelector('.m-rule__label');
    if (lines.length) tl.from(lines, { scaleX: 0, duration: 1.1, ease: 'power3.inOut' });
    if (label) tl.from(label, { opacity: 0, y: 10, duration: .6, ease: 'power2.out' }, .25);
    return tl;
  },
  ink(element, vars = {}) {
    return gsap.timeline(vars).fromTo(element, { clipPath: 'inset(-40% 100% -40% -10%)' }, { clipPath: 'inset(-40% -10% -40% -10%)', duration: 1.8, ease: 'power2.inOut', clearProps: 'clipPath' });
  }
};
function lockWords(targets) {
  const split = SplitText.create(targets, { type: 'words' });
  const words = split.words;
  const measure = () => {
    const weights = words.map(word => word.style.fontWeight);
    words.forEach(word => { word.style.width = ''; word.style.fontWeight = ''; word.style.display = 'inline-block'; });
    const widths = words.map(word => word.getBoundingClientRect().width);
    words.forEach((word, i) => { word.style.fontWeight = weights[i]; word.style.width = widths[i] + 'px'; });
  };
  measure();
  ScrollTrigger.addEventListener('refreshInit', measure);
  return { words, revert() { ScrollTrigger.removeEventListener('refreshInit', measure); split.revert(); } };
}
document.querySelectorAll('[data-8b-section]').forEach(section => {
  Object.keys(effects).forEach(name => {
    const elements = [...section.querySelectorAll(`[data-8b-motion~="${name}"]`)];
    if (!elements.length) return;
    const id = `effect:${name}:${section.id}`;
    queueMotion(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        const reverts = [];
        elements.forEach((element, i) => {
          let target = element;
          if (name === 'embolden') {
            const bolds = element.querySelectorAll('b');
            if (!bolds.length) return;
            const lock = lockWords(bolds);
            reverts.push(lock.revert);
            target = lock.words;
          }
          ScrollTrigger.create({ id: `${id}:${i + 1}`, trigger: element, start: 'top 88%', once: true, animation: effects[name](target) });
        });
        return () => reverts.forEach(revert => revert());
      });
    }, section.getBoundingClientRect().top < innerHeight ? { first: true, id } : { near: section, id });
  });
});

queueMotion(() => {
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    if (!adjacent('hero', 'manifesto')) return;
    const hero = document.getElementById('hero'); if (!hero) return;
    const q = selector => hero.querySelector(selector);
    const dome = q('.hero__dome'), slot = q('.hero__slot');
    if (!dome || !slot) return;
    const g = {};
    const measure = () => { g.W = hero.clientWidth; g.H = dome.offsetHeight; g.w = slot.offsetWidth; g.h = slot.offsetHeight; };
    measure();
    const from = () => `inset(calc(100% - ${g.h}px) calc(50% - ${g.w / 2}px) 0px calc(50% - ${g.w / 2}px) round ${g.w / 2}px ${g.w / 2}px 0px 0px / ${g.w / 2}px ${g.w / 2}px 0px 0px)`;
    const to = () => `inset(calc(0% - 0px) calc(0% - 0px) 0px calc(0% - 0px) round ${g.W / 2}px ${g.W / 2}px 0px 0px / ${g.H}px ${g.H}px 0px 0px)`;
    const phone = () => g.W < 720;
    const tl = gsap.timeline({ defaults: { duration: 1 }, scrollTrigger: { id: 'hero:exit', trigger: hero, start: 'bottom bottom', end: 'bottom 30%', scrub: true, invalidateOnRefresh: true, onRefreshInit: measure } })
      .fromTo(dome, { clipPath: from }, { clipPath: to, ease: 'none' }, 0);
    
    if (q('.hero__word--soft')) tl.fromTo(q('.hero__word--soft'), { xPercent: 0, yPercent: 0, scale: 1 }, { xPercent: () => phone() ? -8 : -12, yPercent: -16, scale: .84, ease: 'power1.in' }, 0);
    if (q('.hero__word--life')) tl.fromTo(q('.hero__word--life'), { xPercent: 0, yPercent: 0, scale: 1 }, { xPercent: () => phone() ? 8 : 12, yPercent: -16, scale: .84, ease: 'power1.in' }, 0);
    if (q('.hero__tag')) tl.fromTo(q('.hero__tag'), { y: 0, opacity: 1 }, { y: -24, opacity: 0, ease: 'power1.in' }, 0);
    if (q('.hero__group--l')) tl.fromTo(q('.hero__group--l'), { x: 0, opacity: 1 }, { x: () => -g.W * .3, opacity: 0, ease: 'power1.in' }, 0);
    if (q('.hero__group--r')) tl.fromTo(q('.hero__group--r'), { x: 0, opacity: 1 }, { x: () => g.W * .3, opacity: 0, ease: 'power1.in' }, 0);
    if (q('.hero__photo-frame')) tl.fromTo(q('.hero__photo-frame'), { x: 0, y: 0, rotation: 0 }, { x: () => phone() ? g.W * .18 : g.W * .07, y: () => phone() ? -40 : -70, rotation: 6, ease: 'power1.in' }, 0);
    if (q('.hero__lede-inner')) {
      tl.fromTo(q('.hero__lede-inner'), { x: 0, y: 0 }, { x: () => phone() ? 0 : -g.W * .05, y: () => phone() ? -40 : -60, ease: 'power1.in' }, 0)
        .fromTo(q('.hero__lede-inner'), { opacity: 1 }, { opacity: () => phone() ? 1 : 0, ease: 'power1.in', duration: .7 }, 0);
    }
  });
}, { first: true, id: 'scene:hero' });

queueMotion(() => {
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const section = document.getElementById('manifesto'); if (!section) return;
    const ground = section.querySelector('.manifesto__ground');
    if (ground) {
      gsap.fromTo(
        ground,
        { clipPath: 'inset(0px 30% 0px 30% round 24px 24px 0px 0px)' },
        {
          clipPath: 'inset(0px 0% 0px 0% round 0px 0px 0px 0px)',
          ease: 'none',
          scrollTrigger: {
            id: 'manifesto:entry',
            trigger: section,
            start: 'top 95%',
            end: 'top 35%',
            scrub: 0.4,
            invalidateOnRefresh: true
          }
        }
      );
    }
    const text = section.querySelector('.manifesto__text');
    const lock = lockWords(text);
    const bold = lock.words.filter(word => word.closest('b'));
    const read = gsap.timeline({ scrollTrigger: { id: 'manifesto:read', trigger: section, start: () => `top+=${text.offsetTop}px 80%`, end: () => `top+=${text.offsetTop + text.offsetHeight}px 45%`, scrub: .6, invalidateOnRefresh: true } });
    const plain = getComputedStyle(section).color, accent = bold.length ? getComputedStyle(bold[0]).color : plain;
    read.add(effects.embolden(lock.words, { from: 200, stagger: .14, duration: 1 }), 0);
    read.fromTo(bold, { color: plain }, { color: accent, duration: .8, stagger: (i, word) => lock.words.indexOf(word) * .14 - lock.words.indexOf(bold[0]) * .14, ease: 'none' }, lock.words.indexOf(bold[0]) * .14 + .3);
    return () => lock.revert();
  });
}, { id: 'scene:manifesto' });

queueMotion(() => {
  const section = document.getElementById("week"); if (!section) return;
  const cards = [...section.querySelectorAll(".week__card")];
  if (!cards.length) return;
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo(cards, 
      { y: 30, opacity: 0.2 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out", 
        scrollTrigger: { trigger: section, start: "top 85%", once: true } 
      }
    );
  });
}, { id: "scene:week" });

queueMotion(() => {
  const section = document.getElementById('board'); if (!section) return;
  const grid = section.querySelector('.board__grid');
  if (!grid) return;
  const tiles = [...grid.querySelectorAll('.board__tile')];
  const tilt = [-6, 5, -3, 6, -8, 4, 6, -4, 3, -6, 5, -2];
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    let offsets = [];
    const measure = () => {
      const w = grid.clientWidth / 2, h = grid.clientHeight / 2;
      offsets = tiles.map(tile => [(w - (tile.offsetLeft + tile.offsetWidth / 2)) * 0.35, (h - (tile.offsetTop + tile.offsetHeight / 2)) * 0.35]);
    };
    measure();
    const timeline = gsap.timeline({
      scrollTrigger: {
        id: 'board',
        trigger: section,
        start: 'top 85%',
        end: 'top 20%',
        scrub: 0.8,
        invalidateOnRefresh: true,
        onRefreshInit: measure
      }
    });
    tiles.forEach((tile, i) => {
      timeline.fromTo(tile,
        { x: () => (offsets[i] ? offsets[i][0] : 0), y: () => (offsets[i] ? offsets[i][1] : 0), rotation: tilt[i % tilt.length], scale: 0.85 },
        { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.8, ease: 'power2.out', clearProps: 'transform' },
        i * 0.04
      );
    });
  });
}, { id: 'scene:board' });

queueMotion(() => {
  const section = document.getElementById('edit'); if (!section) return;
  gsap.matchMedia().add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    const shots = [...section.querySelectorAll('.edit__shot')];
    const list = section.querySelector('.edit__list');
    if (!shots.length || !list) return;
    section.setAttribute('data-staged', '');
    const timeline = gsap.timeline({ scrollTrigger: { id: 'edit', trigger: list, start: 'top 40%', end: 'bottom 60%', scrub: .5, invalidateOnRefresh: true } });
    shots.slice(1).forEach((shot, i) => {
      const at = i * 1.2 + .3;
      timeline
        .fromTo(shot.querySelector('.edit__slide'), { y: 0, yPercent: 100 }, { y: 0, yPercent: 0, duration: 1, ease: 'power2.inOut' }, at)
        .fromTo(shot.querySelector('.edit__hold'), { y: 0, yPercent: -100 }, { y: 0, yPercent: 0, duration: 1, ease: 'power2.inOut' }, at);
    });
    return () => section.removeAttribute('data-staged');
  });
}, { id: 'scene:edit' });

queueMotion(() => {
  const section = document.getElementById('journal'); if (!section) return;
  const poster = section.querySelector('.journal__poster');
  const words = [...section.querySelectorAll('.journal__word')];
  if (!poster || words.length < 2) return;
  gsap.matchMedia().add({ desk: '(min-width: 900px)', phone: '(max-width: 899px)', motion: '(prefers-reduced-motion: no-preference)' }, context => {
    if (!context.conditions.motion) return;
    const desk = context.conditions.desk;
    const axis = desk ? 'y' : 'x';
    const room = word => Math.max(0, ((desk ? poster.clientHeight : poster.clientWidth) - (desk ? word.offsetHeight : word.offsetWidth)) / 2 - 18);
    const timeline = gsap.timeline({ scrollTrigger: { id: 'journal', trigger: section, start: 'top bottom', end: 'bottom top', scrub: .5, invalidateOnRefresh: true } });
    timeline
      .fromTo(words[0], { [axis]: () => room(words[0]) }, { [axis]: 0, ease: 'power1.out', duration: 1 }, 0)
      .fromTo(words[1], { [axis]: () => -room(words[1]) }, { [axis]: 0, ease: 'power1.out', duration: 1 }, 0)
      .to(words[0], { [axis]: () => -room(words[0]), ease: 'power1.in', duration: 1 }, 1.5)
      .to(words[1], { [axis]: () => room(words[1]), ease: 'power1.in', duration: 1 }, 1.5);
  });
}, { id: 'scene:journal' });

queueMotion(() => {
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const section = document.getElementById('letter'); if (!section) return;
    const motto = section.querySelector('.letter__motto');
    if (motto) {
      gsap.fromTo(motto,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', scrollTrigger: { id: 'letter:motto', trigger: motto, start: 'top 88%', once: true } }
      );
    }
  });
}, { id: 'scene:letter' });

queueMotion(() => {
  const section = document.getElementById('membership'); if (!section) return;
  const cards = [...section.querySelectorAll('.membership__card')];
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const title = section.querySelector('.membership__title');
    if (title) {
      gsap.fromTo(title,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', scrollTrigger: { id: 'membership:entry', trigger: section, start: 'top 88%', once: true } }
      );
    }
    const flips = cards.map(card => card.querySelector('.membership__flip')).filter(Boolean);
    const backs = cards.map(card => card.querySelector('.membership__back')).filter(Boolean);
    if (flips.length) {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'membership:cards',
          trigger: section.querySelector('.membership__cards'),
          start: 'top 96%',
          once: true
        }
      });
      tl.set(backs, { visibility: 'visible' }, 0);
      cards.forEach((card, i) => {
        const flip = card.querySelector('.membership__flip');
        const back = card.querySelector('.membership__back');
        const at = i * 0.06;
        if (flip) {
          tl.fromTo(
            flip,
            { rotationY: -180 },
            { rotationY: 0, duration: 0.42, ease: 'power2.out', clearProps: 'transform' },
            at
          );
        }
        if (back) {
          tl.set(back, { visibility: 'hidden' }, at + 0.22);
        }
      });
    }
  });
}, { id: 'scene:membership' });

queueMotion(() => {
  const section = document.getElementById('contact'); if (!section) return;
  const door = section.querySelector('.contact__door');
  if (!door) return;
  const left = door.querySelector('.contact__leaf--l');
  const right = door.querySelector('.contact__leaf--r');
  const img = door.querySelector('img');
  if (!left || !right || !img) return;
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    gsap.timeline({ scrollTrigger: { id: 'contact', trigger: door, start: 'top 80%', end: 'center 45%', scrub: .5 } })
      .fromTo(left, { x: 0, xPercent: 0 }, { x: 0, xPercent: -101, ease: 'power2.inOut' }, 0)
      .fromTo(right, { x: 0, xPercent: 0 }, { x: 0, xPercent: 101, ease: 'power2.inOut' }, 0)
      .fromTo(img, { scale: 1.22 }, { scale: 1, ease: 'power2.out' }, 0);
  });
}, { id: 'scene:contact' });

(() => {
  const root = document.getElementById('nav'); if (!root) return;
  const bar = root.querySelector('.nav__bar');
  const toggle = root.querySelector('.nav__toggle');
  const menu = root.querySelector('.menu');
  if (!bar || !toggle || !menu) return;
  const close = menu.querySelector('.menu__close');
  if (!close) return;
  let lastY = scrollY;
  addEventListener('scroll', () => {
    // Selalu tampilkan navbar (sticky) tanpa menghilang saat scroll
    bar.removeAttribute('data-hidden');
  }, { passive: true });
  bar.addEventListener('focusin', () => bar.removeAttribute('data-hidden'));
  const open = () => {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    window.lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    close.focus();
  };
  const shut = (returnFocus = true) => {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    window.lenis?.start();
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', open);
  close.addEventListener('click', () => shut());
  menu.addEventListener('click', event => { if (event.target.closest('a')) shut(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) shut(); });
})();

(() => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  new IntersectionObserver(([entry]) => hero.toggleAttribute('data-paused', !entry.isIntersecting)).observe(hero);
})();

(() => {
  const form = document.querySelector('#contact .contact__form');
  if (!form) return;
  const status = form.querySelector('.contact__status');
  if (!status) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.hidden = false;
    form.reset();
  });
})();


(() => {
  // Scroll Reveal ala lestari.kejuruan.id: IntersectionObserver (threshold: 0.1) + CSS 0.7s ease + stagger 100ms
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const mark = (selector, type, delay = 0) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.setAttribute('data-animate', type);
    if (delay > 0) el.setAttribute('data-delay', String(delay));
  };

  const markGroup = (selector, type, step = 100, base = 0) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.setAttribute('data-animate', type);
      const d = base + i * step;
      if (d > 0) el.setAttribute('data-delay', String(d));
    });
  };

  // Single section headers & blocks (fade-up)
  mark('#manifesto .manifesto__inner', 'fade-up', 0);
  mark('#clubs .clubs__head', 'fade-up', 0);
  mark('#week .week__head', 'fade-up', 0);
  mark('#edit', 'fade-up', 0);
  mark('#board .gk-stats-banner h2', 'fade-up', 0);
  mark('#board .gk-stats-banner p', 'fade-up', 100);
  mark('#letter .letter__sheet', 'fade-up', 0);
  mark('#journal', 'fade-up', 0);

  // Staggered card grids (100ms per card)
  markGroup('#clubs .clubs__tile', 'fade-up', 100, 100);
  markGroup('#board .gk-stat-card', 'fade-up', 100, 150);

  // 2-column split sections (fade-right left, fade-left right)
  mark('#faq .faq__intro', 'fade-right', 0);
  mark('#faq .faq__list', 'fade-left', 150);
  mark('#contact .contact__door', 'fade-right', 0);
  mark('#contact .contact__info', 'fade-left', 150);

  const targets = [...document.querySelectorAll('[data-animate]')];
  if (!targets.length) return;

  if (reduceMotion || typeof IntersectionObserver === 'undefined') {
    targets.forEach(el => el.classList.add('animate-in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
  window._softlifeObserver = observer;
})();

        setTimeout(() => {
      window.ScrollTrigger?.sort();
      window.ScrollTrigger?.refresh();
      if (typeof window.refreshScroll === 'function') window.refreshScroll();
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const bar = document.querySelector('#nav .nav__bar');
          const offset = bar ? bar.offsetHeight + 10 : 70;
          if (window.lenis) {
            window.lenis.scrollTo(target, { immediate: true, offset: -offset });
          } else {
            const y = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'instant' });
          }
        }
      }
    }, 250);
  } catch(e) {
    console.error('Softlife init error:', e);
  }
};

if (typeof window !== 'undefined' && !window._softlifeListenersBound) {
  window._softlifeListenersBound = true;

  // Intercept anchor clicks to ensure smooth, accurate scrolling with Lenis
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const hash = href.substring(hashIndex);
      const isSamePage = link.pathname === window.location.pathname || href.startsWith('#') || href.startsWith('/#');
      if (isSamePage && hash.length > 1) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          history.pushState(null, '', hash);
          const bar = document.querySelector('#nav .nav__bar');
          const offset = bar ? bar.offsetHeight + 10 : 70;
          if (window.lenis) {
            window.lenis.scrollTo(target, { offset: -offset });
          } else {
            const y = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          }
        }
      }
    }
  });

  window.addEventListener('hashchange', () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const bar = document.querySelector('#nav .nav__bar');
        const offset = bar ? bar.offsetHeight + 10 : 70;
        if (window.lenis) {
          window.lenis.scrollTo(target, { offset: -offset });
        }
      }
    }
  });
}