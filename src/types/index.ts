// Common types used across the application

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  description: string;
  level: number;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Category {
  title: string;
  description: string;
  technologies: string[];
}

export interface FooterLinks {
  [category: string]: string[];
}
