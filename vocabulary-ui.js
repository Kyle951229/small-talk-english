let vocabularyPage=0;
function vocabulary(){return intro('3,000 WORDS · YOUR PERSONAL LIBRARY','一年 3,000 單字，每一個都查得到。','單字依英文拼字去重；198 組常用語塊另列。進度表示已練習，熟悉程度請透過回想與複習確認。')+`<div class="card"><div class="vocabulary-tools"><input id="vocabularySearch" type="search" placeholder="搜尋英文或中文，例如 apple、電腦…" aria-label="搜尋完整單字庫"><select id="vocabularyType" aria-label="詞彙類型"><option value="words">3,000 個單字</option><option value="phrases">198 組語塊</option><option value="all">全部 3,198 項</option></select><select id="vocabularyState" aria-label="學習狀態"><option value="all">全部學習狀態</option><option value="new">尚未練習</option><option value="learned">已練習</option><option value="due">到期複習</option><option value="text">未附音檔</option></select></div><p class="small">每週前六天學新單字，第七天複習。初期每天 6 個，再逐步增加至 8–11 個；語塊穿插練習。沒有音檔也能回想、造句與安排複習。</p><a class="button" href="3000單字清單.csv" download>↓ 下載完整單字與學習日清單</a><p id="vocabularyCount" role="status" class="small"></p><div id="vocabularyRows"></div><div class="actions"><button id="vocabularyPrev">上一頁</button><span id="vocabularyPageLabel" class="pill"></span><button id="vocabularyNext">下一頁</button></div></div>`;}
function bindVocabulary(){
 const search=$('#vocabularySearch');if(!search)return;
 const type=$('#vocabularyType'),filter=$('#vocabularyState');
 const paint=()=>{
  const term=search.value.trim().toLowerCase(),kind=type.value,status=filter.value;
  const source=kind==='words'?TARGET_WORDS:kind==='phrases'?TARGET_PHRASES:[...TARGET_WORDS,...TARGET_PHRASES];
  const rows=source.filter(w=>{const card=state.cards[w.id];return (w.en+' '+w.zh).toLowerCase().includes(term)&&(status==='all'||status==='new'&&!card||status==='learned'&&card||status==='due'&&card&&card.due<=Date.now()||status==='text'&&!hasRecordedAudio(w.en));}).sort((a,b)=>(WORD_INTRO_DAY.get(a.id)||366)-(WORD_INTRO_DAY.get(b.id)||366)||a.en.localeCompare(b.en));
  const pages=Math.max(1,Math.ceil(rows.length/40));vocabularyPage=Math.min(Math.max(0,vocabularyPage),pages-1);
  $('#vocabularyCount').textContent=`符合 ${rows.length} 項 · 單字 3,000 個、語塊 198 組（分開計算）`;
  $('#vocabularyRows').innerHTML=rows.slice(vocabularyPage*40,(vocabularyPage+1)*40).map(w=>{const card=state.cards[w.id],day=WORD_INTRO_DAY.get(w.id);return `<div class="row vocabulary-row"><div><b>${esc(w.en)}</b><p>${esc(w.zh)}</p><small>${hasRecordedAudio(w.en)?'已附音檔':'文字字卡'} · ${card?`已練習 ${card.reps} 次 · 下次 ${new Date(card.due).toLocaleDateString('zh-TW')}`:'尚未練習'}</small></div><div class="vocabulary-row-actions">${speechButton(w.en,'◖ 發音')}<button data-library-day="${day}">Day ${day} →</button></div></div>`;}).join('')||'<p>沒有符合的字，請換個詞或篩選條件。</p>';
  $('#vocabularyPageLabel').textContent=`${vocabularyPage+1} / ${pages} 頁`;
  $('#vocabularyPrev').disabled=vocabularyPage===0;$('#vocabularyNext').disabled=vocabularyPage>=pages-1;
  document.querySelectorAll('[data-library-day]').forEach(b=>b.onclick=()=>openDay(b.dataset.libraryDay));
  document.querySelectorAll('#vocabularyRows [data-speak]').forEach(b=>b.onclick=()=>{if(state.speechProvider==='google'){window.open(googleSpeechUrl(b.dataset.speak),'_blank','noopener');return;}speak(b.dataset.speak,b);});
  document.querySelectorAll('#vocabularyRows [data-device-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.deviceSpeak,b,'device'));
 };
 for(const el of [search,type,filter])el.oninput=()=>{vocabularyPage=0;paint();};
 $('#vocabularyPrev').onclick=()=>{vocabularyPage--;paint();};$('#vocabularyNext').onclick=()=>{vocabularyPage++;paint();};paint();
}
