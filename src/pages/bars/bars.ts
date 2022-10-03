export interface BarsData {
  id: number;
  title: string;
  description: string;
  content: JSX.Element;
  date: string;
  youtube?: {
    chanel: string;
    link: string;
  };
}
