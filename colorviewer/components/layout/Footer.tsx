import { Palette, Printer, BarChart3, ShieldCheck, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-zinc-600">

        {/* Logo + descrição */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">ColorViewer</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Plataforma inteligente para análise de cobertura CMYK, gestão de impressoras 
            e otimização de custos na pré-impressão.
          </p>
        </div>

        {/* Produto */}
        <div className="space-y-3">
          <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
            <Palette className="h-4 w-4 text-[#6D6AEB]" />
            Produto
          </h3>
          <ul className="space-y-2">
            <li><Link href="/main" className="hover:text-indigo-600 transition">Colorimetria</Link></li>
            <li><Link href="/printers" className="hover:text-indigo-600 transition">Impressoras</Link></li>
            <li><Link href="/analytics" className="hover:text-indigo-600 transition">Analytics</Link></li>
            <li><Link href="/history" className="hover:text-indigo-600 transition">Histórico</Link></li>
          </ul>
        </div>

        {/* Recursos */}
        <div className="space-y-3">
          <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-[#6D6AEB]" />
            Recursos
          </h3>
          <ul className="space-y-2">
            <li><Link href="/pricing" className="hover:text-indigo-600 transition">Planos</Link></li>
            <li><Link href="/guide" className="hover:text-indigo-600 transition">Guia rápido</Link></li>
            <li><Link href="/support" className="hover:text-indigo-600 transition">Suporte</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#6D6AEB]" />
            Legal
          </h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-indigo-600 transition">Política de privacidade</Link></li>
            <li><Link href="/terms" className="hover:text-indigo-600 transition">Termos de uso</Link></li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} ColorViewer — Todos os direitos reservados.</span>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <Link href="mailto:suporte@colorviewer.com" className="hover:text-indigo-600 transition">
              <Mail className="h-4 w-4" />
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-indigo-600 transition">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-indigo-600 transition">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
