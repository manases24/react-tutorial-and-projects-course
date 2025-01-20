import { currentUser } from "@clerk/nextjs/server";
import { UserIconClient } from "./UserIconClient";


export const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  return <UserIconClient profileImage={profileImage} />;
};

// Este componente es un Server Component, por eso cree el <UserIconClient/> que es un componente del lado del cliente para renderizar la imagen del usuario
// Lo tuve que hacer así ya que si trataba de user un "use client" en un server component, rompia la app al momento de querer utilizar ClerK Next
// para la autenticación