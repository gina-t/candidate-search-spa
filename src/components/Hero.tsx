
import SearchButton from './SearchButton';
import heroImage from '../assets/hero.jpg';
import beat from '../assets/beat.svg';

const Hero: React.FC = () => {
  
  return (
    <div className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <img
              alt="logo"
              src={beat}
              className="h-11"
            />
            <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-100 sm:mt-10 sm:text-4xl">
              Find the ideal candidate for your company
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              Our platform allows you to easily search for candidates using the GitHub API.
            </p>
            <div className='mt-10 flex items-center gap-x-6 justify-start'>
              <SearchButton />
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="absolute inset-0 bg-transparent opacity-20"></div>
          <img
            alt="spaceman"
            src={heroImage}
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;