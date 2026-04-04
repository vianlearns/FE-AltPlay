import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // 'idle', 'sending', 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
    }, 1500);
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-28 pb-32 px-6 md:px-8 min-h-screen relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Header & Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                Hubungi Kami
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-black tracking-tighter leading-none uppercase text-on-surface">
                BUTUH <span className="text-primary">BANTUAN</span>?
              </h1>
              <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
                Tim support kami standby 24/7 buat mastiin server kamu tetep gacor. Ada kendala teknis atau mau tanya soal paket? Gaskan chat kami!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Support Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface uppercase tracking-tight">Technical Support</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Buat masalah plugin, lag, atau setup server.</p>
                </div>
                <a href="https://discord.gg/altplay" className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Buka Tiket Discord <span className="material-symbols-outlined text-sm">east</span>
                </a>
              </div>

              {/* Billing Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl">payments</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface uppercase tracking-tight">Billing & Sales</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Tanya soal pembayaran atau custom plan.</p>
                </div>
                <a href="mailto:billing@altplay.io" className="text-secondary-fixed-dim text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Kirim Email <span className="material-symbols-outlined text-sm">east</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/5 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Ikuti Kami</p>
              <div className="flex gap-4">
                {['Discord', 'Twitter', 'Instagram', 'YouTube'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                    <span className="material-symbols-outlined text-xl">share</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent blur-2xl opacity-20"></div>
            <div className="relative glass-panel p-10 rounded-3xl border border-white/10 bg-[#131313]/50 backdrop-blur-3xl shadow-2xl">
              <h2 className="text-2xl font-headline font-bold mb-8">Kirim Pesan</h2>
              
              {formState === 'sent' ? (
                <div className="py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto border border-primary/30">
                    <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold">Pesan Terkirim!</h3>
                    <p className="text-on-surface-variant mt-2">Tim ALTPLAY bakal bales secepat mungkin.</p>
                  </div>
                  <button onClick={() => setFormState('idle')} className="text-primary font-bold hover:underline">Kirim pesan lagi?</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Nama Lengkap</label>
                      <input required className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none" placeholder="Udin Sedunia" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Email Aktif</label>
                      <input required className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none" placeholder="udin@gmail.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Subjek</label>
                    <select className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none appearance-none cursor-pointer">
                      <option>Tanya soal Paket</option>
                      <option>Kendala Teknis</option>
                      <option>Pembayaran</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Pesan Kamu</label>
                    <textarea required className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none min-h-[150px] resize-none" placeholder="Halo min, mau tanya dong..."></textarea>
                  </div>
                  
                  <button 
                    disabled={formState === 'sending'}
                    className="w-full bg-primary text-on-primary-container py-5 rounded-2xl font-headline font-black text-lg uppercase tracking-tighter shadow-[0_15px_30px_-5px_rgba(0,209,255,0.3)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-3"
                  >
                    {formState === 'sending' ? (
                      <>
                        <span className="animate-spin material-symbols-outlined">progress_activity</span>
                        <span>Lagi Ngirim...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Sekarang</span>
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
