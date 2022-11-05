import { PanelContainer } from "./style"
import { IPanel } from "./types"

export const Panel = ({ children }: IPanel) => {
    return (
      <PanelContainer>
        {children}
      </PanelContainer>
    )
}