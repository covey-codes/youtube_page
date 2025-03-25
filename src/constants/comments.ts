export type CommentType = {
  id: number;
  user: string;
  text: string;
  timestamp: string;
};

// Sample comments
export const COMMENTS: CommentType[] = [
  {
    id: 1,
    user: "Divine",
    text: "putting in the work! ",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    user: "Kelvin",
    text: "I learned a lot, thanks!",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    user: "Israel",
    text: "Could you explain more about the topic?",
    timestamp: "30 minutes ago",
  },
];
