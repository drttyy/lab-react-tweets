function User(props) {
  const { name, handle } = props;
  return (
    <div>
      <span className="name">{name}</span>
      <span className="handle">@ {handle}</span>
    </div>
  );
}

export default User;
