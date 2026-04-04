import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function ServerDashboard() {
  const [activeTab, setActiveTab] = useState('layanan'); // 'layanan', 'transaksi', 'profil'

  // Dummy Data
  const servers = [
    { id: 'MC-7281', name: 'Survival SMP', node: 'Diamond Node', status: 'Active', expire: '12 Mei 2026' },
  ];

  const invoices = [
    { id: 'INV-20260401', date: '01 Apr 2026', total: 225000, status: 'Lunas' },
    { id: 'INV-20260301', date: '01 Mar 2026', total: 225000, status: 'Lunas' },
  ];

  return (
    <Layout>
      <div className="pt-20 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <header className="mb-12 border-b border-white/5 pb-8 mt-12 md:mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tighter uppercase text-on-surface mb-2">
              Client <span className="text-primary">Area</span>
            </h1>
            <p className="text-zinc-400 font-body text-sm">
              Kelola semua layanan, tagihan, dan pengaturan akun kamu di sini.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-surface-container/50 border border-white/5 p-2 rounded-xl backdrop-blur-md">
            <button 
              onClick={() => setActiveTab('layanan')}
              className={`px-4 py-2 rounded-lg font-bold text-sm tracking-widest uppercase transition-all ${activeTab === 'layanan' ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
            >
              Layanan
            </button>
            <button 
              onClick={() => setActiveTab('transaksi')}
              className={`px-4 py-2 rounded-lg font-bold text-sm tracking-widest uppercase transition-all ${activeTab === 'transaksi' ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
            >
              Transaksi
            </button>
            <button 
              onClick={() => setActiveTab('profil')}
              className={`px-4 py-2 rounded-lg font-bold text-sm tracking-widest uppercase transition-all ${activeTab === 'profil' ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
            >
              Profil
            </button>
          </div>
        </header>

        <main>
          {/* TAB 1: LAYANAN SAYA */}
          {activeTab === 'layanan' && (
            <div className="animate-fade-in space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-headline font-bold uppercase tracking-tight text-on-surface">Layanan Aktif</h2>
                <a href="/harga" className="bg-surface-container-high border border-white/10 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">add</span> Tambah
                </a>
              </div>

              {servers.length === 0 ? (
                <div className="text-center py-20 bg-surface-container-low border border-white/5 rounded-2xl">
                  <span className="material-symbols-outlined text-4xl text-zinc-600 mb-4">dns</span>
                  <p className="text-zinc-400 font-body mb-6">Belum ada server yang aktif.</p>
                  <a href="/harga" className="inline-block bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold uppercase text-sm tracking-widest hover:brightness-110 shadow-lg shadow-primary/20">Sewa Sekarang</a>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {servers.map(server => (
                    <div key={server.id} className="bg-surface-container-low border border-white/5 hover:border-primary/30 rounded-2xl p-6 transition-colors group">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                          <span className="material-symbols-outlined">dns</span>
                        </div>
                        <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                          {server.status}
                        </div>
                      </div>
                      <h3 className="text-xl font-headline font-bold text-on-surface truncate">{server.name}</h3>
                      <p className="text-primary text-xs font-bold tracking-widest uppercase mt-1 mb-6">{server.node}</p>
                      
                      <div className="h-px bg-white/5 w-full mb-6 relative">
                        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-r from-transparent to-primary/50"></div>
                      </div>

                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xs text-zinc-500">Kedaluwarsa</span>
                        <span className="text-xs font-bold text-on-surface">{server.expire}</span>
                      </div>

                      <button className="w-full relative group/btn bg-gradient-to-br from-surface-container-high to-surface border border-white/10 hover:border-primary/50 px-4 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all overflow-hidden">
                        <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2 text-on-surface group-hover/btn:text-primary transition-colors">
                          Masuk Pterodactyl <span className="material-symbols-outlined pr-0.5 text-[14px]">open_in_new</span>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TRANSAKSI */}
          {activeTab === 'transaksi' && (
            <div className="animate-fade-in bg-surface-container-low border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h2 className="text-xl font-headline font-bold uppercase tracking-tight text-on-surface">Riwayat Pembayaran</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body text-sm">
                  <thead className="bg-surface-container-high/50 text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                    <tr>
                      <th className="px-6 py-4 font-medium">Invoice ID</th>
                      <th className="px-6 py-4 font-medium">Tanggal</th>
                      <th className="px-6 py-4 font-medium text-right">Total Tagihan</th>
                      <th className="px-6 py-4 font-medium text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {invoices.map((inv, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 font-mono text-zinc-300">{inv.id}</td>
                        <td className="px-6 py-4 text-zinc-400">{inv.date}</td>
                        <td className="px-6 py-4 text-emerald-400 font-mono text-right font-medium">
                          Rp {inv.total.toLocaleString('id-ID')}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border ${inv.status === 'Lunas' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: PROFIL */}
          {activeTab === 'profil' && (
            <div className="animate-fade-in grid md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-headline font-bold uppercase tracking-tight text-on-surface mb-2">Informasi Pribadi</h2>
                  <p className="text-xs text-zinc-500 mb-6">Perbarui nama dan email akun kamu.</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full bg-surface-container border border-white/5 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium" defaultValue="Steve" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Email Akun</label>
                    <input type="email" className="w-full bg-surface-container border border-white/5 rounded-xl px-4 py-3 text-zinc-400 cursor-not-allowed font-medium" defaultValue="steve@minecraft.net" readOnly disabled />
                    <p className="text-[10px] text-zinc-500 mt-2">Untuk mengganti email, harap hubungi support.</p>
                  </div>
                  <button className="bg-primary text-on-primary-container px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:brightness-110 active:scale-95 transition-all mt-4 shadow-lg shadow-primary/20">
                    Simpan Profil
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-low border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-headline font-bold uppercase tracking-tight text-on-surface mb-2">Keamanan</h2>
                  <p className="text-xs text-zinc-500 mb-6">Perbarui kata sandi untuk keamanan akun.</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Kata Sandi Saat Ini</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-surface-container border border-white/5 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Kata Sandi Baru</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-surface-container border border-white/5 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <button className="bg-surface-container-high border border-white/10 text-on-surface hover:bg-white/10 px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest active:scale-95 transition-all mt-4">
                    Update Sandi
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </Layout>
  );
}
