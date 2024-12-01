import portrait from '../assets/portrait.jpg'

const Profile = () => {
  return (
    <div className="bg-gray-800 w-full py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-base/7 font-semibold text-fuchsia-400">Dr Gina Tsanaktsidis</h2>
            <p className="mt-2 max-w-lg text-pretty text-base/7 font-semibold tracking-tight text-white sm:text-xl">
              Ophthalmologist and Software Developer
            </p>
            {/* bento box 1 */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <div className="flex p-px lg:col-span-4">
                  <div className="flex items-center justify-center overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] lg:rounded-tr-[0.5rem]">
                    <img
                      alt="portrait od Dr Gina Tsanaktsidis"
                      src={portrait}
                      className="h-80 object-cover object-left lg:rounded-[1rem] ml-10"
                    />
                  <div className="p-10">
                    <h3 className="mt-2 text-lg font-medium tracking-tight text-fuchsia-400">Profile</h3>
                    <p className="mt-4 max-w-lg text-sm/6 text-gray-400">
                      <ul>
                        <li>Ophthalmic surgeon with subspecialty surgical training in diseases of the retina, currently employed in the health care sector, with a view to transferring to a software developer role in health or medical research. </li> <br />
                        <li>Awarded an MBBS at Flinders University, 1993. Ophthalmology training at Sydney Eye Hospital, gaining fellowship of the Royal Australian and New Zealand College of Ophthalmologists, January 2001. </li> <br />
                        <li>Completed two fellowships in Vitreoretinal Surgery at Westmead Hospital, Sydney and The Western Eye Hospital, London. </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              {/* bento box 2 */}
              <div className="flex p-px lg:col-span-2">
                <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
                    className="h-80 object-cover"
                  />
                  <div className="p-10">
                  <h3 className="mt-2 text-lg font-medium tracking-tight text-fuchsia-400">IT Education</h3>
                    <p className="mt-4 max-w-lg text-sm/6 text-gray-400">
                      My IT studies are more recent but abreast of current paradigms in software development. 
                      <ul> <br />
                        <li>Coding Bootcamp Sydney University, Feb 2025</li> <br />
                        <li>Python for Data Analytics IAT Digital, Nov 2023</li> <br />
                        <li>Data Engineering Foundations IAT Digital, Aug 2023</li> <br />
                        <li>Microsoft Certified Azure Data Fundamentals Jul 2023</li> <br />
                        <li>Understanding Data Analytics IAT Digital, Apr 2023</li> 
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              {/* bento box 3 */}
              <div className="flex p-px lg:col-span-4">
                <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[0.5rem] lg:rounded-bl-[2rem]">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                    className="h-80 object-cover object-left"
                  />
                  <div className="p-10">
                  <h3 className="mt-2 text-lg font-medium tracking-tight text-fuchsia-400">IT Skills</h3>
                    <p className="mt-0 max-w-lg text-sm/6 text-gray-400 ">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-200">Languages</dt>
                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Python, JavaScript, TypeScript, SQL, Linux
                            </dd>
                            <dt className="text-sm/6 font-medium text-gray-200">Frameworks & Libraries</dt>
                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Node.js, Express.js, React, Tailwind CSS
                            </dd>
                            <dt className="text-sm/6 font-medium text-gray-200">Data Analysis</dt>
                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Pandas, Numpy, Matplotlib, Knime
                            </dd>
                            <dt className="text-sm/6 font-medium text-gray-200">Data Engineering</dt>

                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Microsoft Azure
                            </dd>
                            <dt className="text-sm/6 font-medium text-gray-200">Web development</dt>
                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">React, Flask
                            </dd>
                            <dt className="text-sm/6 font-medium text-gray-200">Cloud Computing</dt>
                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Microsoft Azure
                            </dd>
                            <dt className="text-sm/6 font-medium text-gray-200">Databases</dt>
                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Postgres
                            </dd>
                            <dt className="text-sm/6 font-medium text-gray-200">Version Control</dt>
                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">GitHub
                            </dd>
                            <dt className="text-sm/6 font-medium text-gray-200">IDEs</dt>
                            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Visual Studio Code, Jupyter Notebooks, Sublime Text
                            </dd>    
                        </div>    
                    </p>
                  </div>
                </div>
              </div>
              {/* bento box 4 */}
              <div className="flex p-px lg:col-span-2">
                <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                  <img
                  alt=""
                  src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                  className="h-80 object-cover object-left"
                  />
                  <div className="p-10">
                  <h3 className="mt-2 text-lg font-medium tracking-tight text-fuchsia-400">Medical Education</h3>                
                  <p className="mt-4 max-w-lg text-sm/6 text-gray-400">
                    <ul>
                      <li>Compliance with Continuing Professional Development</li>
                      <li>Fellowship in Vitreoretinal Surgery, The Western Eye Hospital, London, 2004</li> <br />
                      <li>Fellowship in Vitreoretinal Surgery, Westmead Hospital, Sydney, 2002</li> <br />
                      <li>Fellowship of Royal Australian and New Zealand College of Ophthalmologists, 2001</li> <br />
                      <li>Bachelor of Medicine, Bachelor of Surgery Flinders University, 1993</li> <br /> 
                    </ul>
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Profile