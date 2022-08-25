import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodePolyfills from "rollup-plugin-polyfill-node";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: [
          "@babel/preset-react",
          [
            "@babel/preset-env",
            {
              modules: false,
              targets: {
                browsers: "> 1%, IE 10-11, not op_mini all, not dead",
                node: 8,
              },
            },
          ],
        ],
        babelHelpers: "bundled",
      }),
      commonjs(),
      nodePolyfills({
        include: ["fs"],
      }),
      typescript({ tsconfig: "./tsconfig.json", declarationDir: "dist" }),
      json(),
      postcss(),
      terser(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/, Object.keys(packageJson.peerDependencies)],
  },
];
