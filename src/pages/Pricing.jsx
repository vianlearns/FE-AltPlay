import Layout from '../components/Layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddonModal from '../components/AddonModal';

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState({ id: '', name: '' });
  const navigate = useNavigate();

  const handleSelectNode = (id, name) => {
    setSelectedTier({ id, name });
    setIsModalOpen(true);
  };

  const getPrice = (base) => {
    if (billing === 'yearly') return (base * 0.85).toLocaleString('id-ID');
    return base.toLocaleString('id-ID');
  };

  return (
    <Layout>
      <div className="pt-16 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase mb-6 leading-none">
            Harga <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-container">Transparan</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Pilih kekuatan mesin yang pas buat duniamu. Nggak ada biaya tersembunyi.
          </p>

          {/* Billing Toggle */}
          <div className="mt-12 inline-flex items-center justify-center p-1.5 bg-[#1a1a1a] rounded-2xl border border-white/5 relative w-full max-w-[400px]">
            <button
              onClick={() => setBilling('monthly')}
              className={`relative z-10 flex-1 py-3 px-6 rounded-xl font-headline font-bold text-xs tracking-[0.1em] uppercase transition-all duration-300 ${billing === 'monthly' ? 'text-black' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`relative z-10 flex-1 py-3 px-6 rounded-xl font-headline font-bold text-xs tracking-[0.1em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${billing === 'yearly' ? 'text-black' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              Tahunan
              <span className={`px-2 py-0.5 rounded-md text-[9px] font-black tracking-tight ${billing === 'yearly' ? 'bg-black/20 text-black/80' : 'bg-primary/10 text-primary'}`}>
                HEMAT 15%
              </span>
            </button>
            
            {/* Background Slider */}
            <div 
              className="absolute inset-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-primary rounded-xl shadow-[0_0_20px_rgba(0,209,255,0.3)]"
              style={{
                width: 'calc(50% - 6px)',
                left: billing === 'monthly' ? '6px' : 'calc(50%)',
              }}
            />
          </div>
        </header>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {/* Starter Tier */}
          <div className="glass-panel p-10 rounded-2xl flex flex-col border border-white/5 hover:border-outline-variant/30 transition-all duration-300">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Pemula</span>
              <h3 className="text-3xl font-headline font-bold mt-2">Iron Node</h3>
            </div>
            <div className="mb-8">
              <div className="text-4xl lg:text-5xl font-headline font-black whitespace-nowrap">Rp {getPrice(75000)}</div>
              <div className="text-sm font-medium text-zinc-500 tracking-wide mt-1">/{billing === 'monthly' ? 'bulan' : 'bulan, bayar tahunan'}</div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-sm font-body text-on-surface-variant">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600 text-lg">memory</span> 4GB DDR4 RAM</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600 text-lg">speed</span> 2 vCores (Ryzen 3)</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600 text-lg">storage</span> 40GB NVMe SSD</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600 text-lg">group</span> Sampe 20 Player</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600 text-lg">support_agent</span> Support Standar</li>
            </ul>
            <button 
              onClick={() => handleSelectNode('iron', 'Iron Node')} 
              className="w-full py-4 text-center rounded-xl bg-surface-container-high hover:bg-surface-container-highest font-headline font-bold uppercase tracking-wider transition-all active:scale-95"
            >
              Pilih Iron
            </button>
          </div>

          {/* Pro Tier (Featured) */}
          <div className="glass-panel p-10 rounded-2xl flex flex-col border border-primary/40 relative lg:scale-105 shadow-[0_0_40px_-10px_rgba(0,209,255,0.2)] bg-surface-container-low">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary-container px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_10px_rgba(0,209,255,0.5)]">
              Paling Populer
            </div>
            <div className="mb-6">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Profesional</span>
              <h3 className="text-3xl font-headline font-bold mt-2 text-on-surface">Diamond Node</h3>
            </div>
            <div className="mb-8">
              <div className="text-4xl lg:text-5xl font-headline font-black text-primary whitespace-nowrap">Rp {getPrice(225000)}</div>
              <div className="text-sm font-medium text-zinc-500 tracking-wide mt-1">/{billing === 'monthly' ? 'bulan' : 'bulan, bayar tahunan'}</div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-sm font-body text-on-surface">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">memory</span> 8GB DDR5 RAM</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">speed</span> 4 vCores (Ryzen 7)</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">storage</span> 100GB NVMe Gen4</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">group</span> Slot Unlimited</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">security</span> Advanced DDoS Protection</li>
            </ul>
            <button 
              onClick={() => handleSelectNode('diamond', 'Diamond Node')} 
              className="w-full py-4 text-center rounded-xl bg-primary text-on-primary-container font-headline font-black uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,209,255,0.3)]"
            >
              Buat Sekarang
            </button>
          </div>

          {/* Extreme Tier */}
          <div className="glass-panel p-10 rounded-2xl flex flex-col border border-white/5 hover:border-secondary-fixed-dim/30 transition-all duration-300">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-[0.2em] text-secondary-fixed-dim uppercase">Ekstrem</span>
              <h3 className="text-3xl font-headline font-bold mt-2">Netherite Node</h3>
            </div>
            <div className="mb-8">
              <div className="text-4xl lg:text-5xl font-headline font-black whitespace-nowrap text-on-surface">Rp {getPrice(450000)}</div>
              <div className="text-sm font-medium text-zinc-500 tracking-wide mt-1">/{billing === 'monthly' ? 'bulan' : 'bulan, bayar tahunan'}</div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-sm font-body text-on-surface-variant">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-lg">memory</span> 16GB DDR5 RAM</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-lg">speed</span> 8 vCores (i9-14900K)</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-lg">storage</span> 250GB NVMe Gen4</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-lg">network_node</span> Gratis Dedicated IP</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-lg">support_agent</span> Priority Support 24/7</li>
            </ul>
            <button 
              onClick={() => handleSelectNode('netherite', 'Netherite Node')} 
              className="w-full py-4 text-center rounded-xl border border-secondary-fixed-dim/50 text-secondary-fixed-dim font-headline font-bold uppercase tracking-wider hover:bg-secondary-fixed-dim/10 active:scale-95 transition-all"
            >
              Pilih Netherite
            </button>
          </div>

        </div>

        <AddonModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          tierId={selectedTier.id} 
          tierName={selectedTier.name} 
          billing={billing}
        />
      </div>
    </Layout>
  );
}
