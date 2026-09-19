type CityFilterProps = {
  cities: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  allCitiesLabel?: string;
};

export function CityFilter({
  cities,
  value,
  onChange,
  label = "Filter kota",
  allCitiesLabel = "Semua Kota",
}: CityFilterProps) {
  return (
    <div className="location-filter">
      <label htmlFor="city-filter">{label}</label>
      <select
        id="city-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">{allCitiesLabel}</option>
        {cities.map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
