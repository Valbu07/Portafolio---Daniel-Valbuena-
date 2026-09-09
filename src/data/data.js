import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaPhp } from 'react-icons/fa'
import { SiN8N } from "react-icons/si";


import { SiJavascript, SiTailwindcss, SiExpress, SiMysql, SiPostman, SiJsonwebtokens, SiPython } from 'react-icons/si'

export const navLinks = [
  {
    id: 'inicio',
    label: 'Inicio',
  },
  {
    id: 'about',
    label: 'About',
  },
  {
    id: 'skills',
    label: 'Skills',
  },
  {
    id: 'proyectos',
    label: 'Proyectos',
  },
  {
    id: 'contacto',
    label: 'Contacto',
  },
]

export const skills = [
  {
    name: 'HTML',
    icon: FaHtml5,
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'React',
    icon: FaReact,
  },
    {
    name: 'PHP',
    icon: FaPhp,
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
  },
  {
    name: 'Bootstrap',
    icon: FaBootstrap,
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
  },
  {
    name: 'Express',
    icon: SiExpress,
  },
  {
    name: 'Python',
    icon: SiPython,
  },
  {
    name: 'JWT',
    icon: SiJsonwebtokens,
  },
  {
    name: 'MySQL',
    icon: SiMysql,
  },
  {
    name: 'Postman',
    icon: SiPostman,
  },
  {
    name: 'Git',
    icon: FaGitAlt,
  },
   {
    name: 'N8N',
    icon: SiN8N,
  }
]
export const projects = [
  {
    id: 1,
    title: 'Alphamind',
    description:
      'Alphamind es un aplicativo web de gestión de tareas diseñado para optimizar la organización, comunicación y productividad empresarial. Permite asignar actividades, monitorear el progreso en tiempo real, gestionar usuarios, generar reportes y facilitar la comunicación mediante un chat integrado y notificaciones automáticas.',

    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',

    tech: [
      'React',
      'Bootstrap',
      'Node.js',
      'Express',
      'MySQL',
    ],

    demo: '#',
    github: 'https://github.com/Valbu07/AlphaMind',
  },
]