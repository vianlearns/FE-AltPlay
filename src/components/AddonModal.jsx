import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const addonOptions = [
  { id: 'backup', name: 'Daily Auto Backup', desc: 'Secure 7-day off-site backups.', price: 45000 },
  { id: 'ip', name: 'Dedicated IP', desc: 'Default port 25565 (Bungee requirement).', price: 75000 },
  { id: 'modpack', name: 'Modpack Manager', desc: '1-click CurseForge installation.', price: 25000 }
];

export default function AddonModal({ isOpen, onClose, tierName, tierId, billing = 'monthly' }) {
  const [selectedAddons, setSelectedAddons] = useState({ backup: false, ip: false, modpack: false });
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleAddon = (id) => {
    setSelectedAddons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleConfirm = () => {
    const addons = Object.keys(selectedAddons).filter(id => selectedAddons[id]).join(',');
    const url = `/beli?tier=${tierId}${addons ? `&addons=${addons}` : ''}${billing === 'yearly' ? '&billing=yearly' : ''}&step=2`;
    navigate(url);
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-2xl bg-surface-container-low border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,209,255,0.1)] transition-all duration-500 transform ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}`}
      >
        {/* Glow Header */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container"></div>

        <div className="p-8 md:p-10">
          <header className="flex justify-between items-start mb-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Quick Configuration</span>
              <h2 className="text-3xl md:text-4xl font-headline font-black text-on-surface uppercase tracking-tight">Tambah <span className="text-primary italic">Add-ons</span></h2>
              <p className="text-zinc-500 text-sm mt-2">Pilih fitur tambahan buat <span className="text-on-surface font-bold">{tierName}</span> kamu.</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-zinc-500 hover:text-white transition-colors border border-white/5"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>

          <div className="space-y-4 mb-10">
            {addonOptions.map((addon) => (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between gap-6 ${selectedAddons[addon.id] ? 'bg-primary/5 border-primary shadow-[0_0_20px_rgba(0,209,255,0.05)]' : 'bg-surface-container border-white/5 hover:border-primary/30 hover:bg-surface-container-high'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${selectedAddons[addon.id] ? 'bg-primary border-primary' : 'border-zinc-700 group-hover:border-primary/50'}`}>
                    {selectedAddons[addon.id] && <span className="material-symbols-outlined text-black text-[18px] font-black">check</span>}
                  </div>
                  <div>
                    <h4 className={`font-headline font-bold text-base transition-colors ${selectedAddons[addon.id] ? 'text-primary' : 'text-on-surface'}`}>{addon.name}</h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{addon.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-black text-sm">+ Rp {addon.price.toLocaleString('id-ID')}</div>
                  <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-0.5">per bulan</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex-1 bg-surface-container-high hover:bg-white/5 border border-white/10 text-on-surface py-5 rounded-2xl font-headline font-black uppercase tracking-widest text-xs transition-all active:scale-95"
              onClick={handleConfirm}
            >
              Lanjut Ke Step-2
            </button>
            <button
              onClick={onClose}
              className="sm:w-32 py-5 rounded-2xl font-headline font-bold uppercase tracking-widest text-[10px] text-zinc-500 hover:text-zinc-300 transition-all border border-transparent"
            >
              Nanti Saja
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-surface-container-highest/20 p-4 border-t border-white/5 flex items-center gap-3 px-8">
          <span className="material-symbols-outlined text-primary text-[16px]">info</span>
          <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.05em]">Langsung Lanjut Step-2 jika tidak ingin menambahkan add-ons.</p>
        </div>
      </div>
    </div>
  );
}
