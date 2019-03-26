import Typography from 'typography';
import theme from 'typography-theme-wordpress-2016';

// Import typefaces
import 'typeface-rosario';
import 'typeface-crimson-text';
import 'typeface-roboto-mono';

theme.overrideThemeStyles = () => ({
  a: {
    boxShadow: 'none',
  },
  h1: {
    fontFamily: ['Rosario', 'sans-serif'].join(','),
  },
});

theme.title = 'Pretty Cool';
theme.baseFontSize = '21px';
theme.baseLineHeight = 1.45;
theme.headerFontFamily = ['Rosario', 'sans-serif'];
theme.bodyFontFamily = ['Crimson Text', 'serif'];
theme.headerWeight = 700;
theme.bodyWeight = 400;
theme.boldWeight = 600;

delete theme.googleFonts;

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
