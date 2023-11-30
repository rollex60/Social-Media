// import { PropsWithChildren } from "react";
// import { CurrentUser } from "./chat/CurrentUser";
// import { ChatsList } from "./list/ChatsList";

// interface IChatsScreen extends PropsWithChildren{}

// export function ChatsScreen({ children }: IChatsScreen) {

//   const Component = () => children 
//   ? <>{children}</> 
//   : <p className="p-layout">Click chat on the left side for open!</p>

//   return (
//     <div className="grid h-full" style={{gridTemplateColumns: '.7fr 3fr'}}>
//       <div className="border-r border-border">
//         <CurrentUser />
//         <ChatsList />
//       </div>
//       <div>
//         <Component />
//       </div>
//     </div>
//   )
// }