
import Link from 'next/link';
interface HeaderProps {
  font: {
    className:string
  }
}
  

function Header({font}:HeaderProps) {
  return (
    //semantic html
    <>
    <header className={`${font.className}links-div`}>
     <ul className='links'>
        <li className='link'><Link href="">Works</Link></li>
        <li className='link'><Link href="">Blog</Link></li>
        <li className='link'><Link href="">contact</Link></li>
     </ul>
    </header>
    </>
  );
}
export default Header;
