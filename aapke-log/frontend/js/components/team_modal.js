/**
 * AAPKE LOG - Official Team Formation Modal
 * STRICT RULE: Only verified official solvers can form teams.
 * Societies and citizens CANNOT form teams.
 */

import { api } from '../api.js';

export async function renderTeamModal(problemId) {
  const students = await api.getStudents();
  const faculty = await api.getFaculty();
  const solvers = await api.getSolvers();
  const problem = await api.getProblemDetail(problemId);

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto text-xs">
        <div class="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-[#173F5F]/10 text-[#173F5F] border border-[#173F5F]/20">
              Verified Solver Taskforce Formation
            </span>
            <h2 class="text-xl font-black text-slate-900 mt-1">ASSIGN OFFICIAL SOLUTION TEAM</h2>
            <p class="text-xs text-slate-500 font-medium">Problem: ${problem.title} (${problem.id})</p>
          </div>
          <button onclick="window.app.closeModal()" class="text-slate-400 hover:text-slate-700 text-2xl font-bold">✕</button>
        </div>

        <div class="bg-slate-50 border-l-4 border-[#173F5F] p-3.5 rounded-r-xl text-slate-800 leading-relaxed">
          <strong>Official Authority:</strong> Only verified solver organizations (BMC, universities, industry partners) can officially form solution teams. 
          Societies and individual citizens cannot create or assign solution teams.
        </div>

        <form id="form-team-form" onsubmit="window.app.handleTeamSubmit(event, '${problem.id}')" class="space-y-4">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Task Force Title:</label>
            <input type="text" id="tm-title" required value="Official Multidisciplinary Taskforce - ${problem.ai_category}" class="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-slate-900 focus:ring-2 focus:ring-[#173F5F] focus:outline-none">
          </div>

          <!-- Member 1: Municipal Officer -->
          <div class="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
            <span class="text-[11px] font-bold uppercase text-[#1769AA] tracking-wider">1. Municipal Authority Lead (BMC)</span>
            <div class="grid grid-cols-2 gap-2">
              <input type="text" id="tm-m1-name" required value="Er. Arvind Patil" placeholder="Officer Name" class="px-3 py-1.5 rounded-lg border border-slate-300 font-medium">
              <input type="text" id="tm-m1-org" required value="BMC Water Management — Prototype" placeholder="Organization" class="px-3 py-1.5 rounded-lg border border-slate-300 font-medium">
            </div>
            <input type="text" id="tm-m1-role" required value="Municipal Engineering Lead & Site Jurisdiction" class="w-full px-3 py-1.5 rounded-lg border border-slate-300 font-medium text-slate-600">
          </div>

          <!-- Member 2: Faculty Research Mentor -->
          <div class="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
            <span class="text-[11px] font-bold uppercase text-[#2E7D5B] tracking-wider">2. Faculty Academic Mentor (University)</span>
            <div class="grid grid-cols-2 gap-2">
              <input type="text" id="tm-m2-name" required value="${faculty[0]?.name || 'Dr. Alok Verma'}" placeholder="Faculty Mentor" class="px-3 py-1.5 rounded-lg border border-slate-300 font-medium">
              <input type="text" id="tm-m2-org" required value="${faculty[0]?.university_name || 'Demo Tech University Mumbai'}" placeholder="University" class="px-3 py-1.5 rounded-lg border border-slate-300 font-medium">
            </div>
            <input type="text" id="tm-m2-role" required value="Academic Research Lead & Hydraulic Diagnostics" class="w-full px-3 py-1.5 rounded-lg border border-slate-300 font-medium text-slate-600">
          </div>

          <!-- Members 3 & 4: Students -->
          <div class="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
            <span class="text-[11px] font-bold uppercase text-[#2E7D5B] tracking-wider">3. Student Researchers & Engineers (University)</span>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="text-[10px] text-slate-500 font-bold block mb-1">Student Lead:</label>
                <select id="tm-m3-student" class="w-full px-2 py-1.5 rounded-lg border border-slate-300 font-medium">
                  ${students.map(st => `
                    <option value="${st.name}|${st.major}|${st.skills.join(', ')}">${st.name} (${st.major})</option>
                  `).join('')}
                </select>
              </div>

              <div>
                <label class="text-[10px] text-slate-500 font-bold block mb-1">Student Associate:</label>
                <select id="tm-m4-student" class="w-full px-2 py-1.5 rounded-lg border border-slate-300 font-medium">
                  ${students.slice(1).map(st => `
                    <option value="${st.name}|${st.major}|${st.skills.join(', ')}">${st.name} (${st.major})</option>
                  `).join('')}
                </select>
              </div>
            </div>
          </div>

          <!-- Member 5: Industry Technology Specialist -->
          <div class="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
            <span class="text-[11px] font-bold uppercase text-[#B7791F] tracking-wider">4. Industry Technology Specialist (Company)</span>
            <div class="grid grid-cols-2 gap-2">
              <input type="text" id="tm-m5-name" required value="Nikhil Agarwal" placeholder="Industry Specialist" class="px-3 py-1.5 rounded-lg border border-slate-300 font-medium">
              <input type="text" id="tm-m5-org" required value="Demo IoT Solutions Pvt Ltd" placeholder="Company Name" class="px-3 py-1.5 rounded-lg border border-slate-300 font-medium">
            </div>
            <input type="text" id="tm-m5-role" required value="IoT Sensor Telemetry & Acoustic Clamp Hardware" class="w-full px-3 py-1.5 rounded-lg border border-slate-300 font-medium text-slate-600">
          </div>

          <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button type="button" onclick="window.app.closeModal()" class="btn-secondary px-4 py-2 font-bold">
              Cancel
            </button>
            <button type="submit" class="btn-primary px-5 py-2 font-bold shadow-md transition">
              Mobilize Official Team
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
