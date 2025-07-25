export default interface User {
  id: number;
  name: string;
  avatarUrl?: string; // Optional avatar URL for user profile picture
  ipAddress: string; // Optional IP address for user
}
