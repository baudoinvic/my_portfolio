import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Booking travelling",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Bootsing Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Booking travelling",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Bootsing Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>What I do</h2>
                  <h3 style={{textAlign: "center"}}>Hi, there I am here</h3>
                   <h4 style={{textAlign: "center"}} >To help your next project</h4>
                {/* <p>Hi i'm Bolingo a software developer specialized in different technologies,
                  Building web applications, Mobile apps and beautiful websites for compamies.
                  Love digging into hard problems, learning new languages and technologies

                </p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                    <h2>my projects</h2>
                  <p>this is my best work projects which i have been working on for several years
                     the first one i made it's just help people to buy the tickets over the internet
                     and get their tickets according the money they have pay. the second one is just
                     for Business Startup how people could be able to make their business on internet

                  </p>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>
                         
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                   
                       <h1 style={{textAlign: "center"}}>About Me</h1>
                      <p> 
                      Hi i'm Bolingo a software developer specialized in different technologies,
                      Building web applications, Mobile apps and beautiful websites for compamies.
                      Love digging into hard problems, learning new languages and technologies.
                      if you would like to know more about me don't hesitate to get in touch with me
                      i will be always available for you so let's make thing easy  
            
                      </p>
                     
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
