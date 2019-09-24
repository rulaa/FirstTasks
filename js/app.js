if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'Service Worker registration failed')
  );
}


// Where can we go?
const routes = {
  '/home': firsttasksPage,   // change this to /home to prevent refresh
  '/addtasks': addtaskPage,
  '/calendar': calendarPage,
  '/school': schoolPage,
  '/work': workPage

  // REGISTER NEW URL:VIEWS HERE
};

var category = [
  {id: 1, name: "firsttasksPage"},
  {id: 2, name: "addtaskPage"},
  {id: 3, name: "calendarPage"},
  {id: 4, name: "schoolPage"},
  {id: 5, name: "workPage"}
]


function createTask(task) {
  return `<li class="task">${task.name}</li>`;
}

function updateCurrentDate() {
   var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
   var today = new Date();
   var dd = today.getDate();
   var mm = months[today.getMonth()];
   var yyyy = today.getFullYear();

   document.getElementById('current-date').innerHTML = `${mm} ${dd}, ${yyyy}`;
 }
// updateCurrentDate();
// // DATA UPDATER:
// // Fires every time a page changes
// document.getElementById('page').addEventListener('page', function (e) {

//   // If the current page is the todoListPage, grab the data for it
//   // This needs some improvement
//   if (currPage == '/home') {
//     // Find the main task list
//     var task = document.getElementById('task');
//     // For each task, call createTask and join them all together with a linebreak between
//     taskList.innerHTML = tasks.map(createTask).join('\n');

//   });
// }

// }, false);
