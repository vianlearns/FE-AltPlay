import React, { useState } from 'react';

export default function ServerDashboard() {
  const [serverState, setServerState] = useState('ONLINE'); // 'ONLINE', 'OFFLINE', 'STARTING'
  const [logs, setLogs] = useState([
    { time: '14:32:01', level: 'INFO', msg: 'Memuat properti', color: 'emerald-400' },
    { time: '14:32:01', level: 'INFO', msg: 'Default gametype: SURVIVAL', color: 'emerald-400' },
    { time: '14:32:01', level: 'INFO', msg: 'Bikin key pair', color: 'emerald-400' },
    { time: '14:32:02', level: 'INFO', msg: 'Mulai server Minecraft di *:25565', color: 'emerald-400' },
    { time: '14:35:44', level: 'COMMAND', msg: '/weather clear dijalanin sama ALTAdmin', color: 'cyan-400' }
  ]);
  const [consoleInput, setConsoleInput] = useState('');

  const handleCommand = (e) => {
    e.preventDefault();
    if (!consoleInput.trim()) return;
    
    const newLog = {
      time: new Date().toLocaleTimeString('id-ID', { hour12: false }).substring(0, 8),
      level: 'COMMAND',
      msg: consoleInput,
      color: 'zinc-300'
    };

    setLogs([...logs, newLog]);
    setConsoleInput('');
  };

  const startServer = () => {
    if (serverState === 'ONLINE') return;
    setServerState('STARTING');
    setTimeout(() => {
      setServerState('ONLINE');
      setLogs([...logs, { time: new Date().toLocaleTimeString('id-ID').substring(0, 8), level: 'INFO', msg: 'Server udah jalan.', color: 'emerald-400' }]);
    }, 2000);
  };

  const stopServer = () => {
    if (serverState === 'OFFLINE') return;
    setServerState('OFFLINE');
    setLogs([...logs, { time: new Date().toLocaleTimeString('id-ID').substring(0, 8), level: 'INFO', msg: 'Server dimatiin.', color: 'red-400' }]);
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container flex">
      {/* SideNavBar Component */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#1c1b1b] flex flex-col py-8 gap-4 z-40 border-r border-white/5">
        <div className="px-6 mb-8 flex justify-center">
          <a href="/" className="hover:brightness-110 transition-all">
            <img src="/ALTPLAY-logo.png" alt="ALTPLAY" className="h-8 w-auto" />
          </a>
        </div>
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high/50 border border-white/5">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden transition-colors ${serverState === 'ONLINE' ? 'bg-primary-container' : 'bg-surface-container-highest'}`}>
              <img alt="User Server Avatar" className={`w-full h-full object-cover ${serverState !== 'ONLINE' && 'grayscale opacity-50'}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHkIBC-IdicCZ9Q6e0qXodbEsvvFvDIdv-xto1Dlca_5hcmD7anxsJm3pWMM13sf_xKZ5U85VkjnhMpa-OviyGe1QO3aeO7_SG_QfeuFpFYuVENa0iozDQ4zbb-g3PNTI46LX93ugWF3RPRLiHjk-Eu_FgUbYEn5XzsZSz2IpvLEhP1rRI-tdhQ6e1SxadujHsBpZjiHBZ_9xIQGDrIHiCWdAhHhGStadC38JJC65NgQLJ9uXPic0EPMkLoCfmhWMy1ATihiUmVJGM" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-headline font-bold text-on-surface text-sm truncate">Survival-01</span>
              <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
                {serverState === 'ONLINE' ? 'Running 1.20.1' : serverState === 'STARTING' ? 'Lagi Start...' : 'OFFLINE'}
              </span>
            </div>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-1 px-4">
          {/* Active State: Console */}
          <a className="flex items-center gap-3 px-4 py-3 bg-sky-500/10 text-sky-400 border-r-2 border-sky-400 font-body text-sm font-medium transition-transform hover:translate-x-1" href="#console">
            <span className="material-symbols-outlined text-xl">terminal</span>
            <span>Konsol</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-100 hover:bg-white/5 transition-all duration-300 rounded-lg" href="#files">
            <span className="material-symbols-outlined text-xl">folder_open</span>
            <span className="font-body text-sm font-medium">File</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-100 hover:bg-white/5 transition-all duration-300 rounded-lg" href="#database">
            <span className="material-symbols-outlined text-xl">database</span>
            <span className="font-body text-sm font-medium">Database</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-100 hover:bg-white/5 transition-all duration-300 rounded-lg" href="#history">
            <span className="material-symbols-outlined text-xl">history</span>
            <span className="font-body text-sm font-medium">Backup</span>
          </a>
        </nav>
        <div className="mt-auto px-4 flex flex-col gap-2">
          <a href="/pricing" className="w-full py-3 px-4 bg-primary-container text-on-primary-container font-headline font-bold text-[11px] text-center block uppercase tracking-widest rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,209,255,0.2)]">
            Upgrade Node
          </a>
          <div className="h-px bg-white/5 my-2"></div>
          <a className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-zinc-100 transition-colors" href="/contact">
            <span className="material-symbols-outlined text-xl">help_center</span>
            <span className="text-xs font-medium uppercase tracking-wider">Support</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 flex-1 min-h-screen bg-surface relative flex flex-col">
        {/* Tonal Depth Background Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay max-h-[800px]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzle91YbtzH7bVH1J-qYOJ_PCVDS8WjQAs-fo9DyHht62CtrvAVNVQaSklPblJ72OQ-KcQ5DkXgdANUisu5ssrocmGHfsIil8BQV51VwxTSNUUwCKoCt7y1y3qw0iwUYiUGx0XaHFYlhAHv1PnKSgFssWSSAuTEetaMT5UNDnVHqXE5a8H5pUiY5y3YwQOZ4zvDg2eS2Kh7w5zytT1Z0HJrz2sNnCpUwsx08EEZzlmelZMnQkIAIQHj1xJJ7jgOMiPKxFjvoeaLKLM')" }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 z-0"></div>
        
        {/* Top Header Navigation (Integrated) */}
        <header className="sticky top-0 z-30 bg-[#131313]/80 backdrop-blur-md px-8 py-4 border-b border-white/5 flex flex-wrap gap-4 justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="font-headline font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 uppercase">KONSOL</h1>
            <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border transition-colors ${
              serverState === 'ONLINE' ? 'bg-secondary-container/10 border-secondary-fixed-dim/20 text-secondary-fixed-dim' : 
              serverState === 'STARTING' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 
              'bg-red-500/10 border-red-500/20 text-red-500'
            }`}>
              {serverState}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 p-1 bg-surface-container-lowest rounded-xl border border-white/5">
              <button onClick={startServer} disabled={serverState !== 'OFFLINE'} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-fixed-dim text-black font-headline font-bold text-xs uppercase tracking-tighter hover:brightness-110 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span> Start
              </button>
              <button onClick={() => { stopServer(); setTimeout(startServer, 1000); }} disabled={serverState === 'OFFLINE'} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-headline font-bold text-xs uppercase tracking-tighter hover:bg-surface-container-highest transition-all active:scale-95 disabled:opacity-50">
                <span className="material-symbols-outlined text-sm">refresh</span> Restart
              </button>
              <button onClick={stopServer} disabled={serverState === 'OFFLINE'} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white font-headline font-bold text-xs uppercase tracking-tighter hover:bg-red-500 transition-all active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.3)] disabled:opacity-50 disabled:shadow-none">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stop</span> Stop
              </button>
            </div>
          </div>
        </header>

        <section className="p-8 max-w-[1600px] w-full mx-auto space-y-8 relative z-10 flex-grow">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* CPU Usage */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-sky-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">CPU Usage</span>
                  <span className="text-3xl font-headline font-black text-sky-400 tracking-tighter">{serverState === 'ONLINE' ? '42.8%' : '0.0%'}</span>
                </div>
                <span className="material-symbols-outlined text-sky-400/40">memory</span>
              </div>
              <div className="h-16 flex items-end gap-1 opacity-80">
                <div className={`flex-1 bg-sky-500/20 rounded-t-sm transition-all duration-500 ${serverState === 'ONLINE' ? 'h-[30%]' : 'h-1'}`}></div>
                <div className={`flex-1 bg-sky-500/40 rounded-t-sm transition-all duration-500 delay-75 ${serverState === 'ONLINE' ? 'h-[60%]' : 'h-1'}`}></div>
                <div className={`flex-1 bg-sky-500/60 rounded-t-sm transition-all duration-500 delay-100 ${serverState === 'ONLINE' ? 'h-[45%]' : 'h-1'}`}></div>
                <div className={`flex-1 bg-sky-500/80 rounded-t-sm transition-all duration-500 delay-150 ${serverState === 'ONLINE' ? 'h-[70%]' : 'h-1'}`}></div>
              </div>
            </div>
            {/* RAM Usage */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-cyan-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">RAM Usage</span>
                  <span className="text-3xl font-headline font-black text-cyan-400 tracking-tighter">{serverState === 'ONLINE' ? '6.2' : '0'} <span className="text-lg text-zinc-500">/ 16GB</span></span>
                </div>
                <span className="material-symbols-outlined text-cyan-400/40">developer_board</span>
              </div>
              <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden mt-8">
                <div className={`h-full bg-gradient-to-r from-cyan-600 to-cyan-400 relative transition-all duration-1000 ${serverState === 'ONLINE' ? 'w-[38%]' : 'w-[0%]'}`}></div>
              </div>
            </div>
            {/* Disk Usage */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-emerald-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Storage</span>
                  <span className="text-3xl font-headline font-black text-secondary-fixed-dim tracking-tighter">14.9 GB</span>
                </div>
                <span className="material-symbols-outlined text-emerald-400/40">storage</span>
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500 font-bold mt-8 uppercase tracking-widest">
                <span>SSD NVMe Gen 4</span>
                <span className="text-secondary-fixed-dim">HEALTHY</span>
              </div>
            </div>
            {/* Network */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-primary-container/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Network Out</span>
                  <span className="text-3xl font-headline font-black text-on-surface tracking-tighter">{serverState === 'ONLINE' ? '124' : '0'} <span className="text-lg text-zinc-500 font-medium">Mb/s</span></span>
                </div>
                <span className="material-symbols-outlined text-zinc-400/40">router</span>
              </div>
              <div className={`mt-4 flex items-center gap-2 transition-opacity ${serverState === 'ONLINE' ? 'opacity-100' : 'opacity-30'}`}>
                <div className="w-2 h-2 rounded-full bg-secondary-fixed-dim shadow-[0_0_10px_rgba(0,227,131,0.5)]"></div>
                <span className="text-xs font-medium text-zinc-400">Koneksi Stabil</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
            {/* Console Window */}
            <div className="xl:col-span-2 flex flex-col h-[600px] bg-surface-container-lowest rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-surface-container-low border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)] cursor-pointer hover:bg-red-400"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)] cursor-pointer hover:bg-amber-400"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)] cursor-pointer hover:bg-green-400"></div>
                  </div>
                  <span className="ml-3 font-mono text-xs font-bold text-zinc-300 uppercase tracking-[0.2em]">Log Server Aktif</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-zinc-500">{logs.length} BARIS</span>
                  <button onClick={() => setLogs([])} className="material-symbols-outlined text-zinc-400 hover:text-white transition-colors text-sm" title="Bersihin Log">delete_sweep</button>
                </div>
              </div>
              <div className="flex-1 p-6 font-mono text-sm overflow-y-auto custom-scrollbar bg-[#0a0a0a] border-t border-b border-white/5 leading-relaxed flex flex-col justify-end">
                <div className="space-y-1.5 mt-auto">
                  {logs.map((log, i) => (
                    <p key={i} className="text-zinc-500">
                      <span className="text-sky-500">[{log.time}]</span>{' '}
                      <span className={`text-${log.color}`}>{log.level}</span>: <span className="text-zinc-300">{log.msg}</span>
                    </p>
                  ))}
                  {serverState === 'STARTING' && <p className="text-zinc-500 italic mt-2 animate-pulse">... lagi nyiapin sistem ...</p>}
                </div>
              </div>
              <div className="p-4 bg-surface-container-low">
                <form onSubmit={handleCommand} className="relative group flex items-center bg-[#0a0a0a] rounded-lg border border-white/5 overflow-hidden focus-within:ring-1 focus-within:ring-sky-500/50">
                  <span className="absolute left-4 text-sky-400 font-bold text-sm pointer-events-none">&gt;</span>
                  <input 
                    value={consoleInput}
                    onChange={(e) => setConsoleInput(e.target.value)}
                    disabled={serverState !== 'ONLINE'}
                    className="w-full bg-transparent border-none pl-10 pr-4 py-3.5 text-sm font-mono text-zinc-300 focus:ring-0 placeholder:text-zinc-600 transition-all outline-none disabled:opacity-50" 
                    placeholder="Ketik command terus tekan Enter..." 
                    type="text" 
                  />
                </form>
              </div>
            </div>

            {/* Sidebar Content (Players & Info) */}
            <div className="space-y-6">
              {/* Players List */}
              <div className="glass-panel rounded-2xl border border-white/5 shadow-xl overflow-hidden flex flex-col max-h-[400px]">
                <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
                  <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-zinc-400">Player Online</h3>
                  <span className="text-[10px] font-black bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded">{serverState === 'ONLINE' ? '3 / 100' : '0 / 100'}</span>
                </div>
                {serverState === 'ONLINE' ? (
                  <div className="p-4 flex flex-col gap-2 flex-grow overflow-y-auto custom-scrollbar">
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-zinc-800 border border-white/10 overflow-hidden">
                          <img alt="Minecraft Head" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4xuIzRUxgPsHaKwXAnvz_vckDZzMKEROM59CENnyiQWAe7fFSmKeTGUXtAhMVDclRBL0nd00olPNYodNUN7vSk3U1BFMv9eQXyAuXt-QmrY-L-ShEfc_nZftbK0gaOfCoBk_ne8o49-C6lrC2THFx6ABxkp_1gEzdL5yLihClNa3jSYFJuU8HF6csuw32Co1vQ3bvEjdsuFTZMKQbVM1EwqQKlNKklORp0KwJDsxYH4G_fn-UTaa1a1Qv9iJTBnOKgMaKrLPmVY2l" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-on-surface group-hover:text-sky-400 transition-colors">SkyViper</span>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Ping: 24ms</span>
                        </div>
                      </div>
                      <button className="material-symbols-outlined text-zinc-600 hover:text-red-500 cursor-pointer text-lg transition-colors p-1" title="Kick Player">block</button>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-sm font-body text-zinc-500 my-auto">
                    Server offline. Nunggu player join.
                  </div>
                )}
                <button className="w-full py-3 bg-surface-container-high text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-white transition-all hover:bg-surface-container-highest">
                  Lihat Semua Player
                </button>
              </div>

              {/* Additional Info Card */}
              <div className="bg-surface-container-low rounded-2xl border border-white/5 p-6 relative group overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all"></div>
                <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-zinc-400 mb-4">Quick Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Auto Backup</span>
                    <button className="w-8 h-4 bg-secondary-fixed-dim/30 rounded-full relative hover:opacity-80 transition-opacity">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-secondary-fixed-dim rounded-full shadow-[0_0_5px_rgba(0,227,131,0.5)]"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Query Protocol</span>
                    <span className="text-[10px] font-bold text-on-surface bg-surface-container-highest px-2 py-1 rounded">UDP/TCP</span>
                  </div>
                  <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-lg border border-sky-400/20 text-sky-400 font-headline font-bold text-xs uppercase tracking-tighter hover:bg-sky-500/10 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-sm">settings_backup_restore</span> Reinstall Server
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-12 px-8 mt-auto border-t border-white/5 bg-[#131313]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <img src="/ALTPLAY-logo.png" alt="ALTPLAY" className="h-6 w-auto" />
              <p className="font-body text-[10px] tracking-widest text-zinc-500 uppercase">© 2026 ALTPLAY. BUKAN PRODUK RESMI MINECRAFT.</p>
            </div>
            <div className="flex gap-8">
              <a className="font-body text-xs tracking-widest uppercase text-zinc-500 hover:text-sky-400 transition-colors" href="#">TOS</a>
              <a className="font-body text-xs tracking-widest uppercase text-zinc-500 hover:text-sky-400 transition-colors" href="#">Privacy Policy</a>
              <a className="font-body text-xs tracking-widest uppercase text-zinc-500 hover:text-sky-400 transition-colors" href="#">Discord</a>
              <a className="font-body text-xs tracking-widest uppercase text-zinc-500 hover:text-sky-400 transition-colors" href="#">System Status</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
