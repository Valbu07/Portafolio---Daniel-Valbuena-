import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaPhp } from 'react-icons/fa'
import { SiN8N } from "react-icons/si";
import Alphamind from '../assets/Alphamind.png';
import lasvegas from '../assets/lasvegas.png'


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
      Alphamind,

    tech: [
      'React',
      'Bootstrap',
      'Node.js',
      'Express',
      'MySQL',
    ],

    demo: 'https://alphamind-9fe4.onrender.com',
    github: 'https://github.com/Valbu07/AlphaMind',
  },

  {
  id: 2,
  title: 'Las Vegas Club',
  description:
    'Plataforma web completa para la gestión administrativa y presencia digital de un club de voleibol. Incluye sitio público con home, galería, jugadores por categoría y contacto, además de un panel administrativo con autenticación JWT, gestión de jugadores, categorías, torneos, partidos, entrenadores, galería de fotos, MVPs del mes y control de pagos mensuales con generación de facturas en PDF. Cuenta con, recuperación de contraseña por correo y actualización automática del estado de partidos.',

  image: lasvegas,

  tech: [
    'React',
    'Tailwind CSS',
    'Vite',
    'Node.js',
    'Express',
    'Prisma',
    'MySQL',
    'JWT',
  ],

  demo: 'https://lasvegasclub.com',
  github: 'https://github.com/Valbu07/LasVegasClub',
},
]