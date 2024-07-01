export interface Post {
  id: number;
  title: string;
  desc: string;
}

export interface Appstate {
  name: string;
  email: string;
  mobile: number;
  post: Post[];
}
