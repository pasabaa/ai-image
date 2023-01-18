import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto xl:w-8/12 lg:w-8/12 md:w-11/12 mt-auto pt-16 pb-4">
    <div className="flex items-center justify-between w-full gap-4 text-sm">
      <svg className="fill-black min-w-max" id="Layer_1" width="50" height="50" preserveAspectRatio="xMidYMid meet" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 634.41 855.64">
        <path classNameName="cls-1" d="M0,855.64V0H278.82V132.55h-105.13V723.09h105.13v132.55H0Z" />
        <path classNameName="cls-1" d="M355.6,855.64V0h278.82V132.55h-105.13V723.09h105.13v132.55H355.6Z" />
      </svg>
      <div className='flex flex-col justify-end sm:items-end'>
        <div className="flex flex-wrap gap-2 divide-x">
          <a className='pl-2' rel='noopener noreferer' target={'_blank'} href="https://www.pasabaa.com/blog">Blog</a>
          <a className='pl-2' rel='noopener noreferer' target={'_blank'} href="https://www.pasabaa.com/projects">Proyectos</a>
          <a className='pl-2' rel='noopener noreferer' target={'_blank'} href="https://www.pasabaa.com/about">Sobre mí</a>
          <a className='pl-2' rel='noopener noreferer' target={'_blank'} href="https://github.com/pasabaa">GitHub</a>
        </div>
        <p className="mt-2">Copyright &copy; {new Date().getFullYear()}. <a rel='noopener noreferer' target={'_blank'} href="https://www.pasabaa.com/">Pablo Sánchez.</a></p>
      </div>
    </div>
</footer>
  )
}
