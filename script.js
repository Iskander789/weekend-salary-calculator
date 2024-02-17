console.log('js is sourced!');

let totalMonthly = 0;

function handleSubmit(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value
    let employeeID = document.getElementById('employeeID').value
    let jobTitle = document.getElementById('jobTitle').value
    let annualSalary = document.getElementById('annualSalary').value

    console.log('First name entered: ', firstName);
    console.log('Last name entered: ', lastName);
    console.log('Employee ID # entered: ', employeeID);
    console.log('Job title entered: ', jobTitle);
    console.log('Annual salary entered: ', annualSalary);
    

    tableBody.innerHTML += 

    `<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${employeeID}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button onclick='deleteEmployee(event,${annualSalary})'>Delete</button></td>
    <td></td>

</tr>`;

}

function deleteEmployee(event, annualSalary){
    console.log("Employee deleted.");

    event.target.parentElement.parentElement.remove();
    
}

