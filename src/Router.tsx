import { Route, Routes } from "react-router-dom";
import { Home } from '../src/pages/Home/index'
import { DefaultLayout } from '../src/layouts/DefaultLayout'
import { Essentials } from "./pages/Essentials";
import { Ultimate } from "./pages/Ultimate";
import { Enterprise } from "./pages/Enterprise";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/essentials" element={<Essentials />} />
        <Route path="/ultimate" element={<Ultimate />} />
        <Route path="/enterprise" element={<Enterprise/>} />
      </Route>
    </Routes>
  );
}