# Property Hydra Audit: 35205 Commercial Leads

## 1. Inventory & Data Discovery
- **Source Examined**: `/Users/joewales/property-hydra/store/tax_liens_jefferson_raw.json`
- **Total Alabama Records Examined**: The Jefferson County raw tax liens file (approx 13.5MB).
- **Available Fields**: ParcelNo, Owner Name (Name1), Property Address (PropAddr1, PropCity, PropZip), TotalValue, AssmtClass, CRDate.
- **Missing Fields**: `year_built`, `building_area`. Marked as "Unknown - Visual Review Required" in deliverables. 

## 2. Methodology (ZIP 35205 & Commercial Class)
- **ZIP Filtering**: Exact string match on `PropZip` containing '35205'.
- **Commercial Identification**: Evaluated the `AssmtClass` field. In Alabama, Assessment Class 2 denotes commercial property. Class 3 is residential/agricultural.
- **Deduplication**: Deduplicated strictly by `ParcelNo`.
- **Geocoding**: Applied EPSG:4326 geocoding via Nominatim since exact coords were not embedded in the raw JSON extract for these properties.

## 3. Results & Row Accounting
- **Total records found in 35205**: 268
- **Rejected (Non-Commercial / Not Class 2)**: 61 (Output to `unmatched_or_rejected_records.csv`)
- **Accepted Commercial (Class 2)**: 207
- **Unique Parcels after deduplication**: 207
- **Final Leads Generated**: 207

## 4. Acceptance Criteria Checklist
- [x] CSV, XLSX, KML outputs generated.
- [x] Coordinates fall in Birmingham (geocoded to EPSG:4326).
- [x] No unexplained row loss.
- [x] Unmatched / non-commercial outputted to rejected CSV.
- [x] Excel styled with frozen headers and auto-filters.
- [x] No destructive migrations or paid APIs used.
