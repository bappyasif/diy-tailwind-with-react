import logo from './logo.svg';
import './App.css';
import SideBar, { HorizontalAppbar } from './components/SideBar';

function App() {
  return (
    <div className='flex bg-custom-clr-400'>
      <SideBar />
      <HorizontalAppbar />
    </div>
  );
}

const LegacyDiy = () => {
  return (
    <div className="bg-blue-450 text-primary text-4xl">
      <h1>Heading Text!!</h1>
      {/* to see media queries in action they need to be in a container class */}
      <div className='container bg-slate-600 p-20'>
        Hallloooo TailwindCSS!!
        <TailwindCssButton />
      </div>
      <TailwindCssButtonReusable>
        Hoi Hoi!!
      </TailwindCssButtonReusable>
    </div>
  )
}

const TailwindCssButtonReusable = (props) => {
  return (
    <button className='bg-blue-600 text-red-400 px-2 py-.6 font-medium rounded hover:bg-blue-900 inline-block'>
      {props.children}
    </button>
  )
}

const TailwindCssButton = () => {
  return (
    <button className='bg-blue-400 text-red-800 px-2 py-.6 font-semibold rounded hover:bg-blue-900'>
      Click Here!!
    </button>
  )
}

export default App;
