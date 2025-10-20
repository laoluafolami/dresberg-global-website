export interface Service {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'coming-soon';
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
