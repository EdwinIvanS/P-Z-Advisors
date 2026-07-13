/**
 * Estructura de navegación principal del sitio.
 * Cada entrada de nivel superior puede tener un submenú (mega menú).
 * Los "href" son rutas internas (SPA) o anclas; en producción algunos
 * de estos servicios podrían vivir en sus propias rutas / páginas.
 */
export const navigation = [
  {
    label: 'Servicios',
    href: '/servicios',
    submenu: [
      {
        heading: 'Auditoría y Revisoría Fiscal',
        href: '/servicios/auditoria-y-revisoria-fiscal',
        items: [
          { label: 'Servicio de Revisoría Fiscal', href: '/servicios/revisoria-fiscal' },
          { label: 'Auditoría Externa', href: '/servicios/auditoria-externa' },
          { label: 'Auditoría Interna', href: '/servicios/auditoria-interna' },
          { label: 'Servicios de Interventoría', href: '/servicios/interventorias' },
          { label: 'Auditoría Externa de Gestión de Resultados', href: '/servicios/auditoria-gestion-resultados' },
          { label: 'Due Diligence Financiero y Contable', href: '/servicios/due-diligence-financiero' },
        ],
      },
      {
        heading: 'Servicios Tributarios',
        href: '/servicios/tributarios',
        items: [
          { label: 'Asesoría Tributaria Nacional e Internacional', href: '/servicios/asesoria-tributaria' },
          { label: 'Cumplimiento Tributario', href: '/servicios/cumplimiento-tributario' },
          { label: 'Planeación Tributaria', href: '/servicios/planeacion-tributaria' },
          { label: 'Precios de Transferencia', href: '/servicios/precios-de-transferencia' },
          { label: 'Litigio Tributario', href: '/servicios/litigio-tributario' },
        ],
      },
      {
        heading: 'Outsourcing',
        href: '/servicios/outsourcing',
        items: [
          { label: 'Outsourcing Contable', href: '/servicios/outsourcing-contable' },
          { label: 'Outsourcing de Nómina', href: '/servicios/outsourcing-nomina' },
          { label: 'Administración de Personal', href: '/servicios/administracion-personal' },
          { label: 'Outsourcing Administrativo', href: '/servicios/outsourcing-administrativo' },
        ],
      },
      {
        heading: 'Consultoría',
        href: '/consultoria',
        items: [
          { label: 'Consultoría en NIIF', href: '/consultoria/consultoria-en-niif' },
          { label: 'Evaluación de Control Interno', href: '/consultoria/evaluacion-de-control-interno' },
          { label: 'Elaboración y Reporte de EEFF', href: '/consultoria/elaboracion-y-reporte-de-estados-financieros-eeff' },
          { label: 'Implementación SG-SST', href: '/consultoria/implementacion-sgsst' },
        ],
      },
    ],
  },
  {
    label: 'Nosotros',
    href: '/sobre-nosotros',
    submenu: [
      {
        heading: null,
        href: null,
        items: [
          { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
          { label: 'Nuestros Profesionales', href: '/nuestros-profesionales' },
          { label: 'Allinial Global', href: '/miembros-allinial-global' },
        ],
      },
    ],
  },
  {
    label: 'Actualízate',
    href: '/blog',
    submenu: [
      {
        heading: null,
        href: null,
        items: [
          { label: 'Blog', href: '/blog' },
          { label: 'Flash', href: '/flash' },
          { label: 'News', href: '/news' },
          { label: 'Tax Trends', href: '/tax-trends' },
          { label: 'Eventos y Webinar', href: '/eventos-y-webinar' },
        ],
      },
    ],
  },
  /*
  {
    label: 'Trabaja con nosotros',
    href: 'https://pzadvisors.buk.co/trabaja-con-nosotros',
    external: true,
  },
  */
];

export const utilityLinks = [
  { label: 'Portal Clientes', href: '/portal-clientes' },
  { label: 'Portal Colaboradores', href: '/portal-colaboradores' },
  { label: 'Contáctanos', href: '/contactanos' },
];
