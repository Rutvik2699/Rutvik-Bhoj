import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
        
        <p className='text-xl mt-20'>
        Hello, I am Rutvik Bhoj, Web Developer with 3 years of experience. I have experience in both Front-end and Back-end development and handle all the aspects of web development.
        I have good knowledge of programming languages such as HTML, CSS, JavaScript using which I have developed visually appealing websites. I am also proficient in frameworks such as REACT, Vue and have built robust full stack websites.
        </p>
        <br/>
        <p className='text-xl'>
        Additionally, I have experience in server side scripting languages such as JavaScript, Java and PHP along with databases such as MySQL and MongoDB in which I am capable of building queries and optimizing performance.
        As as full stack developer I am also comfortable with version control system such as Git and have experience with API to integrate third party services. 
        I have also worked as a Test engineer which gave me enough skills to test a whole website using automation tools like Selenium and Cypress.
        </p>
    </div>
    </div>
  )
}

export default About