'use strict';
(() => {
  const fragment = location.hash.slice(1);
  if (!fragment) return;
  const intro = document.getElementById('intro');
  try {
    if (fragment.length > 4096) throw new Error('size');
    const params = new URLSearchParams(fragment);
    const keys = [...params.keys()];
    if (keys.length !== 4 || new Set(keys).size !== 4 || !keys.every(k => ['v','s','i','p'].includes(k)) || params.get('v') !== '1') throw new Error('fields');
    const server = new URL(params.get('s'));
    if (server.protocol !== 'https:' || server.username || server.password || server.search || server.hash || server.href.length > 2048) throw new Error('server');
    if (!/^[A-Za-z0-9_-]{16,512}$/.test(params.get('i')) || !/^(?:[a-f0-9]{64})?$/.test(params.get('p'))) throw new Error('token');
    const bytes = new TextEncoder().encode(fragment);
    const payload = btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
    const open = document.getElementById('open');
    open.href = 'intent://join/' + payload + '#Intent;scheme=mjwatch;package=dev.mjwatch.mobile;end';
    open.hidden = false;
    const label = document.getElementById('server');
    label.textContent = 'Сервер: ' + server.host;
    label.hidden = false;
    intro.textContent = 'Откройте приложение и придумайте пароль. Адрес сервера и приглашение уже будут заполнены.';
  } catch (_) {
    intro.textContent = 'Ссылка приглашения повреждена. Попросите владельца отправить новую ссылку.';
  }
})();
