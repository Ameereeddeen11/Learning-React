import Cards from "./components/Cards.jsx";
import { Row, Container } from "react-bootstrap";
import GitHubCalendar from 'react-github-calendar';

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

const tools = [
    {name: "VS Code", img: "vscode"}, 
    {name: "PyCharm", img: "pycharm"}, 
    {name: "Postman", img: "postman"}, 
    {name: "Docker", img: "docker"}, 
    {name: "Heroku", img: "heroku"}, 
    {name: "AWS", img: "aws"}, 
    {name: "Azure", img: "azure"}, 
    {name: "Visual Studio", img: "vs"},
]

const cards = skillset.map((skill) => (
    <Cards skillset={skill} />
)) 

const toolList = tools.map((tool) => (
    <Cards skillset={tool} />
))

function AboutMe() {
    return (
        <>
            <Container>
                <Row className="my-5" align="center">
                    <h1>Education</h1>
                    <p>Currently I am a student at the SOS and SOU Neratovice.</p>
                </Row>
                <Row className="my-5" align="center">
                    <h1>My Skills</h1>
                    {cards}
                </Row>
                <Row className="my-5" align="center">
                    <h1>Tools that I usualy use</h1>
                    {toolList}
                </Row>
                <Row className="my-5" align="center">
                    <h1>My Contributions</h1>
                    <GitHubCalendar username="Ameereeddeen11" blockSize={15} blockMargin={5} color="#c084f5" fontSize={16}/>
                </Row>
            </Container>
        </>
    );
}

export default AboutMe;