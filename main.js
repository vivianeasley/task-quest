import {store} from "./store";
import {html, render} from 'uhtml';
import {app} from './components/app';
import dialogPolyfill from 'dialog-polyfill'

const appNode = document.querySelector("#app");

const { subscribe, getState } = store;

const state = getState().state;

window.addEventListener("load", renderApp);

subscribe(renderApp);

async function renderApp () {
  render(appNode, html`${app()}`);
}
