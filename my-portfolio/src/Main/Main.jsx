import AboutMe from "./About/AboutMe.jsx"
import SkillSet from "./About/SkillSet.jsx"

const skillset = [
    { name: 'JavaScript', level: '50%'},
    { name: 'React', level: '30%'},
    { name: 'Python', level: '60%'},
    { name: 'Django', level: '60%'},
    { name: 'FastAPI', level: '40%'},
    { name: 'Git/GitHub', level: '70%'},
    { name: 'C#', level: '50%'},
    { name: 'ASP,NET', level: '30%'},
    { name: 'Go', level: '20%'},
  ]
  
const tools = ["VS Code", "PyCharm", "Postman", "Docker", "Heroku", "AWS", "Azure", "Visual Studio"]
  
const projects = [
    { name: 'Project 1', description: 'This is a project', link: ''},
    { name: 'Project 2', description: 'This is a project', link: ''},
    { name: 'Project 3', description: 'This is a project', link: ''},
    { name: 'Project 4', description: 'This is a project', link: ''},
    { name: 'Project 5', description: 'This is a project', link: ''},
    { name: 'Project 6', description: 'This is a project', link: ''},
    { name: 'Project 7', description: 'This is a project', link: ''},
    { name: 'Project 8', description: 'This is a project', link: ''},
    { name: 'Project 9', description: 'This is a project', link: ''},
    { name: 'Project 10', description: 'This is a project', link: ''},
  ]  

function Main() {
    return (
        <>
            <AboutMe />
            <SkillSet skillset={skillset} tools={tools} projects={projects} githubactivite="https://raw.githubusercontent.com/Ameereeddeen11/Ameereeddeen11/output/github-contribution-grid-snake.svg" />
        </>
    );
}

export default Main;