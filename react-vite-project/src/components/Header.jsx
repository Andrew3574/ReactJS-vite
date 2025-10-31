import logo from '/bergshult_shelf_00009.jpg'
const now = new Date()


export default function Header(){
  return (
      <header>
        <img src={logo}></img>
        {/* <h3>Custom header</h3> */}
        <span>time {now.toLocaleTimeString()}</span>
      </header>
  )
}