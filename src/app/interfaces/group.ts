export interface Group {
  readonly uid: string;
  userUid: string;
  pageUid: string;
  name: string;
  description: string;
  createdDate: string;
  members: {
    name: string;
  }[];
}
