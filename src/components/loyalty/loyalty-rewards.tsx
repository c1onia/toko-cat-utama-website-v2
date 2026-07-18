import { loyaltyRewardGroups, loyaltyRewards } from "@/data/loyalty";

const pointsFormatter = new Intl.NumberFormat("id-ID");

export function LoyaltyRewards() {
  return (
    <section
      className="section loyalty-rewards"
      id={loyaltyRewards.id}
      aria-labelledby="loyalty-rewards-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{loyaltyRewards.eyebrow}</p>
          <h2 id="loyalty-rewards-title">{loyaltyRewards.title}</h2>
        </div>
        <div className="loyalty-reward-groups">
          {loyaltyRewardGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="loyalty-reward-group" key={group.title}>
                <div className="loyalty-reward-group__header">
                  <span className="loyalty-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <ul className="loyalty-reward-list">
                  {group.rewards.map((reward) => (
                    <li key={reward.name}>
                      <span>{reward.name}</span>
                      <strong>{pointsFormatter.format(reward.points)} poin</strong>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
