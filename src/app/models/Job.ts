export type JobProps = {
  id: string;
  name: string;
};

export default class Job {
  id: string;

  name: string;

  constructor({ id, name }: JobProps) {
    this.id = id;
    this.name = name;
  }

  get labelId() {
    return `${this.id} - label`;
  }
}
