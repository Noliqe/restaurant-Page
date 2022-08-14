const contactScreen = () => {

    const form = () => {
    const backgroundForm = document.createElement('div');
    content.appendChild(backgroundForm);
    backgroundForm.classList.add('backgroundContact');
    backgroundForm.setAttribute('id', 'background');

    const formContainer = document.createElement('div');
    backgroundForm.appendChild(formContainer);
    formContainer.classList.add('formContainer');

    const form = document.createElement('form');
    formContainer.appendChild(form);
    formContainer.classList.add('form');

    let fName = document.createElement('label')
    form.appendChild(fName);
    fName.setAttribute("for", "fname");
    fName.textContent = 'First Name';

    let inputFName = document.createElement('input');
    form.appendChild(inputFName);
    inputFName.setAttribute("type", "text");
    inputFName.setAttribute("id", "Fname");
    inputFName.setAttribute("name", "firstname");
    inputFName.setAttribute("placeholder", "Your name..");

    let lName = document.createElement('label')
    form.appendChild(lName);
    lName.setAttribute("for", "lname");
    lName.textContent = 'Last Name';

    let inputLName = document.createElement('input');
    form.appendChild(inputLName);
    inputLName.setAttribute("type", "text");
    inputLName.setAttribute("id", "lName");
    inputLName.setAttribute("name", "lastname");
    inputLName.setAttribute("placeholder", "Your last name..");

    let subject = document.createElement('label')
    form.appendChild(subject);
    subject.setAttribute("for", "subject");
    subject.textContent = 'Subject';

    let subjectTextArea = document.createElement('textarea');
    form.appendChild(subjectTextArea);
    subjectTextArea.setAttribute("type", "text");
    subjectTextArea.setAttribute("id", "subject");
    subjectTextArea.setAttribute("name", "subject");
    subjectTextArea.setAttribute("placeholder", "Write something..");
    subjectTextArea.setAttribute("style", "height: 200px;");

    let submit = document.createElement('input');
    form.appendChild(submit);
    submit.setAttribute("value", "Submit");
    submit.setAttribute("id", "submit");
    }

    return {form}
}

export default contactScreen();