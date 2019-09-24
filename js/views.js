

let firsttasksPage =  `
<h1 class="pageTitle">All Tasks</h1><button class="favouritebtnheader"><i  class="fa fa-star"></i></button>


<h2 id="current-date">December 16th, 2018</h2>
  <hr></hr>

<label class="container fix1" id="task">Walk the dog
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
  <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
  <button class="favouritebtn"><i  class="fa fa-star"></i></button>
</label>

</label>

<label class="container fix1" id="task">Call the cleaners
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
  <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
  <button class="favouritebtn"><i  class="fa fa-star"></i></button>
</label>

<label class="container fix1" id="task">Order invitations
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
  <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
  <button class="favouritebtn"><i  class="fa fa-star"></i></button>

</label>

<label class="container fix2" id="task">Check stats again
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
  <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
  <button class="favouritebtn"><i  class="fa fa-star"></i></button>

</label>

<label class="container fix2" id="task">Fax Lena the files
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
  <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
  <button class="favouritebtn"><i  class="fa fa-star"></i></button>

  </label>

  <label class="container fix3" id="task">Complete questions
    <input type="checkbox" checked="checked">
    <span class="checkmark"></span>
    <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
    <button class="favouritebtn"><i  class="fa fa-star"></i></button>

</label>

    <label class="container fix3" id="task">Finish essay
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
      <button class="favouritebtn"><i  class="fa fa-star"></i></button>
      <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
</label>

<br></br>
<br></br>
<br></br>`;

let addtaskPage = `

<h1 class="pageTitle">New Task</h1>

<button class="button">Done</button>


<div>
  <form action="/action_page.php">
    <label for="tasks">Write your task</label>
    <input type="text" id="fname" name="firstname" placeholder="Write task...">
    <p1>Task Description</p1>
    <textarea class="task_description"></textarea>

    <label for="categories">Choose a category</label>
    <select id="categories" name="categories" placeholder="Choose a category">
      <option value="Home">Home</option>
      <option value="Home">Home</option>
      <option value="School">School</option>
      <option value="Work">Work</option>
      <option value="Other">Other</option>
    </select>
    <input class="date" type="date" value="Enter Date here">


  </form>

</div>
<input type="submit" value="Add task">
<button class="cancelbtn" type="button"><b>Cancel</b></button>

 <br></br>

`;

let calendarPage = `


  <h1 class="pageTitle">Calendar</h1>

  <h2> December 2018 </h2>
    <hr></hr>

    <ul class="weekdays">
        <li>
          <abbr title="S">Sun</abbr>
        </li>
        <li>
          <abbr title="M">Mon</abbr>
        </li>
        <li>
          <abbr title="T">Tues</abbr>
        </li>
        <li>
          <abbr title="W">Wed</abbr>
        </li>
        <li>
          <abbr title="T">Thur</abbr>
        </li>
        <li>
          <abbr title="F">Fri</abbr>
        </li>
        <li>
          <abbr title="S">Sat</abbr>
        </li>
    </ul>

      <ul>
        <a href="#" class="day"><li class="lastMonth">25</li></a>
        <a href="#" class="day"><li class="lastMonth">26</li></a>
        <a href="#" class="day"><li class="lastMonth">27</li></a>
        <a href="#" class="day"><li class="lastMonth">28</li></a>
        <a href="#" class="day"><li class="lastMonth">29</li></a>
        <a href="#" class="day"><li class="lastMonth">30</li></a>
          <a href="firsttasks.html" class="day"><li>1</li></a>
          <a href="firsttasks.html" class="day"><li>2</li></a>
          <a href="firsttasks.html" class="day"><li>3</li></a>
          <a href="firsttasks.html" class="day"><li>4</li></a>
          <a href="firsttasks.html" class="day"><li>5</li></a>
          <a href="firsttasks.html" class="day"><li>6</li></a>
          <a href="firsttasks.html" class="day"><li>7</li></a>
          <a href="firsttasks.html" class="day"><li>8</li></a>
          <a href="firsttasks.html" class="day"><li>9</li></a>
          <a href="firsttasks.html" class="day"><li>10</li></a>
          <a href="firsttasks.html" class="day"><li>11</li></a>
          <a href="firsttasks.html" class="day"><li>12</li></a>
          <a href="firsttasks.html" class="day"><li>13</li></a>
          <a href="firsttasks.html" class="day"><li>14</li></a>
          <a href="firsttasks.html" class="day"><li>15</li></a>
          <a href="firsttasks.html" class="day"><li>16</li></a>
          <a href="firsttasks.html" class="day"><li>17</li></a>
          <a href="firsttasks.html" class="day"><li>18</li></a>
          <a href="firsttasks.html" class="day"><li>19</li></a>
          <a href="firsttasks.html" class="day"><li>20</li></a>
          <a href="firsttasks.html" class="day"><li>21</li></a>
          <a href="firsttasks.html" class="day"><li>22</li></a>
          <a href="firsttasks.html" class="day"><li>23</li></a>
          <a href="firsttasks.html" class="day"><li>24</li></a>
          <a href="firsttasks.html" class="day"><li>25</li></a>
          <a href="firsttasks.html" class="day"><li>26</li></a>
          <a href="firsttasks.html" class="day"><li>27</li></a>
          <a href="firsttasks.html" class="day"><li>28</li></a>
          <a href="firsttasks.html" class="day"><li>29</li></a>
          <a href="firsttasks.html" class="day"><li>30</li></a>
          <a href="firsttasks.html" class="day"><li>31</li></a>
        <a href="#" class="day"><li class="lastMonth">1</li></a>
        <a href="#" class="day"><li class="lastMonth">2</li></a>
        <a href="#" class="day"><li class="lastMonth">3</li></a>
        <a href="#" class="day"><li class="lastMonth">4</li></a>
        <a href="#" class="day"><li class="lastMonth">5</li></a>
    </ul>
  </ul>
  </article>

  <button class="addTsk">
    <a class="add" href="#">ADD TASK</a>
  </button>
<br></br>
<br></br>
<br></br>
`;

let schoolPage = `
<h1 class="pageTitle">School</h1><button class="favouritebtnheader"><i  class="fa fa-star"></i></button>


<label class="container fix3" id="task">Complete questions
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
  <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
  <button class="favouritebtn"><i  class="fa fa-star"></i></button>
</label>

  <label class="container fix3" id="task">Finish essay
    <input type="checkbox" checked="checked">
    <span class="checkmark"></span>
    <a href="addtasks.html"><i class="fa fa-pencil"></i></a>
    <button class="favouritebtn"><i  class="fa fa-star"></i></button>
</label>
`;

let workPage = `
<h1 class="pageTitle">Work</h1><button class="favouritebtnheader"><i  class="fa fa-star"></i></button>


<label class="container fix2" id="task">Check stats again
<input type="checkbox" checked="checked">
<span class="checkmark"></span>
<a href="addtasks.html"><i class="fa fa-pencil"></i></a>
<button class="favouritebtn"><i  class="fa fa-star"></i></button>
</label>

<label class="container fix2" id="task">Fax Lena the files
<input type="checkbox" checked="checked">
<span class="checkmark"></span>
<a href="addtasks.html"><i class="fa fa-pencil"></i></a>
<button class="favouritebtn"><i  class="fa fa-star"></i></button>
</label>

`;
