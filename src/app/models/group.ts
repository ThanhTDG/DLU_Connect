export class Group {
  userUid: string;
  pageUid: string;
  name: string;
  description: string;

  constructor(
    userUid?: string,
    pageUid?: string,
    name?: string,
    description?: string
  ) {
    this.userUid = userUid;
    this.pageUid = pageUid;
    this.name = name;
    this.description = description;
  }
}
