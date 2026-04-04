import Layout from '../components/Layout';
import { useState } from 'react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to backend for Auth
    setTimeout(() => {
      window.location.href = '/server';
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen pt-16 pb-12 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-5xl w-full grid md:grid-cols-2 bg-surface-container/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">

          {/* Left Column - Graphic/Info */}
          <div className="hidden md:flex flex-col p-12 bg-gradient-to-br from-surface-container-high to-surface bg-surface border-r border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-fixed-dim/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>

            <a href="/" className="flex items-center gap-2 mb-auto z-10 w-max">
              <img src="/ALTPLAY-logo.png" alt="ALTPLAY" className="h-6 w-auto brightness-0 invert" />
              <span className="font-headline font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">ALTPLAY</span>
            </a>

            <div className="z-10 mt-16 mb-8">
              <h2 className="text-4xl font-headline font-black tracking-tighter uppercase mb-4 leading-tight">
                Portal <span className="text-primary">Client Area</span>
              </h2>
              <p className="text-zinc-400 font-body leading-relaxed text-sm">
                Kelola layanan hosting Minecraft kamu, cek tagihan, dan akses panel Pterodactyl dengan jaringan latensi rendah.
              </p>
            </div>

            <div className="mt-auto z-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span>Enkripsi Level Enterprise</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="material-symbols-outlined text-secondary-fixed-dim">speed</span>
                <span>Auto-Deployment 60 Detik</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-headline font-black uppercase text-on-surface mb-2">
                {isLogin ? 'Selamat Datang' : 'Buat Akun'}
              </h1>
              <p className="text-zinc-500 text-sm">
                {isLogin ? 'Masuk ke portal client area kamu.' : 'Bergabunglah untuk memulai server impianmu.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 ml-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container-low border border-white/10 rounded-xl px-4 py-3.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-surface-container transition-all"
                    placeholder="Steve"
                  />
                </div>
              )}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 ml-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-white/10 rounded-xl px-4 py-3.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-surface-container transition-all"
                  placeholder="steve@minecraft.net"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Kata Sandi</label>
                  {isLogin && <a href="#" className="text-[10px] text-primary hover:underline">Lupa Sandi?</a>}
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-low border border-white/10 rounded-xl px-4 py-3.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-surface-container transition-all tracking-widest"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative mt-4 bg-primary text-on-primary-container px-6 py-4 font-headline font-bold text-sm tracking-widest uppercase rounded-xl shadow-[0_0_20px_-5px_rgba(0,209,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all flex justify-center items-center h-14"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-on-primary-container/30 border-t-on-primary-container rounded-full animate-spin"></span>
                ) : (
                  <span>{isLogin ? 'Masuk' : 'Daftar Sekarang'}</span>
                )}
              </button>
            </form>

            <div className="mt-8 text-center border-t border-white/5 pt-6">
              <p className="text-xs text-zinc-500">
                {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary font-bold hover:underline"
                >
                  {isLogin ? 'Daftar di sini' : 'Masuk'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
