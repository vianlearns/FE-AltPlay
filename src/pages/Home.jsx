import Layout from '../components/Layout';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment, Float, ContactShadows } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import AddonModal from '../components/AddonModal';
import * as THREE from 'three';

// Animasi Fade In Scroll ala Apple
const FadeInScroll = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Model 3d dari sketchfeb (https://sketchfab.com/3d-models/happy-ghast-minecraft-fanart-04b14806394a4885a7116098b1562200)
const GhastModel = () => {
  const { scene, animations } = useGLTF('/happy_ghast_minecraft_fanart.glb');
  const groupRef = useRef();
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    const animName = 'Ghast | Ghast action';
    if (actions && actions[animName]) {
      actions[animName].reset().fadeIn(0.5).play();
    } else {
      // Fallback mechanism in case animation name is slightly different
      const firstAvailableAction = Object.values(actions)[0];
      if (firstAvailableAction) {
        firstAvailableAction.reset().fadeIn(0.5).play();
      }
    }
  }, [actions]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={2.5} />
      <Environment preset="city" />
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.15} floatIntensity={1.2}>
          {/* Skala dipertahankan besar (1.1) agar pas di hero section */}
          <primitive object={scene} scale={1.1} position={[0, -1.8, 0]} />
        </Float>
      </group>
      <ContactShadows position={[0, -2.8, 0]} opacity={0.6} scale={20} blur={3} far={5} color="#00d1ff" />
    </>
  );
};

const faqs = [
  { q: "Bisa ganti RAM/CPU di tengah jalan kan?", a: "Pastinya! Kamu bisa upgrade RAM atau CPU kapan aja dari billing area tanpa perlu matiin server berlama-lama atau instal ulang, datamu dijamin aman." },
  { q: "Gimana cara instal modpack di sini?", a: "Super gampang. Kami sediain 1-click installer langsung dari panel yang support CurseForge, Modrinth, sampe FTB. Atau upload manual via File Manager/SFTP." },
  { q: "Server bisa support Bedrock & Java (Crossplay) sekalian?", a: "Bisa banget. Kami sangat dukung komunitas Paper/Purpur yang dipasangin plugin GeyserMC. Kita juga punya panduan step-by-step pasang Geyser di platform kami." },
  { q: "Apakah ada garansi uang kembali?", a: "Ada! Kami punya kebijakan garansi uang kembali 7 hari tanpa pertanyaan kalau kamu nggak puas sama performa servernya." },
  { q: "Bagaimana sistem backup servernya?", a: "Panel kami memiliki fitur auto-backup ke cloud storage internal setiap jam 3 pagi secara gratis. Kamu juga bisa melakukan backup manual 1-klik." },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-panel rounded-2xl border border-white/5 bg-surface-container-low/50 overflow-hidden group">
      <div
        className="p-6 flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`font-headline font-bold text-base md:text-lg transition-colors pr-4 ${isOpen ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
          {question}
        </h3>
        <span className={`material-symbols-outlined text-zinc-500 text-lg transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 text-primary' : 'group-hover:text-primary'}`}>
          add
        </span>
      </div>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}
      >
        <div className="border-t border-white/5 pt-4 mt-2">
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState({ id: '', name: '' });
  const navigate = useNavigate();

  const handleSelectNode = (id, name) => {
    setSelectedTier({ id, name });
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className="relative">
        {/* 1. Hero & Configurator Section */}
        <section className="relative min-h-screen pt-12 pb-20 px-6 md:px-8 pixel-grid overflow-hidden flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10 pt-16 md:pt-0">
            <FadeInScroll className="space-y-8 z-10" delay={0}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mt-12 md:mt-0">
                Ditempa buat Performa
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-headline font-black tracking-tighter leading-[0.9] text-on-surface">
                BANGUN SERVER <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-container drop-shadow-[0_0_15px_rgba(0,209,255,0.5)]">IMPIANMU</span>.
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl font-body leading-relaxed">
                Keluarin semua potensi komunitas kamu bareng ALTPLAY. Hardware enterprise, kernel yang udah di-optimasi, dan panel Pterodactyl terdepan.
              </p>
              <div className="flex gap-4">
                <a href="/beli" className="bg-primary-container text-on-primary-container px-6 md:px-8 py-4 font-headline font-bold uppercase tracking-wider text-sm active:scale-95 transition-all inline-block text-center border border-primary-container shadow-[0_0_20px_rgba(0,209,255,0.3)] hover:brightness-110">Mulai Sekarang</a>
                <a href="/harga" className="bg-surface-container-high hover:bg-surface-container-highest px-6 md:px-8 py-4 font-headline font-bold uppercase tracking-wider text-sm border border-outline-variant/30 transition-all inline-block text-center active:scale-95">Lihat Harga</a>
              </div>
            </FadeInScroll>

            {/* 3D Ghast Interactive Canvas */}
            <FadeInScroll delay={200} className="w-full h-[400px] md:h-[600px] relative pointer-events-none">
              {/* Kanvas diperluas secara absolut (w-150% h-150%) melampaui batas container-nya 
                  agar objek 3D tidak terpotong (clipping) oleh border div saat bergerak */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary/20 blur-[130px] rounded-full pointer-events-none"></div>

                {/* 3D Context Boundary */}
                <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} className="w-full h-full z-10 block pointer-events-none">
                  <Suspense fallback={null}>
                    <GhastModel />
                  </Suspense>
                </Canvas>
              </div>
            </FadeInScroll>
          </div>
        </section>

        {/* 2. Social Proof / Logo Klien */}
        <section className="py-12 border-y border-white/5 bg-surface-container-lowest/50 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <FadeInScroll delay={0}>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 mb-8">Dipercaya oleh Komunitas & Kreator Top</p>
            </FadeInScroll>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 hover:opacity-100 transition-all duration-500">
              <FadeInScroll delay={100}><div><div className="text-2xl font-headline font-black tracking-tighter cursor-default">CREEPER<span className="text-primary">HOST</span></div></div></FadeInScroll>
              <FadeInScroll delay={200}><div><div className="text-2xl font-headline font-black tracking-widest cursor-default">MINES<span className="text-secondary-fixed-dim">VERSE</span></div></div></FadeInScroll>
              <FadeInScroll delay={300}><div><div className="text-2xl font-headline font-black tracking-tighter italic cursor-default">Void<span className="text-tertiary">Network</span></div></div></FadeInScroll>
              <FadeInScroll delay={400}><div><div className="text-2xl font-headline font-bold cursor-default">Pixel<span className="text-primary">Craft</span></div></div></FadeInScroll>
              <FadeInScroll delay={500}><div><div className="text-2xl font-headline font-black uppercase tracking-widest cursor-default">Sky<span className="text-zinc-500">Block</span><span className="text-primary">Pro</span></div></div></FadeInScroll>
            </div>
          </div>
        </section>

        {/* 3. Manfaat / Fitur Utama & Kemudahan Panel */}
        <section className="py-32 px-6 md:px-8 overflow-hidden relative">
          <div className="max-w-7xl mx-auto space-y-40 relative z-10">
            {/* Fitur Utama */}
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
                <FadeInScroll delay={0}>
                  <div>
                    <div className="bg-surface-container p-8 rounded-xl space-y-4 border border-outline-variant/10 shadow-lg relative glow-hover transition-all duration-500 hover:border-primary/30 group">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-3xl">shield_with_heart</span>
                      </div>
                      <h4 className="font-headline font-bold text-lg uppercase tracking-tight text-on-surface">Anti-DDoS</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Mitigasi kelas enterprise pake filter khusus buat protokol Minecraft bikin tenang.</p>
                    </div>
                  </div>
                </FadeInScroll>
                <FadeInScroll delay={150}>
                  <div>
                    <div className="bg-surface-container p-8 rounded-xl space-y-4 translate-y-8 border border-outline-variant/10 shadow-lg relative glow-hover transition-all duration-500 hover:border-secondary-fixed-dim/30 group">
                      <div className="w-12 h-12 flex items-center justify-center bg-secondary-container/10 rounded-lg group-hover:bg-secondary-container/20 transition-colors">
                        <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl">memory</span>
                      </div>
                      <h4 className="font-headline font-bold text-lg uppercase tracking-tight text-on-surface">SSD NVMe</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Loading world secepat kilat dan latensi disk nol buat world yang gede.</p>
                    </div>
                  </div>
                </FadeInScroll>
                <FadeInScroll delay={300}>
                  <div>
                    <div className="bg-surface-container p-8 rounded-xl space-y-4 border border-outline-variant/10 shadow-lg relative glow-hover transition-all duration-500 hover:border-tertiary/30 group">
                      <div className="w-12 h-12 flex items-center justify-center bg-tertiary-container/10 rounded-lg group-hover:bg-tertiary-container/20 transition-colors">
                        <span className="material-symbols-outlined text-tertiary text-3xl">bolt</span>
                      </div>
                      <h4 className="font-headline font-bold text-lg uppercase tracking-tight text-on-surface">Uptime 99.9%</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Power dan network redundan mastiin server kamu tetep online terus tanpa putus.</p>
                    </div>
                  </div>
                </FadeInScroll>
                <FadeInScroll delay={450}>
                  <div>
                    <div className="bg-surface-container p-8 rounded-xl space-y-4 translate-y-8 border border-outline-variant/10 shadow-lg relative glow-hover transition-all duration-500 hover:border-primary/30 group">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                      </div>
                      <h4 className="font-headline font-bold text-lg uppercase tracking-tight text-on-surface">Setup Cepet</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Instan provision. Server kamu otomatis jalan dalam hitungan 60 detik.</p>
                    </div>
                  </div>
                </FadeInScroll>
              </div>
              <div className="md:w-1/2 space-y-8">
                <FadeInScroll delay={200}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-white/5 text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase">
                    Infrastruktur Solid
                  </span>
                </FadeInScroll>
                <FadeInScroll delay={300}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-7xl font-headline font-black leading-[0.9] tracking-tighter uppercase text-on-surface">DIPROSES BUAT YANG <span className="text-primary drop-shadow-[0_0_15px_rgba(0,209,255,0.4)]">TERBAIK</span>.</h2>
                </FadeInScroll>
                <FadeInScroll delay={400}>
                  <p className="text-lg text-on-surface-variant leading-relaxed">Kami nggak cuma host server; kami bikin lingkungan digital yang stabil dan kenceng. Server didukung hardware terbaru buat performa maksimal.</p>
                </FadeInScroll>
                <FadeInScroll delay={500}>
                  <div className="pt-6 flex flex-wrap items-center gap-8 border-t border-white/5">
                    <div className="space-y-1">
                      <div className="text-3xl lg:text-4xl font-headline font-black text-on-surface">15ms</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Rata-rata Latensi</div>
                    </div>
                    <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                    <div className="space-y-1">
                      <div className="text-3xl lg:text-4xl font-headline font-black text-on-surface">24/7</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Support Aktif</div>
                    </div>
                    <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                    <div className="space-y-1">
                      <div className="text-3xl lg:text-4xl font-headline font-black text-primary drop-shadow-[0_0_10px_rgba(0,209,255,0.3)]">50rb+</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Server Dibuat</div>
                    </div>
                  </div>
                </FadeInScroll>
              </div>
            </div>

            {/* Kemudahan Panel & Video */}
            <div className="flex flex-col-reverse md:flex-row gap-20 items-center">
              <div className="md:w-1/2 space-y-8">
                <FadeInScroll delay={0}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/10 border border-secondary-fixed-dim/20 text-secondary-fixed-dim text-xs font-bold tracking-[0.2em] uppercase">
                    Pterodactyl Panel
                  </span>
                </FadeInScroll>
                <FadeInScroll delay={150}>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black leading-[0.9] tracking-tighter uppercase text-on-surface">KONTROL SERVER ITU <span className="text-secondary-fixed-dim drop-shadow-[0_0_15px_rgba(0,227,131,0.3)]">GAMPANG</span>.</h2>
                </FadeInScroll>
                <FadeInScroll delay={300}>
                  <p className="text-lg text-on-surface-variant leading-relaxed">Nggak perlu lagi pusing sama terminal yang ribet. Panel Pterodactyl kami dirancang biar kamu tinggal klik-klik aja. Pantau log, manajemen player, dan monitoring resource, semua di satu tempat.</p>
                </FadeInScroll>
                <FadeInScroll delay={450}>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-fixed-dim mt-0.5">terminal</span>
                      <div>
                        <h5 className="font-bold text-on-surface uppercase text-sm tracking-tight">Live Console</h5>
                        <p className="text-[11px] text-zinc-500 mt-1">Pantau log game kamu secara real-time dari browser.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-fixed-dim mt-0.5">query_stats</span>
                      <div>
                        <h5 className="font-bold text-on-surface uppercase text-sm tracking-tight">Resource Chart</h5>
                        <p className="text-[11px] text-zinc-500 mt-1">Lacak pemakaian RAM dan CPU dengan akurat.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-fixed-dim mt-0.5">extension</span>
                      <div>
                        <h5 className="font-bold text-on-surface uppercase text-sm tracking-tight">1-Click Mod</h5>
                        <p className="text-[11px] text-zinc-500 mt-1">Instal modpack favorit kamu cuma lewat antarmuka.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-fixed-dim mt-0.5">shield_locked</span>
                      <div>
                        <h5 className="font-bold text-on-surface uppercase text-sm tracking-tight">Auto Backup</h5>
                        <p className="text-[11px] text-zinc-500 mt-1">Tenang aja, world kamu di-backup otomatis tiap hari.</p>
                      </div>
                    </div>
                  </div>
                </FadeInScroll>
              </div>

              {/* Animasi Video Panel */}
              <div className="md:w-1/2 relative w-full perspective-1000">
                <div className="absolute inset-20 bg-secondary-fixed-dim/20 blur-[120px] rounded-full pointer-events-none"></div>
                <FadeInScroll delay={200}>
                  <div>
                    <div className="glass-panel p-2 rounded-xl relative border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#131313]/90 overflow-hidden transform md:rotate-y-[-5deg] transition-transform duration-700">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        width="1920"
                        height="1080"
                        className="w-full h-auto aspect-video object-cover rounded-b-lg border-t border-white/5 mix-blend-screen opacity-90 object-center"
                        src="/log-animation.webm"
                      ></video>
                    </div>
                  </div>
                </FadeInScroll>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pricing Tiers Section */}
        <section className="py-24 px-6 md:px-8 bg-surface-container-low relative border-y border-white/5">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <FadeInScroll delay={0}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-800/50 border border-white/5 text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Transparan & Fair
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-black tracking-tighter mb-4 uppercase">Harga Kelas Enterprise</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto font-body">Pilih tier yang pas buat duniamu. Semua paket dapet network latensi rendah dan auto-backup dari kami.</p>
            </FadeInScroll>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Budget */}
            <FadeInScroll delay={100}>
              <div className="glass-panel p-10 rounded-2xl glow-hover transition-all duration-500 group flex flex-col hover:border-outline-variant/30 border border-transparent shadow-lg bg-surface-container/50 backdrop-blur-xl h-full">
                <div className="mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Tier Pemula</span>
                  <h3 className="text-3xl font-headline font-bold mt-2 text-on-surface">Iron Node</h3>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-headline font-black mb-8 text-on-surface whitespace-nowrap">Rp 75.000<span className="text-sm font-medium text-zinc-500">/bln</span></div>
                <ul className="space-y-4 mb-10 flex-grow text-sm font-body text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-500 text-[18px]">memory</span>4GB DDR4 RAM</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-500 text-[18px]">speed</span>2 vCores (Ryzen 3)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-500 text-[18px]">storage</span>40GB NVMe SSD</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-500 text-[18px]">group</span>Sampe 20 Player</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-500 text-[18px]">support_agent</span>Support Standar</li>
                </ul>
                <button
                  onClick={() => handleSelectNode('iron', 'Iron Node')}
                  className="w-full block text-center py-4 border border-outline-variant/40 hover:bg-white/5 rounded-xl font-headline font-bold uppercase tracking-wider transition-all active:scale-95 text-xs text-on-surface mt-auto"
                >
                  Pilih Iron
                </button>
              </div>
            </FadeInScroll>

            {/* Premium (Featured) */}
            <FadeInScroll delay={250}>
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-b from-primary to-primary-container rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition duration-500 pointer-events-none"></div>
                <div className="relative glass-panel bg-surface-container-high p-10 rounded-2xl h-full flex flex-col scale-105 border-primary/30 shadow-[0_20px_40px_-10px_rgba(0,209,255,0.2)] z-10">
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-on-primary-container px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_10px_rgba(0,209,255,0.4)]">Paling Laris</div>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Tier Profesional</span>
                    <h3 className="text-3xl font-headline font-bold mt-2 text-on-surface">Diamond Node</h3>
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-headline font-black mb-8 text-primary whitespace-nowrap drop-shadow-[0_0_15px_rgba(0,209,255,0.2)]">Rp 225.000<span className="text-sm font-medium text-zinc-400">/bln</span></div>
                  <ul className="space-y-4 mb-10 flex-grow text-sm font-body text-on-surface">
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">memory</span>8GB DDR5 RAM</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">speed</span>4 vCores (Ryzen 7)</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">storage</span>100GB NVMe Gen4</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">group</span>Slot Unlimited</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">security</span>Advanced DDoS Protection</li>
                  </ul>
                  <button
                    onClick={() => handleSelectNode('diamond', 'Diamond Node')}
                    className="w-full block text-center py-4 bg-primary text-on-primary-container rounded-xl font-headline font-black uppercase tracking-wider transition-all shadow-[0_10px_20px_-5px_rgba(0,209,255,0.3)] hover:brightness-110 active:scale-95 text-xs mt-auto"
                  >
                    Pilih Diamond
                  </button>
                </div>
              </div>
            </FadeInScroll>

            {/* Extreme */}
            <FadeInScroll delay={400}>
              <div className="glass-panel p-10 rounded-2xl glow-hover transition-all duration-500 group flex flex-col hover:border-secondary-fixed-dim/30 border border-transparent shadow-lg bg-surface-container/50 backdrop-blur-xl h-full">
                <div className="mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Tier Ekstrem</span>
                  <h3 className="text-3xl font-headline font-bold mt-2 text-on-surface">Netherite Node</h3>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-headline font-black mb-8 whitespace-nowrap text-on-surface">Rp 450.000<span className="text-sm font-medium text-zinc-500">/bln</span></div>
                <ul className="space-y-4 mb-10 flex-grow text-sm font-body text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-[18px]">memory</span>16GB DDR5 RAM</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-[18px]">speed</span>8 vCores (i9-14900K)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-[18px]">storage</span>250GB NVMe Gen4</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-[18px]">network_node</span>Gratis Dedicated IP</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim text-[18px]">support_agent</span>Priority Support 24/7</li>
                </ul>
                <button
                  onClick={() => handleSelectNode('netherite', 'Netherite Node')}
                  className="w-full block text-center py-4 border border-outline-variant/40 hover:bg-white/5 hover:border-secondary-fixed-dim/50 hover:text-secondary-fixed-dim rounded-xl font-headline font-bold uppercase tracking-wider transition-all active:scale-95 text-xs text-on-surface mt-auto"
                >
                  Pilih Netherite
                </button>
              </div>
            </FadeInScroll>
          </div>
        </section>

        {/* 5. FAQ / Testimoni */}
        {/* Testimonials */}
        <section className="py-24 px-6 md:px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <FadeInScroll delay={0}>
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-black tracking-tighter uppercase mb-4 text-on-surface">Testimoni Player</h2>
                  <p className="text-on-surface-variant">Dengerin aja apa kata komunitas kami yang udah nyobain langsung.</p>
                </div>
                <div className="hidden md:flex gap-4">
                  <button aria-label="Testimoni Sebelumnya" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-surface-container-high hover:bg-white/10 active:scale-95 transition-all text-on-surface"><span aria-hidden="true" className="material-symbols-outlined text-sm">arrow_back_ios_new</span></button>
                  <button aria-label="Testimoni Selanjutnya" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-surface-container-high hover:bg-white/10 active:scale-95 transition-all text-on-surface"><span aria-hidden="true" className="material-symbols-outlined text-sm">arrow_forward_ios</span></button>
                </div>
              </div>
            </FadeInScroll>

            <div className="grid md:grid-cols-3 gap-6">
              <FadeInScroll delay={100}>
                <div className="bg-surface-container-low p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors h-full flex flex-col">
                  <div className="flex gap-1 text-primary mb-6">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-on-surface leading-relaxed italic mb-8 font-body text-sm">"Pindah dari host gede ke ALTPLAY dan perbedaannya kerasa banget. TPS-nya mantap 20 tps stabil, nggak ada lag walaupun pake 50+ mod berat."</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img alt="Avatar Alex_The_Builder" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full bg-zinc-800 object-cover" src="/alex_the_builder.webp" />
                    <div>
                      <div className="font-headline font-bold text-xs uppercase text-on-surface tracking-tight">Alex_The_Builder</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Owner Survival</div>
                    </div>
                  </div>
                </div>
              </FadeInScroll>

              <FadeInScroll delay={250}>
                <div className="bg-surface-container-low p-8 rounded-2xl border border-white/5 hover:border-secondary-fixed-dim/20 transition-colors h-full flex flex-col">
                  <div className="flex gap-1 text-secondary-fixed-dim mb-6">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-on-surface leading-relaxed italic mb-8 font-body text-sm">"Tim supportnya bener-bener gila. Jam 3 pagi aku mentok masalah plugin Geyser, dan mereka tetep stand by bantuin debug sampe tuntas!"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img alt="Avatar CreeperKing_99" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full bg-zinc-800 object-cover" src="/creeper_king99.jpg" />
                    <div>
                      <div className="font-headline font-bold text-xs uppercase text-on-surface tracking-tight">CreeperKing_99</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Admin SMP Hardcore</div>
                    </div>
                  </div>
                </div>
              </FadeInScroll>

              <FadeInScroll delay={400}>
                <div className="bg-surface-container-low p-8 rounded-2xl border border-white/5 hover:border-tertiary/20 transition-colors h-full flex flex-col">
                  <div className="flex gap-1 text-tertiary mb-6">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  </div>
                  <p className="text-on-surface leading-relaxed italic mb-8 font-body text-sm">"ALTPLAY udah jadi rumah buat komunitas klandestin kami. Panel Pterodactyl-nya kenceng, UI-nya keren dark mode, dan harganya jujur banget nggak berbelit."</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img alt="avatar" className="w-10 h-10 rounded-full bg-zinc-800 object-cover" src="/solar_nexus.webp" />
                    <div>
                      <div className="font-headline font-bold text-xs uppercase text-on-surface tracking-tight">SolarNexus_x</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Streamer Twitch</div>
                    </div>
                  </div>
                </div>
              </FadeInScroll>
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="py-24 px-6 md:px-8 border-y border-white/5 relative bg-[#131313]" id="faq">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-3xl mx-auto space-y-12 relative z-10">
            <FadeInScroll delay={0}>
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-500 mb-4 opacity-50">forum</span>
                <h2 className="text-4xl font-headline font-black tracking-tighter uppercase mb-4 text-on-surface">Punya Pertanyaan?</h2>
                <p className="text-on-surface-variant font-body mb-8">Nih, kita rangkumin pertanyaan yang paling sering ditanyain.</p>
              </div>
            </FadeInScroll>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <FadeInScroll key={idx} delay={50 * idx}>
                  <FaqItem question={faq.q} answer={faq.a} />
                </FadeInScroll>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-28 px-6 md:px-8 relative overflow-hidden bg-surface-container-lowest">
          <FadeInScroll delay={0}>
            <div className="max-w-5xl mx-auto glass-panel p-12 md:p-20 rounded-[2.5rem] text-center relative z-10 border border-primary/20 shadow-[0_20px_60px_-15px_rgba(0,209,255,0.15)] bg-gradient-to-br from-[#1c1b1b]/80 to-[#131313]/90 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-primary/5 -z-10 rounded-[2.5rem]"></div>
              <div className="w-16 h-16 bg-primary/20 flex items-center justify-center rounded-2xl mx-auto mb-8 border border-primary/30 shadow-[0_0_15px_rgba(0,209,255,0.4)]">
                <span className="material-symbols-outlined text-primary text-3xl">sports_esports</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-7xl font-headline font-black tracking-tighter uppercase mb-6 leading-[0.9] text-on-surface">SIAP BUAT <span className="text-primary drop-shadow-[0_0_15px_rgba(0,209,255,0.3)]">MEMULAI</span>?</h2>
              <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-body leading-relaxed">Gabung bareng ribuan player lain, tinggalin yang lemot, dan mulai main asik pakai platform server generasi terbaru.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/beli" className="bg-primary text-on-primary-container px-10 py-5 font-headline font-black uppercase tracking-wider text-base hover:brightness-125 active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(0,209,255,0.5)] rounded-xl border border-primary/50 text-center flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  Deploy Server
                </a>
                <a href="/contact" className="bg-surface-container-highest border border-white/10 px-10 py-5 font-headline font-black uppercase tracking-wider text-base hover:bg-white/10 active:scale-95 transition-all rounded-xl text-on-surface hover:border-white/20 text-center flex items-center justify-center gap-3">
                  Support Team
                </a>
              </div>
            </div>
          </FadeInScroll>
          {/* Atmospheric Glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-container/10 blur-[130px] rounded-full pointer-events-none"></div>
        </section>

        <AddonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tierId={selectedTier.id}
          tierName={selectedTier.name}
        />
      </div>
    </Layout>
  );
}
