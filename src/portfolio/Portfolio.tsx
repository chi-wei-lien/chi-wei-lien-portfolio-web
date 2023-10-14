import ProjectCard from './PortfolioCard'
import { ProjectCardData } from '../types'

const surveyPaper: ProjectCardData = {
  img: '/images/portfolio/paper.png',
  title: 'Biometric Survey Paper',
  descr: (
    <p>
      Chi-Wei Lien and Sudip Vhaduri, {'"'}Challenges and Opportunities of Biometric User
      Authentication in the Age of IoT: A Survey,{'"'}{' '}
      <span className='underline decoration-2 decoration-pink-500'>
        ACM Computing Surveys, 2022
      </span>{' '}
      (Under Review)
    </p>
  ),
  content: (
    <ul className='list-disc'>
      <li>
        Wrote a 35 pages survey paper to evaluate the limitations and applications of new
        opportunistic biometrics and their combinations with existing biometrics
      </li>
    </ul>
  ),
}

const youtube: ProjectCardData = {
  img: '/images/portfolio/youtube.png',
  title: 'Educational Youtube Creator',
  descr: <p>Created a YouTube Channel to teach coding and cybersecurity</p>,
  content: (
    <ul className='list-disc'>
      <li>
        <span className='underline decoration-2 decoration-pink-500'>27 videos</span> are currently
        available; accumulated over 14,000 views
      </li>
      <li>
        Content covered: Malware design, ARP Spoofing, SQL Injection, XSS, HTML, CSS, JS, Bootstrap,
        SSH
      </li>
      <li>
        My YouTube Channel:{' '}
        <a
          href='https://www.youtube.com/@loopholewilson'
          className='underline decoration-sky-500 decoration-2'
        >
          @loopholewilson
        </a>
      </li>
    </ul>
  ),
}

const heartAuth: ProjectCardData = {
  img: '/images/portfolio/watch.png',
  title: 'Heart Biometric User Authenticating System',
  descr: (
    <p>
      Collaborating with Prof. Vhaduri to develop a{' '}
      <span className='underline decoration-pink-500 decoration-2'>heart biometric model</span> for
      user authentication
    </p>
  ),
  content: (
    <ul className='list-disc'>
      <li>
        Designing a machine learning model that identifies valid users{'\''} heart rate data
        collected with Fitbit
      </li>
      <li>
        Skills: Python, Pandas (library),{' '}
        <span className='underline decoration-sky-500 decoration-2'>Scikit-learn (library)</span>,
        Jupyter Notebook
      </li>
    </ul>
  ),
}

const education: ProjectCardData = {
  img: '/images/portfolio/purdue.png',
  title: 'Purdue University, West Lafayette, IN',
  descr: (
    <p>
      Bachelor of Science in Computer Science,{' '}
      <span className='underline decoration-pink-500 decoration-2'>
        GPA: 4.0, Dean&apos;s Honor List
      </span>
      <br />
      2021 Aug - 2024 Dec
    </p>
  ),
  content: (
    <ul className='list-disc'>
      <li>Specializing in software engineering</li>
    </ul>
  ),
}

const Portfolio = () => {
  return (
    <div className='snap-start bg-slate-100' id='portfolio'>
      <div className='w-screen min-h-screen'>
        <h1 className='py-10 text-5xl text-center underline decoration-indigo-500'>Portfolio</h1>
        <p className='text-center text-slate-700 phone:px-5'>
          If you are a recruiter, please download the <br /> formal resume from here:{' '}
          <a
            href='/files/2022-11-9 Chi-Wei Lien.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='underline decoration-2 decoration-pink-500'
          >
            resume.pdf
          </a>
        </p>
        <h1 className='pt-10 pb-5 text-3xl text-center text-slate-600'>Education</h1>
        <ProjectCard data={education} />
        <h1 className='pt-10 pb-5 text-3xl text-center text-slate-600'>Experience</h1>
        <ProjectCard data={youtube} />
        <h1 className='pt-10 pb-5 text-3xl text-center text-slate-600'>Projects & Paper</h1>
        <ProjectCard data={surveyPaper} />
        <div className='h-10 col-span-6'></div>
        <ProjectCard data={heartAuth} />
        <div className='h-20 col-span-6'></div>
      </div>
    </div>
  )
}

export default Portfolio
