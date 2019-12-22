export interface LabelInterface {
  text: string;
}

export interface ControlInterface {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  class: string;
}

export interface FormControlInterface {
  control: ControlInterface;
  label: LabelInterface;
}
