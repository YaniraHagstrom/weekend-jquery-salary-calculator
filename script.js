
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


function makeReady(){
    // add click event to submit button
    $('#emp-submit').on('click', submitEmpData);
    // add click event to delete buttons for each column
        // maybe use $(this).on('click', 'if this is in the class name', perform function)
    
}

function submitEmpData(){
    ///append inputs and add as table data:
    let empFirstName = $('#first-name').val();
    let empLastName = $('#last-name').val();
    let empID = $('#id').val();
    let empTitle = $('#title').val();
    let empAnnualSalary = $('#annual-salary').val();
        $('#emp-table').append(`
        <tr id='added-emp'>
        <td>${empFirstName}</td>
        <td>${empLastName}</td>
        <td>${empID}</td>
        <td>${empTitle}</td>
        <td>${empAnnualSalary}</td>
        <td>
        <button id='delete-button'>Delete</button>
        </td>
        </tr>
        `);
}
