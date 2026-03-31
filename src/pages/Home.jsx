import Layout from '../components/Layout';
import { useState } from 'react';

export default function Home() {
  const [ram, setRam] = useState(8);
  const [cpu, setCpu] = useState(4);
  const [slots, setSlots] = useState(3);

  const getSlotText = () => {
    if (slots === 1) return "50";
    if (slots === 2) return "100";
    return "Tanpa Batas";
  };

  const calculatePrice = () => {
    let price = ram * 15000 + cpu * 16250;
    if (slots === 3) price += 25000;
    return new Intl.NumberFormat('id-ID').format(price);
  };

  return (
    <Layout>
      <div className="relative">
        {/* Hero & Configurator Section */}
        <section className="relative min-h-screen pt-12 pb-20 px-8 pixel-grid overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase">
                Ditempa buat Performa
              </span>
              <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-[0.9] text-on-surface">
                BANGUN SERVER <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-container drop-shadow-[0_0_15px_rgba(0,209,255,0.5)]">IMPIANMU</span>.
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl font-body leading-relaxed">
                Keluarin semua potensi komunitas kamu bareng ALTPLAY. Hardware enterprise, kernel yang udah di-optimasi, dan panel paling gampang dipake di dunia.
              </p>
              <div className="flex gap-4">
                <a href="/pricing" className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-bold uppercase tracking-wider text-sm active:scale-95 transition-all inline-block text-center border border-primary-container">Mulai Sekarang</a>
                <a href="/pricing" className="bg-surface-container-high hover:bg-surface-container-highest px-8 py-4 font-headline font-bold uppercase tracking-wider text-sm border border-outline-variant/30 transition-all inline-block text-center active:scale-95">Lihat Server</a>
              </div>
            </div>

            {/* Configurator Glass Card */}
            <div className="glass-panel p-8 rounded-2xl relative shadow-[0_0_50px_-15px_rgba(0,209,255,0.15)] border border-white/10 backdrop-blur-2xl bg-[#131313]/50">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary">tune</span>
                <h3 className="font-headline font-bold text-2xl">Konfigurator Real-time</h3>
              </div>
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-on-surface-variant font-headline font-medium text-sm tracking-widest uppercase">Memori (RAM)</label>
                    <span className="text-primary font-headline font-bold text-xl">{ram}GB</span>
                  </div>
                  <input min="2" max="32" step="2" value={ram} onChange={(e)=>setRam(Number(e.target.value))} className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-on-surface-variant font-headline font-medium text-sm tracking-widest uppercase">Prioritas CPU</label>
                    <span className="text-primary font-headline font-bold text-xl">{cpu} Core</span>
                  </div>
                  <input min="1" max="16" step="1" value={cpu} onChange={(e)=>setCpu(Number(e.target.value))} className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-on-surface-variant font-headline font-medium text-sm tracking-widest uppercase">Slot Player</label>
                    <span className="text-primary font-headline font-bold text-xl">{getSlotText()}</span>
                  </div>
                  <input min="1" max="3" step="1" value={slots} onChange={(e)=>setSlots(Number(e.target.value))} className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-outline-variant/20 flex justify-between items-center">
                <div>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Estimasi Biaya</p>
                  <div className="text-4xl font-headline font-black text-on-surface">Rp {calculatePrice()}<span className="text-sm font-medium text-zinc-500">/bln</span></div>
                </div>
                <a href="/configure" className="bg-primary text-on-primary-container px-6 py-4 font-headline font-bold uppercase rounded-lg inline-block text-center hover:brightness-110 active:scale-95 transition-all">Gaskan Sekarang</a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="py-32 px-8 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter mb-6 uppercase">Power Kelas ALTPLAY</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body">Pilih tier yang pas buat duniamu. Semua paket dapet network latensi rendah Diamond-Link eksklusif dari kami.</p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Budget */}
            <div className="glass-panel p-10 rounded-xl glow-hover transition-all duration-500 group flex flex-col hover:border-outline-variant/30 border border-transparent">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Tier Dasar</span>
                <h3 className="text-3xl font-headline font-bold mt-2">Ekonomis</h3>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-headline font-black mb-8 whitespace-nowrap">Rp 35.000<span className="text-sm font-medium text-zinc-500">/gb</span></div>
              <ul className="space-y-4 mb-12 flex-grow text-sm font-body text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600">check_circle</span>Ryzen 5000 Series</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600">check_circle</span>Penyimpanan SSD NVMe</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600">check_circle</span>DDoS Protection Standar</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-zinc-600">check_circle</span>Uptime 99.9%</li>
              </ul>
              <a href="/configure" className="w-full block text-center py-4 border border-outline-variant/40 hover:bg-white/5 font-headline font-bold uppercase transition-all active:scale-95">Pilih Paket</a>
            </div>

            {/* Premium (Featured) */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary to-primary-container rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative glass-panel bg-surface-container-high p-10 rounded-xl h-full flex flex-col scale-105 border-primary/30">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 text-xs font-black uppercase tracking-widest rounded-full">Recomended</div>
                <div className="mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Tier Performa</span>
                  <h3 className="text-3xl font-headline font-bold mt-2">Premium</h3>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-headline font-black mb-8 text-primary whitespace-nowrap">Rp 60.000<span className="text-sm font-medium text-zinc-500">/gb</span></div>
                <ul className="space-y-4 mb-12 flex-grow text-sm font-body">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span>Ryzen 7950X CPUs</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span>Penyimpanan NVMe Gen4</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span>Advanced DDoS Shield</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span>Support Discord Premium</li>
                </ul>
                <a href="/configure" className="w-full block text-center py-4 bg-primary text-on-primary-container font-headline font-bold uppercase transition-all shadow-[0_0_20px_rgba(0,209,255,0.3)] hover:brightness-110 active:scale-95">Pilih Paket</a>
              </div>
            </div>

            {/* Extreme */}
            <div className="glass-panel p-10 rounded-xl glow-hover transition-all duration-500 group flex flex-col hover:border-secondary-fixed-dim/30 border border-transparent">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Tier Tanpa Batas</span>
                <h3 className="text-3xl font-headline font-bold mt-2">Ekstrem</h3>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-headline font-black mb-8 whitespace-nowrap">Rp 90.000<span className="text-sm font-medium text-zinc-500">/gb</span></div>
              <ul className="space-y-4 mb-12 flex-grow text-sm font-body text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim">verified</span>Intel Core i9-14900K</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim">verified</span>Liquid Cooled Server</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim">verified</span>Path.net Enterprise DDoS</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed-dim">verified</span>Dedicated Thread</li>
              </ul>
              <a href="/configure" className="w-full block text-center py-4 border border-outline-variant/40 hover:bg-white/5 font-headline font-bold uppercase transition-all active:scale-95">Pilih Paket</a>
            </div>
          </div>
        </section>

        {/* Why Us Section (Features) */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-surface-container p-8 rounded-lg space-y-4 border border-outline-variant/10">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">shield_with_heart</span>
                </div>
                <h4 className="font-headline font-bold text-lg uppercase tracking-tight">Anti-DDoS</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Mitigasi kelas enterprise pake filter khusus buat protokol Minecraft.</p>
              </div>
              <div className="bg-surface-container p-8 rounded-lg space-y-4 translate-y-8 border border-outline-variant/10">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary-container/10 rounded-lg">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl">memory</span>
                </div>
                <h4 className="font-headline font-bold text-lg uppercase tracking-tight">SSD NVMe</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Loading world secepat kilat dan latensi disk nol buat world yang gede.</p>
              </div>
              <div className="bg-surface-container p-8 rounded-lg space-y-4 border border-outline-variant/10">
                <div className="w-12 h-12 flex items-center justify-center bg-tertiary-container/10 rounded-lg">
                  <span className="material-symbols-outlined text-tertiary text-3xl">bolt</span>
                </div>
                <h4 className="font-headline font-bold text-lg uppercase tracking-tight">Uptime 99.9%</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Power dan network redundan mastiin server kamu tetep online terus.</p>
              </div>
              <div className="bg-surface-container p-8 rounded-lg space-y-4 translate-y-8 border border-outline-variant/10">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                </div>
                <h4 className="font-headline font-bold text-lg uppercase tracking-tight">Setup Cepet</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Instan provision. Server kamu jalan dalam kurang dari 60 detik.</p>
              </div>
            </div>
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-5xl md:text-7xl font-headline font-black leading-[0.9] tracking-tighter uppercase">DIPROSES BUAT YANG <span className="text-primary">TERBAIK</span>.</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">Kami nggak cuma host server; kami bikin lingkungan digital yang asik. "ALTPLAY Panel" khusus dari kami kasih kamu kontrol penuh atas setiap byte dari duniamu.</p>
              <div className="pt-4 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-headline font-black text-on-surface">15ms</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500">Rata-rata Latensi</div>
                </div>
                <div className="w-px h-12 bg-outline-variant/20"></div>
                <div>
                  <div className="text-3xl font-headline font-black text-on-surface">24/7</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500">Support Handal</div>
                </div>
                <div className="w-px h-12 bg-outline-variant/20"></div>
                <div>
                  <div className="text-3xl font-headline font-black text-on-surface">50rb+</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500">Server Aktif</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter uppercase mb-4">Testimoni Player</h2>
                <p className="text-on-surface-variant">Dengerin apa kata komunitas kami, jangan cuma percaya omongan kami.</p>
              </div>
              <div className="hidden md:flex gap-4">
                <button className="p-3 rounded-full border border-outline-variant/30 hover:bg-white/5 active:scale-95 transition-all"><span className="material-symbols-outlined">west</span></button>
                <button className="p-3 rounded-full border border-outline-variant/30 hover:bg-white/5 active:scale-95 transition-all"><span className="material-symbols-outlined">east</span></button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
                <div className="flex gap-1 text-tertiary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-on-surface leading-relaxed italic mb-8">"Pindah dari host gede ke ALTPLAY dan perbedaannya kerasa banget. TPS-nya mantap, nggak ada lag walaupun pake 50+ mod."</p>
                <div className="flex items-center gap-4">
                  <img alt="avatar" className="w-12 h-12 rounded-full bg-surface-container-highest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZDdugqZG1x1zGBDc5XR2tGt-vxr-1QoZRXQjD5ngpTVo1CM1rNyYtC-BxoFd4kWvicHpfVr0BYf4wWAdywDr5H-WLdoeTtZtdSOEY0L26ga3-oq66Sa4zk_fT8qj8TwVgyLsbniJ_enD8sxt1mHoVINLSy6BYJXm146RUXK7QpGPgnshn989IAxRH0roB13tgULSkmKWc-FQs6zMCDFY_OGtkmDiDlXbNXKHz7xIqVVDrgJcUfLffGHXZy95d3Jv5EPrcB2TZmq6l" />
                  <div>
                    <div className="font-headline font-bold text-sm uppercase">Alex_The_Builder</div>
                    <div className="text-xs text-zinc-500">Pemilik Jaringan Survival</div>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary-fixed-dim">
                <div className="flex gap-1 text-tertiary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-on-surface leading-relaxed italic mb-8">"Tim supportnya luar biasa, mereka bantu aku debug plugin kustom di jam 3 pagi. pelayanan dan harganya benar benar bagus."</p>
                <div className="flex items-center gap-4">
                  <img alt="avatar" className="w-12 h-12 rounded-full bg-surface-container-highest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm4JjbZzozOZMr_UdLkxhXcm7S4odOXZCMQDNhhAzMnLWOTnOh-wYJ36wooFsV3fIDRkC9lUba7XJ1XqluiAR3AC1We-_MKOH8t5C3KW8Iq1ObELrQ28ocD5Ywv4zplkVq25NqWbK-sqYiirdrd0ZetzuScZov69FFW4D-B7fNfkjEqBMNCZ8c-0Ijpapof27YgzlNnhiHk-MVJvBjANwOernBD5q88OYg65ihmuP-kjxMuEqZ-c_Yds3ajIajVHWSRWsB5lxuZrfE" />
                  <div>
                    <div className="font-headline font-bold text-sm uppercase">CreeperKing_99</div>
                    <div className="text-xs text-zinc-500">Admin SMP Hardcore</div>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary-container">
                <div className="flex gap-1 text-tertiary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-on-surface leading-relaxed italic mb-8">"ALTPLAY udah jadi rumah buat kami selama 2 tahun. Nggak pernah sekalipun ada downtime yang nggak terduga. Rekomended banget."</p>
                <div className="flex items-center gap-4">
                  <img alt="avatar" className="w-12 h-12 rounded-full bg-surface-container-highest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG-51K-Ui6Yn7p2UON34w6HiM10ew8n2zYA0r23pX8Xc5Pqiw6FfYBOMO-22-zz-YW-sOgqYowvqmb2S9NkN_4NRJE5XKmk5P8MJzIvYOD20tsoMy2siacJYxRcc9nn_JHdYuB0LlnTyQG2YVsVRghZDiIoFeuPXVJFi4D5Eq3BUtZmlHSqOXL3oRB_2Stj2ix_CxCf0DCdi0CjXPj-CfnLYI6e3NBtFG1ZL8lofBMUohDJeFEzyDg3TSy9k15i-pNc8WoKA58smUP" />
                  <div>
                    <div className="font-headline font-bold text-sm uppercase">SolarNexus_TV</div>
                    <div className="text-xs text-zinc-500">Streamer Twitch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto glass-panel p-16 rounded-2xl text-center relative z-10 border-primary/20">
            <div className="absolute inset-0 bg-primary/5 -z-10"></div>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase mb-6 leading-none">SIAP BUAT <span className="text-primary">MEMULAI</span>?</h2>
            <p className="text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto">Gabung bareng ribuan player lain dan mulai perjalanan kamu di platform hosting Minecraft paling gokil sedunia.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/configure" className="bg-primary text-on-primary-container px-10 py-5 font-headline font-black uppercase text-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(0,209,255,0.2)] inline-block text-center border border-primary">Ambil Server Kamu</a>
              <a href="/contact" className="bg-surface-container-high border border-outline-variant/30 px-10 py-5 font-headline font-black uppercase text-lg hover:bg-surface-container-highest active:scale-95 transition-all inline-block text-center">Hubungi Kami</a>
            </div>
          </div>
          {/* Atmospheric Glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary-container/5 blur-[120px] rounded-full"></div>
        </section>
      </div>
    </Layout>
  );
}
