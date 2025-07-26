export default interface PackageSent {
  id: string,
  sender: string,
  size: number,
  sentSize: number,
  status: 'default' | 'transferring' | 'done',
}
