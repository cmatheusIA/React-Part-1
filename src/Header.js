import React from 'react';
import LinkWrapper from './LinkWrapper';


const Header = ()=>{
    
        return (
            <nav>
            <div className="nav-wrapper indigo lighthen-2">
              <LinkWrapper to='/' className="brand-logo">Home</LinkWrapper>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><LinkWrapper to ='/livros' >Livro</LinkWrapper></li>
                <li><LinkWrapper to ='/autor' >Autores</LinkWrapper></li>
                <li><LinkWrapper to ='/sobre' >Sobre</LinkWrapper></li>
              </ul>
            </div>
          </nav>
        )
}

export default Header;