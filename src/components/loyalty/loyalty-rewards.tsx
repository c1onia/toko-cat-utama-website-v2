import { loyaltyRewardGroups, loyaltyRewards } from "@/data/loyalty";

const pointsFormatter = new Intl.NumberFormat("id-ID");

type LoyaltyRewardsProps = {
  section?: typeof loyaltyRewards;
  groups?: typeof loyaltyRewardGroups;
  pointsLabel?: string;
};

export function LoyaltyRewards({
  section = loyaltyRewards,
  groups = loyaltyRewardGroups,
  pointsLabel = "poin",
}: LoyaltyRewardsProps) {
  return (
    <section
      className="section loyalty-rewards"
      id={section.id}
      aria-labelledby="loyalty-rewards-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="loyalty-rewards-title">{section.title}</h2>
        </div>
        <div className="loyalty-reward-groups">
          {groups.map((group) => {
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
                      <strong>
                        {pointsFormatter.format(reward.points)} {pointsLabel}
                      </strong>
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
