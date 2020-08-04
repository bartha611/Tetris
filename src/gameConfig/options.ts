interface options {
  totalRows: number;
  totalColumns: number;
}
export interface scoring {
  [key: number]: number;
  1: number;
  2: number;
  3: number;
  4: number;
}

export const gameOptions: options = {
  totalRows: 22,
  totalColumns: 10
};
