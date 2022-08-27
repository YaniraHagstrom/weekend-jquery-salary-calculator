
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
    /// add empData to DOM:
    for (let employee of empData){
        $('#emp-table').append(`
        <tr id='added-emp'>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.iD}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td>
        <button id='delete-button'>Delete</button>
        </td>
        </tr>
        `);
    };

    // add click event to submit button
    $('#emp-submit').on('click', submitEmpData);

    // add click event to delete buttons for each column
        // maybe use $(this).on('click', 'if this is in the class name', perform function)
    $(this).on('click', '#delete-button', deleteEmpRow);
    
}

function submitEmpData(){
    ///append inputs and add as table data:
    let empFirstName = $('#first-name').val();
    let empLastName = $('#last-name').val();
    let empID = $('#id').val();
    let empTitle = $('#title').val();
    let empAnnualSalary = Number($('#annual-salary').val());
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
    /// clear inputs:
    $('input').val('');
    /// store new employee in empData array:
    empData.push(
        {firstName: empFirstName, 
        lastName: empLastName, 
        iD: empID, 
        title: empTitle, 
        annualSalary: empAnnualSalary}
    );
}

/// Delete employee row when 'Delete' button is clicked:
function deleteEmpRow(){
    /// when 'Delete' button is clicked, this will remove the tr that was clicked:
    $(this).closest('#added-emp').remove();
    // console.log($(this).closest('#added-emp'));
    // remove('#added-emp');
}