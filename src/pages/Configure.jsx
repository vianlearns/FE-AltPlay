import Layout from '../components/Layout';
import { useState } from 'react';

export default function Configure() {
  const [env, setEnv] = useState('Java');
  const [version, setVersion] = useState('Minecraft 1.20.1 (Terbaru)');
  const [region, setRegion] = useState('Asia (Singapura)');
  const [annualDiscount, setAnnualDiscount] = useState(true);
  const [isDeploying, setIsDeploying] = useState(false);

  // Defaulting to Diamond Node values for prototype
  const basePrice = 225000;
  const finalPrice = annualDiscount ? basePrice * 0.85 : basePrice;

  const handleDeploy = (e) => {
    e.preventDefault();
    setIsDeploying(true);
    setTimeout(() => {
      window.location.href = '/server';
    }, 2000);
  };

  return (
    <Layout>
      <main className="pt-12 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section / Title */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary-fixed-dim font-headline font-bold tracking-widest text-xs uppercase">Tahap Konfigurasi</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
          </div>
          <h1 className="text-5xl font-headline font-black tracking-tighter text-on-surface mb-4 uppercase">BANGUN DUNIA KAMU</h1>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">Sesuaikan server performa tinggi kamu bareng ALTPLAY. Hardware enterprise, liquid cooled, dan di-optimasi biar main tanpa lag.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Config Forms */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Server Type Selector */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-headline font-bold text-on-surface">1. Pilih Environment</h2>
                <span className="bg-secondary-container/10 text-secondary-fixed-dim text-[10px] px-2 py-0.5 rounded border border-secondary-fixed-dim/20 font-bold uppercase tracking-tighter">Diamond Node</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Java Edition */}
                <div 
                  onClick={() => setEnv('Java')}
                  className={`group relative p-6 border rounded-xl cursor-pointer transition-all duration-300 ${env === 'Java' ? 'bg-surface-container-high border-primary/50 shadow-[0_0_20px_rgba(0,209,255,0.1)]' : 'bg-surface-container-low border-white/5 hover:bg-surface-container-high'}`}
                >
                  <div className={`absolute top-4 right-4 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${env === 'Java' ? 'border-primary' : 'border-outline-variant'}`}>
                    {env === 'Java' && <div className="h-2.5 w-2.5 bg-primary rounded-full"></div>}
                  </div>
                  <div className={`mb-4 transition-colors ${env === 'Java' ? 'text-primary' : 'text-zinc-500 group-hover:text-primary/70'}`}>
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>coffee</span>
                  </div>
                  <h3 className="text-lg font-headline font-bold text-on-surface mb-1">Java Edition</h3>
                  <p className="text-sm text-on-surface-variant">Optimal buat Paper, Purpur, dan modpack Forge/Fabric.</p>
                </div>
                {/* Bedrock Edition */}
                <div 
                  onClick={() => setEnv('Bedrock')}
                  className={`group relative p-6 border rounded-xl cursor-pointer transition-all duration-300 ${env === 'Bedrock' ? 'bg-surface-container-high border-primary/50 shadow-[0_0_20px_rgba(0,209,255,0.1)]' : 'bg-surface-container-low border-white/5 hover:bg-surface-container-high'}`}
                >
                  <div className={`absolute top-4 right-4 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${env === 'Bedrock' ? 'border-primary' : 'border-outline-variant'}`}>
                    {env === 'Bedrock' && <div className="h-2.5 w-2.5 bg-primary rounded-full"></div>}
                  </div>
                  <div className={`mb-4 transition-colors ${env === 'Bedrock' ? 'text-primary' : 'text-zinc-500 group-hover:text-primary/70'}`}>
                    <span className="material-symbols-outlined text-4xl">smartphone</span>
                  </div>
                  <h3 className="text-lg font-headline font-bold text-on-surface mb-1">Bedrock / PE</h3>
                  <p className="text-sm text-on-surface-variant">Support buat Windows 10, Xbox, dan HP.</p>
                </div>
              </div>
            </section>

            {/* Technical Specs Display */}
            <section className="bg-surface-container-low rounded-2xl p-8 pixel-dither relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-headline font-bold text-on-surface mb-8">2. Hardware Specs</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Memori</span>
                    <div className="text-2xl font-headline font-extrabold text-on-surface">8GB DDR5</div>
                    <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_8px_rgba(76,214,255,0.5)] w-[65%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Processing</span>
                    <div className="text-2xl font-headline font-extrabold text-on-surface">4 vCore</div>
                    <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_8px_rgba(76,214,255,0.5)] w-[40%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Storage</span>
                    <div className="text-2xl font-headline font-extrabold text-on-surface">100GB NVMe</div>
                    <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_8px_rgba(76,214,255,0.5)] w-[25%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Koneksi</span>
                    <div className="text-2xl font-headline font-extrabold text-on-surface">10 Gbps</div>
                    <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary-fixed-dim to-secondary shadow-[0_0_8px_rgba(0,227,131,0.5)] w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Software & Version */}
            <section>
              <h2 className="text-xl font-headline font-bold text-on-surface mb-6">3. Version Control</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 px-1">Versi Game</label>
                  <select 
                    value={version} 
                    onChange={(e) => setVersion(e.target.value)}
                    className="bg-surface-container-high border-none rounded-lg text-on-surface text-sm py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all cursor-pointer appearance-none outline-none"
                  >
                    <option>Minecraft 1.20.1 (Terbaru)</option>
                    <option>Minecraft 1.19.4</option>
                    <option>Minecraft 1.18.2</option>
                    <option>Minecraft 1.16.5</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 px-1">Tipe Software</label>
                  <select className="bg-surface-container-high border-none rounded-lg text-on-surface text-sm py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all cursor-pointer appearance-none outline-none">
                    {env === 'Java' ? (
                      <>
                        <option>Paper (Recomended)</option>
                        <option>Purpur</option>
                        <option>Spigot</option>
                        <option>Vanilla</option>
                        <option>Forge</option>
                      </>
                    ) : (
                      <>
                        <option>Bedrock Dedicated Server</option>
                        <option>Geyser (Cross-play)</option>
                        <option>PocketMine-MP</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 px-1">Lokasi</label>
                  <select 
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="bg-surface-container-high border-none rounded-lg text-on-surface text-sm py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all cursor-pointer appearance-none outline-none"
                  >
                    <option>Asia (Singapura)</option>
                    <option>Amerika Utara (Timur)</option>
                    <option>Eropa (Frankfurt)</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Payment Details */}
            <section className="space-y-8">
              <h2 className="text-xl font-headline font-bold text-on-surface">4. Security & Billing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Nama Pemegang Kartu</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg text-on-surface py-3 px-4 focus:bg-surface-container-high transition-colors outline-none" placeholder="STEVE CRAFT" type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Nomor Kartu</label>
                    <div className="relative">
                      <input className="w-full bg-surface-container-low border-none rounded-lg text-on-surface py-3 px-4 focus:bg-surface-container-high transition-colors outline-none" placeholder="**** **** **** 4242" type="text" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                        <div className="h-6 w-10 bg-zinc-800 rounded"></div>
                        <div className="h-6 w-10 bg-zinc-800 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Expired</label>
                      <input className="w-full bg-surface-container-low border-none rounded-lg text-on-surface py-3 px-4 focus:bg-surface-container-high transition-colors text-center outline-none" placeholder="BB / TT" type="text" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">CVC</label>
                      <input className="w-full bg-surface-container-low border-none rounded-lg text-on-surface py-3 px-4 focus:bg-surface-container-high transition-colors text-center outline-none" placeholder="***" type="text" />
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-high/40 p-6 rounded-xl border border-white/5 space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <span className="material-symbols-outlined text-xl">shield</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Data Encryption Level 3</p>
                      <p className="text-on-surface-variant text-xs">Data pembayaran kamu aman dan ter-enkripsi.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="bg-secondary-container/10 text-secondary-fixed-dim p-2 rounded-lg">
                      <span className="material-symbols-outlined text-xl">speed</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Instant Provisioning</p>
                      <p className="text-on-surface-variant text-xs">Mesin ALTPLAY siap cuma dalam waktu 45 detik.</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        checked={annualDiscount}
                        onChange={(e) => setAnnualDiscount(e.target.checked)}
                        className="rounded border border-white/10 bg-surface-container-highest text-primary focus:ring-0 cursor-pointer w-4 h-4" 
                        type="checkbox" 
                      />
                      <span className="text-xs text-on-surface-variant group-hover:text-on-surface transition-colors">Diskon 15% buat billing tahunan</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Summary Card */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="glass-card rounded-2xl p-8 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#131313]/90">
              <div className="flex justify-between items-start mb-8">
                <div className="flex flex-col gap-2">
                  <img src="/ALTPLAY-logo.png" alt="ALTPLAY" className="h-6 w-auto self-start" />
                  <p className="text-xs text-primary-fixed-dim font-bold tracking-widest uppercase">ALTPLAY Pro</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border border-primary/30">One-click setup</span>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Server Core</span>
                  <span className="font-bold text-on-surface">Diamond Node</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Environment</span>
                  <span className="font-bold text-on-surface">{env}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Versi Game</span>
                  <span className="font-bold text-on-surface truncate max-w-[120px] text-right" title={version}>{version}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Lokasi</span>
                  <span className="font-bold text-on-surface truncate max-w-[120px] text-right">{region}</span>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-between items-end">
                  <span className="text-zinc-500 font-headline font-bold uppercase tracking-widest text-xs mb-2">Total /bln</span>
                  <div className="text-right">
                    {annualDiscount && <span className="block text-zinc-500 line-through text-xs">Rp {new Intl.NumberFormat('id-ID').format(basePrice)}</span>}
                    <span className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tighter">Rp {new Intl.NumberFormat('id-ID').format(finalPrice)}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleDeploy}
                disabled={isDeploying}
                className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-headline font-black text-lg tracking-tighter uppercase shadow-[0_10px_30px_-5px_rgba(0,209,255,0.4)] hover:shadow-[0_15px_40px_-5px_rgba(0,209,255,0.6)] disabled:opacity-75 disabled:shadow-none active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                {isDeploying ? (
                  <span>Lagi Setup...</span>
                ) : (
                  <>
                    <span>Mulai Sekarang</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 700" }}>bolt</span>
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-zinc-500 mt-6 leading-relaxed uppercase tracking-wider">
                Dengan mulai, kamu setuju sama <a className="underline hover:text-primary transition-colors" href="#">Service Protocol</a> dan <span className="text-secondary-fixed-dim">Jaminan SLA</span> kami.
              </p>
            </div>

            {/* Subtle Decorative Element */}
            <div className="mt-8 px-4 py-6 rounded-xl bg-surface-container-lowest/50 border border-white/5 flex items-center gap-4">
              <div className="h-10 w-10 min-w-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3ebphHkMxPcBn48rEDkR43G7d70MEojQUy57KANXd8DB242tGP8Oa_QhLg-fwQpwJyHMg1IMze-cVJ56ROGb5Los6ZfM6IEdCdb82dVvxN_YYN1qHCwQ9F20bXrN6j0UKta2yi_IRQERf5jqeeN6d-hLMj64gSU10-Zr2_7GhdDvTTCOs-gGz7q_p3qqMfbyCqRvtcQdfk8C1IEvXkmnspbTe1wH0XWVpNrJjOGOd_lniPOQTukoDsuViygzQlwNvXyH4XwomHKL7" />
              </div>
              <div>
                <p className="text-xs text-on-surface italic leading-tight">"Latensi paling mantap yang pernah gue coba selama 10 tahun."</p>
                <p className="text-[10px] font-bold text-primary tracking-widest uppercase mt-1">— Owner @ VoidNetwork</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
