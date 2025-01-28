import "@/styles/globals.css";

import { AppProps } from "next/app";
import { CourseProvider } from "@/context/CourseContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CourseProvider>
      <Component {...pageProps} />
    </CourseProvider>
  );
}
