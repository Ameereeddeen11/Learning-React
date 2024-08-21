const projects = [
    { name: 'Project 1', description: 'This is a project', link: ''},
    { name: 'Project 2', description: 'This is a project', link: ''},
    { name: 'Project 3', description: 'This is a project', link: ''},
    { name: 'Project 4', description: 'This is a project', link: ''}
]  

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <p>Here are some of the projects I have worked on:</p>
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </div>
    )
}

export default Projects;