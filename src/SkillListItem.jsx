import "./SkillListItem.css";
export default function SkillListItem({ skill, index }) {
  const { name, level } = skill;

  return (
    <div className="SkillListItem">
      <li className="SkillListLi">{name}</li>
      <li className="SkillListLi">Level: {level}</li>
    </div>
  );
}
