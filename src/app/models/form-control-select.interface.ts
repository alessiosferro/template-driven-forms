export interface SelectControl {
  id: string;
  name: string;
  class: string;
}

export interface SelectControlInterface {
  labelText: string;
  select: SelectControl;
}

export interface FormControlSelectInterface {
  defaultOption: string;
  selects: SelectControlInterface[];
}
