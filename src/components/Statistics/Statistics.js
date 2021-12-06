import s from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map((e) => (
          <li
            key={e.id}
            className={s.item}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          >
            <span className={s.label}>{e.label}</span>
            <span className={s.percentage}>{`${e.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
