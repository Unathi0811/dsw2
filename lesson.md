# DOM and Advanced JavaScript Methods

## 1. DOM (Document Object Model)

The DOM represents HTML as a tree of objects. You can use JS to access and manipulate these elements.

### **Selecting Elements**

* `document.getElementById('id')` → selects a single element by ID.
* `document.getElementsByClassName('class')` → selects multiple elements by class.
* `document.getElementsByTagName('tag')` → selects elements by tag.
* `document.querySelector('selector')` → selects the first element that matches a CSS selector.
* `document.querySelectorAll('selector')` → selects all elements that match a CSS selector.

**Example:**

```javascript
const title = document.getElementById('title');
title.textContent = 'Hello DOM!';

const items = document.getElementsByClassName('item');
for(let i=0;i<items.length;i++){
    items[i].style.color = 'red';
}
```

### **Creating and Appending Elements**

* `document.createElement('tag')` → creates a new element.
* `parent.appendChild(child)` → appends a child element to parent.
* `parent.insertBefore(newNode, referenceNode)` → inserts element before another.
* `element.remove()` → removes element from DOM.

**Example:**

```javascript
const ul = document.getElementById('list');
const li = document.createElement('li');
li.textContent = 'New Item';
ul.appendChild(li); // adds to the end
```

### **Modifying Elements**

* `element.textContent` → change text
* `element.innerHTML` → change HTML inside element
* `element.style.property` → change style
* `element.classList.add('class')` → add class
* `element.classList.remove('class')` → remove class

**Example:**

```javascript
const box = document.getElementById('box');
box.textContent = 'Updated!';
box.style.backgroundColor = 'yellow';
box.classList.add('highlight');
```

---

## 2. Event Listeners

Events allow your page to respond to user actions.

### **Basic Events**

* `click` → user clicks an element
* `dblclick` → double click
* `mouseover` / `mouseout` → mouse enters or leaves
* `keydown` / `keyup` → keyboard keys pressed or released
* `input` → user types in input field
* `submit` → form submission
* `change` → input field changes value

### **Adding Event Listeners**

```javascript
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function(){
    alert('Button clicked!');
});
```

**Example - keydown:**

```javascript
document.addEventListener('keydown', function(event){
    console.log('Key pressed:', event.key);
});
```

### **Removing Event Listeners**

```javascript
function sayHi(){ console.log('Hi'); }
btn.addEventListener('click', sayHi);
btn.removeEventListener('click', sayHi);
```

---

## 3. Advanced JS Methods for Arrays and Strings

### **Array Methods**

* `forEach()` → loop through array
* `map()` → create new array with modified items
* `filter()` → filter array based on condition
* `reduce()` → reduce array to single value
* `some()` / `every()` → boolean checks
* `find()` / `findIndex()` → locate item
* `push()` / `pop()` / `shift()` / `unshift()` → modify array

**Example:**

```javascript
const nums = [1,2,3,4];
nums.forEach(n => console.log(n));
const squared = nums.map(n => n*n);
const evens = nums.filter(n => n % 2 === 0);
```

### **String Methods**

* `split()` → convert string to array
* `join()` → convert array to string
* `toUpperCase()` / `toLowerCase()` → change case
* `includes()` → check substring
* `trim()` → remove whitespace

**Example:**

```javascript
const text = 'Hello World';
console.log(text.toUpperCase());
console.log(text.includes('World'));
const arr = text.split(' ');
```

---

## 4. Other Useful DOM/JS Techniques

### **Changing Attributes**

```javascript
const img = document.getElementById('myImg');
img.src = 'new-image.png';
img.alt = 'New Alt Text';
```

### **Timers**

* `setTimeout(function, ms)` → run function after delay
* `setInterval(function, ms)` → repeat function
* `clearInterval(id)` → stop interval

**Example:**

```javascript
setTimeout(() => console.log('Delayed!'), 2000);
```

### **Event Delegation**

Instead of adding listeners to every child:

```javascript
const list = document.getElementById('list');
list.addEventListener('click', function(e){
    if(e.target && e.target.nodeName === 'LI'){
        console.log('Clicked:', e.target.textContent);
    }
});
```

### **Template Literals for Dynamic Content**

```javascript
const name = 'Skyler';
display.textContent = `Hello, ${name}!`;
```

### **Ternary Operator**

```javascript
const score = 10;
const message = score > 5 ? 'Pass' : 'Fail';
```

### **Event Object**

```javascript
document.addEventListener('keydown', function(e){
    console.log(e.key, e.code, e.shiftKey);
});
```

---

This document covers:

* DOM selection and manipulation
* Appending/removing elements
* Event listeners and keyboard/mouse events
* Common array/string methods
* Style and attribute modification
* Timers, delegation, and template literals

All examples are simple for students to experiment with.
