export type SkillProps = {
  id: string;
  name: string;
};

export default class Skill {
  id: string;

  name: string;

  constructor({ id, name }: SkillProps) {
    this.id = id;
    this.name = name;
  }

  get labelId() {
    return `${this.id} - label`;
  }
}
