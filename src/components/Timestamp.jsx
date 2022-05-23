function Timestamp(props) {
  const { times } = props;
  return (
    <div>
      <span className="timestamp">{times}</span>
    </div>
  );
}

export default Timestamp;
