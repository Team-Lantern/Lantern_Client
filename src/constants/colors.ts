// src/constants/colors.ts
const colors = {
  colors: {
    transparent_frame: '#E1E8FF',
    transparent_navibar: '#1B0141',
  },
  mainColor: {
    vivid: '#6C29E2',
    medium: '#482584',
    dark: '#361A6B',
    pastel: '#AA91CC',
    background: '#1C0348',
  },
  subColor: {
    vivid: '#00D6CC',
    vivid40: 'rgba(0, 214, 204, 0.40)',
    vivid20: 'rgba(0, 214, 204, 0.20)',
    dark: '#00777F',
  },
  subColor2: {
    vivid: '#FF6B4A',
    dark: '#963A26',
  },
  mainButtonP: {
    default: '#B468EF',
    active: '#864AC2',
    disabled: '#462E6E',
  },
  mainButtonN: {
    default: '#482584',
    activate: '#3A2567',
  },
  mainButtonN_popup: {
    default: '#5A31A2',
    active: '#422979',
  },
  textP: {
    default: '#1C0348',
    disabled: '#A88FBC',
  },
  textN: {
    default: '#B469EF',
    activate: '#5A3C9B',
    popup_activate: '#7051A3',
  },
  white: {
    default: '#FFFFFF',
    w80: 'rgba(255, 255, 255, 0.80)',
    w60: 'rgba(255, 255, 255, 0.60)',
    w40: 'rgba(255, 255, 255, 0.40)',
    w30: 'rgba(255, 255, 255, 0.30)',
    w20: 'rgba(255, 255, 255, 0.20)',
  },
  black: {
    default: '#000000',
  },
} as const;

export type ColorsType = typeof colors;

export default colors;
