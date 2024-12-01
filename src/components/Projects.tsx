import portrait from '../assets/portrait.jpg'
import code from '../assets/code.jpg'
import employee from '../assets/employee.jpg'
import vehicle from '../assets/vehicle.jpg'
import carrots from '../assets/carrots.jpg'
import readme from '../assets/readme.jpg'
import html from '../assets/html.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'react-portfolio-spa',
      href: 'https://github.com/gina-t/react-portfolio-spa',
      description:
        "A single page app portfolio using React + Vite + Tailwind CSS, showcasing this developer's skills with a UI library.",
      imageUrl:
        code,
      date: 'Nov 25, 2024',
      datetime: '2024-11-25',
      category: { title: 'React', href: '#' },
      author: {
        name: 'Dr Gina Tsanaktsidis',
        role: 'Software Developer & Ophthalmologist',
        href: '#',
        imageUrl:
          portrait,
      },
    },
    {
      id: 2,
      title: 'employee-tracker',
      href: 'https://github.com/gina-t/employee-tracker',
      description:
        "A command-line application to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.",
      imageUrl:
        employee,
      date: 'Nov 11, 2024',
      datetime: '2024-11-11',
      category: { title: 'PostgreSQL', href: '#' },
      author: {
        name: 'Dr Gina Tsanaktsidis',
        role: 'Software Developer & Ophthalmologist',
        href: '#',
        imageUrl:
          portrait,
      },
    },
    {
      id: 3,
      title: 'vehicle-builder',
      href: 'https://github.com/gina-t/vehicle-builder',
      description:
        'Update an existing typescript command-line app to create a new vehicle OR select an existing vehicle, and perform actions.',
      imageUrl:
        vehicle,
      date: 'Oct 28, 2024',
      datetime: '2024-10-28',
      category: { title: 'Typescript', href: '#' },
      author: {
        name: 'Dr Gina Tsanaktsidis',
        role: 'Software Developer & Ophthalmologist',
        href: '#',
        imageUrl:
          portrait,
      },
    },
    {
      id: 4,
      title: 'this-is-the-way',
      href: 'https://github.com/gina-t/this-is-the-way',
      description:
        'A health web app integrated with a recipe search API and cloud translation API.',
      imageUrl:
        carrots,
      date: 'Oct 03, 2024',
      datetime: '2024-10-03',
      category: { title: 'JavaScript', href: '#' },
      author: {
        name: 'Dr Gina Tsanaktsidis',
        role: 'Software Developer & Ophthalmologist',
        href: '#',
        imageUrl:
          portrait,
      },
    },
    {
      id: 5,
      title: 'professional-readme-generator',
      href: '',
      description:
        "A command-line application that dynamically generates a professional README.md file from a user's input using Inquirer and Node.js.",
      imageUrl:
        readme,
      date: 'Oct 21, 2024',
      datetime: '2024-10-21',
      category: { title: 'Node.js', href: '#' },
      author: {
        name: 'Dr Gina Tsanaktsidis',
        role: 'Software Developer & Ophthalmologist',
        href: '#',
        imageUrl:
          portrait,
      },
    },
    {
      id: 6,
      title: 'pre-work-study-guide',
      href: 'https://github.com/gina-t/pre-work-study-guide',
      description:
        'To outline learning modules for HTML, CSS, Git, and JavaScript prior to starting the bootcamp course.',
      imageUrl:
        html,
      date: 'July 12, 2024',
      datetime: '2024-07-12',
      category: { title: 'HTML', href: '#' },
      author: {
        name: 'Dr Gina Tsanaktsidis',
        role: 'Software Developer & Ophthalmologist',
        href: '#',
        imageUrl:
          portrait,
      },
    },
    
  ]
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
    
          {/* project */}
          <div className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    alt=""
                    src={project.imageUrl}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={project.datetime} className="text-gray-500">
                      {project.date}
                    </time>
                    <a
                      href={project.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {project.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={project.href}>
                        <span className="absolute inset-0" />
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{project.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={project.author.imageUrl} className="h-10 w-8 rounded-md bg-gray-50" />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <a href={project.author.href}>
                          <span className="absolute inset-0" />
                          {project.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{project.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
export default Projects