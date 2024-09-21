// Get loan applications from localStorage
let applications = JSON.parse(localStorage.getItem('loanApplications')) || [];

// Get table element
const table = document.getElementById('applications-table');

// Populate table with applications
applications.forEach(application => {
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.innerHTML = application.name;
  cell2.innerHTML = application.income;
  cell3.innerHTML = application.loanAmount;
  cell4.innerHTML = application.employmentDetails;
  cell5.innerHTML = application.status;
});
