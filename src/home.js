const createHomePage = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    header.classList.add('bg-blue-500', 'text-white', 'py-4', 'col-span-2');
    header.textContent = 'DUI Interactions'

    content.appendChild(header);
}

export default createHomePage