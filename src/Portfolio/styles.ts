export const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=IBM+Plex+Mono:wght@400;500&display=swap');
.identity { display: flex; align-items: center; gap: 24px; }
.site{--bg:#E8EDF2;--ink:#14213D;--mute:#4B5A75;--line:#B4C0CF;--term:#0F1B33;--termink:#DCE6F5;--signal:#FFC857;
  min-height:100vh;background:var(--bg);color:var(--ink);font-family:'Bricolage Grotesque',system-ui,sans-serif;font-size:18px;line-height:1.6}
.site[data-theme=dark]{--bg:#0B1226;--ink:#E6ECF7;--mute:#9AA8C2;--line:#25324F;--term:#050A18;--termink:#DCE6F5}
.site *{box-sizing:border-box}
.site a{color:inherit}
.site :focus-visible{outline:3px solid var(--signal);outline-offset:3px}
.wrap{max-width:860px;margin:0 auto;padding:0 24px}
.top{display:flex;justify-content:space-between;align-items:center;padding-top:24px;padding-bottom:24px}
.brand{font-weight:800;font-size:1.1rem}
.site section{padding:56px 0;border-top:1px solid var(--line)}
.site section.hero{border-top:0;padding-top:24px}
h1{font-size:clamp(2.2rem,6vw,3.8rem);line-height:1.05;font-weight:800;letter-spacing:-0.02em;margin:0 0 20px;max-width:22ch}
h2{font-size:1.6rem;font-weight:600;margin:0 0 16px}
.lead{max-width:60ch;color:var(--mute);margin:0 0 28px}
.hero-top{display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center}
.avatar{width:180px;height:180px;border-radius:50%;overflow:hidden;border:4px solid var(--ink);box-shadow:8px 8px 0 var(--signal);background:var(--term);color:var(--signal);display:grid;place-items:center;font-weight:800;font-size:3rem}
.avatar img{width:100%;height:100%;object-fit:cover;object-position:center 20% top;display:block}
.hint{color:var(--mute);font-size:.95rem;margin:14px 0 0}
button{font:inherit;font-size:.95rem;font-weight:600;cursor:pointer;border:2px solid var(--ink);background:var(--signal);color:#14213D;padding:8px 16px;border-radius:6px}
button:hover{filter:brightness(.95)}
button.ghost{background:transparent;color:var(--ink)}
.term{background:var(--term);color:var(--termink);border-radius:10px;font-family:'IBM Plex Mono',monospace;font-size:.9rem;overflow:hidden;box-shadow:0 12px 0 -4px var(--line)}
.term-bar{display:flex;gap:8px;align-items:center;padding:10px 14px;border-bottom:1px solid #22304F}
.term-bar span{width:11px;height:11px;border-radius:50%;background:#34456B}
.term-bar b{margin-left:8px;font-weight:400;color:#8FA1C4;font-size:.8rem}
.term-body{height:300px;overflow-y:auto;padding:14px 16px}
.tin{color:var(--signal)}
.tout{white-space:pre-wrap;line-height:1.5}
.tprompt{display:flex;gap:8px;align-items:center;margin-top:4px}
.tprompt label{color:var(--signal)}
.tprompt input{flex:1;background:transparent;border:0;color:inherit;font:inherit;caret-color:var(--signal);outline:none}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}
.chip{background:transparent;color:var(--ink);border-width:1px;padding:4px 12px;border-radius:999px;font-weight:500}
.chip.on{background:var(--ink);color:var(--bg)}
.projects{list-style:none;margin:0;padding:0}
.projects li{border-bottom:1px solid var(--line)}
.projects a{display:grid;grid-template-columns:10rem 1fr;gap:4px 24px;padding:18px 0;text-decoration:none}
.projects a:hover .ptitle{text-decoration:underline;text-decoration-color:var(--signal);text-decoration-thickness:4px}
.ptitle{font-weight:800;font-size:1.2rem}
.pdesc{color:var(--mute)}
.ptags{grid-column:2;font-size:.9rem;color:var(--mute);font-family:'IBM Plex Mono',monospace}
.stages{list-style:none;margin:0;padding:0}
.stages li{display:grid;grid-template-columns:10rem 1fr;gap:24px;padding:16px 0;border-bottom:1px solid var(--line)}
.swhen{font-family:'IBM Plex Mono',monospace;font-size:.9rem;color:var(--mute);padding-top:4px}
.stitle{font-weight:800;font-size:1.15rem}
.stages p{margin:4px 0 0;color:var(--mute)}
.skills{margin:0}
.skills div{display:grid;grid-template-columns:10rem 1fr;gap:24px;padding:10px 0;border-bottom:1px solid var(--line)}
.skills dt{font-weight:800}
.skills dd{margin:0;color:var(--mute)}
.commit{background:var(--term);color:var(--termink);border-radius:10px;padding:24px}
.commit code{display:block;font-family:'IBM Plex Mono',monospace;font-size:1rem;margin-bottom:20px;word-break:break-word}
.row{display:flex;gap:12px;flex-wrap:wrap}
.commit .ghost{color:var(--termink);border-color:#4A5C84}
.foot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;padding-top:32px;padding-bottom:48px;border-top:1px solid var(--line);color:var(--mute)}
.rain{position:fixed;inset:0;width:100vw;height:100vh;z-index:50;cursor:pointer}
.hl7-demo {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
}
.hl7-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}
.hl7-form label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.hl7-form input,
.hl7-form select {
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--bg);
  color: var(--ink);
  font: inherit;
}
.hl7-output {
  margin: 0;
  padding: 16px;
  height: 320px;
  width: 100%;
  min-width: 0;
  background: var(--term);
  color: var(--termink);
  border-radius: 10px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.9rem;
  white-space: pre;
  overflow-x: auto;
  overflow-y: auto;
  box-shadow: 0 12px 0 -4px var(--line);
}
.hl7-result {
  min-width: 0;
}
.transform-buttons {
  display: flex;
  gap: 12px;
}
.transform-buttons button {
  flex: 1;
}
@media (max-width: 700px) {
  .hl7-demo {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .hl7-output {
    height: 220px;
  }
}
@media (max-width:600px){
  .projects a,.skills div,.stages li{grid-template-columns:1fr;gap:2px}
  .ptags{grid-column:1}
  .term-body{height:260px}
  .hero-top{grid-template-columns:1fr}
  .avatar{order:-1;width:140px;height:140px;font-size:2.4rem}
}
`;