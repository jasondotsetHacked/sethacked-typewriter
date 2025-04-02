# typewriter-text

A lightweight Web Component for animated typewriter text effects.

## 💾 Install

```bash
npm install typewriter-text
```

## 🚀 Usage

### 1. Import the script

```html
<script type="module">
  import 'typewriter-text';
</script>
```

### 2. Use the component

```html
<typewriter-text
  phrases='["Hello world", "This is animated", "Nice, right?"]'
  options='{
    "typingSpeed": 80,
    "deletingSpeed": 40,
    "color": "#00ffcc"
  }'
></typewriter-text>
```

## 🛠 Options

- `typingSpeed` — ms per character (default: `100`)
- `deletingSpeed` — ms per character when deleting (default: `50`)
- `pauseBeforeDelete` — ms to wait before deleting (default: `2000`)
- `pauseBeforeType` — ms to wait before next phrase (default: `0`)
- `color` — text color (default: `rgb(217, 0, 255)`)
- `shadow` — text shadow (default: same as color)
