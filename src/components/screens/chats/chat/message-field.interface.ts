interface IMessageField {
  sendMessage: (message:string) => Promise<void>
}