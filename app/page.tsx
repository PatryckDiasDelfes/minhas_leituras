

import Crud from "./Front-end/components/crud";
import { select } from "./Back-end/crud/service";
import Footer from "./Front-end/footer";

export const dynamic = "force-dynamic" 

export default async function Home() {

  const data = await select()

  return (
    <>
      <Crud itens={data}></Crud>
      <Footer></Footer>
    </>
  );
}
