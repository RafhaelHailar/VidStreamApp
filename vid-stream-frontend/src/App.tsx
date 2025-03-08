import { useEffect } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { gql, useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(gql`
    query Example {
      example
    }
  `);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  /* 
  useEffect(() => {
    const root = document.documentElement;

    root.classList.add("dark");
  }, []); */
  console.log(data);
  return (
    <div className="bg-background">
      <Button>I'm a button</Button>
    </div>
  );
}

export default App;
