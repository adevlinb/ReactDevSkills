import SkillListItem from "./SkillListItem";
export default function SkillList({ skills }) {
  const SkillListItems = skills.map((s, idx) => (
    <SkillListItem skill={s} key={idx} index={idx} />
  ));
  return <ul>{SkillListItems}</ul>;
}
