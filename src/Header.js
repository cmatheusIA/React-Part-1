import React from 'react';

const Header = ()=>{
    
        return (
            <nav>
            <div className="nav-wrapper indigo lighthen-2">
              <a href="/" className="brand-logo">Home</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/livros">Livro</a></li>
                <li><a href="/assuntos">Assuntos</a></li>
                <li><a href="/sobre">Sobre</a></li>
              </ul>
            </div>
          </nav>
        )
}

export default Header;