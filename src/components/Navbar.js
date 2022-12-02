import React  from 'react'
import PropTypes from 'prop-types'
export default function Navbar(hiii) {

    
    

  return (
  <>
      <nav className="navbar navbar-expand-lg  bg-secondary  ">
          <div className="container-fluid">
              <a className="navbar-brand text-white"  href="/">{hiii.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/">{hiii.aboutText}</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Dropdown
                          </a>
                          <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/">Action</a></li>
                              <li><a className="dropdown-item" href="/">Another action</a></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><a className="dropdown-item" href="/">Something else here</a></li>
                          </ul>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link disabled" href="/">Disabled</a>
                      </li>
                  </ul>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                      <button className="btn btn-outline-dark"  >Search</button>
                  </form>
              </div>
          </div>

      </nav>
      </>
  )
}



// this we do because in future if by mistake we write the name as  number or any object then we get error 
Navbar.propTypes = {
    title : PropTypes.string.isRequired, // we write is required beacuse if we do not write default company name and also we do not give the company name  s input then we get error
    aboutText : PropTypes.string 
}

// this we do because if we do not give input then this is used as default 
Navbar.defaultProps = {
    title:'set title here',
    aboutText: 'set company about'
}