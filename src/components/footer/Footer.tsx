import marvelSVG from '/Marvel Footer SVG.png'

const Footer = () => {
  return (
    <footer className="footer footer-center pb-8 bg-slate-50 text-base-content">
    <aside>
      <img src={marvelSVG} alt="marvel SVG" className='w-auto h-28'/>
      <p className="font-bold">
        Marvel Comics <br/>Empowering imaginations since 1939
      </p> 
      <p>Copyright © {new Date()?.getFullYear()} - All right reserved</p>
    </aside> 
  </footer>
  )
}

export default Footer