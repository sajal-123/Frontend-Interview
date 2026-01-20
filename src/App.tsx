import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryProvider } from "./providers/query-provider";

export default function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}
