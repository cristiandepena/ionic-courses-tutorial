// Butttons
const addBtn = document.querySelector("#add");
const cancelBtn = document.querySelector("#cancel");

// Inputs
const courseName = document.querySelector("#courseName");
const courseRating = document.querySelector("#courseRating");
const courseList = document.querySelector("#courseList");

addBtn.addEventListener("click", () => {
    const course = courseName.value;
    const rating = courseRating.value;

    if (course.trim().length > 0) {

        const listItem = document.createElement("ion-item");
        listItem.textContent = course + " - " + rating;

        courseList.appendChild(listItem);
    } else {
        const alert = document.createElement("ion-alert");
        alert.header = 'Invalid Input';
        alert.message = 'Course Name cannot be empty!';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);

        return alert.present();
    }
});

cancelBtn.addEventListener("click", () => {
    while (courseList.childElementCount > 0) {

        const lastItem = courseList.lastChild.remove();
    }
    
    courseName.value = "";
    courseRating.value = 1;
    console.log("Cleared");
});