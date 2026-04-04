import React, { useState } from 'react';

export default function ServerDashboard() {
  const [serverState, setServerState] = useState('ONLINE'); // 'ONLINE', 'OFFLINE', 'STARTING'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container flex min-h-screen relative overflow-hidden">
      
      {/* Mobile Drawer Overlay */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SideNavBar Component */}
      <aside className={`h-screen w-64 fixed left-0 top-0 bg-[#1c1b1b] flex flex-col py-8 gap-4 z-50 border-r border-white/5 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="px-6 mb-8 flex justify-between lg:justify-center items-center">
          <a href="/" className="hover:brightness-110 transition-all">
            <img src="/ALTPLAY-logo.png" alt="ALTPLAY" className="h-8 w-auto" />
          </a>
          <button className="lg:hidden text-zinc-400 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high/50 border border-white/5">
            <div className={`w-10 h-10 min-w-10 rounded-lg flex items-center justify-center overflow-hidden transition-colors ${serverState === 'ONLINE' ? 'bg-primary-container' : 'bg-surface-container-highest'}`}>
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
          <a className="flex items-center gap-3 px-4 py-3 bg-sky-500/10 text-sky-400 border-r-2 border-sky-400 font-body text-sm font-medium transition-transform hover:translate-x-1" href="#console" onClick={() => setIsSidebarOpen(false)}>
            <span className="material-symbols-outlined text-xl">terminal</span>
            <span>Konsol</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-100 hover:bg-white/5 transition-all duration-300 rounded-lg" href="#files" onClick={() => setIsSidebarOpen(false)}>
            <span className="material-symbols-outlined text-xl">folder_open</span>
            <span className="font-body text-sm font-medium">File</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-100 hover:bg-white/5 transition-all duration-300 rounded-lg" href="#database" onClick={() => setIsSidebarOpen(false)}>
            <span className="material-symbols-outlined text-xl">database</span>
            <span className="font-body text-sm font-medium">Database</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-100 hover:bg-white/5 transition-all duration-300 rounded-lg" href="#history" onClick={() => setIsSidebarOpen(false)}>
            <span className="material-symbols-outlined text-xl">history</span>
            <span className="font-body text-sm font-medium">Backup</span>
          </a>
        </nav>
        <div className="mt-auto px-4 flex flex-col gap-2">
          <a href="/harga" className="w-full py-3 px-4 bg-primary-container text-on-primary-container font-headline font-bold text-[11px] text-center block uppercase tracking-widest rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,209,255,0.2)]">
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
      <main className="w-full lg:ml-64 flex-1 min-h-screen bg-surface relative flex flex-col">
        {/* Tonal Depth Background Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay max-h-[800px]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzle91YbtzH7bVH1J-qYOJ_PCVDS8WjQAs-fo9DyHht62CtrvAVNVQaSklPblJ72OQ-KcQ5DkXgdANUisu5ssrocmGHfsIil8BQV51VwxTSNUUwCKoCt7y1y3qw0iwUYiUGx0XaHFYlhAHv1PnKSgFssWSSAuTEetaMT5UNDnVHqXE5a8H5pUiY5y3YwQOZ4zvDg2eS2Kh7w5zytT1Z0HJrz2sNnCpUwsx08EEZzlmelZMnQkIAIQHj1xJJ7jgOMiPKxFjvoeaLKLM')" }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 z-0"></div>

        {/* Top Header Navigation (Integrated) */}
        <header className="sticky top-0 z-30 bg-[#131313]/80 backdrop-blur-md px-4 md:px-8 py-4 border-b border-white/5 flex flex-wrap gap-4 justify-between items-center">
          <div className="flex items-center gap-3 lg:gap-4">
            <button className="lg:hidden p-2 -ml-2 text-zinc-400 hover:text-white" onClick={() => setIsSidebarOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="font-headline font-black text-xl lg:text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 uppercase">KONSOL</h1>
            <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border transition-colors ${serverState === 'ONLINE' ? 'bg-secondary-container/10 border-secondary-fixed-dim/20 text-secondary-fixed-dim' :
                serverState === 'STARTING' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                  'bg-red-500/10 border-red-500/20 text-red-500'
              }`}>
              {serverState}
            </div>
          </div>
          <div className="flex items-center gap-6 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <div className="flex items-center gap-2 p-1 bg-surface-container-lowest rounded-xl border border-white/5 min-w-max">
              <button onClick={startServer} disabled={serverState !== 'OFFLINE'} className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg bg-secondary-fixed-dim text-black font-headline font-bold text-xs uppercase tracking-tighter hover:brightness-110 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span> Start
              </button>
              <button onClick={() => { stopServer(); setTimeout(startServer, 1000); }} disabled={serverState === 'OFFLINE'} className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-headline font-bold text-xs uppercase tracking-tighter hover:bg-surface-container-highest transition-all active:scale-95 disabled:opacity-50">
                <span className="material-symbols-outlined text-sm">refresh</span> Restart
              </button>
              <button onClick={stopServer} disabled={serverState === 'OFFLINE'} className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg bg-red-600 text-white font-headline font-bold text-xs uppercase tracking-tighter hover:bg-red-500 transition-all active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.3)] disabled:opacity-50 disabled:shadow-none">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stop</span> Stop
              </button>
            </div>
          </div>
        </header>

        <section className="p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-6 md:space-y-8 relative z-10 flex-grow">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {/* CPU Usage */}
            <div className="glass-panel p-5 md:p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-sky-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">CPU Usage</span>
                  <span className="text-2xl md:text-3xl font-headline font-black text-sky-400 tracking-tighter">{serverState === 'ONLINE' ? '42.8%' : '0.0%'}</span>
                </div>
                <span className="material-symbols-outlined text-sky-400/40">memory</span>
              </div>
              <div className="h-12 md:h-16 flex items-end gap-1 opacity-80 mt-4 md:mt-0">
                <div className={`flex-1 bg-sky-500/20 rounded-t-sm transition-all duration-500 ${serverState === 'ONLINE' ? 'h-[30%]' : 'h-1'}`}></div>
                <div className={`flex-1 bg-sky-500/40 rounded-t-sm transition-all duration-500 delay-75 ${serverState === 'ONLINE' ? 'h-[60%]' : 'h-1'}`}></div>
                <div className={`flex-1 bg-sky-500/60 rounded-t-sm transition-all duration-500 delay-100 ${serverState === 'ONLINE' ? 'h-[45%]' : 'h-1'}`}></div>
                <div className={`flex-1 bg-sky-500/80 rounded-t-sm transition-all duration-500 delay-150 ${serverState === 'ONLINE' ? 'h-[70%]' : 'h-1'}`}></div>
              </div>
            </div>
            {/* RAM Usage */}
            <div className="glass-panel p-5 md:p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-cyan-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">RAM Usage</span>
                  <span className="text-2xl md:text-3xl font-headline font-black text-cyan-400 tracking-tighter">{serverState === 'ONLINE' ? '6.2' : '0'} <span className="text-sm md:text-lg text-zinc-500">/ 16GB</span></span>
                </div>
                <span className="material-symbols-outlined text-cyan-400/40">developer_board</span>
              </div>
              <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden mt-6 md:mt-8">
                <div className={`h-full bg-gradient-to-r from-cyan-600 to-cyan-400 relative transition-all duration-1000 ${serverState === 'ONLINE' ? 'w-[38%]' : 'w-[0%]'}`}></div>
              </div>
            </div>
            {/* Disk Usage */}
            <div className="glass-panel p-5 md:p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-teal-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Storage (NVMe)</span>
                  <span className="text-2xl md:text-3xl font-headline font-black text-teal-400 tracking-tighter">18.4 <span className="text-sm md:text-lg text-zinc-500">/ 100GB</span></span>
                </div>
                <span className="material-symbols-outlined text-teal-400/40">dns</span>
              </div>
              <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden mt-6 md:mt-8">
                <div className="h-full bg-gradient-to-r from-teal-600 to-teal-400 w-[18%] relative transition-all duration-1000"></div>
              </div>
            </div>
            {/* Network Traffic */}
            <div className="glass-panel p-5 md:p-6 rounded-2xl border border-white/5 shadow-xl group hover:border-indigo-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Network Out</span>
                  <span className="text-2xl md:text-3xl font-headline font-black text-indigo-400 tracking-tighter">{serverState === 'ONLINE' ? '12.5' : '0.0'} <span className="text-sm md:text-lg text-zinc-500">Mbps</span></span>
                </div>
                <span className="material-symbols-outlined text-indigo-400/40">cell_tower</span>
              </div>
              <div className="flex items-center gap-2 mt-6 md:mt-8 text-xs text-zinc-400">
                <span className="material-symbols-outlined text-sm text-emerald-500">arrow_downward</span> 2.1 Mbps In
              </div>
            </div>
          </div>

          {/* Console Output Area */}
          <div className="glass-panel border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px] md:h-[600px] relative">
            <div className="bg-[#131212] px-4 md:px-6 py-3 md:py-4 border-b border-white/5 flex flex-wrap gap-2 justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-zinc-400">terminal</span>
                <span className="font-headline font-bold text-sm tracking-widest text-zinc-300 uppercase">Live Console</span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-sm">download</span></button>
                <button className="p-2 text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-sm">fullscreen</span></button>
              </div>
            </div>
            
            {/* Terminal Lines */}
            <div className="flex-1 bg-[#09090b] p-4 md:p-6 p-font-mono text-xs md:text-sm overflow-y-auto space-y-2 scroller">
              <div className="text-zinc-500 mb-4 pb-4 border-b border-white/5">
                ALTPLAY Server Daemon v2.1.4<br/>
                Koneksi ke node Diamond-JKT-01 berhasil. Autentikasi disetujui.
              </div>
              {logs.map((log, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:gap-4 hover:bg-white/5 px-2 py-0.5 rounded transition-colors group">
                  <div className="flex gap-4 opacity-50 w-32 shrink-0">
                    <span className="text-zinc-500">[{log.time}]</span>
                    <span className={`text-${log.color} font-bold text-[10px] uppercase w-12 tracking-wider`}>{log.level}</span>
                  </div>
                  <span className={`text-${log.color} font-medium break-all`}>{log.msg}</span>
                </div>
              ))}
              {serverState === 'OFFLINE' && (
                <div className="text-red-500 opacity-80 py-4 font-bold flex gap-2"><span className="material-symbols-outlined text-sm">power_off</span> Proses dihentikan. Container dalam keadaan istirahat.</div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleCommand} className="bg-surface-container-lowest border-t border-white/5 p-3 md:p-4 flex gap-3 lg:gap-4 z-10">
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-zinc-500 font-bold">&gt;</span>
                <input 
                  type="text" 
                  value={consoleInput}
                  onChange={(e) => setConsoleInput(e.target.value)}
                  disabled={serverState !== 'ONLINE'}
                  className="w-full bg-surface-container border border-white/5 rounded-xl py-3 md:py-4 pl-10 pr-4 text-sm font-mono text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-sky-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={serverState === 'ONLINE' ? 'Ketik perintah disini (contoh: /op username)' : 'Server wajib nyala buat ngirim perintah'}
                />
              </div>
              <button 
                type="submit" 
                disabled={serverState !== 'ONLINE' || !consoleInput.trim()}
                className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 px-4 md:px-6 rounded-xl font-headline font-bold uppercase tracking-widest text-xs transition-all disabled:opacity-30 disabled:grayscale"
              >
                Kirim
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
