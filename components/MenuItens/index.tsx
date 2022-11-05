import Image from "next/image";
import Head from "next/head";
import { ItemContainer, ItemImage } from "./style";
import toDoicon from "../../assets/images/todo-list-icon.png";

export const MenuItens = () => {
    return <ItemContainer>
        <Image src={toDoicon} alt="toDo-icon" width={50} height={50}/>
        <div>To-Do List</div>
    </ItemContainer>;
}