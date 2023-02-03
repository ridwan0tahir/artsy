import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },

      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },

      {
        find: "@configs",
        replacement: path.resolve(__dirname, "src/configs"),
      },

      {
        find: "@data",
        replacement: path.resolve(__dirname, "src/data"),
      },

      {
        find: "@layouts",
        replacement: path.resolve(__dirname, "src/layouts"),
      },

      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },

      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },

      {
        find: "@store",
        replacement: path.resolve(__dirname, "src/store"),
      },

      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils/"),
      },
    ],
  },
});
