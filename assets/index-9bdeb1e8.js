(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const t={cardsFlipped:0,flips:0,checking:!1,correctGuess:0},l=document.querySelector(".board-container"),p=document.querySelectorAll(".card"),f=document.querySelector(".start-button"),d=document.querySelector(".remaining-flips"),u=document.querySelector(".game"),m=()=>{if(!l||!d)throw new Error("what could possibly go wrong");l.innerHTML="",t.cardsFlipped=0,t.flips=0,d.innerText=`Guesses Remaining ${10-t.flips/2}`},g=()=>{const o=document.querySelectorAll(".is-flipped");t.correctGuess+=1,t.cardsFlipped=0,setTimeout(()=>{o.forEach(r=>{r.style.transition="opacity 0.5s ease",r.style.opacity="0",r.classList.add("deleted-card"),r.classList.remove("is-flipped"),t.checking=!1})},1500)},h=()=>{const o=document.querySelectorAll(".is-flipped");if(!d)throw new Error("what could possibly go wrong");t.cardsFlipped=0,t.flips+=2,d.innerText=`Guesses Remaining ${10-t.flips/2}`,setTimeout(()=>{o.forEach(r=>{r.classList.remove("is-flipped"),t.checking=!1})},1500)},v=()=>{if(!l||!d||!u)throw new Error("what could possibly go wrong");10-t.flips/2<=0&&(u.innerHTML=`<div class="controls">
    <button class="start-button">Start</button>
    <div class="stats">
      <div class="remaining-flips">Guesses Remaining: 10</div>
    </div>
    </div>
    <div class="game-loss">Game Over</div>`),t.correctGuess==8&&(u.innerHTML=`<div class="controls">
    <button class="start-button">Start</button>
    <div class="stats">
      <div class="remaining-flips">Guesses Remaining: 10</div>
    </div>
    </div>
    <div class="game-win">You're A Winner</div>`)},y=o=>{if(!d)throw new Error("what could possibly go wrong");o.forEach(r=>{r.addEventListener("click",()=>{if(t.checking==!0)return;t.checking=!0,r.classList.add("is-flipped"),t.cardsFlipped+=1;const n=document.querySelectorAll(".is-flipped"),c=n[0],e=n[1];if(t.cardsFlipped===2)c.innerHTML===e.innerHTML?g():h();else{t.checking=!1;return}})})},w=()=>{const o=["🌟","🌙","🌵","🌸","🍁","🍏","🍒","🎉"],r=e=>{const s=e;for(let i=s.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[s[i],s[a]]=[s[a],s[i]]}return s};if(!l)throw new Error("what could possibly go wrong");const n=[...o,...o],c=r(n);for(let e=0;e<16;e++){const i=`<div class="card">
    <div class="card__side card__side--front">

    </div>
    <div class="card__side card__side--back">
    ${c[e]}
    </div>
  </div>`,a=document.createElement("div");a.innerHTML=i,l.appendChild(a)}};if(!p||!f||!l)throw new Error("what could possibly go wrong");const b=()=>{m(),w();const o=document.querySelectorAll(".card");y(o)};f.addEventListener("click",b);setInterval(v,1e3);
