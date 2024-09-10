export type PrimaryBtnAttributes = {
  btn_label: string;
  is_loading?: boolean;
  is_disabled?: boolean;
  custom_classes?: string;
  onClickHandler: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export interface ISvgComponentProps {
  custom_classes: string;
  secondary_color?: string;
  path_fill_color?: string;
  width?: string;
}
