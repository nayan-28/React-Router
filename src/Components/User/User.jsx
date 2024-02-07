const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const useStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
  };
  return (
    <div style={useStyle}>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
    </div>
  );
};

export default User;
