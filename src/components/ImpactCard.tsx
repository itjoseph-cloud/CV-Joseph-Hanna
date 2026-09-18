import type { ImpactMetric } from '../content/site'

export default function ImpactCard({ metric }: { metric: ImpactMetric }) {
  return <article className="metric-card">
    <div><span className="metric-value">{metric.value}</span><span className="metric-category">{metric.category}</span></div>
    <h3>{metric.label}</h3><p>{metric.context}</p><small>{metric.employer}</small>
  </article>
}
