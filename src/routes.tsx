import { Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Banner />} />
    </Routes>
  )
}
