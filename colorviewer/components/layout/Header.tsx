export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-zinc-900">ColorViewer</div>
        <nav className="flex items-center gap-6 text-sm text-zinc-700">
          <a href="/" className="hover:text-indigo-600 transition">Início</a>
          <a href="/main" className="hover:text-indigo-600 transition">App</a>
          <a href="/login" className="hover:text-indigo-600 transition">Login</a>
        </nav>
      </div>
    </header>
  );
}


