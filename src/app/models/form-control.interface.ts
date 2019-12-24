export interface LabelInterface {
  text: string;
}

export interface ControlInterface {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  class: string;
  required: boolean;
  disabled: boolean;
}

export interface FormControlInterface {
  control: ControlInterface;
  label: LabelInterface;
}
