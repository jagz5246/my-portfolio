import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import './App.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import proPic from './Images/profile-pic.jpg';
import contact from './Images/contact-me.gif'
import design from './Images/design.png';
import code from './Images/code.png';
import consulting from './Images/design1.png';
import project1 from './Images/project-1.png';
import project2 from './Images/project-2.png';
import project3 from './Images/project-3.png';
import html from './Icons/html.png';
import css from './Icons/css.png';
import js from './Icons/js.png';
import react from './Icons/react.png';
// import nextjs from './Icons/nextjs.png';
import c from './Icons/c.png';
import java from './Icons/java.png';
import python from './Icons/python.png';
import figma from './Icons/figma.png';
import xd from './Icons/xd.png';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode?"dark":"" }>
        <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 font-mono'>
        <section className=' max-h-screen'>
        <div className=' container mb-12'>
          <nav className=' py-10 mb-10 flex justify-between'>
            <h1 className=' font-burtons text-4xl dark:text-white'>JM</h1>
            <ul className=' flex items-center'>
              <li><BsFillMoonStarsFill className=' cursor-pointer text-xl mr-10 dark:text-white' onClick={()=>setDarkMode(!darkMode)}/></li>
              <li>
                <a href='https://drive.google.com/file/d/1SQQbEeEFOcLfp32SqbEVZJclYAZLt-UY/view?usp=sharing' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition duration-500 hover:text-black'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center py-10'>
            <h2 className=' text-4xl py-4 font-mono text-teal-600 font-medium md:text-6xl'>Jagan Mohan</h2>
            <div className=' text-md flex justify-center md:text-2xl dark:text-white'>
              <p>I am a&nbsp;</p>
              <Typewriter className='text-white-600 font-mono md:text-6xl'
                  options={{
                    strings: ['Project engineer', 'Frontend developer', 'UI developer'],
                    delay: 75,
                    autoStart: true,
                    loop: true,
                  }}
                />
            </div>
         
            {/* <p className=' text-lg py-5 leading-8 text-gray-800 md:max-w-lg mx-auto dark:text-white'>Hi, I am Jagan. Nice to meet you😊</p> */}
          </div>
          <div className='text-4xl justify-center flex gap-16 py-10 text-gray-600 md:text-5xl'>
            <a href='https://github.com/jagz5246'><AiFillGithub className=' cursor-pointer dark:text-gray-300'/></a>
            <a href='https://www.linkedin.com/in/jagan-g-mohan-6b82701a2/'><AiFillLinkedin  className=' cursor-pointer dark:text-gray-300'/></a>
            <a href='https://www.instagram.com/jagz_5246/'><AiFillInstagram className=' cursor-pointer dark:text-gray-300'/></a>
          </div>
          <div className='w-48 h-48 rounded-full mx-auto overflow-hidden md:w-96 md:h-96'>
            <img src={proPic} alt='avatar.png'/>
          </div>
          </div> 
        </section>

        <section className='py-10'>
          <div className=' container my-12'>
            <h3 className=' text-4xl py-1 font-bold dark:text-gray-300'>About me</h3>
            <p className=' text-md py-2 leading-8 dark:text-white'>
            As a dedicated developer with over 2 years of hands-on experience in technologies like HTML5, CSS3, JavaScript, React.js, and Tailwind CSS, I bring a passion for creating user-friendly, responsive web applications. My journey in web development began with a strong foundation in core web technologies, which I've continued to build upon with a focus on modern frameworks and libraries.
            </p>
            <p className=' text-md py-2 leading-8 dark:text-gray-300'>
            My<span className=' text-teal-500'> interests</span> include Front end development, UI desiging, Data analytics and programming.
            </p>
          </div>
          <h3 className=' text-4xl font-bold mt-20 dark:text-gray-300'>Skills</h3>
          <div className='lg:flex bg-grey-300 rounded-lg justify-around my-10 gap-10'>
            <div className=' outline outline-teal-800 text-center  p-5 mb-5 rounded-lg my-10 '>
              <img src={design} alt="design.png" width={100} height={100} className='mx-auto'/>
              <h3 className='text-center text-lg pb-2 pt-8 font-medium dark:text-gray-400'>Front end</h3>
              <h4 className=' py-4 text-teal-600'>Tools that I use</h4>
              <div className=' justify-center flex gap-2'>
              <img src={html} alt='html.png' />
              <img src={css} alt='css.png' />
              <img src={js} alt='js.png' />
              <img src={react} alt='react.png' />
              {/* <img src={nextjs} alt='nextjs.png' />   */}
              </div>
              </div>
            <div className=' outline outline-teal-800 text-center px-10 py-5 mb-5 rounded-lg my-10 '>
              <img src={code} alt="design.png" width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg pb-2 pt-8 font-medium dark:text-gray-400'>Programming</h3>
              <h4 className=' py-4 text-teal-600'>Languages I know</h4>
              <div className=' flex justify-center gap-2'>
              <img src={c} alt='c.png' />
              <img src={java} alt='java.png' />
              <img src={python} alt='python.png' />
              </div>
            </div>
            <div className=' outline outline-teal-800 text-center px-10 py-5 mb-5 rounded-xl my-10 '>
              <img src={consulting} alt="design.png" width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg pb-2 pt-8 font-medium dark:text-gray-400'>UI designing</h3>
              <h4 className=' py-4 text-teal-600'>Tools that I know</h4>
              <div className=' flex justify-center gap-2'>
              <img src={xd} alt='xd.png' />
              <img src={figma} alt='figma.png' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=' container my-12'>
            <h3 className=' text-4xl py-1 font-bold dark:text-gray-300'>Projects</h3>
            <p className=' text-xl py-2 leading-8 dark:text-white'>
            Take a look at some of my <span className=' text-teal-500'>side projects</span>
            </p>
            <div className='lg:flex gap-10'>
            <div className=' text-center p-10 rounded-xl cursor-pointer  my-10 shadow-2xl transition duration-100 hover:bg-gray-300 dark:bg-white dark:hover:bg-gray-300 dark:hover:shadow-gray-300'>
              <img src={project1} alt="design.png" width={600} height={700} className='rounded-lg mx-auto mb-2'/>
              <h3 className='text-2xl pb-2 font-medium'>Keystone Realty</h3>
              <p className='py-2 '>
                A responsive landing page of a real estate agency
              </p>
              <div className=' mt-10'>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 mb-2 mx-5 py-2 rounded-md transition duration-100 hover:text-black '><a href='https://jagz5246.github.io/Marketmaven/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition duration-100 hover:text-black'><a href='https://github.com/jagz5246/Marketmaven'>Source code</a></button>
              </div>
            </div>
            <div className=' text-center p-10  rounded-xl cursor-pointer my-10 shadow-2xl transition duration-100 hover:bg-gray-300 dark:bg-white dark:hover:bg-gray-300 dark:hover:shadow-gray-300'>
              <img src={project2} alt="design.png" width={600} height={700} className='rounded-lg  mx-auto mb-2'/>
              <h3 className='text-2xl pb-2 font-medium'>To Do App</h3>
              <p className='py-2 '>
                A todo application that can perform basic CRUD operations</p>
              <div className=' mt-10'>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 mb-2 mx-5 py-2 rounded-md transition duration-100 hover:text-black '><a href='https://jagz5246.github.io/todo-app/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition duration-100 hover:text-black'><a href='https://github.com/jagz5246/todo-app'>Source code</a></button>
              </div>
            </div>
            <div className=' text-center p-10 rounded-xl my-10 shadow-2xl cursor-pointer transition duration-100 hover:bg-gray-300 hover:shadow-white dark:bg-white dark:hover:bg-gray-300 dark:hover:shadow-gray-300'>
              <img src={project3} alt="quizzy.png" width={600} height={700} className='rounded-lg mx-auto mb-2'/>
              <h3 className='text-2xl pb-2 font-medium'>Blogger!</h3>
              <p className='py-2 '>
                A blog app that uses api to display blogs, created using React 
              </p>
            <div className='mt-10 '>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 mb-2 mx-5 py-2 rounded-md transition duration-100 hover:text-black '><a href='https://quizzy-thequizapp.netlify.app/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition duration-100 hover:text-black'><a href='https://github.com/jagz5246/Quizzy'>Source code</a></button>
              </div>
            </div>
          </div>           
          </div>
        </section>
        <section className=' my-10'>
        <h3 className=' text-4xl py-1 font-bold dark:text-gray-300'>Hit me up!</h3>
         <div className=' p-10 md:flex lg:flex gap-10'>
          <img src={contact} alt="design.png" width={300} height={300} className='rounded-lg '/>
          <div className=' md:pt-20 lg:pt-30'>
          <p className='text-lg dark:text-gray-100 md:text-xl'>Reach out to me via</p>
            <p className=' text-md py-4 text-teal-600 md:text-lg'>Email: <span className='text-md text-gray-900 dark:text-gray-300'>jagz5246@gmail.com</span></p>
            <p className=' text-md py-4 text-teal-600 md:text-lg'>Phone: <span className='text-md text-gray-900 dark:text-gray-300'>+91-8098007508</span></p>  
          </div>
          </div>
        </section>
        <footer className='mt-10 dark:bg-gray-900'>
          <p className='mt-10 text-center text-sm p-4 text-gray-600 dark:text-gray-300'>Developed by <span className=' text-teal-500'>Jagan G Mohan</span></p>
        </footer>
      </main>
     
    </div>
  )
}

export default App;
