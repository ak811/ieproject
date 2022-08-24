import "../../styles.scss";

export default function PrevNext({ onNext, onPrev, page, max }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginTop: 40
      }}
    >
      <button
        disabled={page <= 1}
        style={{ maxWidth: 80 }}
        className="button"
        onClick={onPrev}
      >
        Prev
      </button>
      <button
        disabled={page + 1 > max}
        style={{ maxWidth: 80 }}
        className="button"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}
