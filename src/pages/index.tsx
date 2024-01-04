import { useState } from "react";
import { GhostsAndEvidences } from "../components/ghostsandevidences";

export default function Home() {
  return (
    <>
      <div className="flex text-white font-bold justify-center">
        Olá fantasminha
      </div>
      <div>
        <GhostsAndEvidences />
      </div>
    </>
  );
}
