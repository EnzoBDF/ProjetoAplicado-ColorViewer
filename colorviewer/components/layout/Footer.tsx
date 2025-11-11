export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-600 flex items-center justify-between">
        <span>© {new Date().getFullYear()} ColorViewer</span>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-indigo-600 transition">Privacidade</a>
          <a href="/terms" className="hover:text-indigo-600 transition">Termos</a>
        </div>
      </div>
    </footer>
  );
}


