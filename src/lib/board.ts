const atlas = document.querySelector<HTMLElement>('#ms-atlas')!;
const print = atlas.querySelector<HTMLElement>('.print')!;
const preview = atlas.querySelector<HTMLAnchorElement>('.print-mount')!;
const gamePrint = print.querySelector<HTMLElement>('.game-print')!;
const zones = [...atlas.querySelectorAll<HTMLElement>('.zone')];
const faces = [...print.querySelectorAll<HTMLImageElement>('[data-face]')];
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let tapped: HTMLAnchorElement | null = null;
let frame = 0;

function show(tile: HTMLElement) {
  const { game, work, image, title, shot } = tile.dataset;
  const key = game || work;
  if (!key || atlas.dataset.active === key) return;
  atlas.dataset.active = key;
  const project = game ? 'meari' : work;
  zones.forEach((zone) =>
    zone.classList.toggle('active', zone.dataset.work === project),
  );
  faces.forEach((face) =>
    face.classList.toggle('visible', face.dataset.face === key),
  );
  gamePrint.hidden = !game;
  if (game) {
    gamePrint.querySelector('img')!.src = image!;
    gamePrint.querySelector('b')!.textContent = title!;
    gamePrint.querySelector('span')!.textContent = shot!;
  }
  preview.href = game ? '/projects/meari/' + game : '/projects/' + work;
  preview.setAttribute(
    'aria-label',
    (title ||
      tile.querySelector('strong')?.textContent?.replace('↗', '').trim()) +
      ' 상세 보기',
  );
}
function flatten() {
  cancelAnimationFrame(frame);
  for (const name of ['--rx', '--ry', '--shine'])
    print.style.removeProperty(name);
}
atlas.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch') return;
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const rect = atlas.getBoundingClientRect();
    const x = (2 * (event.clientX - rect.left)) / rect.width - 1;
    const y = (2 * (event.clientY - rect.top)) / rect.height - 1;
    const zone = zones[(y < 0 ? 0 : 2) + (x < 0 ? 0 : 1)];
    const tile =
      zone.dataset.work === 'meari'
        ? zone.querySelectorAll<HTMLElement>('.game-slot')[
            Math.max(0, Math.min(2, Math.floor((x + 1) * 3)))
          ]
        : zone;
    show(tile);
    if (reduce.matches) return;
    print.style.setProperty('--rx', (-y * 11).toFixed(2) + 'deg');
    print.style.setProperty('--ry', (x * 15).toFixed(2) + 'deg');
    print.style.setProperty('--shine', (50 - x * 32 - y * 10).toFixed(2) + '%');
  });
});
atlas.addEventListener('pointerleave', flatten);
window.addEventListener('scroll', flatten, { passive: true });
reduce.addEventListener('change', flatten);
atlas.addEventListener('focusin', (event) => {
  const tile = (event.target as Element).closest<HTMLElement>(
    '.game-slot, a.zone',
  );
  if (tile) {
    flatten();
    show(tile);
  }
});
atlas.addEventListener('click', (event) => {
  const slot = (event.target as Element).closest<HTMLAnchorElement>(
    '.game-slot',
  );
  const touch =
    (event as PointerEvent).pointerType === 'touch' ||
    (!('pointerType' in event) && matchMedia('(hover: none)').matches);
  if (slot && touch && event.detail && tapped !== slot) {
    event.preventDefault();
    tapped = slot;
    show(slot);
  }
});
