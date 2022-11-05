import { MenuItens } from "../../components/MenuItens";
import { Panel } from "../../components/Panel";
import { Menu } from "./style";

export const HomePage = () => {
    return <Panel>
      <Menu>
        <MenuItens />
        <MenuItens />
        <MenuItens />
      </Menu>
    </Panel>
}
    