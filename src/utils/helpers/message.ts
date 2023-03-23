import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import { showMessage as showMessageRNFM } from 'react-native-flash-message';
import { COLORS } from "../colors";
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  title: string;
  description?: string;
  type: string;
}

export enum showMessageTypes {
  DANGER = 'DANGER',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  INFO = 'INFO'
}

export function showMessage({  ...props }: Props) {
  const options = isObject(props) && !isArray(isArray) ? props : {};
  const { type, textStyle, titleStyle, ...rest } = options;
  const backgroundColor =
    type === 'danger'
      ? COLORS.error_message
      : type === 'warning'
        ? COLORS.warning_message
        : type === 'SUCCESS'
          ? COLORS.success_message
          : COLORS.info_message;
  showMessageRNFM({
    backgroundColor,
    duration:450,
    message: props.title,
    description: props.description,
    icon:type,
    ...rest,
    type: type || 'default',
    textStyle: [
      {
        fontSize: RFValue(12),

        lineHeight: RFValue(17)
      },
      textStyle && textStyle
    ],
    titleStyle: [
      {
        fontSize: RFValue(14),

        lineHeight: RFValue(19)
      },
      titleStyle && titleStyle
    ]
  });
}


