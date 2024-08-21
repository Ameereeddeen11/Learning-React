import SkillSet from "./components/SkillSet.jsx"
import { Row, Container } from "react-bootstrap";
import './components/SkillSet.css'
const skillset = [
    { name: 'JavaScript', level: '20', img: 'javascript' },
    { name: 'React', level: '20', img: 'react' },
    { name: 'Python', level: '40', img: 'python' },
    { name: 'Django', level: '40', img: 'django' },
    { name: 'FastAPI', level: '40', img: 'fastapi' },
    { name: 'Git/GitHub', level: '70', img: 'git' },
    { name: 'C#', level: '30', img: 'cs' },
    { name: 'ASP.NET', level: '20', img: 'dotnet' },
    { name: 'Go', level: '20', img: 'go' },
    { name: 'SQLAlchemy', level: '30', img: 'sqlalchemy' },
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


const cards = skillset.map((skill) => (
    <SkillSet skillset={skill} />
))

const tooList = tools.map((tool) => (
    <li>{tool}</li>
))

function AboutMe() {
    return (
        <>
            <Container>
                <Row className="my-4">
                    <h1>My Skills</h1>
                    {cards}
                </Row>
                <Row className="my-4">
                    <h1>Tools that I usualy use</h1>
                    {tooList}
                </Row>
            </Container>
        </>
    );
}

export default AboutMe;