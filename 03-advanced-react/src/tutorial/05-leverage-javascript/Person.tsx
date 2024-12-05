
import { PersonType } from "../../api";
import avatar from "../../assets/default-avatar.svg"


export function Person({ name, nickName, images }: PersonType) {
  const img = images?.[0]?.small?.url || avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
