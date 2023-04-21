import{useState} from "react"
import { Accordion } from "react-bootstrap";

export default function Grid(){
    return(

        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="key2">My Project Plan</Accordion.Header>
        <Accordion.Body className="key1">
         <ul>
            <li>My own mood music streamer that your can set your mood and it'll create a playlist to match the mood you choose and artist can monetize.</li>
            <li>App that allows people to find distressed properties and connect to cash buyers so they close deals.</li>
            <li>A new app that people can not only use sounds like a tiktok but allow real comedic content creators to shine again like a vine era.</li>
         </ul>
        </Accordion.Body>
      </Accordion.Item>
        
      
      <Accordion.Item eventKey="1">
        <Accordion.Header className="key2">My Ideal Workplace</Accordion.Header>
        <Accordion.Body className="key1">
         In the tech industry, there are a variety of roles
         that require different skill sets and personalities, 
         and each individual may have their own preferences and goals 
         when it comes to the type of company they want to work for.
         Ultimately, the ideal workplace for a Sagittarius black guy in the tech industry or anyone,
         for that matter will depend on their unique skills, interests, and goals. 
         It's important to do your research and find companies that align with your values 
         and offer the opportunities and environment that you're looking for.
        </Accordion.Body>
      </Accordion.Item>
      



      <Accordion.Item eventKey="2">
        <Accordion.Header className="key2">Why Boca Code?</Accordion.Header>
        <Accordion.Body className="key1">
        Software developers have the ability to create products and applications that have a significant impact on people's lives.
        This can be rewarding and fulfilling, as developers can see the direct impact of their work on users. The field of software development is constantly evolving, 
        which means developers are constantly learning and staying up-to-date with the latest 
        technologies and tools. Many developers enjoy the challenge of learning new things and expanding their knowledge.
        The demand for software developers is high, and the field is 
        expected to continue growing in the coming years. This provides job security and stability for developers.
        Many software development jobs offer flexible schedules, remote work options, and 
        the ability to work from home. This allows developers to work on their own terms and maintain a good work-life balance.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    
    )
}