
const charts = [
 ['#vis01','specs/01_top_arrivals_lollipop.json'], ['#vis02','specs/02_region_share_bar.json'], ['#vis03','specs/03_market_recovery_quadrant.json'], ['#vis04','specs/04_arrivals_slope_2024_2025.json'],
 ['#vis05','specs/05_rooms_capacity_map.json'], ['#vis06','specs/06_capacity_demand_matrix.json'], ['#vis07','specs/07_guest_composition_share.json'], ['#vis08','specs/08_aor_heatmap_q4.json'], ['#vis09','specs/09_aor_range_dumbbell.json'],
 ['#vis10','specs/10_pressure_map.json'], ['#vis11','specs/11_state_pressure_rank.json'], ['#vis12','specs/12_revenue_disruption_timeline.json'], ['#vis13','specs/13_vulnerability_metrics.json']
];
const opts = {actions:false, renderer:'svg'};
charts.forEach(([el, spec]) => vegaEmbed(el, spec, opts).catch(err => {
  const node = document.querySelector(el); if(node){node.innerHTML = `<pre style="white-space:pre-wrap;color:#a33">${err}</pre>`;}
  console.error(spec, err);
}));
