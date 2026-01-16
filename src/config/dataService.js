const services = [
  {
    id: 1,
    typeService: "Ideal para empezar",
    icon: `
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f1117"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
  <path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" />
  <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
  <path d="M8 11h4" />
  <path d="M8 15h3" />
  <path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  <path d="M18.5 19.5l2.5 2.5" />
</svg>`,
    title: "Diagnóstico Empresarial",
    description:
      "Radiografía completa de tu operación para identificar exactamente qué está frenando tu crecimiento.",
    outcomes: [
      "Análisis de procesos actuales",
      "Evaluación de tecnología",
      "Identificación de cuellos de botella",
      "Roadmap de mejoras priorizado",
    ],
  },
  {
    id: 2,
    typeService: "Más solicitado",
    icon: `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#b11226"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
</svg>

      `,
    title: "Optimización de Procesos",
    description:
      "Diseñamos, documentamos y automatizamos procesos para que tu equipo trabaje con claridad y eficiencia.",
    outcomes: [
      "Documentación de procesos clave",
      "Automatización de tareas repetitivas",
      "IDefinición de roles y responsabilidades",
      "Implementación de KPIs",
    ],
  },
  {
    id: 3,
    typeService: "Para escalar",
    icon: `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f1117"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 19l18 0" />
  <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
</svg>

      `,
    title: "Implementación Tecnológica",
    description:
      "Seleccionamos e implementamos las herramientas exactas que tu negocio necesita. Sin excesos, sin complicaciones.",
    outcomes: [
      "Selección de herramientas adecuadas",
      "Integración de sistemas",
      "Migración de datos",
      "Capacitación del equipo",
    ],
  },
];

export default services;
