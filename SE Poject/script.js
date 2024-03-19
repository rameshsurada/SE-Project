class Employee {
    constructor(name, employeeId, phoneNumber, address, salary) {
      this.name = name;
      this.employeeId = employeeId;
      this.phoneNumber = phoneNumber;
      this.address = address;
      this.salary = salary;
    }
  
    getDetails() {
      return `Name: ${this.name}, Employee ID: ${this.employeeId}, Phone Number: ${this.phoneNumber}, Address: ${this.address}, Salary: ${this.salary}`;
    }
  
    getSalary() {
      return `Name: ${this.name}, Salary: ${this.salary}`;
    }
  }
  
  let personnelList = []; // Initialize an empty array to store employee data
  
  function login() {
    const userType = document.getElementById('userType').value; // Get the selected user type (admin or employee)
    const username = document.getElementById('usernameInput').value.trim(); // Get the entered username
    const password = document.getElementById('passwordInput').value.trim(); // Get the entered password
  
    if (username === 'admin' && password === 'password' && userType === 'admin') {
      // Redirect to admin dashboard if admin credentials are correct
      window.location.href = 'admin.html';
    } else if (userType === 'employee') {
      // Check if the entered username (employee ID) exists in the personnelList array
      const employee = personnelList.find(emp => emp.employeeId === username && password === 'password');
      if (employee) {
        // Redirect to employee dashboard if employee credentials are correct
        window.location.href = 'employee.html';
      } else {
        alert('Invalid username or password. Please try again.'); // Show error message for invalid employee credentials
      }
    } else {
      alert('Invalid username or password or user type. Please try again.'); // Show error message for invalid admin credentials
    }
  }
  
  function logout() {
    window.location.href = 'login.html'; // Redirect to the login page when logging out
  }
  
  function addEmployee() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const employeeIdInput = document.getElementById('employeeIdInput').value.trim();
    const phoneNumberInput = document.getElementById('phoneNumberInput').value.trim();
    const addressInput = document.getElementById('addressInput').value.trim();
    const salaryInput = parseFloat(document.getElementById('salaryInput').value.trim());
  
    if (nameInput !== '' && employeeIdInput !== '' && phoneNumberInput !== '' && addressInput !== '' && !isNaN(salaryInput) && salaryInput > 0) {
      const employee = new Employee(nameInput, employeeIdInput, phoneNumberInput, addressInput, salaryInput);
      personnelList.push(employee);
      alert('Employee added successfully.');
      resetForm(); // Reset the form fields after adding an employee
      displayEmployees(); // Update displayed employee list
    } else {
      alert('Please fill in all fields with valid data.');
    }
  }
  
  function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('employeeIdInput').value = '';
    document.getElementById('phoneNumberInput').value = '';
    document.getElementById('addressInput').value = '';
    document.getElementById('salaryInput').value = '';
  }
  
  function displayEmployees() {
    const personnelListContainer = document.getElementById('personnelList');
    personnelListContainer.innerHTML = ''; // Clear previous content
  
    personnelList.forEach((employee) => {
      const employeeDetails = document.createElement('div');
      employeeDetails.classList.add('personnelItem');
      employeeDetails.innerText = employee.getDetails();
      personnelListContainer.appendChild(employeeDetails);
    });
  }
  