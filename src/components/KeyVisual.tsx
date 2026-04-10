import { useRef } from "preact/hooks";

function sparkle(container: HTMLElement) {
  const count = 10;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.className = "sparkle-particle";
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const distance = 30 + Math.random() * 40;
    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    particle.style.setProperty("--duration", `${0.4 + Math.random() * 0.4}s`);
    particle.style.setProperty("--size", `${3 + Math.random() * 4}px`);
    container.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
}

export default function KeyVisual() {
  const containerRef = useRef<HTMLButtonElement>(null);

  function handleClick() {
    if (containerRef.current) {
      sparkle(containerRef.current);
    }
  }

  return (
    <>
      <style>{`
        .sparkle-particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background: #818cf8;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          pointer-events: none;
          animation: sparkle-fly var(--duration) ease-out forwards;
          box-shadow: 0 0 6px 2px rgba(129, 140, 248, 0.6);
        }
        @keyframes sparkle-fly {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(
              calc(-50% + var(--x)),
              calc(-50% + var(--y))
            ) scale(0);
          }
        }
      `}</style>

      <button
        type="button"
        ref={containerRef}
        class="relative inline-flex items-center gap-3 cursor-pointer select-none bg-transparent border-none p-0"
        onClick={handleClick}
        aria-label="Click to simulate pressing Command + Space"
      >
        <div
          class="key-cap px-4 py-3 rounded-lg bg-slate-700 border border-slate-600
                     text-white text-xl font-medium shadow-md
                     hover:bg-slate-600 hover:border-indigo-500/50
                     active:translate-y-0.5 active:shadow-sm
                     transition-all duration-150"
        >
          ⌘
        </div>
        <span class="text-slate-500 text-lg">+</span>
        <div
          class="key-cap px-6 py-3 rounded-lg bg-slate-700 border border-slate-600
                     text-white text-lg font-medium shadow-md
                     hover:bg-slate-600 hover:border-indigo-500/50
                     active:translate-y-0.5 active:shadow-sm
                     transition-all duration-150"
        >
          Space
        </div>
      </button>
    </>
  );
}
