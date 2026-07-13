/**
 * Contenido textual de la página "Evaluación de control interno para empresas".
 * Centralizado aquí para mantener los componentes de presentación limpios
 * y facilitar traducciones o futuras ediciones de copy sin tocar el JSX.
 */

export const relatedServices = [
  { label: 'Consultoría empresarial en Bogotá', href: '/consultoria/consultoria-empresarial-en-bogota' },
  //{ label: 'Consultoría empresarial en Cali', href: '/consultoria/cali' },
  //{ label: 'Consultoría empresarial en Medellín', href: '/consultoria/medellin' },
  { label: 'Consultoría en NIIF', href: '/consultoria/consultoria-en-niif' },
  { label: 'Evaluación sistema de control interno para empresas', href: '/consultoria/evaluacion-de-control-interno', active: true },
  { label: 'Elaboración y Reporte de Estados Financieros (EEFF)', href: '/consultoria/elaboracion-y-reporte-de-estados-financieros-eeff' },
  { label: 'Implementación SG-SST', href: '/consultoria/implementacion-sgsst' },
  { label: 'Partners Certificados de LucaNet', href: '/consultoria/partners-certificados-de-lucanet' },
  { label: 'Sistemas de Administración de Riesgos', href: '/consultoria/implementacion-evaluacion-sistemas-administracion-riesgos' },
  { label: 'Sistemas de Gestión de Calidad (SGC)', href: '/consultoria/implementacion-y-auditoria-sistemas-gestion-de-calidad' },
];

export const queSeRevisaItems = [
  'Segregación de funciones y responsabilidades.',
  'Políticas internas y procedimientos documentados.',
  'Flujos de autorización y aprobación.',
  'Controles sobre registros contables y financieros.',
  'Riesgos operativos asociados a reprocesos, errores o dependencia de personas clave.',
  'Controles tecnológicos relacionados con accesos, seguridad y trazabilidad.',
  'Evidencias de seguimiento, supervisión y mejora.',
];

export const tiposControl = [
  {
    icon: 'calculator',
    title: 'Control interno contable',
    description:
      'Se enfoca en la confiabilidad de los registros, cierres, conciliaciones, soportes, reportes y estados financieros. Reduce errores, mejora la trazabilidad de la información y apoya decisiones basadas en datos más consistentes.',
  },
  {
    icon: 'workflow',
    title: 'Control interno operativo',
    description:
      'Revisa cómo funcionan los procesos del día a día: compras, pagos, cartera, inventarios, contratos, autorizaciones y gestión documental. Detecta reprocesos, cuellos de botella y riesgos que afectan la eficiencia y continuidad.',
  },
  {
    icon: 'shield',
    title: 'Control interno tecnológico',
    description:
      'Analiza componentes asociados a accesos, permisos, seguridad de la información, trazabilidad en sistemas y controles digitales, en conexión con nuestros servicios de auditoría de TI y cumplimiento.',
  },
];

export const metodosItems = [
  'Entrevistas con responsables de procesos.',
  'Revisión documental de políticas, manuales y procedimientos.',
  'Walkthroughs o recorridos de procesos.',
  'Pruebas de control sobre muestras o evidencias.',
  'Matrices de riesgos y controles.',
  'Identificación de brechas entre el proceso documentado y la operación real.',
  'Revisión de reportes, conciliaciones, aprobaciones y soportes.',
];

export const senalesItems = [
  'Cierres contables con errores o ajustes recurrentes.',
  'Procesos que dependen demasiado de una sola persona.',
  'Falta de evidencia sobre aprobaciones o autorizaciones.',
  'Reprocesos frecuentes entre áreas.',
  'Dificultad para obtener información confiable y oportuna.',
  'Hallazgos repetidos en auditorías internas o externas.',
  'Cambios recientes en sistemas, procesos o estructura organizacional.',
  'Necesidad de mejorar reportes para gerencia, socios o junta directiva.',
];

export const whyChooseFeatures = [
  'Enfoque técnico e independiente',
  'Revisión contable, operativa y tecnológica',
  'Metodología orientada a riesgos y controles',
  'Recomendaciones claras para la toma de decisiones',
];

export const memberships = [
  { name: 'Allinial Global', img: 'allinial-global' },
];

export const registrations = [
  { name: 'ICDT', img: 'icdt' },
  { name: 'PCAOB', img: 'pcaob' },
  { name: 'INCP', img: 'incp' },
];

export const specialists = [
  {
    name: 'Pepito Perez',
    role: 'Acting Partner',
    linkedin: 'https://www.linkedin.com/in/carlos-eduardo-m-58a02711b/',
  },
  {
    name: 'Pepito Perez',
    role: 'Acting Manager',
    linkedin: 'https://www.linkedin.com/in/pedro-david-urrego-guerrero-21a035137/',
  }
];

export const faqItems = [
  {
    question: '¿Qué información necesita la empresa para iniciar una evaluación?',
    answer:
      'Generalmente se requiere información sobre procesos, políticas internas, organigrama, manuales, reportes, flujos de autorización, evidencias de control y responsables por área. El alcance específico se define según los objetivos de la evaluación y los procesos que la empresa quiera revisar.',
  },
  {
    question: '¿Qué áreas se revisan durante el diagnóstico de control interno?',
    answer:
      'Depende del alcance acordado. Puede incluir áreas contables, financieras, operativas, administrativas, tecnológicas o de cumplimiento interno. Lo importante es revisar los procesos donde existan riesgos relevantes para la información, los recursos, la operación o la toma de decisiones.',
  },
  {
    question: '¿En qué se diferencia la evaluación de control interno de una auditoría interna?',
    answer:
      'La evaluación de control interno se enfoca en revisar el diseño y funcionamiento de controles específicos o procesos definidos. La auditoría interna puede tener un alcance más amplio y recurrente, orientado a evaluar riesgos, controles, cumplimiento y gobierno interno de forma continua o por ciclos.',
  },
  {
    question: '¿La evaluación de control interno aplica para empresas medianas y grandes?',
    answer:
      'Sí. La evaluación puede adaptarse a empresas medianas y grandes que necesitan revisar procesos críticos, fortalecer controles y mejorar la trazabilidad de su información. El alcance depende del tamaño de la organización, su estructura, sus riesgos y los procesos que requieran mayor atención.',
  },
  {
    question: '¿Cuánto tiempo toma una evaluación de control interno?',
    answer:
      'El tiempo depende del alcance definido, la cantidad de procesos a revisar, la disponibilidad de información y la complejidad operativa de la empresa. Antes de iniciar, se puede establecer un cronograma de trabajo con fases, responsables y entregables esperados.',
  },
];

export const newsItems = [
  {
    date: 'julio 7, 2026',
    title: 'La DIAN define el calendario de vencimientos para la declaración de renta de personas naturales del año gravable 2025',
    excerpt: 'La Dirección de Impuestos y Aduanas Nacionales (DIAN), mediante el...',
    href: '/flash/dian-calendario-vencimientos-renta-personas-naturales-2025',
    category: 'Flash',
  },
  {
    date: 'julio 6, 2026',
    title: 'P&Z Tax Trends | Novedades tributarias DIAN y Consejo de Estado – Julio 2026',
    excerpt: 'Queremos proporcionarte información actualizada y de valor por ello creamos...',
    href: '/tax-trends/novedades-tributarias-julio-2026',
    category: 'Tax Trends',
  },
  {
    date: 'julio 2, 2026',
    title: 'Ley 2578 de 2026: cambian los vencimientos tributarios de julio',
    excerpt: 'Los vencimientos tributarios del mes de julio fueron ajustados con...',
    href: '/flash/ley-2578-de-2026',
    category: 'Flash',
  },
  {
    date: 'julio 1, 2026',
    title: 'Reglamentación del impuesto de salida del país por vía aérea',
    excerpt: 'El Gobierno Nacional expidió el Decreto 0625 de 2026, mediante...',
    href: '/flash/reglamentacion-impuesto-salida-pais-via-aerea',
    category: 'Flash',
  },
  {
    date: 'junio 26, 2026',
    title: 'Errores Comunes en Revisoría Fiscal que Pueden Afectar a su Empresa',
    excerpt: 'Los errores comunes en revisoría fiscal suelen aparecer cuando la...',
    href: '/blog/errores-comunes-en-revisoria-fiscal',
    category: 'Blog',
  },
  {
    date: 'junio 26, 2026',
    title: 'Cómo Elegir una Firma de Auditoría en Colombia: Criterios que Debe Revisar su Empresa',
    excerpt: 'Para elegir una firma de auditoría en Colombia, una empresa...',
    href: '/blog/como-elegir-firma-de-auditoria',
    category: 'Blog',
  },
];

export const contactInfo = {
  whatsapp: '573212241534',
  phoneComercial: '+57 321 224 1534',
  phoneAdmin: '+57 301 240 8931',
  phonePBXBogota: '+57 318 338 0385',
  addressBogota: 'Calle 162 # 54-15 Bogota',
  email: 'nez328@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/company/am-zquita-c-a/',
    facebook: 'https://www.facebook.com/PZAdvisors',
    instagram: 'https://www.instagram.com/pzadvisors/',
    twitter: 'https://x.com/PZAdvisors',
    youtube: 'https://www.youtube.com/@pzadvisors',
  },
};
