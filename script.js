
$(document).ready(makeReady);

let empData = [
    {firstName: 'Jen', 
    lastName: 'Barber', 
    iD: 4521, title: 'Team Lead', 
    annualSalary: 80000},
    {firstName: 'Maurice', 
    lastName: 'Moss', iD: 8724, title: 'Support Team', 
    annualSalary: 58000}, 
    {firstName: 'Roy', 
    lastName: 'Smith', 
    iD: 9623, 
    title: 'Quality Assurance', 
    annualSalary: 48000}];

//** Calculate sum of monthly costs:
function totalMonthlyCost (){
    let monthlyCost = 0;
    for (let employee of empData){
        let monthlySalary = employee.annualSalary / 12
        console.log(employee.annualSalary, monthlySalary)
        monthlyCost += monthlySalary;
        $('#total-monthly-cost').text(`Total Monthly Cost: ${monthlyCost}`);
    }
}

function makeReady(){
    ///** add empData to DOM:
    for (let employee of empData){
        $('#emp-table').append(`
        <tr id='added-emp'>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td id='emp-ID'>${employee.iD}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td>
        <button id='delete-button'>Delete</button>
        </td>
        </tr>
        `);
    };

    //** add click event to submit button
    $('#emp-submit').on('click', submitEmpData);

    //** add click event to delete buttons for each column
        //** maybe use $(this).on('click', 'if this is in the class name', perform function)
    $(this).on('click', '#delete-button', deleteEmpRow);

    //** Update sum of monthly costs:
    totalMonthlyCost();
}

function submitEmpData(){
    ///** append inputs and add as table data:
    let empFirstName = $('#first-name').val();
    let empLastName = $('#last-name').val();
    let empID = Number($('#id').val());
    let empTitle = $('#title').val();
    let empAnnualSalary = Number($('#annual-salary').val());
        $('#emp-table').append(`
            <tr id='added-emp'>
            <td id='emp-firstName'>${empFirstName}</td>
            <td>${empLastName}</td>
            <td id='emp-ID'>${empID}</td>
            <td>${empTitle}</td>
            <td>${empAnnualSalary}</td>
            <td>
            <button id='delete-button'>Delete</button>
            </td>
            </tr>
        `);
    ///** clear inputs:
    $('input').val('');
    ///** store new employee in empData array:
    empData.push(
        {firstName: empFirstName, 
        lastName: empLastName, 
        iD: empID, 
        title: empTitle, 
        annualSalary: empAnnualSalary}
    );
    console.log(empData);
    //** Update sum of monthly costs:
    totalMonthlyCost();
}

////** When the 'Delete' button is clicked:
function deleteEmpRow(){
    ///** Need to somehow collect all of the emp data associated with $(this) delete button then locate it in the empData array and delete it:
    let empIDSelected = Number($(this).closest('#added-emp').find('#emp-ID').text());

    //** Delete the selected employee by id:
    empData = empData.filter(function(emp){ return emp.iD !== empIDSelected 
    })
    
    //** when 'Delete' button is clicked, this will remove the <tr> that was clicked:
    $(this).closest('#added-emp').remove();

    //** Update sum of monthly costs:
    totalMonthlyCost();
}