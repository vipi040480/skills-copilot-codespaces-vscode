function skillsMember() {
  let member = new Member();
  member.skills = [
    new Skill('JavaScript', 5),
    new Skill('HTML', 4),
    new Skill('CSS', 4),
    new Skill('React', 3),
    new Skill('Angular', 3),
    new Skill('Vue', 3),
    new Skill('Node', 3),
    new Skill('Express', 3),
    new Skill('MongoDB', 3),
    new Skill('SQL', 3)
  ];
  return member;
}