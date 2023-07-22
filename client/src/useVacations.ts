import { useEffect, useState } from "react";
import { Vacation } from "./Vacation";

export const useVacations = () => {
  const [vacations, setVacations] = useState<Vacation[]>([]);

  useEffect(() => {
    fetch("/api/vacations")
      .then((res) => {
        if (!res.ok) throw new Error(`Request Error ${res.statusText}`);
        return res.json();
      })
      .then(setVacations);
  }, []);

  return { vacations };
};
