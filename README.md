# note-app
note-app-pro to show my pure js abilities.

## Features:
<ul>
  <li>All of the notes save in localStorage</li>
  <li>You can see the time that you add the notes.</li>
  <li>You can edit or delete the notes.</li>
</ul>

### current timing

```javascript
function getNowDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()
    let nowDay = now.getDay() //now.getDay => it returns the day index.
    let nowMonth = now.getMonth()
    let nowYear = now.getFullYear() //2023
    let dayOfMonth = now.getDate()

    return `${months[nowMonth]} ${dayOfMonth},${nowYear} (${days[nowDay]})`  //* April 12 2022(tuesday)


}


```

### Local storage cooncepts

```javascript
window.addEventListener('load', () => {
    let notes = JSON.parse(localStorage.getItem('notes'))
    console.log(notes);
    notesContainer.push(...notes)
    newNoteGenerator(notesContainer)



})


```

## Technology used:
<p align="left">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/sabzlearn-ir/sabzlearn-ir/4d2a781931f79c747a132c28eae4ebfbb8eaa7d7/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/sabzlearn-ir/sabzlearn-ir/4d2a781931f79c747a132c28eae4ebfbb8eaa7d7/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
        <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/sabzlearn-ir/sabzlearn-ir/4d2a781931f79c747a132c28eae4ebfbb8eaa7d7/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>


