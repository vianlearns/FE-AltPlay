import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const nodeOptions = {
  iron: {
    name: 'Iron Node',
    price: 75000,
    ram: '4GB DDR4',
    ramPercent: 25,
    core: '2 vCore',
    corePercent: 25,
    storage: '40GB NVMe',
    storagePercent: 15,
    network: '1 Gbps',
    networkPercent: 10,
    desc: 'Kuat buat SMP vanilla bareng temen-temen. Up to 20 Player.',
    colorBase: 'border-zinc-500 hover:border-zinc-300',
    colorActive: 'border-zinc-300 bg-surface-container-high shadow-[0_0_20px_rgba(255,255,255,0.05)]',
    textHighlight: 'text-zinc-300',
    iconColor: 'bg-zinc-800 text-zinc-300'
  },
  diamond: {
    name: 'Diamond Node',
    price: 225000,
    ram: '8GB DDR5',
    ramPercent: 50,
    core: '4 vCore',
    corePercent: 50,
    storage: '100GB NVMe',
    storagePercent: 40,
    network: '10 Gbps',
    networkPercent: 50,
    desc: 'Lancar buat modpack berat & banyak plugin. Player Slot Unlimited.',
    colorBase: 'border-white/5 hover:border-primary/50',
    colorActive: 'border-primary bg-surface-container-high shadow-[0_0_20px_rgba(0,209,255,0.1)]',
    textHighlight: 'text-primary',
    iconColor: 'bg-primary/20 text-primary'
  },
  netherite: {
    name: 'Netherite Node',
    price: 450000,
    ram: '16GB DDR5',
    ramPercent: 100,
    core: '8 vCore',
    corePercent: 100,
    storage: '250GB NVMe',
    storagePercent: 100,
    network: 'Unlimited',
    networkPercent: 100,
    desc: 'Buat server komunitas gede. Resource mentok kanan.',
    colorBase: 'border-white/5 hover:border-secondary-fixed-dim/50',
    colorActive: 'border-secondary-fixed-dim bg-surface-container-high shadow-[0_0_20px_rgba(0,227,131,0.1)]',
    textHighlight: 'text-secondary-fixed-dim',
    iconColor: 'bg-secondary-fixed-dim/20 text-secondary-fixed-dim'
  }
};

const addonOptions = [
  { id: 'backup', name: 'Daily Auto Backup', desc: 'Backup off-site 7 hari.', price: 45000 },
  { id: 'ip', name: 'Dedicated IP', desc: 'Port bawaan 25565 wajib buat Bungee.', price: 75000 },
  { id: 'modpack', name: 'Modpack Manager', desc: 'Instal modpack CurseForge mudah.', price: 25000 }
];

export default function Configure() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(() => {
    const s = searchParams.get('step');
    return s ? parseInt(s) : 1;
  });
  const [selectedNode, setSelectedNode] = useState('diamond');
  const [env, setEnv] = useState('Java');
  const [version, setVersion] = useState('Minecraft 1.21.1 (Terbaru)');
  const [region, setRegion] = useState('Jakarta (ID)');
  const [addons, setAddons] = useState({ backup: false, ip: false, modpack: false });
  const [billingCycle, setBillingCycle] = useState(1); // 1, 3, 6, 12 months
  const [promoCode, setPromoCode] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);

  useEffect(() => {
    // Parsing URL Parameters untuk Pre-select
    const tier = searchParams.get('tier');
    if (tier && ['iron', 'diamond', 'netherite'].includes(tier.toLowerCase())) {
      setSelectedNode(tier.toLowerCase());
    }

    const addonsList = searchParams.get('addons');
    if (addonsList) {
      const active = addonsList.split(',');
      setAddons(prev => ({
        ...prev,
        backup: active.includes('backup'),
        ip: active.includes('ip'),
        modpack: active.includes('modpack')
      }));
    }

    const billing = searchParams.get('billing');
    if (billing === 'yearly') {
      setBillingCycle(12);
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const activeNode = nodeOptions[selectedNode];

  const calculateTotal = () => {
    let addonsTotal = 0;
    if (addons.backup) addonsTotal += addonOptions[0].price;
    if (addons.ip) addonsTotal += addonOptions[1].price;
    if (addons.modpack) addonsTotal += addonOptions[2].price;

    const basePerMonth = activeNode.price + addonsTotal;
    const rawTotal = basePerMonth * billingCycle;

    // Diskon berdasarkan bulan: 3 bln (5%), 6 bln (10%), 12 bln (15%)
    let discountRate = 0;
    if (billingCycle === 3) discountRate = 0.05;
    else if (billingCycle === 6) discountRate = 0.10;
    else if (billingCycle === 12) discountRate = 0.15;

    // Potongan ekstra dari kupon simulasi
    if (promoCode.toUpperCase() === 'ALTPLAY20') {
      discountRate += 0.20;
    }

    const finalTotal = rawTotal * (1 - discountRate);

    return {
      monthlyBase: basePerMonth,
      rawTotal: rawTotal,
      discountRate: discountRate,
      final: finalTotal
    };
  };

  const { monthlyBase, rawTotal, discountRate, final: finalPrice } = calculateTotal();

  const handleDeploy = (e) => {
    e.preventDefault();
    if (step < 4) return;

    // TODO: Integrasi Payment Gateway Midtrans (Snap)
    // window.snap.pay(transactionToken, { onSuccess: ... })

    setIsDeploying(true);
    setTimeout(() => {
      window.location.href = '/server';
    }, 2000);
  };

  const toggleAddon = (id) => {
    setAddons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const nextStep = () => { if (step < 4) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };

  const getStepStatus = (idx) => {
    if (step > idx) return 'text-primary border-primary bg-primary/10';
    if (step === idx) return 'text-on-surface border-white/20 bg-surface-container-high shadow-lg';
    return 'text-zinc-600 border-white/5 opacity-50';
  };

  return (
    <Layout>
      <main className="pt-8 md:pt-12 pb-20 px-4 md:px-6 max-w-[1400px] mx-auto min-h-screen font-body">

        {/* Progress Bar Header */}
        <header className="mb-10 lg:mb-16 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-headline font-black tracking-tighter text-on-surface mb-8 uppercase">Setup Server</h1>

          <div className="relative z-10 w-full px-2">
            <ul className="flex items-center justify-between w-full relative">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className={`flex items-center ${num !== 4 ? 'w-full' : ''}`}>
                  <div className="relative flex flex-col items-center group cursor-pointer" onClick={() => { if (num < step) setStep(num); }}>
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base border transition-all duration-300 z-10 relative ${getStepStatus(num)}`}>
                      {step > num ? <span className="material-symbols-outlined text-[18px]">check</span> : num}
                    </div>
                    <span className={`absolute top-12 text-[9px] md:text-[10px] font-bold uppercase tracking-widest hidden sm:block whitespace-nowrap ${step === num ? 'text-on-surface' : 'text-zinc-600'}`}>
                      {num === 1 ? 'Mesin & Addons' : num === 2 ? 'Environment' : num === 3 ? 'Lokasi' : 'Konfirmasi'}
                    </span>
                  </div>
                  {num !== 4 && (
                    <div className={`flex-1 h-1 transition-all duration-500 mx-2 md:mx-4 rounded-full ${step > num ? 'bg-primary' : 'bg-white/10'}`}></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Config Steps */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div className="flex-1">

              {/* STEP 1: Pilih Power Node & Addons */}
              {step === 1 && (
                <section className="animate-fade-in space-y-12">
                  <div>
                    <h2 className="text-2xl font-headline font-black uppercase text-on-surface mb-6">Pilih Kekuatan Mesin</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                      {Object.entries(nodeOptions).map(([key, node]) => (
                        <div
                          key={key}
                          onClick={() => setSelectedNode(key)}
                          className={`p-4 md:p-6 border rounded-2xl cursor-pointer transition-all duration-300 relative group flex flex-col h-full ${selectedNode === key ? node.colorActive : `bg-surface-container-low ${node.colorBase}`}`}
                        >
                          {selectedNode === key && (
                            <div className="absolute top-4 right-4 text-xs font-bold uppercase">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'inherit' }}>check_circle</span>
                            </div>
                          )}

                          <div className="mb-4">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500">{key} Tier</span>
                            <h3 className={`text-xl font-headline font-black mt-1 ${selectedNode === key ? node.textHighlight : 'text-on-surface'}`}>{node.name}</h3>
                          </div>

                          <div className="text-xl md:text-2xl font-black mb-4 text-on-surface">
                            Rp {new Intl.NumberFormat('id-ID').format(node.price)}<span className="text-xs text-zinc-500 font-medium">/bln</span>
                          </div>

                          <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                            {node.desc}
                          </p>

                          <div className="w-full bg-surface-container-highest/50 h-1.5 rounded-full overflow-hidden mt-auto">
                            <div className={`h-full transition-all duration-1000 bg-current ${node.textHighlight}`} style={{ width: `${node.ramPercent}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware Specs Visualizer */}
                  <div className="bg-surface-container-low border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                    <h3 className="text-lg font-headline font-bold mb-6 text-on-surface relative z-10 flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeNode.iconColor}`}>
                        <span className="material-symbols-outlined text-[16px]">memory</span>
                      </span>
                      Spek Hardware {activeNode.name}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Memori</span>
                        <div className="text-xl md:text-2xl font-headline font-black text-on-surface truncate">{activeNode.ram}</div>
                        <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden hidden md:block">
                          <div className={`h-full transition-all duration-700 bg-current ${activeNode.textHighlight}`} style={{ width: `${activeNode.ramPercent}%` }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">vCore CPU</span>
                        <div className="text-xl md:text-2xl font-headline font-black text-on-surface truncate">{activeNode.core}</div>
                        <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden hidden md:block">
                          <div className={`h-full transition-all duration-700 bg-current ${activeNode.textHighlight}`} style={{ width: `${activeNode.corePercent}%` }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Penyimpanan</span>
                        <div className="text-xl md:text-2xl font-headline font-black text-on-surface truncate">{activeNode.storage}</div>
                        <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden hidden md:block">
                          <div className={`h-full transition-all duration-700 bg-current ${activeNode.textHighlight}`} style={{ width: `${activeNode.storagePercent}%` }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Jaringan</span>
                        <div className="text-xl md:text-2xl font-headline font-black text-on-surface truncate">{activeNode.network}</div>
                        <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden hidden md:block">
                          <div className={`h-full transition-all duration-700 bg-current ${activeNode.textHighlight}`} style={{ width: `${activeNode.networkPercent}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/5 w-full my-8"></div>

                  {/* Add-ons Section */}
                  <div>
                    <h2 className="text-2xl font-headline font-black uppercase text-on-surface mb-2">Add-ons Opsional</h2>
                    <p className="text-zinc-400 text-sm mb-6">Tambah kekuatan ekstra biar pengelolaan server makin mantap.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {addonOptions.map((addon) => (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-4 md:p-5 rounded-xl border flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 transition-all cursor-pointer group select-none hover:-translate-y-0.5 active:scale-[0.99] ${addons[addon.id] ? 'bg-surface-container border-primary/50 shadow-[0_0_15px_rgba(0,209,255,0.15)]' : 'bg-surface-container-low border-white/5 hover:bg-surface-container hover:border-white/20'}`}
                        >
                          <div className="flex items-center lg:items-start gap-4">
                            <div className="shrink-0 pt-0.5">
                              <input
                                type="checkbox"
                                checked={addons[addon.id]}
                                readOnly
                                className="w-5 h-5 rounded border-white/10 bg-surface-container-highest text-primary focus:ring-0 cursor-pointer pointer-events-none"
                              />
                            </div>
                            <div>
                              <h4 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors text-sm md:text-base">{addon.name}</h4>
                              <p className="text-[11px] text-zinc-500 mt-0.5 leading-tight">{addon.desc}</p>
                            </div>
                          </div>
                          <div className="text-primary font-bold text-xs md:text-sm whitespace-nowrap lg:mt-auto lg:pt-2">
                            + Rp {new Intl.NumberFormat('id-ID').format(addon.price)}<span className="text-[10px] text-zinc-500">/bln</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 2: Environment */}
              {step === 2 && (
                <section className="animate-fade-in space-y-8">
                  <h2 className="text-2xl font-headline font-black uppercase text-on-surface mb-6">Environment & Game</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Java */}
                    <div
                      onClick={() => setEnv('Java')}
                      className={`group p-6 border rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 ${env === 'Java' ? 'bg-surface-container border-primary/50 shadow-[0_0_20px_rgba(0,209,255,0.1)]' : 'bg-surface-container-low border-white/5 hover:border-primary/20'}`}
                    >
                      <div className={`p-3 rounded-lg transition-colors ${env === 'Java' ? 'bg-primary/20 text-primary' : 'bg-surface-container-highest text-zinc-500'}`}>
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>coffee</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-on-surface">Java Edition</h4>
                        <p className="text-xs text-on-surface-variant flex items-center gap-2 mt-1">PC / Mac / Linux <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[9px] font-bold">POPULER</span></p>
                      </div>
                      <div className="ml-auto">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${env === 'Java' ? 'border-primary' : 'border-zinc-600'}`}>
                          {env === 'Java' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                        </div>
                      </div>
                    </div>

                    {/* Bedrock */}
                    <div
                      onClick={() => setEnv('Bedrock')}
                      className={`group p-6 border rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 ${env === 'Bedrock' ? 'bg-surface-container border-primary/50 shadow-[0_0_20px_rgba(0,209,255,0.1)]' : 'bg-surface-container-low border-white/5 hover:border-primary/20'}`}
                    >
                      <div className={`p-3 rounded-lg transition-colors ${env === 'Bedrock' ? 'bg-primary/20 text-primary' : 'bg-surface-container-highest text-zinc-500'}`}>
                        <span className="material-symbols-outlined text-2xl">smartphone</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-on-surface">Bedrock / PE</h4>
                        <p className="text-xs text-on-surface-variant mt-1">Windows / Console / HP</p>
                      </div>
                      <div className="ml-auto">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${env === 'Bedrock' ? 'border-primary' : 'border-zinc-600'}`}>
                          {env === 'Bedrock' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 px-1">Versi Game</label>
                      <select
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}
                        className="bg-surface-container-low border border-white/5 rounded-xl text-on-surface text-sm py-4 px-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container transition-all cursor-pointer appearance-none outline-none"
                      >
                        <option>Minecraft 1.21.1 (Terbaru)</option>
                        <option>Minecraft 1.20.1 (Populer)</option>
                        <option>Minecraft 1.16.5</option>
                        <option>Minecraft 1.12.2</option>
                        <option>Minecraft 1.8.8</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 px-1">Tipe Software</label>
                      <select className="bg-surface-container-low border border-white/5 rounded-xl text-on-surface text-sm py-4 px-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container transition-all cursor-pointer appearance-none outline-none">
                        {env === 'Java' ? (
                          <>
                            <option>Paper (Recomended)</option>
                            <option>Purpur</option>
                            <option>Forge</option>
                          </>
                        ) : (
                          <>
                            <option>Bedrock Dedicated Server</option>
                            <option>Geyser (Cross-play)</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 3: Lokasi Server */}
              {step === 3 && (
                <section className="animate-fade-in space-y-10">
                  <div>
                    <h2 className="text-2xl font-headline font-black uppercase text-on-surface mb-2">Lokasi Server</h2>
                    <p className="text-zinc-400 text-sm mb-6">Pilih lokasi Node terdekat dengan player kamu buat ping terendah.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['Jakarta (ID)', 'Surabaya (ID)', 'Singapura (SG)', 'Tokyo (JP)'].map((loc) => (
                        <div
                          key={loc}
                          onClick={() => setRegion(loc)}
                          className={`p-4 border rounded-xl cursor-pointer text-center transition-all duration-300 ${region === loc ? 'bg-primary/10 border-primary text-primary' : 'bg-surface-container-low border-white/5 text-zinc-400 hover:text-white'}`}
                        >
                          <span className="material-symbols-outlined text-3xl mb-2 flex justify-center">public</span>
                          <h4 className="font-bold text-sm tracking-tight">{loc}</h4>
                          <div className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">Antrean Rendah</div>
                        </div>
                      ))}
                      <div className="p-4 border rounded-xl text-center opacity-50 grayscale cursor-not-allowed border-white/5">
                        <span className="material-symbols-outlined text-3xl mb-2 flex justify-center text-zinc-500">public</span>
                        <h4 className="font-bold text-sm text-zinc-500">Frankfurt, EU</h4>
                        <div className="text-[10px] text-zinc-600 font-bold uppercase mt-1">Full Capacity</div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 4: Konfirmasi */}
              {step === 4 && (
                <section className="animate-fade-in space-y-8">
                  <h2 className="text-2xl font-headline font-black uppercase text-on-surface mb-6">Konfirmasi Pesanan</h2>
                  <div className="bg-surface-container-high/40 p-6 rounded-2xl border border-white/5 space-y-4">
                    <div className="flex items-start gap-4 text-sm">
                      <div className="bg-primary/20 text-primary p-2 rounded-lg shrink-0">
                        <span className="material-symbols-outlined text-xl">payments</span>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface mb-1">Pilih Metode Pembayaran</p>
                        <p className="text-on-surface-variant text-xs leading-relaxed">
                          Pesanan akan diproses instan setelah pembayaran diverifikasi (Qris/Gopay/Virtual Account).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 max-w-xl">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Siklus Tagihan</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[1, 3, 6, 12].map(months => (
                          <div
                            key={months}
                            onClick={() => setBillingCycle(months)}
                            className={`p-3 border rounded-xl cursor-not-allowed md:cursor-pointer text-center transition-all ${billingCycle === months ? 'bg-primary border-primary text-on-primary' : 'bg-surface-container-low border-white/5 text-zinc-400'}`}
                          >
                            <div className="font-bold text-sm">{months} Bln</div>
                            {months >= 3 && <div className="text-[9px] font-black uppercase mt-1">Hemat {months === 3 ? '5' : months === 6 ? '10' : '15'}%</div>}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Kode Kupon</label>
                      <div className="flex gap-3">
                        <input
                          className="flex-1 bg-surface-container-low border border-white/5 rounded-xl text-on-surface py-3 px-4 focus:ring-1 focus:ring-primary outline-none font-mono text-sm"
                          placeholder="CONTOH: ALTPLAY20"
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button className="bg-surface-container-high px-6 rounded-xl font-bold uppercase text-xs">Cek</button>
                      </div>
                    </div>
                  </div>
                </section>
              )}

            </div>

            {/* Navigation Flow Buttons */}
            <div className="mt-12 flex justify-between items-center pt-6 border-t border-white/5">
              <button
                onClick={prevStep}
                className={`py-3 px-6 rounded-xl font-headline font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-2 ${step === 1 ? 'opacity-0 pointer-events-none' : (step === 4 ? 'hidden md:flex' : 'flex')} text-zinc-400 hover:text-white`}
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span> Kembali
              </button>

              {step < 4 && (
                <button
                  onClick={nextStep}
                  className="py-3 px-8 rounded-xl bg-surface-container-high text-on-surface border border-white/10 hover:bg-white/10 font-headline font-bold text-sm tracking-widest uppercase transition-all active:scale-95 flex items-center gap-2 shadow-lg"
                >
                  Lanjut <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Sticky Summary Sidebar - Optional Mobile Visibility */}
          <aside className={`${step === 4 ? 'block' : 'hidden lg:block'} lg:col-span-4 sticky top-24 animate-fade-in`}>
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl bg-[#131313]/90 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>

              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <img src="/ALTPLAY-logo.webp" alt="ALTPLAY" className="h-8 w-auto brightness-0 invert object-contain" />
                  <div className="flex flex-col -space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Summary</span>
                    <h3 className="text-lg font-headline font-black text-on-surface uppercase tracking-tighter">{activeNode.name}</h3>
                  </div>
                </div>
                <span className="ml-auto bg-primary/10 text-primary px-2.5 py-1 rounded-lg text-[9px] font-black uppercase border border-primary/20 whitespace-nowrap">Instan Setup</span>
              </div>

              <div className="space-y-4 mb-8 text-xs">
                <div className="flex justify-between"><span className="text-zinc-500">Mesin</span><span className="text-on-surface font-bold">{activeNode.name}</span></div>
                <div className="flex justify-between"><span className="text-zinc-500">Versi</span><span className="text-on-surface font-bold truncate max-w-[100px]">{version}</span></div>
                <div className="flex justify-between"><span className="text-zinc-500">Lokasi</span><span className="text-on-surface font-bold">{region}</span></div>

                <div className="h-px bg-white/5 my-4"></div>

                <div className="space-y-2">
                  <div className="flex justify-between text-zinc-500"><span>Biaya Node</span><span>Rp {activeNode.price.toLocaleString('id-ID')}</span></div>
                  {Object.keys(addons).map(id => addons[id] && (
                    <div key={id} className="flex justify-between text-primary">
                      <span>{addonOptions.find(a => a.id === id).name}</span>
                      <span>+ Rp {addonOptions.find(a => a.id === id).price.toLocaleString('id-ID')}</span>
                    </div>
                  ))}
                  {discountRate > 0 && <div className="flex justify-between text-secondary"><span>Diskon</span><span>-{Math.round(discountRate * 100)}%</span></div>}
                </div>

                <div className="pt-4 mt-2 border-t border-white/5 flex justify-between items-end">
                  <span className="text-zinc-500 font-bold uppercase text-[10px]">Total Bayar</span>
                  <span className="text-2xl font-headline font-black text-on-surface">Rp {Math.round(finalPrice).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button
                onClick={step === 4 ? handleDeploy : nextStep}
                disabled={isDeploying}
                className={`w-full py-4 rounded-xl font-headline font-black text-sm uppercase transition-all flex items-center justify-center gap-2 ${step === 4 ? 'bg-primary text-on-primary shadow-lg hover:brightness-110' : 'bg-surface-container-highest text-on-surface hover:bg-white/10 shadow-lg'}`}
              >
                {isDeploying ? (
                  'Processing...'
                ) : step === 4 ? (
                  <>
                    <span>Bayar Sekarang</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 700" }}>payments</span>
                  </>
                ) : (
                  <>
                    <span>Lanjut Setup</span>
                    <span className="material-symbols-outlined text-sm">navigate_next</span>
                  </>
                )}
              </button>
              <p className="text-center text-[9px] text-zinc-600 mt-4 uppercase tracking-widest">Secure Payment by Midtrans</p>
            </div>

            {/* Mobile Only Back Button below Cart */}
            <button
              onClick={prevStep}
              className="md:hidden w-full mt-6 py-4 rounded-xl font-headline font-bold text-sm tracking-widest uppercase text-zinc-500 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span> Kembali Ke Lokasi
            </button>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
