// Service worker mínimo: o Chrome do Android pede um para oferecer "Instalar app". Não guarda nada —
// a carteira vem sempre do Apps Script (e a cópia no celular é a do próprio app).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});


