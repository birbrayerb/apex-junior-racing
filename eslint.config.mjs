// Next 16 removed `next lint`; ESLint 9 runs directly against this flat config.
// `eslint-config-next` ships flat-config presets, so we spread them in directly.
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
];

export default eslintConfig;
