import { ItemContainer, ItemText } from "./style";
import { useRouter } from 'next/router'
import Image from "next/image";
import toDoicon from "../../assets/images/todo-icon.svg";

export const MenuItens = ({ href }: { href: string }) => {
  const router = useRouter();

  return (
    <ItemContainer onClick={ () => router.push(href) }>
        <Image src={toDoicon} alt="todo-icon" width={60} height={60}/>
        <ItemText> To-Do List </ItemText>
    </ItemContainer>
  );
}
