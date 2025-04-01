import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#ffffff',
    colorBgContainer: 'rgba(255, 255, 255, 0.8)',
    colorBgLayout: 'rgba(245, 245, 245, 0.7)',
    colorText: '#1A1A1A',
    colorTextSecondary: '#4A4A4A',
    colorBorder: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
  },
  components: {
    Layout: {
      headerBg: 'rgba(255, 255, 255, 0.8)',
      headerColor: '#1A1A1A',
      headerHeight: 64,
      headerPadding: '0 24px',
    },
    Typography: {
      colorText: '#1A1A1A',
      colorTextHeading: '#1A1A1A',
      fontSizeHeading1: 38,
      fontSizeHeading2: 30,
      fontSizeHeading3: 24,
      fontSizeHeading4: 20,
      fontSizeHeading5: 16,
      lineHeightHeading1: 1.23,
      lineHeightHeading2: 1.35,
      lineHeightHeading3: 1.35,
      lineHeightHeading4: 1.4,
      lineHeightHeading5: 1.5,
      fontWeightStrong: 600,
    },
  },
};

export default theme; 