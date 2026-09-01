interface QuestTagProps {
  index: string;
  label: string;
}

export default function QuestTag({ index, label }: QuestTagProps) {
  return (
    <div className="quest-tag">
      <i className="ti ti-flag-filled" style={{ fontSize: "11px" }} />
      STAGE {index}
      <span className="opacity-50">/</span>
      {label}
    </div>
  );
}
