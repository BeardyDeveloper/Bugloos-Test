export interface AuthAction {
  type: string;
  token?: string;
  error?: string;
}

export interface CourseAction {
  type: string;
  id: string;
}
