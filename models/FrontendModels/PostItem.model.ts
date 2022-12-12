export interface PostItemModel {
  title: string;
  image: string;
  excerpt: string;
  date: Date;
  slug: string;
}

export interface PostContentModel {
  title: string;
  image: string;
  content: string;
  date: Date;
  slug: string;
  isFeatured: boolean;
}
