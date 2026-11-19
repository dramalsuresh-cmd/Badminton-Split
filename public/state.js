<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0a1b4a">
<title>Smash Club Blackburn – Court Fund</title>
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:title" content="Smash Club Blackburn – Court Fund">
<meta property="og:image" content="/og.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--bg:#f2f4f9;--card:#fff;--ink:#0f1a33;--mut:#65708a;--line:#e1e6f0;--g:#1e3a8a;--gd:#0b2a66;--gl:#e3eafc;--ok:#15803d;--okl:#dcf5e5;--r:#dc2626;--rl:#fde4e4;--a:#d97706;--al:#fdf0d5;--sh:0 1px 2px rgba(15,26,51,.06),0 4px 14px rgba(15,26,51,.07)}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,system-ui,sans-serif;font-size:15px;-webkit-text-size-adjust:100%;text-size-adjust:100%;overflow-x:hidden}
button,input,select,textarea{font:inherit;color:inherit}
.wrap{max-width:980px;margin:0 auto;padding:0 14px 90px}
header{background:linear-gradient(135deg,#0a1b4a,#13317a 60%,#1f4bb0);color:#fff;padding:20px 14px 58px}
header .in{max-width:980px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px 10px}
h1{margin:0;font-size:clamp(17px,5vw,21px);font-weight:800;letter-spacing:-.3px}
.sub{opacity:.85;font-size:13px;margin-top:2px}
.brand{display:flex;align-items:center;gap:12px;min-width:0}
.logo{width:58px;height:58px;border-radius:15px;flex:none;box-shadow:0 0 0 1.5px rgba(255,255,255,.25),0 4px 14px rgba(0,0,0,.35)}
.sync{font-size:12px;background:rgba(255,255,255,.18);padding:4px 10px;border-radius:99px;white-space:nowrap}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:-40px 0 14px}
.stat{background:var(--card);border-radius:16px;padding:12px;box-shadow:var(--sh);min-width:0}
.stat b{display:block;font-size:clamp(15px,4.6vw,19px);font-weight:800;letter-spacing:-.3px;white-space:nowrap}
.stat span{font-size:11.5px;color:var(--mut);font-weight:500}
.tabs{display:flex;gap:6px;background:#e3e8f3;padding:4px;border-radius:14px;margin-bottom:14px}
.tabs button{flex:1;min-width:0;border:0;background:none;padding:9px 4px;border-radius:11px;font-weight:600;color:var(--mut);cursor:pointer;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tabs button.on{background:#fff;color:var(--gd);box-shadow:var(--sh)}
.bar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
.btn{border:0;border-radius:12px;padding:10px 14px;font-weight:700;cursor:pointer;background:var(--g);color:#fff;font-size:14px}
.btn:disabled{opacity:.6;cursor:default}
.btn.sec{background:#fff;color:var(--gd);box-shadow:inset 0 0 0 1.5px var(--line)}
.btn.red{background:var(--rl);color:var(--r)}
.btn.sm{padding:6px 10px;font-size:12.5px;border-radius:9px}
.card{background:var(--card);border-radius:16px;box-shadow:var(--sh);padding:14px}
.empty{text-align:center;color:var(--mut);padding:34px 16px}
.empty .big{font-size:40px}
/* sheet */
.sheetbox{background:var(--card);border-radius:16px;box-shadow:var(--sh);overflow:auto;-webkit-overflow-scrolling:touch;min-height:200px;max-height:calc(100vh - 270px);max-height:calc(100dvh - 270px)}
table{border-collapse:separate;border-spacing:0;width:100%}
th,td{padding:0;border-bottom:1px solid var(--line);border-right:1px solid var(--line);text-align:center;white-space:nowrap}
thead th{position:sticky;top:0;background:#f6f8fc;z-index:3;font-size:11.5px;font-weight:600;padding:7px 6px;min-width:80px;white-space:normal;line-height:1.25}
thead th.clk{cursor:pointer}
thead th small{display:block;color:var(--mut);font-weight:500;font-size:11px}
thead th .ph{color:var(--gd);font-weight:700}
th.name,td.name{position:sticky;left:0;z-index:2;background:#fff;text-align:left;padding:4px 8px;min-width:92px;max-width:116px;font-weight:600;cursor:pointer;box-shadow:1px 0 0 var(--line);overflow:hidden;text-overflow:ellipsis;line-height:1.25}
thead th.name{z-index:4;background:#f6f8fc}
td.name small{display:block;font-size:12px;font-weight:800}
td.name.pos small{color:var(--ok)}td.name.low small{color:var(--a)}td.name.neg small{color:var(--r)}
td.name.neg{background:#fff5f5}td.name.low{background:#fffaf0}
th.name small{display:inline;margin-left:4px}
td.paid{padding:0 8px;color:var(--mut);font-size:13px;min-width:70px}
.cell{width:100%;height:46px;border:0;background:none;font-size:13px;color:#c3cadb;cursor:default}
.cell.ed{cursor:pointer}
.cell.on{background:var(--gl);color:var(--gd);font-weight:700}
.cell.on small{display:block;font-size:10.5px;font-weight:600;opacity:.8;line-height:1}
.cell.ed:not(.on):hover{background:#f1f4fb}
tfoot td{background:#f6f8fc;font-size:12px;font-weight:600;color:var(--mut);padding:8px 4px}
.today{background:#e9eefc!important}
/* balances */
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
.pc{background:var(--card);border-radius:16px;box-shadow:var(--sh);padding:14px;cursor:pointer;border-left:5px solid var(--ok)}
.pc.low{border-color:var(--a)}.pc.neg{border-color:var(--r)}
.pc .n{font-weight:700;font-size:15px}
.pc .b{font-size:26px;font-weight:800;letter-spacing:-.6px;margin:2px 0;color:var(--ok)}
.pc.low .b{color:var(--a)}.pc.neg .b{color:var(--r)}
.pc .m{font-size:12px;color:var(--mut)}
.tag{display:inline-block;font-size:11px;font-weight:700;padding:2px 8px;border-radius:99px;margin-top:6px}
.tag.low{background:var(--al);color:var(--a)}.tag.neg{background:var(--rl);color:var(--r)}.tag.ok{background:var(--okl);color:var(--ok)}
/* pay */
.hold{background:linear-gradient(135deg,#0a1b4a,#1f4bb0);color:#fff;border-radius:16px;padding:16px;box-shadow:var(--sh);margin-bottom:12px}
.hold small{opacity:.8;font-weight:500;font-size:12px;display:block}
.hold b{font-size:20px;font-weight:800;letter-spacing:-.3px}
.pay{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid var(--line)}
.pay:last-of-type{border-bottom:0}
.pay .x{flex:1;min-width:0}
.pay .l{font-size:11.5px;color:var(--mut);font-weight:600}
.pay .v{font-size:17px;font-weight:700;letter-spacing:.3px;word-break:break-word}
.pay .v.none{color:#a7b0c4;font-weight:500;font-size:14px}
.pay input{margin-top:3px}
.steps{margin:10px 0 0;padding-left:18px;font-size:13px;color:var(--mut)}
.steps li{margin:3px 0}
/* modal */
#modal{position:fixed;inset:0;display:none;align-items:flex-end;justify-content:center;background:rgba(8,16,40,.55);z-index:50;padding:0}
#modal.open{display:flex}
.sheet{background:#fff;width:100%;max-width:520px;border-radius:22px 22px 0 0;padding:18px 16px calc(22px + env(safe-area-inset-bottom));max-height:92vh;max-height:92dvh;overflow:auto;-webkit-overflow-scrolling:touch}
@media(min-width:600px){#modal{align-items:center}.sheet{border-radius:22px}}
.sheet h3{margin:0 0 12px;font-size:18px;font-weight:800}
label.f{display:block;font-size:12px;font-weight:600;color:var(--mut);margin:10px 0 4px}
input[type=text],input[type=password],input[type=number],input[type=date],select,textarea{width:100%;min-width:0;max-width:100%;min-height:44px;border:1.5px solid var(--line);border-radius:11px;padding:10px 11px;background:#fff;font-size:16px}
input[type=date],input[type=number],input[type=text],input[type=password],select{display:block;height:46px;line-height:1.2;-webkit-appearance:none;appearance:none}
input[type=date]{text-align:left}
input[type=date]::-webkit-date-and-time-value{text-align:left;min-height:1.2em}
select{padding-right:30px;background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%2365708a' stroke-width='2'/%3E%3C/svg%3E") no-repeat right 12px center;text-overflow:ellipsis}
input:focus,select:focus,textarea:focus{outline:none;border-color:var(--g)}
.row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.row3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.row>*,.row3>*{min-width:0;overflow:hidden}
@media(max-width:400px){.row{grid-template-columns:1fr}.wrap{padding:0 10px 90px}}
@media(orientation:landscape) and (max-height:520px){header{padding:10px 14px 46px}.stats{margin-top:-34px}.sheetbox{max-height:none}#modal{align-items:center}.sheet{border-radius:18px;max-width:640px;max-height:96vh;max-height:96dvh}.fab{padding:10px 16px;bottom:10px;right:10px}.wrap{padding-bottom:70px}#toast{bottom:64px}}
.preview{background:var(--gl);color:var(--gd);border-radius:12px;padding:10px 12px;font-weight:700;margin:12px 0}
.preview small{display:block;font-weight:500;opacity:.85}
.chips{display:flex;flex-wrap:wrap;gap:7px}
.chip{position:relative}
.chip input{position:absolute;opacity:0;inset:0;cursor:pointer;width:100%;height:100%;margin:0}
.chip span{display:block;padding:8px 12px;border-radius:99px;border:1.5px solid var(--line);font-weight:600;font-size:14px;background:#fff}
.chip input:checked+span{background:var(--g);border-color:var(--g);color:#fff}
.chip.ro.on span{background:var(--g);border-color:var(--g);color:#fff}
.acts{display:flex;gap:8px;margin-top:16px}.acts .btn{flex:1}
.err{color:var(--r);font-size:13px;font-weight:600;min-height:18px;margin-top:8px}
.led{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--line);font-size:14px;gap:8px}
.led .p{color:var(--ok);font-weight:700}.led .mi{color:var(--r);font-weight:700}
.led small{color:var(--mut);display:block}
.pl{display:flex;gap:8px;align-items:center;margin-bottom:8px}
.pl input{flex:1}
#toast{position:fixed;left:50%;bottom:84px;transform:translateX(-50%);background:#0f1a33;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;z-index:99;display:none;max-width:90vw}
.fab{position:fixed;right:16px;bottom:18px;z-index:20;box-shadow:0 6px 20px rgba(30,58,138,.4);padding:14px 20px;border-radius:99px;font-size:15px}
h2{font-size:15px;margin:18px 0 8px}
.note{font-size:12.5px;color:var(--mut)}
.foot{margin:28px 0 0;text-align:center;font-size:12.5px;color:var(--mut)}
.foot button{border:0;background:none;color:var(--gd);font-weight:700;font-size:13px;cursor:pointer;padding:10px 14px;border-radius:10px;text-decoration:underline}
.danger{border:1.5px solid var(--rl)}
</style>
</head>
<body>
<header><div class="in"><div class="brand"><img class="logo" src="/logo.webp" alt="Smash Club Blackburn" width="58" height="58"><div><h1>Smash Club Court Fund</h1><div class="sub">Blackburn · advance balance &amp; court split</div></div></div><div class="sync" id="sync">Loading…</div></div></header>
<div class="wrap"><div id="app"><div class="card empty">Loading…</div></div></div>
<div id="modal"></div><div id="toast"></div>
<script>
(function(){
const $=s=>document.querySelector(s);
let S=null,rev=0,admin=false,view='sheet',armed=null,stat='',loadErr=false;
let dirty=false,saving=false,timer=null;
const uid=()=>Math.random().toString(36).slice(2,9);
const h=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=p=>(p<0?'−':'')+'£'+(Math.abs(p)/100).toFixed(2);
const todayISO=()=>new Date().toLocaleDateString('en-CA');
const fd=(d,long)=>new Date(d+'T12:00:00').toLocaleDateString('en-GB',long?{weekday:'short',day:'numeric',month:'short',year:'numeric'}:{weekday:'short',day:'numeric',month:'short'});
const cost=s=>Math.round(s.rate*100*s.hours*s.courts);
const share=s=>s.att.length?Math.round(cost(s)/s.att.length):0;
function stats(p){let paid=0,spent=0,n=0;S.topups.forEach(t=>{if(t.pid===p.id)paid+=t.amt});S.sessions.forEach(s=>{if(s.att.includes(p.id)){spent+=share(s);n++}});return{paid,spent,n,bal:paid-spent}}
const cls=b=>b<0?'neg':(b<S.settings.low*100?'low':'pos');
const sortFmt=v=>{const d=String(v||'').replace(/\D/g,'');return d.length===6?d.replace(/(\d\d)(\d\d)(\d\d)/,'$1-$2-$3'):(v||'')};

function normalize(d){
  d=d||{};d.players=d.players||[];d.sessions=d.sessions||[];d.topups=d.topups||[];
  d.settings=Object.assign({venues:[{name:'Blackburn Leisure Centre',rate:12},{name:'Other court',rate:10}],advance:10,low:5,holder:'Amal'},d.settings||{});
  d.settings.bank=Object.assign({bankName:'',accNo:'',sort:'',benef:'',ref:'Badminton'},d.settings.bank||{});
  return d;
}
function toast(m){const t=$('#toast');t.textContent=m;t.style.display='block';clearTimeout(t._t);t._t=setTimeout(()=>t.style.display='none',3200)}
function paint(){$('#sync').textContent=loadErr?'Offline':admin?(stat||'Admin mode'):'View only'}
function setSync(m){stat=m;paint()}

/* ---------- server ---------- */
async function post(url,body){
  const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},credentials:'same-origin',body:JSON.stringify(body||{})});
  const j=await r.json().catch(()=>({}));return{r,j};
}
async function load(){
  const r=await fetch('/api/state',{cache:'no-store',credentials:'same-origin'});
  if(!r.ok)throw new Error('load');
  const j=await r.json();S=normalize(j.data);rev=j.rev;admin=!!j.admin;loadErr=false;
}
function save(){armed=null;render();dirty=true;setSync('Saving…');clearTimeout(timer);timer=setTimeout(flush,500)}
async function flush(){
  if(saving||!dirty)return;
  saving=true;dirty=false;let netErr=false;
  try{
    const{r,j}=await post('/api/state',{rev,data:S});
    if(r.ok){rev=j.rev;setSync('Saved ✓')}
    else if(r.status===401){admin=false;render();toast('Session expired – please log in again');loginModal()}
    else if(r.status===409){S=normalize(j.data);rev=j.rev;render();toast('Someone else saved first – your last change wasn’t kept. Please redo it.')}
    else{setSync('Not saved');toast(j.error||'Couldn’t save')}
  }catch(_){netErr=true;dirty=true;setSync('Retrying…');clearTimeout(timer);timer=setTimeout(flush,5000)}
  saving=false;
  if(dirty&&!netErr)flush();
}
async function refresh(){
  if(saving||dirty||document.hidden||$('#modal').classList.contains('open'))return;
  const a=document.activeElement;if(a&&/INPUT|TEXTAREA|SELECT/.test(a.tagName))return;
  try{const before=rev;await load();if(rev!==before)render();else paint()}catch(_){loadErr=true;paint()}
}

/* ---------- render ---------- */
function render(){
  paint();
  if(!S){$('#app').innerHTML=`<div class="card empty"><div class="big">📡</div><p><b>Couldn’t load the fund</b></p><button class="btn" data-act="retry">Try again</button></div>`;return}
  if(view==='setup'&&!admin)view='sheet';
  const collected=S.topups.reduce((a,t)=>a+t.amt,0),spent=S.sessions.reduce((a,s)=>a+(s.att.length?cost(s):0),0);
  const low=S.players.filter(p=>stats(p).bal<S.settings.low*100).length;
  const tabs=[['sheet','📋 Sheet'],['bal','💷 Balances'],['pay','🏦 Pay']];if(admin)tabs.push(['setup','⚙️ Admin']);
  $('#app').innerHTML=`
  <div class="stats"><div class="stat"><b>${money(collected-spent)}</b><span>Fund in hand</span></div><div class="stat"><b>${money(spent)}</b><span>Court fees paid</span></div><div class="stat"><b>${low}</b><span>Low / owing</span></div></div>
  <div class="tabs">${tabs.map(([k,l])=>`<button data-act="view" data-v="${k}" class="${view===k?'on':''}">${l}</button>`).join('')}</div>
  ${view==='sheet'?sheetV():view==='bal'?balV():view==='pay'?payV():setupV()}
  ${admin&&view!=='setup'&&view!=='pay'&&S.players.length?`<button class="btn fab" data-act="newsess">＋ Today's session</button>`:''}
  <div class="foot">${admin?`🔓 Logged in as admin · <button data-act="logout">Log out</button>`:`<button data-act="adminlogin">🔒 Admin login</button>`}</div>`;
  if(view==='sheet'){const b=$('.sheetbox');if(b)b.scrollLeft=window.__sl!=null?window.__sl:b.scrollWidth}
}
function noPlayers(){return `<div class="card empty"><div class="big">👥</div><p><b>No players yet</b></p>${admin?`<p class="note">Open the Admin tab and paste your group's names.</p><button class="btn" data-act="view" data-v="setup">Add players</button>`:`<p class="note">The organiser hasn't added the group yet.</p>`}</div>`}
function sheetV(){
  if(!S.players.length)return noPlayers();
  const ss=[...S.sessions].sort((a,b)=>a.date.localeCompare(b.date)),t=todayISO();
  const head=ss.map(s=>`<th data-act="editsess" data-s="${s.id}" class="clk ${s.date===t?'today':''}">${fd(s.date)}<small>${money(cost(s))} court</small><small class="ph">${s.att.length?money(share(s))+' each':'—'}</small></th>`).join('');
  const rows=[...S.players].sort((a,b)=>a.name.localeCompare(b.name)).map(p=>{const st=stats(p);
    return `<tr><td class="name ${cls(st.bal)}" data-act="player" data-p="${p.id}">${h(p.name)}<small>${money(st.bal)}</small></td>${ss.map(s=>{const on=s.att.includes(p.id);return `<td><button class="cell ${on?'on':''} ${admin?'ed':''}" data-act="tog" data-s="${s.id}" data-p="${p.id}">${on?`✓<small>${money(share(s))}</small>`:'·'}</button></td>`}).join('')}<td class="paid">${money(st.paid)}</td></tr>`}).join('');
  const foot=ss.map(s=>`<td>${s.att.length} 🏸</td>`).join('');
  return `<div class="bar">${admin?`<button class="btn sec sm" data-act="topup">＋ Record advance</button>`:''}<button class="btn sec sm" data-act="summary">📤 Share balances</button></div>
  ${ss.length?'':`<p class="note">No sessions yet.</p>`}
  <div class="sheetbox" onscroll="window.__sl=this.scrollLeft"><table><thead><tr><th class="name">Player<small>/ balance</small></th>${head}<th>Paid in</th></tr></thead><tbody>${rows}</tbody><tfoot><tr><td class="name">Players</td>${foot}<td></td></tr></tfoot></table></div>
  <p class="note">${admin?'Tap a cell to tick/untick a player. Tap a date to edit that session.':'View only. Tap a date to see who played, or a name to see their full ledger.'}</p>`;
}
function balV(){
  if(!S.players.length)return noPlayers();
  const list=S.players.map(p=>({p,...stats(p)})).sort((a,b)=>a.bal-b.bal);
  return `<div class="bar">${admin?`<button class="btn sm" data-act="topup">＋ Record advance</button>`:''}<button class="btn sec sm" data-act="summary">📤 Share balances</button></div>
  <div class="grid">${list.map(({p,paid,spent,n,bal})=>`<div class="pc ${cls(bal)==='pos'?'':cls(bal)}" data-act="player" data-p="${p.id}"><div class="n">${h(p.name)}</div><div class="b">${money(bal)}</div><div class="m">Paid ${money(paid)} · Spent ${money(spent)}<br>${n} session${n===1?'':'s'} played</div>${bal<0?'<span class="tag neg">Owes — top up</span>':bal<S.settings.low*100?'<span class="tag low">Running low</span>':'<span class="tag ok">All good</span>'}</div>`).join('')}</div>`;
}
function payV(){
  const B=S.settings.bank,hd=S.settings.holder||'the organiser';
  const rows=[['bankName','Bank name',B.bankName],['benef','Beneficiary name',B.benef],['sort','Sort code',sortFmt(B.sort)],['accNo','Account number',B.accNo],['ref','Payment reference',B.ref]];
  return `<div class="hold"><small>Advance deposits are paid to</small><b>${admin?`<input type="text" value="${h(S.settings.holder||'')}" data-act="sethold" placeholder="Name" style="margin-top:6px;color:#0f1a33">`:h(hd)}</b><small style="margin-top:6px">${h(hd)} holds the fund and each session's court fee is deducted from your advance. Every payment and deduction is listed on the Sheet and in your ledger.</small></div>
  <div class="card"><b>Bank details</b><p class="note" style="margin:2px 0 4px">Tap Copy next to each item and paste it into your bank app.</p>
  ${rows.map(([k,l,v])=>`<div class="pay"><div class="x"><div class="l">${l}</div>${admin?`<input type="text" value="${h(B[k])}" data-act="setbank" data-k="${k}" placeholder="${l}" inputmode="${k==='sort'||k==='accNo'?'numeric':'text'}">`:`<div class="v ${v?'':'none'}">${v?h(v):'Not added yet'}</div>`}</div><button class="btn sm sec" data-act="cp" data-k="${k}">Copy</button></div>`).join('')}
  <ol class="steps"><li>Send your advance (usually £${S.settings.advance}) to the account above.</li><li>Put your name in the reference.</li><li>${h(hd)} records it here and your balance updates.</li></ol></div>`;
}
function setupV(){
  const st=S.settings;
  return `<div class="card"><b>Add players</b><p class="note">One name per line (or comma-separated).</p><textarea id="bulk" rows="4" placeholder="Name 1&#10;Name 2&#10;..."></textarea><div class="acts"><button class="btn" data-act="addbulk">Add players</button></div></div>
  <h2>Players (${S.players.length})</h2><div class="card">${S.players.length?[...S.players].sort((a,b)=>a.name.localeCompare(b.name)).map(p=>`<div class="pl"><input type="text" value="${h(p.name)}" data-act="rename" data-p="${p.id}"><button class="btn sm ${armed===p.id?'red':'sec'}" data-act="delp" data-p="${p.id}">${armed===p.id?'Tap again':'Remove'}</button></div>`).join(''):'<p class="note">No players yet.</p>'}<p class="note">Removing a player also deletes their ticks and payments.</p></div>
  <h2>Prices &amp; settings</h2><div class="card">
  ${st.venues.map((v,i)=>`<div class="row"><div><label class="f">Venue ${i+1}</label><input type="text" value="${h(v.name)}" data-act="setv" data-i="${i}" data-k="name"></div><div><label class="f">£ per court per hour</label><input type="number" step="0.5" min="0" value="${v.rate}" data-act="setv" data-i="${i}" data-k="rate"></div></div>`).join('')}
  <div class="row"><div><label class="f">Usual advance (£)</label><input type="number" min="0" step="1" value="${st.advance}" data-act="sets" data-k="advance"></div><div><label class="f">Warn when balance below (£)</label><input type="number" min="0" step="1" value="${st.low}" data-act="sets" data-k="low"></div></div></div>
  <h2>Start afresh</h2><div class="card danger"><p class="note" style="margin-top:0">Clears every player, session and payment. Prices, deposit holder and bank details are kept.</p><button class="btn ${armed==='reset'?'red':'sec'}" data-act="reset">${armed==='reset'?'Tap again to delete everything':'Clear all data'}</button></div>
  <p class="note">Deposit holder and bank details are edited on the Pay tab.</p>`;
}

/* ---------- modals ---------- */
function openM(html){const m=$('#modal');m.innerHTML=`<div class="sheet">${html}</div>`;m.classList.add('open')}
function closeM(){const m=$('#modal');m.classList.remove('open');m.innerHTML='';armed=null}
$('#modal').addEventListener('mousedown',e=>{if(e.target.id==='modal')closeM()});

function loginModal(){
  openM(`<h3>🔒 Admin login</h3><form id="lf" autocomplete="on"><label class="f">Username</label><input id="lu" name="username" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" required><label class="f">Password</label><input id="lp" name="password" type="password" autocomplete="current-password" required><div class="err" id="lerr"></div><div class="acts"><button type="button" class="btn sec" data-act="close">Cancel</button><button type="submit" class="btn" id="lgo">Log in</button></div></form><p class="note" style="margin-bottom:0">Only the organiser can make changes. Everyone else can view.</p>`);
  setTimeout(()=>{const u=$('#lu');if(u)u.focus()},50);
}
async function doLogin(){
  const u=$('#lu').value,p=$('#lp').value,btn=$('#lgo'),err=$('#lerr');
  btn.disabled=true;btn.textContent='Checking…';err.textContent='';
  try{
    const{r,j}=await post('/api/login',{username:u,password:p});
    if(!r.ok){err.textContent=j.error||'Login failed';btn.disabled=false;btn.textContent='Log in';$('#lp').value='';return}
    await load();closeM();render();toast('Logged in');
  }catch(_){err.textContent='No connection – try again';btn.disabled=false;btn.textContent='Log in'}
}

function sessModal(id){
  const s=id?S.sessions.find(x=>x.id===id):null,V=S.settings.venues;
  const d=s||{date:todayISO(),venue:V[0].name,rate:V[0].rate,hours:1,courts:1,att:[]};
  openM(`<h3>${s?'Edit session':'New session'}</h3>
  <div class="row"><div><label class="f">Date</label><input type="date" id="sd" value="${d.date}"></div><div><label class="f">Venue</label><select id="sv">${V.map(v=>`<option ${v.name===d.venue?'selected':''}>${h(v.name)}</option>`).join('')}${V.some(v=>v.name===d.venue)?'':`<option selected>${h(d.venue)}</option>`}</select></div></div>
  <div class="row3"><div><label class="f">£ / court / hr</label><input type="number" id="sr" step="0.5" min="0" value="${d.rate}"></div><div><label class="f">Hours</label><input type="number" id="sh" step="0.5" min="0.5" value="${d.hours}"></div><div><label class="f">Courts</label><input type="number" id="sc" step="1" min="1" value="${d.courts}"></div></div>
  <div class="preview" id="pv"></div>
  <label class="f">Who played? <a href="#" data-act="selall" style="color:var(--gd)">all</a> · <a href="#" data-act="selnone" style="color:var(--gd)">none</a></label>
  <div class="chips">${[...S.players].sort((a,b)=>a.name.localeCompare(b.name)).map(p=>`<label class="chip"><input type="checkbox" value="${p.id}" ${d.att.includes(p.id)?'checked':''}><span>${h(p.name)}</span></label>`).join('')}</div>
  <div class="acts">${s?`<button class="btn red" data-act="delsess" data-s="${s.id}">${armed===s.id?'Tap again':'Delete'}</button>`:''}<button class="btn sec" data-act="close">Cancel</button><button class="btn" data-act="savesess" data-s="${s?s.id:''}">Save</button></div>`);
  pv();
}
function sessView(id){
  const s=S.sessions.find(x=>x.id===id);if(!s)return;
  openM(`<h3>${fd(s.date,1)}</h3><div class="preview">${h(s.venue)} · ${money(cost(s))}<small>${s.hours}h × ${s.courts} court${s.courts>1?'s':''} @ £${s.rate}/hr · ${s.att.length?`${s.att.length} players → ${money(share(s))} each`:'no players ticked'}</small></div>
  <label class="f">Who played</label><div class="chips">${[...S.players].filter(p=>s.att.includes(p.id)).sort((a,b)=>a.name.localeCompare(b.name)).map(p=>`<label class="chip ro on"><span>${h(p.name)}</span></label>`).join('')||'<span class="note">Nobody</span>'}</div>
  <div class="acts"><button class="btn sec" data-act="close">Close</button></div>`);
}
function readSess(){
  const att=[...document.querySelectorAll('#modal .chip input:checked')].map(i=>i.value);
  return{date:$('#sd').value||todayISO(),venue:$('#sv').value,rate:Math.max(0,+$('#sr').value||0),hours:Math.max(.5,+$('#sh').value||1),courts:Math.max(1,Math.round(+$('#sc').value||1)),att};
}
function pv(){const e=$('#pv');if(!e)return;const s=readSess();e.innerHTML=`Court cost ${money(cost(s))}<small>${s.att.length?`${s.att.length} players → ${money(share(s))} each`:'Tick who played to see the split'}</small>`}

function topupModal(pids){
  pids=pids||[];
  openM(`<h3>Record advance payment</h3>
  <label class="f">Who paid?</label><div class="chips">${[...S.players].sort((a,b)=>a.name.localeCompare(b.name)).map(p=>`<label class="chip"><input type="checkbox" value="${p.id}" ${pids.includes(p.id)?'checked':''}><span>${h(p.name)}</span></label>`).join('')}</div>
  <div class="row"><div><label class="f">Amount each (£)</label><input type="number" id="ta" step="0.5" min="0" value="${S.settings.advance}"></div><div><label class="f">Date</label><input type="date" id="td" value="${todayISO()}"></div></div>
  <label class="f">Paid to</label><input type="text" id="tto" value="${h(S.settings.holder||'')}">
  <label class="f">Note (optional)</label><input type="text" id="tn" placeholder="e.g. cash / bank transfer">
  <div class="acts"><button class="btn sec" data-act="close">Cancel</button><button class="btn" data-act="savetop">Save</button></div>`);
}
function playerModal(id){
  const p=S.players.find(x=>x.id===id);if(!p)return;const st=stats(p);
  const ev=[...S.topups.filter(t=>t.pid===id).map(t=>({d:t.date,t:'top',id:t.id,amt:t.amt,l:'Advance paid',sub:[t.to?'to '+t.to:'',t.note].filter(Boolean).join(' · ')})),...S.sessions.filter(s=>s.att.includes(id)).map(s=>({d:s.date,t:'s',amt:-share(s),l:`${s.venue} · ${s.hours}h`,sub:''}))].sort((a,b)=>b.d.localeCompare(a.d));
  openM(`<h3>${h(p.name)}</h3><div class="preview" style="${st.bal<0?'background:var(--rl);color:var(--r)':''}">Balance ${money(st.bal)}<small>Paid ${money(st.paid)} · Spent ${money(st.spent)} · ${st.n} sessions</small></div>
  ${ev.length?ev.map(e=>`<div class="led"><div>${h(e.l)}<small>${fd(e.d,1)}${e.sub?' · '+h(e.sub):''}</small></div><div style="display:flex;align-items:center;gap:8px"><span class="${e.amt>=0?'p':'mi'}">${e.amt>=0?'+':''}${money(e.amt)}</span>${e.t==='top'&&admin?`<button class="btn sm ${armed===e.id?'red':'sec'}" data-act="deltop" data-t="${e.id}" data-p="${id}">${armed===e.id?'Sure?':'✕'}</button>`:''}</div></div>`).join(''):'<p class="note">Nothing yet.</p>'}
  <div class="acts"><button class="btn sec" data-act="close">Close</button>${admin?`<button class="btn" data-act="topup" data-p="${id}">＋ Top up</button>`:''}</div>`);
}
function summaryModal(){
  const lines=S.players.map(p=>({p,b:stats(p).bal})).sort((a,b)=>a.p.name.localeCompare(b.p.name)).map(({p,b})=>`${b<0?'🔴':b<S.settings.low*100?'🟠':'🟢'} ${p.name}: ${money(b)}`);
  const txt=`🏸 Badminton balances – ${fd(todayISO(),1)}\n\n${lines.join('\n')}\n\n🟠 = running low, 🔴 = please top up\nAdvance is paid to ${S.settings.holder||'the organiser'}.`;
  openM(`<h3>Share balances</h3><textarea id="sumtxt" rows="12" readonly>${h(txt)}</textarea><div class="acts"><button class="btn sec" data-act="close">Close</button><button class="btn" data-act="copy">Copy</button></div>`);
}

/* ---------- copy ---------- */
function copyText(t,msg){
  const fb=()=>{let ok=false;const ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;top:0;left:0;opacity:0';document.body.appendChild(ta);ta.focus();ta.select();try{ok=document.execCommand('copy')}catch(_){}ta.remove();toast(ok?msg:'Couldn’t copy – select and copy it manually')};
  try{navigator.clipboard.writeText(t).then(()=>toast(msg),fb)}catch(_){fb()}
}

/* ---------- events ---------- */
document.addEventListener('submit',e=>{if(e.target.id==='lf'){e.preventDefault();doLogin()}});
document.addEventListener('input',e=>{if(e.target.closest('#modal')&&$('#pv'))pv()});
document.addEventListener('change',e=>{
  const el=e.target,a=el.dataset&&el.dataset.act;
  if(el.id==='sv'){const v=S.settings.venues.find(x=>x.name===el.value);if(v){$('#sr').value=v.rate;pv()}return}
  if(!a||!S)return;
  if(!admin){toast('Admin only');return}
  if(a==='rename'){const p=S.players.find(x=>x.id===el.dataset.p);if(p&&el.value.trim()){p.name=el.value.trim().slice(0,60);save()}return}
  if(a==='setv'){const v=S.settings.venues[+el.dataset.i];if(el.dataset.k==='rate')v.rate=Math.max(0,+el.value||0);else if(el.value.trim())v.name=el.value.trim().slice(0,120);save();return}
  if(a==='sets'){S.settings[el.dataset.k]=Math.max(0,+el.value||0);save();return}
  if(a==='sethold'){S.settings.holder=el.value.trim().slice(0,60);save();return}
  if(a==='setbank'){S.settings.bank[el.dataset.k]=el.value.trim().slice(0,80);save()}
});
const EDIT=new Set(['tog','savesess','delsess','topup','savetop','deltop','addbulk','delp','newsess','reset']);
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');if(!el||el.tagName==='INPUT')return;
  const a=el.dataset.act,D=el.dataset;
  if(el.tagName==='A')e.preventDefault();
  if(a==='retry'){load().then(render).catch(()=>{loadErr=true;render()});return}
  if(!S)return;
  if(EDIT.has(a)&&!admin){toast('View only – admin login needed');return}
  switch(a){
    case'view':view=D.v;window.__sl=null;render();break;
    case'close':closeM();break;
    case'adminlogin':loginModal();break;
    case'logout':post('/api/logout').finally(()=>{admin=false;closeM();render();toast('Logged out')});break;
    case'newsess':sessModal();break;
    case'editsess':admin?sessModal(D.s):sessView(D.s);break;
    case'tog':{const s=S.sessions.find(x=>x.id===D.s),i=s.att.indexOf(D.p);i>=0?s.att.splice(i,1):s.att.push(D.p);save();break}
    case'selall':document.querySelectorAll('#modal .chip input').forEach(i=>i.checked=true);pv();break;
    case'selnone':document.querySelectorAll('#modal .chip input').forEach(i=>i.checked=false);pv();break;
    case'savesess':{const d=readSess();if(D.s){Object.assign(S.sessions.find(x=>x.id===D.s),d)}else{S.sessions.push({id:uid(),...d})}
      window.__sl=null;closeM();save();break}
    case'delsess':if(armed===D.s){S.sessions=S.sessions.filter(x=>x.id!==D.s);closeM();save()}else{armed=D.s;el.textContent='Tap again'}break;
    case'topup':topupModal(D.p?[D.p]:[]);break;
    case'savetop':{const ids=[...document.querySelectorAll('#modal .chip input:checked')].map(i=>i.value),amt=Math.round((+$('#ta').value||0)*100);
      if(!ids.length||amt<=0){toast('Pick who paid and an amount');break}
      const date=$('#td').value||todayISO(),note=$('#tn').value.trim().slice(0,200),to=$('#tto').value.trim().slice(0,60);ids.forEach(pid=>S.topups.push({id:uid(),pid,date,amt,note,to}));closeM();save();toast(`Recorded for ${ids.length} player${ids.length>1?'s':''}`);break}
    case'player':playerModal(D.p);break;
    case'deltop':if(armed===D.t){S.topups=S.topups.filter(x=>x.id!==D.t);armed=null;save();playerModal(D.p)}else{armed=D.t;playerModal(D.p)}break;
    case'summary':summaryModal();break;
    case'copy':{const t=$('#sumtxt');t.select();copyText(t.value,'Copied – paste into WhatsApp');break}
    case'cp':{const k=D.k,B=S.settings.bank;let v=B[k]||'';if(!v){toast('Not added yet');break}
      if(k==='sort'||k==='accNo')v=v.replace(/\D/g,'')||v;
      const l={bankName:'Bank name',benef:'Beneficiary name',sort:'Sort code',accNo:'Account number',ref:'Reference'}[k];copyText(v,l+' copied');break}
    case'addbulk':{const names=$('#bulk').value.split(/[\n,]+/).map(x=>x.trim().slice(0,60)).filter(Boolean);let n=0;
      names.forEach(nm=>{if(!S.players.some(p=>p.name.toLowerCase()===nm.toLowerCase())){S.players.push({id:uid(),name:nm});n++}});
      if(n){save();toast(`Added ${n} player${n>1?'s':''}`)}break}
    case'delp':if(armed===D.p){S.players=S.players.filter(p=>p.id!==D.p);S.topups=S.topups.filter(t=>t.pid!==D.p);S.sessions.forEach(s=>s.att=s.att.filter(x=>x!==D.p));save()}else{armed=D.p;render()}break;
    case'reset':if(armed==='reset'){S.players=[];S.sessions=[];S.topups=[];save();toast('All data cleared')}else{armed='reset';render()}break;
  }
});

/* ---------- start ---------- */
load().then(render).catch(()=>{loadErr=true;render()});
setInterval(refresh,45000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});
})();
</script>
</body>
</html>
