
import './App.css'

function App() {

  return (
    <>
      <div className="dropdown">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
      <h1 className='text-5xl font-bold font-poppins'></h1>
    </>
  )
}

export default App
