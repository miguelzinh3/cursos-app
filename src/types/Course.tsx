export type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
};

export type UserCourse = {
  courseId: number;
  dateJoined: string;
};
