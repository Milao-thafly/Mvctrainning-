export interface MissionData {
  id: number;
  title: string;               // max 50
  description: string;         // max 500
  skills: string[];            // à choisir parmi skillOptions
  type: string;                // à choisir parmi typeOptions
  start_date: string;          // format ISO : YYYY-MM-DD
  salary: number;
  salary_unit: string;         // à choisir parmi salaryUnitOptions
  password: string;   
  descriptiontwo: string         // max 50
}

// Options pour les champs à sélection
export const skillOptions = [
  {id: 1, name:"JavaScript"},
  {id: 2, name: "TypeScript"},
  {id: 3, name: "React"},
  {id: 4, name: "Node.js" },
  {id: 5, name:"Python"},
  {id: 6, name:"Django"},
  {id: 7, name:"DevOps"},
  {id: 8, name:"UI/UX"}
];

export const typeOptions = [
  {id: 1, name:"Freelance"},
  {id: 2, name:"CDI"},
  {id:3, name:"CDD"},
  {id: 4, name:"Stage"},
  {id: 5, name:"Alternance"}
];

export const salaryUnitOptions = [
  {id: 1, name:"mois" },
  {id: 2, name:"an"},
  {id: 3, name:"jour"},
  {id: 4, name:"heure"}
];

// Exemple de données valides
export const sampleMissions: MissionData[] = [
  {
  id: 1,
  title: "Développement d'une application React",
  description: "Création d'une application web responsive en React pour gérer les stocks d'une PME.",
  descriptiontwo:  "Création d'une application web responsive en React pour gérer les stocks d'une PME Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis.",
  skills: ["React", "TypeScript"],
  type: "Freelance",
  start_date: "2025-09-15",
  salary: 4000,
  salary_unit: "mois",
  password: "missionAdmin2025"
},
  {
    id: 2,
    title: "Refonte site e-commerce",
    description: "Refonte complète d’un site marchand sous Next.js.",
    descriptiontwo: "Refonte complète d’un site marchand sous Next.js Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis.",
    skills: ["Next.js", "CSS", "SEO"],
    type: "CDD",
    start_date: "2025-10-01",
    salary: 3200,
    salary_unit: "mois",
    password: "ecom2025"
  },
  {
    id: 3,
    title: "Déploiement cloud AWS",
    description: "Mise en place d’une infrastructure scalable sur AWS.",
    descriptiontwo:"Mise en place d’une infrastructure scalable sur AWS Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque accumsan viverra sem quis malesuada felis pulvinar eu Ut ut sapien metus Aliquam elementum mi ut nulla laoreet et pharetra erat cursus Nam felis magna scelerisque quis imperdiet quis gravida pharetra lacus Aliquam egestas rhoncus faucibus Aenean mollis vestibulum odio a iaculis quam dignissim quis Ut a est eget felis finibus viverra Aliquam erat volutpat Nulla libero augue rhoncus sed eleifend ultricies egestas a felis.",
    skills: ["AWS", "Docker", "CI/CD"],
    type: "CDI",
    start_date: "2025-11-01",
    salary: 4500,
    salary_unit: "mois",
    password: "awsInfra"
  }
];