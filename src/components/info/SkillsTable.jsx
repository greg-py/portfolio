const SkillsTable = (props) => {
  const { skills } = props;

  return (
    <div className="relative overflow-x-auto rounded-lg border border-gray-800">
      <table className="table-auto w-full text-sm">
        <thead className="text-xs text-gray-100 bg-sky-300 uppercase">
          <tr>
            <th className="px-6 py-1 text-start">Skill</th>
            <th className="px-6 py-1 text-end">Years</th>
          </tr>
        </thead>
        <tbody>
          {skills &&
            skills.map((s, index) => {
              return (
                <tr key={index} className="even:bg-gray-800 text-xs">
                  <td className="px-6 py-1 text-gray-300">{s.text}</td>
                  <td className="px-6 py-1 text-end">{s.years}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;
