export interface MissionData {
  title: string;               // max 50
  description: string;         // max 500
  skills: string[];            // à choisir parmi skillOptions
  type: string;                // à choisir parmi typeOptions
  start_date: string;          // format ISO : YYYY-MM-DD
  salary: number;
  salary_unit: string;         // à choisir parmi salaryUnitOptions
  password: string;            // max 50
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
export const sampleMission: MissionData = {
  title: "Développement d'une application React",
  description: "Création d'une application web responsive en React pour gérer les stocks d'une PME.",
  skills: ["React", "TypeScript"],
  type: "Freelance",
  start_date: "2025-09-15",
  salary: 4000,
  salary_unit: "mois",
  password: "missionAdmin2025"
};