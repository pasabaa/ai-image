import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-4/12 mx-auto sm:w-full text-gray-400 mt-auto">
  <div className="flex text-sm">
    <div className="flex items-center w-full gap-4">
      <svg className="fill-white" id="Layer_1" width="50" height="50" preserveAspectRatio="xMidYMid meet" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 634.41 855.64">
        <path classNameName="cls-1" d="M0,855.64V0H278.82V132.55h-105.13V723.09h105.13v132.55H0Z" />
        <path classNameName="cls-1" d="M355.6,855.64V0h278.82V132.55h-105.13V723.09h105.13v132.55H355.6Z" />
      </svg>
      <div>
        <div className="flex space-x-4 divide-x">
          <a href="">Blog</a>
          <a className="pl-4" href="">Proyectos</a>
          <a className="pl-4" href="">Sobre mí</a>
          <a className="pl-4" href="">GitHub</a>
        </div>
        <p className="mt-2">Copyright &copy; 2023. Pablo Sánchez.</p>
      </div>
    </div>
  </div>
</footer>
  )
}
