// getting the response from the user actions
const display = document.getElementById("display");
const keys = document.getElementById("keys");
const memDot = document.getElementById("memDot");
const themeSwitch = document.getElementById("themeToggle");

// Calculator State
let current = "";
let previous = "";
let operator = null;

// Memory 
let memory = [];

// Show value on screen
const show = (v) => display.textContent = String(v);
const toNum = (s) => parseFloat(s);
const has = (s) => s !== "" && s !== null;

// Memory indicator
function updateMemDot() {
  const total = memory.reduce((sum, n) => sum + n, 0);
  memDot.style.display = total !== 0 ? "inline-block" : "none";
  memDot.title = `Memory: ${total}`;
}

// Input numbers
function putDigit(d) {
  if (d === "." && current.includes(".")) return;
  current += d;
  show(current);
}

// Set operator
function setOperator(op) {
  if (!has(current)) return;
  if (has(previous)) compute();
  operator = op;
  previous = current;
  current = "";
}

// Clear all
function clearAll() {
  current = "";
  previous = "";
  operator = null;
  show("0");
}

// Toggle +/-
function flipSign() {
  if (!has(current)) return;
  current = String(-toNum(current));
  show(current);
}

// Percentage
function percent() {
  if (!has(current)) return;
  current = String(toNum(current) / 100);
  show(current);
}

// Calculate
function compute() {
  const a = toNum(previous);
  const b = toNum(current);
  if (Number.isNaN(a) || Number.isNaN(b)) return;

  let result;
  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "×":
    case "*": result = a * b; break;
    case "÷":
    case "/": result = b === 0 ? "Error" : a / b; break;
    default: return;
  }

  current = String(result);
  previous = "";
  operator = null;
  show(current);
}

// Memory Functions
function mPlus()  { const v = toNum(current || "0"); if (!Number.isNaN(v)) memory.push(+v); updateMemDot(); }
function mMinus() { const v = toNum(current || "0"); if (!Number.isNaN(v)) memory.push(-v); updateMemDot(); }
function mRecall() {
  if (memory.length === 0) return;
  const total = memory.reduce((sum, n) => sum + n, 0);
  current = String(total);
  show(current);
}
function mClear() { memory = []; updateMemDot(); }

// Handle button clicks
keys.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const label = (btn.value ?? btn.textContent).trim();

  if ((label >= "0" && label <= "9") || label === ".") { putDigit(label); return; }

  if (label === "MC") return mClear();
  if (label === "MR") return mRecall();
  if (label === "M+") return mPlus();
  if (label === "M-") return mMinus();

  switch (label) {
    case "AC":  clearAll(); break;
    case "+/-": flipSign(); break;
    case "%":   percent(); break;
    case "=":   compute(); break;
    case "+": setOperator("+"); break;
    case "-": setOperator("-"); break;
    case "×": setOperator("×"); break;
    case "÷": setOperator("÷"); break;
  }
});

// Keyboard support
const keyToOp = { "+": "+", "-": "-", "*": "×", "x": "×", "X": "×", "/": "÷", "÷": "÷" };
window.addEventListener("keydown", (e) => {
  const k = e.key;
  if (k >= "0" && k <= "9") return putDigit(k);
  if (k === ".") return putDigit(".");
  if (k in keyToOp) return setOperator(keyToOp[k]);
  if (k === "Enter" || k === "=") return compute();
  if (k === "Escape") return clearAll();
  if (k === "%") return percent();
  if (k === "Backspace") {
    current = current.slice(0, -1);
    show(current || "0");
  }
});

// --- iOS-Style Theme Toggle ---
const THEME_KEY = "calc-theme";

function setTheme(mode) {
  document.body.classList.remove("light-mode", "dark-mode");
  document.body.classList.add(mode);
  themeSwitch.checked = mode === "light-mode";
  localStorage.setItem(THEME_KEY, mode);
}

(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const mode = saved || (prefersLight ? "light-mode" : "dark-mode");
  setTheme(mode);
})();

themeSwitch.addEventListener("change", () => {
  const mode = themeSwitch.checked ? "light-mode" : "dark-mode";
  setTheme(mode);
});

// Start
show("0");
updateMemDot();
