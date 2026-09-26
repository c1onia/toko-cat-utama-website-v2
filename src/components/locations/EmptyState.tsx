type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "Cabang tidak ditemukan.",
  description = "Coba gunakan nama kota atau nama cabang yang berbeda.",
}: EmptyStateProps) {
  return (
    <div className="location-empty" role="status">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
