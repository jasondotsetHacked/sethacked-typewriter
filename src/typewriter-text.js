// typewriter-text.js
function initTypewriter(element, phrases, options = {}) {
  const {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseBeforeDelete = 2000,
    pauseBeforeType = 0,
    color = 'rgb(217, 0, 255)',
    shadow = '0 0 5px rgb(217, 0, 255)'
  } = options;

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  // Apply styles
  element.style.color = color;
  element.style.textShadow = shadow;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting) {
      element.textContent = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      if (currentCharIndex === currentPhrase.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseBeforeDelete);
        return;
      }
    } else {
      element.textContent = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, pauseBeforeType);
        return;
      }
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, delay);
  }

  type();
}

class TypewriterText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
        <style>
          span {
            text-decoration: underline;
            animation: blink-caret 0.7s step-end infinite;
            border-right: 2px solid currentColor;
          }
          @keyframes blink-caret {
            0%, 100% { border-color: transparent; }
            50% { border-color: currentColor; }
          }
        </style>
        <span></span>
      `;
  }

  connectedCallback() {
    const span = this.shadowRoot.querySelector('span');
    const phrasesAttr = this.getAttribute('phrases');
    const optionsAttr = this.getAttribute('options');

    const phrases = phrasesAttr ? JSON.parse(phrasesAttr) : ["Hello", "World"];
    const options = optionsAttr ? JSON.parse(optionsAttr) : {};

    initTypewriter(span, phrases, options);
  }
}

customElements.define('typewriter-text', TypewriterText);
