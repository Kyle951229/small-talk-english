let storageFailed=false;
const KEY='smalltalk-v1',today=()=>new Date().toLocaleDateString('en-CA');
let state;try{state=JSON.parse(localStorage.getItem(KEY))}catch{}state=state||{version:1,name:'學習者',goal:60,chinese:'auto',day:1,completed:[],cards:{},logs:[],seconds:{},notes:{}};
if(state.audioPackVersion!==1){state.audioPackVersion=1;state.speechProvider='recorded';state.rate=1;}
let view='home',activeDay=state.day,wi=0,revealed=false,reviewMode=false,timer=false,listenShown=false,chatStep=0,chatLog=[],recording=null,stream=null,audioUrl=null;
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));storageFailed=false;return true}catch{storageFailed=true;toast('儲存失敗：空間不足或瀏覽器封鎖儲存，請立即匯出備份。');return false}}
function toast(s){if(storageFailed&&!s.includes('儲存失敗'))s='儲存失敗：目前變更仍在頁面記憶中，請到設定匯出備份。';$('#toast').textContent=s;$('#toast').style.display='block';setTimeout(()=>$('#toast').style.display='none',4500)}
function log(type,text){state.logs.unshift({at:new Date().toISOString(),type,text});save()}
function due(){return ALL_WORDS.filter(w=>state.cards[w.id]&&state.cards[w.id].due<=Date.now())}
function minutes(){return Math.floor((state.seconds[today()]||0)/60)}
function intro(k,title,sub){return `<div class="intro"><div><div class="eyebrow">${k}</div><h1>${title}</h1><p>${sub}</p></div><span class="pill">✦ DAY ${state.day} / 365</span></div>`}
function googleSpeechUrl(text){return 'https://translate.google.com/?sl=en&tl=zh-TW&text='+encodeURIComponent(text)+'&op=translate'}
let courseAudio=null,playingButton=null,recordPending=false;
function stopCourseAudio(){if(courseAudio){courseAudio.pause();courseAudio.currentTime=0;}if(playingButton){playingButton.classList.remove('playing');playingButton.setAttribute('aria-pressed','false');playingButton=null;}}
function audioStatus(message){let el=$('#audioStatus');if(el)el.textContent=message;}
function speak(text,button,provider){
  stopCourseAudio();
  if(window.speechSynthesis)speechSynthesis.cancel();
  if((provider||state.speechProvider||'recorded')==='recorded'){
    let file=typeof AUDIO_PACK!=='undefined'&&AUDIO_PACK.files[text];
    if(!file){toast('這句尚未附音檔，請改用設定中的裝置英文語音。');return;}
    let dock=$('#audioDock');dock.hidden=false;
    courseAudio=$('#courseAudio');
    courseAudio.src=new URL(file,document.baseURI).href;
    courseAudio.playbackRate=Number(state.rate||1);
    courseAudio.preservesPitch=true;
    playingButton=button||null;
    if(playingButton){playingButton.classList.add('playing');playingButton.setAttribute('aria-pressed','true');}
    audioStatus('正在載入美式英文音檔…');
    courseAudio.onplaying=()=>audioStatus('正在播放 · 美式英文');
    courseAudio.onpause=()=>audioStatus(courseAudio.ended?'播放完畢，可重播跟讀':'已暫停');
    courseAudio.onended=()=>{audioStatus('播放完畢，可重播跟讀');if(playingButton){playingButton.classList.remove('playing');playingButton.setAttribute('aria-pressed','false');playingButton=null;}};
    courseAudio.onerror=()=>{audioStatus(navigator.onLine===false?'這段音檔尚未離線儲存，請先連網完整播放一次。':'音檔載入失敗，請確認 audio 資料夾已一起上傳。');if(playingButton)playingButton.classList.remove('playing');};
    courseAudio.play().catch(()=>audioStatus('請按下方播放器的播放鍵。'));
    return;
  }
  if(!('speechSynthesis'in window)){toast('此瀏覽器不支援裝置朗讀，請在設定選擇課程音檔。');return;}
  let u=new SpeechSynthesisUtterance(text),voices=speechSynthesis.getVoices().filter(v=>/^en[-_]/i.test(v.lang));
  let preferred=voices.find(v=>v.voiceURI===state.voiceURI)||voices.find(v=>/^en-US$/i.test(v.lang)&&/Google|Samantha|Natural|Premium/i.test(v.name))||voices.find(v=>/^en-US$/i.test(v.lang))||voices[0];
  if(!preferred){toast('找不到英文聲音，請在設定選擇課程音檔。');return;}
  u.voice=preferred;u.lang=preferred.lang;u.rate=Number(state.rate||1);u.onerror=()=>toast('裝置朗讀失敗，請在設定選擇課程音檔。');speechSynthesis.speak(u);
}

function voiceOptions(){let voices=window.speechSynthesis?.getVoices().filter(v=>/^en[-_]/i.test(v.lang))||[];return '<option value="">自動選擇英文聲音</option>'+voices.map(v=>`<option value="${esc(v.voiceURI)}" ${state.voiceURI===v.voiceURI?'selected':''}>${esc(v.name)} · ${esc(v.lang)}</option>`).join('')}

function go(hash){location.hash=hash}
function appProfile(){return settings();}
function render(){let route=location.hash.slice(1).split('/');view=route[0]||'home';if(Number(route[1])>=1&&Number(route[1])<=365)activeDay=Number(route[1]);if(view==='home')activeDay=state.day;if(view!=='lesson')reviewMode=false;ensureAnnualState();captureDraft();document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+view));$('#date').textContent=new Date().toLocaleDateString('zh-TW',{month:'long',day:'numeric',weekday:'long'});let pages={home:home,course:course,review:review,practice:practice,history:history,settings:settings,lesson:study,checkpoint:checkpoint,vocabulary:vocabulary,homework:homework,profile:appProfile};$('#app').innerHTML=(pages[view]||home)();bind()}
function legacyQueue(){return reviewMode?due():getLesson(activeDay).words}
function legacyGrade(g){stopCourseAudio();let w=queue()[wi];if(!w)return;let old=state.cards[w.id]||{interval:0,reps:0};let interval=g===0?10/1440:g===1?Math.max(1,old.interval*1.6):Math.max(3,old.interval*2.4);state.cards[w.id]={interval,reps:old.reps+1,due:Date.now()+interval*86400000};log('單字',`${w.en} · ${['還不熟','想了一下','記得很清楚'][g]}`);if(!reviewMode)wi++;revealed=false;render()}
function review(){let list=due();return intro('A LITTLE RECALL GOES A LONG WAY','把快忘記的，再記回來。',`${list.length} 個到期 · ${Object.keys(state.cards).length} 個已接觸詞彙`)+`<div class="card"><h2>間隔複習</h2><p>先不看中文，回想意思或說一句英文，再翻答案。評分後自動延長或縮短複習間隔；每輪最多 30 個。</p><button class="primary" data-action="review" ${list.length?'':'disabled'}>開始本輪到期複習 →</button>${!list.length?'<p>目前沒有到期詞彙，可以先學習今日課程。</p>':''}</div><div class="section"><h2>我的單字庫</h2></div><div class="card">${ALL_WORDS.filter(w=>state.cards[w.id]).map(w=>`<div class="row"><div><b>${w.en}</b><p>${w.zh} · 練習 ${state.cards[w.id].reps} 次</p></div><small>下次 ${new Date(state.cards[w.id].due).toLocaleString('zh-TW')}</small>${speechButton(w.en,'◖ 聽發音')}</div>`).join('')||'<p>開始第一天課程，建立你的單字庫。</p>'}</div>`}
function baseHistory(){let total=Object.values(state.seconds).reduce((a,b)=>a+b,0);return intro('YOUR PROGRESS, SAVED','每一次練習，都算數。',`累積 ${Math.floor(total/60)} 分鐘 · 完成 ${state.completed.length} 天課程`)+`<div class="card"><h2>最近 7 天</h2><div class="week">${Array.from({length:7},(_,i)=>{let d=new Date();d.setDate(d.getDate()-6+i);let k=d.toLocaleDateString('en-CA'),m=Math.floor((state.seconds[k]||0)/60);return `<div class="bar" style="height:${Math.max(3,Math.min(90,m/state.goal*90))}px" title="${k}: ${m} 分鐘"><span>${d.getMonth()+1}/${d.getDate()}<br>${m}m</span></div>`}).join('')}</div><div style="height:25px"></div></div><div class="section"><h2>練習歷史</h2><span>最新在前</span></div><div class="card">${state.logs.slice(0,150).map(x=>`<div class="row"><div><b>${esc(x.type)}</b><p>${esc(x.text)}</p></div><small>${new Date(x.at).toLocaleString('zh-TW')}</small></div>`).join('')||'<p>還沒有練習紀錄，從今天的小步開始。</p>'}</div>`}
function settings(){return intro('MAKE IT YOURS','照你的步調，慢慢前進。','設定會立即保存在目前的瀏覽器。')+`<div class="twocol"><div class="card"><h2>學習偏好</h2><label>你的稱呼</label><input id="name" maxlength="30" value="${esc(state.name)}"><label>每天目標</label><select id="goal">${[60,90,120].map(n=>`<option value="${n}" ${state.goal===n?'selected':''}>${n} 分鐘</option>`).join('')}</select><label>中文提示</label><select id="chinese">${[['auto','循序減少：前 30 天顯示'],['on','持續顯示'],['off','只在揭曉答案時顯示']].map(([v,t])=>`<option value="${v}" ${state.chinese===v?'selected':''}>${t}</option>`).join('')}</select><label>發音來源</label><select id="speechProvider"><option value="recorded" ${(state.speechProvider||'recorded')==='recorded'?'selected':''}>免費美式英文音檔（直接播放・建議）</option><option value="google" ${(state.speechProvider||'recorded')==='google'?'selected':''}>Google 翻譯（前往翻譯頁，按喇叭播放）</option><option value="device" ${state.speechProvider==='device'?'selected':''}>裝置英文語音（本站直接播放）</option></select><div class="note">對話與原有詞語已附 Kokoro 美式英文音檔；新增單字可先用文字字卡學習，也能選用裝置英文朗讀。裝置聲音與可用性依瀏覽器而異。Google 選項供額外查詢，不影響字卡進度。</div><div class="actions"><button data-speak="Hello, nice to meet you.">◖ 試聽已儲存的發音設定</button></div><label>備用裝置英文聲音（僅裝置模式使用）</label><select id="voiceURI">${voiceOptions()}</select><label>播放速度（課程音檔與裝置朗讀）</label><select id="rate">${[.65,.8,1,1.15].map(v=>`<option value="${v}" ${Number(state.rate||1)===v?'selected':''}>${v} 倍</option>`).join('')}</select><div class="actions"><button class="primary" data-action="settings">儲存偏好</button></div></div><div class="card"><h2>紀錄與備份</h2><p>資料使用 localStorage，重新整理或關閉後仍保留。不同裝置、不同瀏覽器或不同網址不會自動同步；清除網站資料或無痕模式可能遺失。</p><button data-action="export">↓ 匯出完整 JSON 備份</button><label>從備份還原（會取代目前紀錄）</label><input id="import" type="file" accept="application/json,.json"><div class="note">錄音僅供當次回聽，不保存至學習資料。這個版本沒有帳號、雲端同步、真人教師或自由 AI 聊天。</div><h3>語音功能</h3><p style="font-size:12px">需要支援的瀏覽器與 HTTPS 或 localhost。麥克風需你同意；語音辨識可用性依瀏覽器與網路而異。無法辨識時可使用文字核對與自行跟讀。</p></div></div>`}
function normalize(s){return s.toLowerCase().replace(/[^a-z0-9 ]/g,'').split(/\s+/).filter(Boolean)}
function compare(input,target){let a=normalize(input),b=normalize(target);if(!a.length)return '請先輸入或說出英文。';let matched=b.filter(x=>a.includes(x)).length;return `目標詞涵蓋 ${Math.round(matched/b.length*100)}%（文字比對，非發音分數）。${matched===b.length?'很好！接著試著不看文字說一次。':'請再聽一次，留意：'+b.filter(x=>!a.includes(x)).join(', ')}`}
function bind(){document.querySelectorAll('[data-speak]').forEach(b=>{let google=(state.speechProvider||'recorded')==='google';if(google){let link=document.createElement('a');link.className='button';link.href=googleSpeechUrl(b.dataset.speak);link.textContent='◖ Google 翻譯發音 ↗';link.title='前往 Google 翻譯，按英文區喇叭聆聽；按上一頁返回課程';b.replaceWith(link)}else{b.title=(state.speechProvider||'recorded')==='recorded'?'播放免費美式英文課程音檔':'使用裝置英文聲音播放';b.setAttribute('aria-pressed','false');b.onclick=()=>speak(b.dataset.speak,b)}});document.querySelectorAll('button[data-day]').forEach(b=>b.onclick=()=>{activeDay=Number(b.dataset.day);wi=0;revealed=false;reviewMode=false;go('lesson');if(view==='lesson')render()});document.querySelectorAll('[data-grade]').forEach(b=>b.onclick=()=>grade(Number(b.dataset.grade)));document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>action(b.dataset.action));if($('#import'))$('#import').onchange=importData;if(typeof bindAnnual==='function')bindAnnual();}
function coreAction(a){let t=getLesson(activeDay).t;if(a==='start'){activeDay=state.day;wi=0;revealed=false;reviewMode=false;go('lesson')}if(a==='reveal'){revealed=true;render()}if(a==='review'){reviewMode=true;wi=0;revealed=false;go('lesson')}if(a==='finish'){if(!reviewMode&&!state.completed.includes(activeDay)){state.completed.push(activeDay);log('完成課程',`Day ${activeDay} · ${t[1]}`)}if(!reviewMode&&activeDay===state.day){state.day=Math.min(365,state.day+1);save()}reviewMode=false;activeDay=state.day;go('home');toast('已儲存進度，下次從這裡繼續。')}if(a==='timer'){timer=!timer;render()}if(a==='transcript'){listenShown=!listenShown;render()}if(a==='listenCheck'){let text=$('#listenAnswer').value;$('#listenResult').textContent=compare(text,t[4]);if(normalize(text).length)log('聽力',`Day ${activeDay} · ${text}`)}if(a==='typedCheck')$('#voiceResult').textContent=compare($('#typedSpeech').value,t[5]);if(a==='recognize')recognize(t[5]);if(a==='record')record();if(a==='note'){state.notes[activeDay]=$('#thought').value;log('英文筆記',`Day ${activeDay} · ${$('#thought').value}`);toast('筆記已儲存')}if(a==='chat'){let input=$('#chatInput').value.trim();if(!input)return;chatLog.push({you:true,text:input});let replies=['Thanks for sharing! How about you? What do you like?','That sounds interesting. Can you tell me why?','I see. Can you give me an example?','Thanks for the conversation! Try this again without looking at the hints.'];chatLog.push({text:replies[Math.min(chatStep++,3)]});$('#chatLog').innerHTML=chatHtml(t);bind();$('#chatInput').value='';log('情境回應',input)}if(a==='chatReset'){chatStep=0;chatLog=[];render()}if(a==='settings'){state.name=$('#name').value.trim()||'學習者';state.goal=Number($('#goal').value);state.chinese=$('#chinese').value;state.rate=Number($('#rate').value);state.speechProvider=$('#speechProvider').value;state.voiceURI=$('#voiceURI').value;save();toast('偏好已儲存')}if(a==='export'){let blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`small-talk-${today()}.json`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}}
function recognize(target){stopCourseAudio();let SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){$('#voiceResult').textContent='此瀏覽器不支援語音辨識。請使用錄音回聽或下方文字核對。';return}let r=new SR();r.lang='en-US';r.interimResults=false;$('#voiceResult').textContent='正在聆聽，請說出上方句子…';r.onresult=e=>{let text=e.results[0][0].transcript;if($('#voiceResult'))$('#voiceResult').textContent=`聽到：${text}。${compare(text,target)}`;log('跟讀',text)};r.onerror=e=>{if($('#voiceResult'))$('#voiceResult').textContent='語音辨識未完成：'+e.error+'。可改用錄音回聽或文字核對。'};r.onend=()=>{};try{r.start()}catch{toast('無法啟動語音辨識，請稍後再試。')}}
async function record(){
 if(recording){if(recording.state==='recording')recording.stop();return;}
 if(recordPending)return;
 stopCourseAudio();
 if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){toast('此環境無法錄音，請使用跟讀或文字核對。');return;}
 recordPending=true;const requestedRoute=location.hash;
 try{
  const recordingStream=await navigator.mediaDevices.getUserMedia({audio:true});
  if(location.hash!==requestedRoute){recordingStream.getTracks().forEach(x=>x.stop());return;}
  let chunks=[];const recorder=new MediaRecorder(recordingStream);recording=recorder;stream=recordingStream;
  const maximum=activeDay===365?600000:activeDay>180?180000:60000;
  let timeout;
  recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
  recorder.onstop=()=>{
   clearTimeout(timeout);
   if(audioUrl)URL.revokeObjectURL(audioUrl);
   audioUrl=URL.createObjectURL(new Blob(chunks,{type:recorder.mimeType}));
   if($('#playback')){let audio=document.createElement('audio');audio.controls=true;audio.src=audioUrl;$('#playback').replaceChildren(audio);}
   recordingStream.getTracks().forEach(x=>x.stop());
   if(recording===recorder)recording=null;
   if($('#recordBtn'))$('#recordBtn').textContent='● 錄音並回聽';
   log('錄音','已完成一次錄音（只供當次回聽，不保存音檔）');
  };
  recorder.onerror=()=>{clearTimeout(timeout);recordingStream.getTracks().forEach(x=>x.stop());if(recording===recorder)recording=null;toast('錄音未完成，請重新嘗試或自行跟讀。');};
  recorder.start();if($('#recordBtn'))$('#recordBtn').textContent='■ 停止錄音';
  timeout=setTimeout(()=>{if(recorder.state==='recording')recorder.stop();},maximum);
 }catch{toast('無法取得麥克風權限，請改用示範跟讀或文字核對。');}finally{recordPending=false;}
}
async function importData(e){let file=e.target.files[0];if(!file)return;try{if(file.size>5000000)throw Error();let s=JSON.parse(await file.text());if(s.version!==1||typeof s.name!=='string'||!Number.isInteger(s.day)||s.day<1||s.day>365||!Array.isArray(s.completed)||!Array.isArray(s.logs)||!s.cards||!s.seconds||!s.notes||![60,90,120].includes(s.goal))throw Error();if(!s.completed.every(n=>Number.isInteger(n)&&n>=1&&n<=365)||!s.logs.every(x=>typeof x.text==='string'&&typeof x.type==='string'&&Number.isFinite(Date.parse(x.at)))||!Object.values(s.seconds).every(x=>Number.isFinite(x)&&x>=0)||!Object.values(s.cards).every(x=>Number.isFinite(x.interval)&&Number.isFinite(x.due)&&Number.isFinite(x.reps))||!Object.values(s.notes).every(x=>typeof x==='string'))throw Error();if(confirm('確定以此備份取代目前學習紀錄？建議先匯出目前紀錄。')){state=s;ensureAnnualState();activeDay=s.day;currentDeck=[];deckDay=0;save();render();toast('備份已還原')}}catch{toast('備份格式不正確，未變更原有紀錄。')}}
setInterval(()=>{if(timer&&!document.hidden){state.seconds[today()]=(state.seconds[today()]||0)+1;if(state.seconds[today()]%10===0)save();if($('#minutes'))$('#minutes').innerHTML=minutes()+'<small> 分鐘</small>';if($('#clock'))$('#clock').innerHTML=minutes()+`<small> / ${state.goal}</small>`}},1000);window.addEventListener('pagehide',()=>save());document.addEventListener('visibilitychange',()=>{if(document.hidden)save()});window.addEventListener('hashchange',()=>{stopCourseAudio();if(recording)recording.stop();render();window.scrollTo(0,0)});

if(window.speechSynthesis)speechSynthesis.addEventListener('voiceschanged',()=>{let el=$('#voiceURI');if(el){let selected=el.value;el.innerHTML=voiceOptions();if([...el.options].some(o=>o.value===selected))el.value=selected}});
