document.getElementById('loan-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const income = document.getElementById('income').value;
    const loanAmount = document.getElementById('loan-amount').value;
    const employmentDetails = document.getElementById('employment-details').value;
  
    // Create application object
    const loanApplication = {
      name,
      income,
      loanAmount,
      employmentDetails,
      status: 'Pending', // Default status
    };
  
    // Store in localStorage
    let applications = JSON.parse(localStorage.getItem('loanApplications')) || [];
    applications.push(loanApplication);
    localStorage.setItem('loanApplications', JSON.stringify(applications));
  
    // Redirect to dashboard (simulating)
    window.location.href = 'dashboard.html';
  });
  