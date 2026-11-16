(() => {
  const open=document.getElementById('open');
  const intro=document.getElementById('intro');
  const fragment=location.hash.slice(1);
  if(!fragment)return;
  try {
    if(fragment.length>4096)throw Error('length');
    const fields=new URLSearchParams(fragment);
    const keys=[...fields.keys()];
    if(keys.length!==4||new Set(keys).size!==4||keys.some(k=>!['v','s','i','p'].includes(k))||fields.get('v')!=='1')throw Error('fields');
    const server=new URL(fields.get('s'));
    if(server.protocol!=='https:'||server.username||server.password||server.search||server.hash||server.href.length>2048)throw Error('server');
    if(!/^[A-Za-z0-9_-]{16,512}$/.test(fields.get('i'))||!/^([a-f0-9]{64})?$/.test(fields.get('p')))throw Error('invite');
    const payload=btoa(fragment).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
    open.href='intent://join/'+payload+'#Intent;scheme=mjwatch;package=dev.mjwatch.mobile;end';
    open.hidden=false;
    intro.textContent='Откройте приглашение в приложении и придумайте пароль. Настройки сервера заполнятся сами.';
    const label=document.getElementById('server');label.textContent=server.host;label.hidden=false;
  } catch {
    intro.textContent='Ссылка повреждена. Попросите владельца отправить новое приглашение.';
  }
})();
