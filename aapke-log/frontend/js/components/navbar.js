/**
 * AAPKE LOG - Navigation Bar & Quick Role Switcher
 * Redesigned with Civic Blue + Teal + Community Green Palette
 */
import { state } from '../state.js';

export function renderNavbar() {
  const current = state.currentView;
  
  const roleBadges = {
    landing: { label: 'Gateway Portal', color: 'bg-[#173F5F] text-white' },
    society: { label: '🏢 Society: Lokhandwala Residents (Ward K/W)', color: 'bg-[#5B6675] text-white' },
    bmc: { label: '🏛️ BMC Water Management — Prototype', color: 'bg-[#1769AA] text-white' },
    university: { label: '🎓 Demo Tech University Mumbai', color: 'bg-[#2E7D5B] text-white' },
    industry: { label: '🏭 Demo IoT Solutions Pvt Ltd', color: 'bg-[#B7791F] text-white' },
    citizen: { label: '👥 Citizen Explorer (Public Support)', color: 'bg-[#3B7C82] text-white' },
    admin: { label: '🛡️ Mumbai Civic Command Admin', color: 'bg-[#173F5F] text-white' }
  };

  return `
    <header class="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-[#DDE4E8] shadow-xs">
      <!-- Top Civic Prototype Disclaimer Bar -->
      <div class="bg-[#173F5F] text-slate-200 text-xs px-4 py-1.5 flex flex-wrap justify-between items-center border-b border-[#1F547D]">
        <div class="flex items-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-[#53B7B3]"></span>
          <span class="font-medium text-white">AAPKE LOG, AAPKE LIYE, HAMESHA</span>
          <span class="text-slate-400">|</span>
          <span class="text-[#53B7B3] font-medium">“People know their problems. Aapke Log finds who can solve them.”</span>
        </div>
        <div class="text-slate-300 italic text-[11px]">
          Mumbai-focused prototype inspired by publicly available BMC civic complaint data.
        </div>
      </div>

      <!-- Main Navigation -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3 cursor-pointer" onclick="window.app.setView('landing')">
          <div class="w-10 h-10 rounded-xl bg-[#173F5F] flex items-center justify-center shadow-xs border border-[#1F547D]">
            <span class="text-white font-black text-xl tracking-tight">AL</span>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-black text-xl tracking-tight text-[#17212B]">AAPKE LOG</span>
              <span class="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-[#1769AA]/10 text-[#1769AA] border border-[#1769AA]/25">Mumbai BMC</span>
            </div>
            <p class="text-[11px] text-[#667085] font-medium tracking-wide uppercase">AI-Powered Societal Problem Solving</p>
          </div>
        </div>

        <!-- Role Indicator & Quick Evaluator Switcher -->
        <div class="hidden md:flex items-center gap-2">
          <span class="text-xs font-semibold text-[#667085] uppercase tracking-wider">Active Portal:</span>
          <div class="px-3 py-1 rounded-full text-xs font-semibold ${roleBadges[current]?.color || 'bg-[#173F5F] text-white'} shadow-xs">
            ${roleBadges[current]?.label || 'Gateway'}
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2.5">
          <!-- Guided Demo Button (Teal for Special AI/System Actions) -->
          <button onclick="window.app.startGuidedDemo()" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#147D86] hover:bg-[#116870] text-white text-xs font-bold shadow-xs transition">
            <span class="text-[#53B7B3]">⚡</span>
            <span>Live Hackathon Demo</span>
          </button>

          <!-- Admin Button (Secondary: White with #173F5F border) -->
          <button onclick="window.app.setView('admin')" class="px-3 py-1.5 rounded-lg text-xs font-bold border border-[#173F5F] hover:bg-[#F7F9F8] text-[#173F5F] transition ${current === 'admin' ? 'bg-[#173F5F] text-white' : ''}">
            Admin Intelligence
          </button>
        </div>
      </div>

      <!-- Quick Evaluator Role Bar -->
      <div class="bg-[#F7F9F8] border-t border-[#DDE4E8] px-4 py-1.5 overflow-x-auto">
        <div class="max-w-7xl mx-auto flex items-center gap-2 text-xs">
          <span class="text-[11px] font-bold text-[#667085] uppercase tracking-wider whitespace-nowrap">Switch Portal:</span>
          
          <button onclick="window.app.setView('landing')" class="px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition ${current === 'landing' ? 'bg-[#173F5F] text-white shadow-xs' : 'text-[#667085] hover:text-[#17212B] hover:bg-white'}">
            🏠 Gateway
          </button>

          <button onclick="window.app.setView('society')" class="px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition ${current === 'society' ? 'bg-[#173F5F] text-white shadow-xs' : 'text-[#667085] hover:text-[#17212B] hover:bg-white'}">
            🏢 Society (Report / Track)
          </button>

          <button onclick="window.app.setView('bmc')" class="px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition ${current === 'bmc' ? 'bg-[#173F5F] text-white shadow-xs' : 'text-[#667085] hover:text-[#17212B] hover:bg-white'}">
            🏛️ BMC Municipal Solver
          </button>

          <button onclick="window.app.setView('university')" class="px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition ${current === 'university' ? 'bg-[#173F5F] text-white shadow-xs' : 'text-[#667085] hover:text-[#17212B] hover:bg-white'}">
            🎓 University / Students
          </button>

          <button onclick="window.app.setView('industry')" class="px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition ${current === 'industry' ? 'bg-[#173F5F] text-white shadow-xs' : 'text-[#667085] hover:text-[#17212B] hover:bg-white'}">
            🏭 Industry / Startups
          </button>

          <button onclick="window.app.setView('citizen')" class="px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition ${current === 'citizen' ? 'bg-[#173F5F] text-white shadow-xs' : 'text-[#667085] hover:text-[#17212B] hover:bg-white'}">
            👥 Citizen Explorer
          </button>

          <button onclick="window.app.setView('admin')" class="px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition ${current === 'admin' ? 'bg-[#173F5F] text-white shadow-xs' : 'text-[#667085] hover:text-[#17212B] hover:bg-white'}">
            🛡️ Admin Overview
          </button>
        </div>
      </div>
    </header>
  `;
}
