console.log('running')

const getContainer = (childElement) => {
     const element = document.querySelector(".lists");
     element.append(childElement)
}

// creating a child element , that will get append in the container
const createListElement = (addDataToList) => {

       const listContainer = document.createElement('div')
       const heading = document.createElement('h4')
       const task = document.createElement('p')
       const button = document.createElement('button')

       listContainer.classList = 'list';
       heading.innerText = addDataToList.heading;
       task.innerText = addDataToList.task;
       button.innerText = 'Done'
       button.addEventListener('click',  addDataToList.eventListener);
       listContainer.append(heading, task, button)

       return {
         listContainer: listContainer
       }
}

const addDataToList = (heading, task) => {
      return {
        heading: `Task ${heading}:`,
        task: task,
        eventListener: (e) => removeElement(e)
      }
}

const removeElement = (e) => {
    const element = e.path[1]
    element.remove();
}


const data = addDataToList('Homework', 'DO homework at 5pm')
const elementOne = createListElement(data)
getContainer(elementOne.listContainer);


const dataTwo = addDataToList('Gym', 'Gym at 6pm')
const elementTwo = createListElement(dataTwo)
getContainer(elementTwo.listContainer);

const createTask = (heading, task) => {
    const dataTwo = addDataToList(heading.innerText, task.innerText)
    const elementTwo = createListElement(dataTwo)
    getContainer(elementTwo.listContainer);

    heading.innerText = ""
    task.innerText = ""
}

const clickListener = (e) => {
    const heading = e.path[1].querySelector('span')
    const task = e.path[1].querySelector('div')

    heading && task ? createTask(heading, task) : alert("All fields required")

}

document.getElementById("submit-task").addEventListener('click', (e) => clickListener(e))