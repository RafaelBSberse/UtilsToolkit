import type { NextPage } from 'next'
import Head from 'next/head';
import { MenuItens } from "../components/MenuItens";
import { Panel } from "../components/Panel";
import { Menu } from "./style";

const Index: NextPage = () => {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
    </Head>

    <main>
      <Panel>
        <Menu>
          <MenuItens href="/"/>
          <MenuItens href="/"/>
          <MenuItens href="/"/>
        </Menu>
      </Panel>
    </main>
  </>
}

export default Index
