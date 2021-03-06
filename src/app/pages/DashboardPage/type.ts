export interface Link {
  id: number;
  label: string;
  link: string;
  children?: Link[];
  logo?: any;
  slug?: any;
  isLogOut?: boolean;
  access?: number[];
  hideChild?: boolean;
}

export interface SelectedLink {
  parent: Link;
  child: Link | undefined;
}
