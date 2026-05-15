# Malaysia Tourism: Markets, Capacity and Regional Performance

Single-page Vega-Lite dashboard for FIT2179 Data Visualisation 2.

## What this repository contains

- `index.html` — the dashboard web page for GitHub Pages.
- `assets/style.css` — dashboard layout, typography and responsive styling.
- `assets/main.js` — embeds all Vega-Lite specs.
- `specs/` — one human-readable Vega-Lite JSON file per visualisation.
- `data/` — cleaned CSV files used by Vega-Lite plus `malaysia-states.topojson` for map idioms.

## Dashboard story

**Section 1: Where do visitors to Malaysia come from?**  
Shows international arrivals by source market, regional concentration, recovery against 2019 and short-term 2024-to-2025 momentum.

**Section 2: Which states are best equipped to support tourism?**  
Moves from physical tourism capacity to guest composition and occupancy. It uses a state-level map, capacity-demand matrix, normalised guest composition, AOR heatmap and Q4 occupancy range idiom.

**Section 3: Which states show the strongest tourism demand?**  
Uses demand-pressure metrics such as guests per room so that smaller states are not hidden behind larger-capacity states.

**Section 4: How vulnerable is Malaysia’s tourism economy to major disruptions?**  
Connects the 2019 baseline, 2020–2021 disruption shock and 2024 recovery with concentration and pressure indicators.

## Visualisation list

1. Top source markets lollipop/bar hybrid
2. Arrivals by world region
3. Market recovery quadrant bubble plot
4. 2024–2025 arrivals slopegraph
5. Hotel room capacity choropleth map
6. Capacity-demand matrix with segment classification
7. Domestic versus foreign guest composition, normalised stacked bars
8. Q4 AOR heatmap
9. Q4 AOR range-and-average dumbbell/rule idiom
10. Demand pressure choropleth map
11. State demand pressure ranking with AOR colour channel
12. Tourism receipts disruption timeline indexed to 2019
13. Vulnerability indicators bar chart

## Data files

- `cleaned_arrivals.csv` — country arrivals, region grouping, rank, share and growth fields.
- `arrivals_by_region.csv` — source-market region aggregation.
- `state_tourism_2025.csv` — merged hotel inventory, hotel guests and AOR with derived metrics.
- `tourism_revenue_2015_2024.csv` — tourism receipts with YoY growth, 2019 index and period labels.
- `vulnerability_metrics.csv` — derived risk indicators.
- `malaysia-states.topojson` — state boundary TopoJSON for Vega-Lite maps.

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders in this package, preserving the folder structure.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Open the generated GitHub Pages URL.

## Important edits before final submission

- Replace the placeholder author/date text in `index.html`.
- Check that all URLs are public after uploading to GitHub.
- Acknowledge the use of AI assistance in the assignment form if required.
- Include the PDF/image of the hand-drawn sketch in the repository and link it in Moodle.

## Sources and acknowledgement

The dashboard is powered by the uploaded assignment datasets:

- `tourist_arrival.xlsx`
- `hotel_inventory_2025.xlsx`
- `hotel_guests_2025.xlsx`
- `aor_2025.xlsx`
- `malaysia_tourism_revenue_2015_2024.xlsx`

Malaysia state TopoJSON is based on the public `malaysia-states.topojson` from `jnewbery/CartogramMalaysia`.
