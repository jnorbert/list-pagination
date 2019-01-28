// globals
const list = document.querySelector ('.student-list');
const pageDiv = document.querySelector ('.page');
const studentList = list.children;
const studentPerPage = 10;
const page = 1;

// hide all students and show only a particular set of ten
const showPage = (list, page) => {
  for (let i = 0; i < list.length; i += 1) {
    let firstStudentIndex = (page - 1) * studentPerPage;
    let lastStudentIndex = firstStudentIndex + studentPerPage - 1;

    if (i >= firstStudentIndex && i <= lastStudentIndex) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
};

// append necessary elements to page (pagination, li, a currentPage)
// generates number of pages
const appendPageLinks = list => {
  const pageNeeded = list.length / studentPerPage;
  const paginationDiv = document.createElement ('div');
  paginationDiv.className = 'pagination';
  pageDiv.appendChild (paginationDiv);

  const ul = document.createElement ('ul');
  paginationDiv.appendChild (ul);

  for (i = 0; i < pageNeeded; i += 1) {
    currentPage = i + 1;
    const li = document.createElement ('li');
    const a = document.createElement ('a');
    a.textContent = currentPage;
    a.href = '#';
    li.appendChild (a);
    ul.appendChild (li);
  }

  const paginationNum = document.querySelectorAll ('.pagination a');
  paginationNum[0].className = 'active';

  // add click listeners
  ul.addEventListener ('click', e => {
    if (e.target.tagName == 'A') {
      showPage (studentList, e.target.textContent);
      makeActive (paginationNum, e);
    }
  });
};

// add active class
const makeActive = (list, target) => {
  for (let i = 0; i < list.length; i += 1) {
    list[i].className = '';
  }
  target.target.className = 'active';
};

// runs functions
showPage (studentList, page);
appendPageLinks (studentList);
