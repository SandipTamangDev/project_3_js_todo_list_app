## **Core JS Tools for a Todo App**

You only need these categories:

### **1. State & Data**

* `Array` methods: `push`, `filter`, `map`, `findIndex`, `splice`
* `JSON.stringify` / `JSON.parse`
* `localStorage.setItem` / `getItem` / `removeItem`
* `Date.now()` for unique IDs

### **2. DOM Control**

* `document.querySelector`
* `document.createElement`
* `element.appendChild`
* `element.textContent`
* `element.classList.add/remove/toggle`
* `element.setAttribute` / `removeAttribute`
* Event delegation: `container.addEventListener("click", handler)`

### **3. Events**

* `addEventListener("submit")`
* `addEventListener("click")`
* `addEventListener("input")`
* Keyboard events if needed: `keydown`, `Enter`

### **4. Rendering Logic**

* Render list function: `render(todos)`
* Diff update or full re-render (tiny app → full)

### **5. Validation / Utils**

* Trim text: `value.trim()`
* Guard clauses
* `console.log` for debugging

---

## **Optional but useful**

* Drag + drop (native `dragstart`, `dragover`, `drop`)
* `contenteditable` for inline edits
* `try/catch` for localStorage safety

---

## **3 steps (action-first)**

1. **Scaffold**: `index.html`, `main.js`, input + list container.
2. **State**: array → load/save to localStorage.
3. **Actions**: add / delete / toggle / render.

---

## **Minimal test**

* Add item → refresh page → item still exists.
* Delete item → correct one removed.
* Toggle complete → class switches.




















# **1. How to Store Things (Memory Tools)**

You’ll need a way to keep track of your tasks.

### **Hints**

* Think of a *list* that can grow and shrink.
* Learn how to **save** something in the browser so it doesn’t vanish when you refresh.
* Learn how to **convert** things into text to save and bring them back.

---

# **2. How to Talk to Your Page (DOM Tools)**

You need to point at elements and tell them what to do.

### **Hints**

* Know how to **select** something already on the page.
* Know how to **create** something new.
* Know how to **attach** that new thing onto the page.
* Know how to **change the text** or **style** of something.

---

# **3. How to Respond to Actions (Event Tools)**

You need to make the app react when you click or type.

### **Hints**

* Listen for the user pressing a button.
* Listen for the user typing in the input box.
* Listen for the user clicking something inside the list (delete/complete).

---

# **4. How to Change the Screen (Render Tools)**

Whenever something changes, you need to update the list visually.

### **Hints**

* Have a single function that **refreshes the whole list**.
* Every time something is added, removed, or marked done → **call the same update**.

---

# **5. How to Keep Things Clean (Utility Tools)**

Small helpers that avoid bugs.

### **Hints**

* Remove extra spaces from text.
* Check if the user typed nothing.
* Use simple checks before doing an action.

---

# **Optional Tools You Can Learn Later**

### **Hints**

* Allow items to be dragged around.
* Allow editing tasks by clicking the text.
* Catch errors when saving or loading data.

---

# **If you want, I can also explain:**

**A. The exact learning order** (step-by-step)
**B. A simple mental model of how todo apps work** (no code)

Which one do you want?
















Perfect — so you want **two things**:

1. **Delete task** → remove `<li>` from DOM.
2. **Complete task** → move `<li>` from one `<ul>` to another.

Here’s the **JS tools / methods / properties** you’ll need for both, no full code:

---

### 1. Event handling

* `.addEventListener('click', callback)` → detect button clicks.
* `e.target` → figure out which button was clicked.

### 2. DOM traversal

* `.closest('li')` → find the `<li>` that contains the clicked button.
* `.parentNode` → alternate way to find the parent `<li>` or `<ul>`.

### 3. DOM manipulation

* `.remove()` → remove the `<li>` from DOM (delete).
* `.appendChild(element)` → move the `<li>` to another `<ul>` (completed).
* `.insertBefore(element, reference)` → optional, if you want to insert at top or middle.

### 4. Optional helpers / checks

* `.textContent` / `.innerText` → check button text (“Delete” vs “Completed”).
* `.classList.add()` / `.classList.remove()` → optionally style completed tasks differently.
* Arrays + `.splice()` → if you keep track of tasks in JS memory.

---

**Flow in words:**

* Click a button → detect which one (`Delete` or `Completed`).
* `.closest('li')` → get the task element.
* If `Delete` → `.remove()` from DOM.
* If `Completed` → `.appendChild()` into the completed `<ul>`.
* Optional: update arrays or styles to match.

You’ll see, **the same methods cover both actions**; only the last step changes.

If you want, I can make a **tiny diagram showing flow for both buttons** so it’s crystal clear without code. Do you want me to?
