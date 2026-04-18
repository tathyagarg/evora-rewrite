// place files you want to import through the `$lib` alias in this folder.

export interface PostFilter {
  kind?: string;
  tag?: { name: string; color: string | null };
}
