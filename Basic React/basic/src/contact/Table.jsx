const Table = ({ values }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {values.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
