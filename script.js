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

       
        totalMonthly += annualSalary/12;
        console.log("Total monthly:", totalMonthly);
        
       
        let span = document.getElementById("total-monthly");
        let footer = document.getElementById("footer")
        
      
        span.innerHTML = `$${totalMonthly.toFixed(2)}`;

        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("employeeID").value = '';
        document.getElementById("jobTitle").value = '';
        document.getElementById("annualSalary").value = '';

        if(totalMonthly > 20000){
            footer.classList.add('over-budget');
        }
    
    }

    function deleteEmployee(event, annualSalary) {
        console.log("Employee deleted.");

        event.target.parentElement.parentElement.remove();

    }

