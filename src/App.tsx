/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Smartphone, 
  Clock, 
  Zap, 
  Users, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Phone,
  Mail,
  ArrowUpRight,
  Store,
  Stethoscope,
  Scissors,
  Dumbbell,
  Briefcase,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Shared Logo Component ---
const PrimeFlowLogo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 15L4 18V9C4 7.89543 4.89543 7 6 7H14C15.1046 7 16 7.89543 16 9V13C16 14.1046 15.1046 15 14 15H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 17H17L20 20V12C20 10.8954 19.1046 10 18 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7.5" cy="11" r="0.8" fill="currentColor"/>
    <circle cx="10" cy="11" r="0.8" fill="currentColor"/>
    <circle cx="12.5" cy="11" r="0.8" fill="currentColor"/>
  </svg>
);

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Comparativo', href: '#comparativo' },
    { name: 'Casos de Uso', href: '#casos-de-uso' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0d1a14]/95 backdrop-blur-md py-4 border-b border-[rgba(212,175,90,0.18)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="w-[42px] h-[42px] bg-[#d4af5a] rounded-[10px] flex items-center justify-center text-[#0d1a14] shadow-lg shadow-[#d4af5a]/10 group-hover:brightness-110 transition-all">
            <PrimeFlowLogo size={26} />
          </div>
          <span className="font-['Barlow_Condensed'] font-extrabold text-[22px] tracking-[0.02em] text-white">
            PrimeFlow
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[13px] font-medium text-white/80 uppercase tracking-widest hover:text-[#d4af5a] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5516997872988"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#d4af5a] text-[#081008] rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-[#f0cf7d] transition-all shadow-md shadow-[#d4af5a]/20"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1a14] border-b border-[rgba(212,175,90,0.18)] overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-white/80 uppercase tracking-wider hover:text-[#d4af5a]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5516997872988"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 bg-[#d4af5a] text-[#081008] rounded-full text-sm font-bold uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- WhatsApp Floating Button & Fixed CTA ---
const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5516997872988"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-[100] flex items-center gap-3 bg-[#d4af5a] text-[#081008] font-bold py-3.5 px-7 rounded-full shadow-2xl shadow-[#d4af5a]/30 text-sm uppercase tracking-wider border border-[#f0cf7d]"
  >
    <span>Fale conosco agora →</span>
  </motion.a>
);

// --- Hero Component ---
const Hero = () => (
  <section id="inicio" className="pt-44 pb-24 text-center relative overflow-hidden bg-[#0d1a14] border-b border-[rgba(212,175,90,0.18)]">
    <div className="max-w-[1080px] mx-auto px-6 relative z-10">
      <div className="inline-flex items-center gap-2.5 text-xs text-[#d4af5a] uppercase font-mono tracking-widest mb-6 py-1.5 px-4 rounded-full bg-[#142a1f] border border-[rgba(212,175,90,0.2)]">
        <span className="w-2 h-2 rounded-full bg-[#d4af5a] animate-pulse"></span>
        Automação de Atendimento com IA
      </div>
      
      <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-['Barlow_Condensed'] font-black uppercase tracking-tight text-white mb-6 leading-[0.95]">
        Todo cliente que chama<br className="hidden sm:inline" /> no whatsapp <em className="text-[#d4af5a] not-italic">vira venda.</em>
      </h1>
      
      <p className="max-w-[580px] mx-auto text-base sm:text-lg text-[#93a596] mb-10 leading-relaxed">
        Implementamos um agente de IA que atende seu WhatsApp 24h, responde como um humano treinado e conduz o cliente até o fechamento.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <motion.a 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/5516997872988"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#d4af5a] text-[#081008] font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-xl shadow-[#d4af5a]/20 hover:bg-[#f0cf7d] transition-all"
        >
          Fale conosco agora →
        </motion.a>
      </div>

      {/* WhatsApp Mockup Preview */}
      <div className="max-w-[340px] mx-auto bg-[#142a1f] border border-[rgba(212,175,90,0.18)] rounded-[26px] p-3.5 shadow-2xl shadow-black/80 text-left">
        <div className="flex items-center gap-3 pb-3 mb-3.5 border-b border-[rgba(212,175,90,0.18)]">
          <div className="w-9 h-9 rounded-full bg-[#d4af5a] flex items-center justify-center text-[#0d1a14] shadow-md">
            <PrimeFlowLogo size={20} />
          </div>
          <div>
            <div className="font-semibold text-xs sm:text-sm text-white">Agente IA — PrimeFlow</div>
            <div className="text-[11px] text-[#d4af5a] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> online agora
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 min-h-[190px]">
          <div className="max-w-[85%] p-3 rounded-[14px] rounded-bl-[4px] bg-[#1f3a29] text-white text-xs sm:text-[13.5px] leading-relaxed">
            Vocês têm esse produto em estoque? Preciso pra amanhã!
            <span className="block text-[10px] text-white/50 text-right mt-1">23:41</span>
          </div>
          <div className="max-w-[85%] self-end p-3 rounded-[14px] rounded-br-[4px] bg-[#d4af5a] text-[#081008] font-medium text-xs sm:text-[13.5px] leading-relaxed">
            Sim! Temos disponível. Quer que eu já reserve e te envie o link de pagamento para garantir a entrega amanhã cedo? 🚀
            <span className="block text-[10px] text-[#081008]/60 text-right mt-1">23:41</span>
          </div>
          <div className="self-start flex gap-1 bg-[#1f3a29] py-3 px-3.5 rounded-[14px] rounded-bl-[4px] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af5a] animate-bounce"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af5a] animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af5a] animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Numbers Component ---
const Numbers = () => (
  <section className="bg-[#081008] py-16 px-6 border-b border-[rgba(212,175,90,0.18)]">
    <div className="max-w-[1080px] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(212,175,90,0.18)] border border-[rgba(212,175,90,0.18)] rounded-2xl overflow-hidden shadow-xl">
        {[
          { val: "<3s", lbl: "Tempo de resposta" },
          { val: "24/7", lbl: "Disponibilidade total" },
          { val: "-70%", lbl: "Carga de trabalho" },
          { val: "100%", lbl: "Leads respondidos" }
        ].map((item, i) => (
          <div key={i} className="bg-[#081008] p-8 text-center flex flex-col justify-center">
            <div className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl text-[#d4af5a] mb-2 leading-none">
              {item.val}
            </div>
            <div className="text-xs sm:text-sm text-[#93a596] leading-snug">
              {item.lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Compare Component ---
const Compare = () => (
  <section id="comparativo" className="py-24 px-6 bg-[#f7f6f1] text-[#0e1a12]">
    <div className="max-w-[1080px] mx-auto">
      <div className="inline-flex items-center gap-2.5 text-xs text-[#a9812e] uppercase font-mono tracking-widest mb-4">
        <span className="w-5 h-px bg-[#a9812e]"></span> COMPARATIVO
      </div>
      <h2 className="text-3xl sm:text-5xl font-['Barlow_Condensed'] font-black uppercase mb-12 tracking-tight text-[#0e1a12]">
        Humano vs. Agente IA
      </h2>
      <div className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-black/10 text-xs sm:text-sm uppercase font-['Barlow_Condensed'] tracking-wider">
              <th className="p-5 font-bold">Critério</th>
              <th className="p-5 font-bold text-gray-500">Atendente humano</th>
              <th className="p-5 font-bold bg-[#0d1a14] text-[#f0cf7d]">Agente IA PrimeFlow</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 text-sm sm:text-base">
            {[
              { crit: "Disponibilidade", hum: "Horário comercial", ai: "24h, 7 dias por semana", aiCheck: true },
              { crit: "Custo mensal", hum: "Salário + encargos", ai: "Assinatura fixa acessível", aiCheck: true },
              { crit: "Atendimentos simultâneos", hum: "1 por vez", ai: "Ilimitados", aiCheck: true },
              { crit: "Risco trabalhista", hum: "Sim", humRed: true, ai: "Zero", aiCheck: true },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                <td className="p-5 font-semibold">{row.crit}</td>
                <td className={`p-5 ${row.humRed ? 'text-[#cf4a4a] font-bold' : 'text-gray-600'}`}>{row.hum}</td>
                <td className={`p-5 font-bold bg-[#0d1a14]/[0.02] ${row.aiCheck ? 'text-[#a9812e]' : ''}`}>{row.ai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// --- Casos de Uso Component (Tabs) ---
const UseCases = () => {
  const [activeTab, setActiveTab] = useState<'pet' | 'imob' | 'clinica'>('pet');

  return (
    <section id="casos-de-uso" className="py-24 px-6 bg-[#0d1a14] text-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="inline-flex items-center gap-2.5 text-xs text-[#d4af5a] uppercase font-mono tracking-widest mb-4">
          <span className="w-5 h-px bg-[#d4af5a]"></span> CASOS DE USO
        </div>
        <h2 className="text-3xl sm:text-5xl font-['Barlow_Condensed'] font-black uppercase mb-10 tracking-tight">
          A IA falando a língua do seu negócio
        </h2>

        {/* Tab Buttons */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {[
            { id: 'pet', label: 'Pet Shop' },
            { id: 'imob', label: 'Imobiliária' },
            { id: 'clinica', label: 'Clínica' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`font-mono text-xs sm:text-sm px-6 py-3 rounded-full border transition-all cursor-pointer uppercase ${
                activeTab === tab.id
                  ? 'bg-[#d4af5a] border-[#d4af5a] text-[#081008] font-bold shadow-md shadow-[#d4af5a]/20'
                  : 'bg-transparent border-[rgba(212,175,90,0.18)] text-[#93a596] hover:border-[#d4af5a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'pet' && (
            <motion.div 
              key="pet"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-[#142a1f] p-8 sm:p-12 rounded-3xl border border-[rgba(212,175,90,0.18)]"
            >
              <div>
                <h3 className="font-['Barlow_Condensed'] font-black text-3xl sm:text-4xl uppercase mb-4 text-white">Pet Shops</h3>
                <p className="text-[#93a596] text-base sm:text-lg leading-relaxed mb-6">
                  Agende banhos, confirme horários, informe vacinas e tire dúvidas sobre rações e acessórios automaticamente no WhatsApp.
                </p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af5a]" /> Agendamento de banho e tosa 24h</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af5a]" /> Confirmação automática de presença</li>
                </ul>
              </div>
              <div className="max-w-[320px] mx-auto w-full bg-[#0d1a14] border border-[rgba(212,175,90,0.18)] rounded-[22px] p-4 shadow-xl">
                <div className="flex flex-col gap-3">
                  <div className="max-w-[85%] p-3 rounded-[12px] bg-[#1f3a29] text-white text-xs sm:text-sm">Tem banho pra hoje?<span className="block text-[9px] text-white/50 text-right mt-1">10:14</span></div>
                  <div className="max-w-[85%] self-end p-3 rounded-[12px] bg-[#d4af5a] text-[#081008] font-medium text-xs sm:text-sm">Temos sim! Posso agendar para as 15h ou 16:30h. Qual prefere? 🐾<span className="block text-[9px] text-[#081008]/60 text-right mt-1">10:14</span></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'imob' && (
            <motion.div 
              key="imob"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-[#142a1f] p-8 sm:p-12 rounded-3xl border border-[rgba(212,175,90,0.18)]"
            >
              <div>
                <h3 className="font-['Barlow_Condensed'] font-black text-3xl sm:text-4xl uppercase mb-4 text-white">Imobiliárias</h3>
                <p className="text-[#93a596] text-base sm:text-lg leading-relaxed mb-6">
                  Qualifique o lead instantaneamente, filtre por região ou valor, e agende visitas sem nenhuma intervenção humana.
                </p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af5a]" /> Triagem rápida de locação e venda</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af5a]" /> Agendamento direto na agenda do corretor</li>
                </ul>
              </div>
              <div className="max-w-[320px] mx-auto w-full bg-[#0d1a14] border border-[rgba(212,175,90,0.18)] rounded-[22px] p-4 shadow-xl">
                <div className="flex flex-col gap-3">
                  <div className="max-w-[85%] p-3 rounded-[12px] bg-[#1f3a29] text-white text-xs sm:text-sm">Quero ver o apto do centro.<span className="block text-[9px] text-white/50 text-right mt-1">14:22</span></div>
                  <div className="max-w-[85%] self-end p-3 rounded-[12px] bg-[#d4af5a] text-[#081008] font-medium text-xs sm:text-sm">Claro! Você prefere visitar amanhã de manhã ou na quarta à tarde? 🏢<span className="block text-[9px] text-[#081008]/60 text-right mt-1">14:22</span></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'clinica' && (
            <motion.div 
              key="clinica"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-[#142a1f] p-8 sm:p-12 rounded-3xl border border-[rgba(212,175,90,0.18)]"
            >
              <div>
                <h3 className="font-['Barlow_Condensed'] font-black text-3xl sm:text-4xl uppercase mb-4 text-white">Clínicas e Consultórios</h3>
                <p className="text-[#93a596] text-base sm:text-lg leading-relaxed mb-6">
                  Agendamento de consultas 24h por dia, confirmação de convênios, envio de preparos e redução drástica de faltas.
                </p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af5a]" /> Validação instantânea de convênios</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af5a]" /> Redução de absenteísmo com lembretes</li>
                </ul>
              </div>
              <div className="max-w-[320px] mx-auto w-full bg-[#0d1a14] border border-[rgba(212,175,90,0.18)] rounded-[22px] p-4 shadow-xl">
                <div className="flex flex-col gap-3">
                  <div className="max-w-[85%] p-3 rounded-[12px] bg-[#1f3a29] text-white text-xs sm:text-sm">Aceitam Unimed?<span className="block text-[9px] text-white/50 text-right mt-1">09:05</span></div>
                  <div className="max-w-[85%] self-end p-3 rounded-[12px] bg-[#d4af5a] text-[#081008] font-medium text-xs sm:text-sm">Aceitamos! Para qual especialidade você deseja marcar? 🩺<span className="block text-[9px] text-[#081008]/60 text-right mt-1">09:05</span></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// --- Testimonials Component (Social Proof) ---
const Testimonials = () => (
  <section id="depoimentos" className="py-24 px-6 bg-[#081008] border-t border-b border-[rgba(212,175,90,0.18)] text-white">
    <div className="max-w-[1080px] mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2.5 text-xs text-[#d4af5a] uppercase font-mono tracking-widest mb-4">
          <span className="w-5 h-px bg-[#d4af5a]"></span> DEPOIMENTOS
        </div>
        <h2 className="text-3xl sm:text-5xl font-['Barlow_Condensed'] font-black uppercase tracking-tight text-white mb-4">
          O que dizem nossos clientes
        </h2>
        <p className="text-[#93a596] text-sm uppercase tracking-wider">Resultados reais de quem automatizou o WhatsApp com a PrimeFlow.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            quote: "A automação do WhatsApp mudou nosso jogo. Reduzimos o tempo de resposta de horas para segundos e as vendas dispararam.",
            author: "Ricardo Silva",
            role: "Dono",
            company: "Barbearia Elite"
          },
          {
            quote: "Meus pacientes amam a facilidade de agendar consultas a qualquer hora. Nossa equipe agora foca no atendimento humanizado.",
            author: "Dra. Ana Paula",
            role: "Diretora",
            company: "Clínica Estética Soft"
          },
          {
            quote: "Simplesmente essencial. Não perdemos mais nenhum lead fora do horário comercial. O sistema trabalha por nós 24h por dia.",
            author: "Lucas Mendes",
            role: "Gerente de Vendas",
            company: "Mendes Veículos"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-[#142a1f] border border-[rgba(212,175,90,0.18)] rounded-2xl flex flex-col justify-between hover:border-[#d4af5a] transition-all group shadow-xl"
          >
            <div>
              <Quote className="text-[#d4af5a]/30 w-8 h-8 mb-6 group-hover:text-[#d4af5a] transition-colors" />
              <p className="text-[#93a596] text-sm sm:text-base leading-relaxed italic mb-8">
                "{item.quote}"
              </p>
            </div>
            <div className="border-t border-[rgba(212,175,90,0.18)] pt-5">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-1">{item.author}</h4>
              <p className="text-[#d4af5a] text-xs uppercase tracking-widest">
                {item.role} <span className="text-white/30 px-1">•</span> {item.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Final CTA Component ---
const FinalCTA = () => (
  <section id="contato" className="py-32 px-6 bg-[#081008] text-center relative overflow-hidden">
    <div className="max-w-[760px] mx-auto relative z-10">
      <h2 className="text-4xl sm:text-6xl font-['Barlow_Condensed'] font-black uppercase mb-8 tracking-tight text-white leading-[0.95]">
        Seu WhatsApp pode estar<br /><em className="text-[#d4af5a] not-italic">vendendo agora.</em>
      </h2>
      <p className="text-[#93a596] text-base sm:text-lg mb-10 max-w-xl mx-auto">
        Fale com nossa equipe comercial e descubra em minutos como implantar IA no seu atendimento.
      </p>
      <motion.a 
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href="https://wa.me/5516997872988"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#d4af5a] text-[#081008] font-bold text-base uppercase tracking-wider py-5 px-10 rounded-full shadow-2xl shadow-[#d4af5a]/30 hover:bg-[#f0cf7d] transition-all"
      >
        QUERO COMEÇAR AGORA →
      </motion.a>
      
      <div className="mt-12 text-[#93a596] text-sm font-mono tracking-widest flex items-center justify-center gap-6 flex-wrap">
        <span>primeflooww@gmail.com</span>
        <span>•</span>
        <span>+55 16 99787-2988</span>
      </div>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = () => (
  <footer className="py-10 px-6 text-center text-xs text-[#6f8477] bg-[#081008] border-t border-[rgba(212,175,90,0.18)]">
    <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <PrimeFlowLogo size={18} />
        <span className="font-['Barlow_Condensed'] font-bold text-white tracking-wider">PrimeFlow</span>
      </div>
      <div>
        © 2026 PrimeFlow — Inteligência Artificial aplicada ao Atendimento.
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white selection:bg-[#d4af5a] selection:text-[#081008]">
      <Navbar />
      <Hero />
      <Numbers />
      <Compare />
      <UseCases />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
