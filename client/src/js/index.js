import { Workbox } from 'workbox-window';
import Editor from './editor';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const editor = new Editor();

if (!editor) {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner" />
    </div>
  `;
  main.appendChild(spinner);
}

if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
