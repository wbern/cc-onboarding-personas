import { useState } from 'preact/hooks';

interface Props {
  text: string;
}

export default function CopyButton({ text }: Props) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
      setTimeout(() => setState('idle'), 2000);
    } catch {
      // Fallback for older browsers
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setState('copied');
        setTimeout(() => setState('idle'), 2000);
      } catch {
        setState('failed');
        setTimeout(() => setState('idle'), 3000);
      }
    }
  }

  return (
    <button
      onClick={handleCopy}
      class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
        state === 'copied'
          ? 'bg-emerald-600 text-white'
          : state === 'failed'
          ? 'bg-slate-700 text-slate-400'
          : 'bg-indigo-600 hover:bg-indigo-500 text-white'
      }`}
    >
      {state === 'copied'
        ? 'Copied!'
        : state === 'failed'
        ? 'Select & copy manually (⌘C)'
        : 'Copy'}
    </button>
  );
}
