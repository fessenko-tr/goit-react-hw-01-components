function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map((e) => (
          <li class="item" key={e.id}>
            <span class="label">{e.label}</span>
            <span class="percentage">{e.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
