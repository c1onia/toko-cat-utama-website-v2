type CityFilterProps = {
  cities: string[];
  value: string;
  onChange: (value: string) => void;
};

export function CityFilter({ cities, value, onChange }: CityFilterProps) {
  return (
    <div className="location-filter">
      <label htmlFor="city-filter">Filter kota</label>
      <select
        id="city-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Semua Kota</option>
        {cities.map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
