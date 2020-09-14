import css from 'styled-jsx/css'

export default css.global`
  :root {
    --ns-bg: #ffffff;
    --ns-fg: #1C1E21;
    --ns-light: #f5f5f5;
    --ns-light-code: #fafafa;
    --ns-gray: #666666;
    --ns-light-gray: #dedede;
    --ns-selection: rgba(0, 0, 0, 0.99);
    --ns-header: 77px;
    --ns-navbar-link: rgba(0,0,0,.5);
    --ns-navbar-link-hover: rgba(0,0,0,.9);
    --ns-footer: 70px;
    --ns-blue-link: #0074de;
    --ns-button-link: #1C1E21;
    --ns-button-link-hover: rgba(28, 30, 33, 0.7);

    /* Fonts */
    --font-sans: "Roboto", -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;

    /* Shadows and other values */
    --ns-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  }

  .dark-mode {
    --ns-bg: #1C1E21;
    --ns-fg: #ffffff;
    --ns-selection: rgba(255, 255, 255, 0.99);
    --ns-light: #3E4042;
    --ns-navbar-link: rgba(255,255,255,.5);
    --ns-navbar-link-hover: rgba(255,255,255,.9);
    --ns-button-link: #ffffff;
    --ns-button-link-hover: rgba(255, 255, 255, 0.7);
  }
`
