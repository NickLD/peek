const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('overlay', {
  onEvent: (callback) => ipcRenderer.on('frigate-event', (event, data) => callback(data)),
  hide: () => ipcRenderer.send('overlay-hide'),
  openUrl: (url) => ipcRenderer.send('overlay-open-url', url),
  onMode: (callback) => ipcRenderer.on('overlay-mode', (event, mode) => callback(mode)),
  lockPlacement: () => ipcRenderer.send('placement-save'),
  cancelPlacement: () => ipcRenderer.send('placement-cancel'),
  resize: (aspect) => ipcRenderer.send('overlay-resize', aspect)
})
