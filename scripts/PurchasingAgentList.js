import { businesses } from "./BusinessData.js";

const purchasingAgents = businesses.map((obj) => {
  return {
    fullName: `${obj.purchasingAgent.nameFirst} ${obj.purchasingAgent.nameLast}`,
    companyName: obj.companyName,
    phoneNumber: obj.phoneWork,
  };
});

const agentsNameElement = (obj) => {
  const agentsNameTarget = document.querySelector(".agents");
  agentsNameTarget.innerHTML += `<div class = "agent_cards">
  <h3>${obj.fullName}</h3>
  <p>${obj.companyName}</p>
  <p>${obj.phoneNumber}</p>
    </div>`;
};

export const purchasingAgentsFunction = purchasingAgents.forEach((agent) => {
  agentsNameElement(agent);
});
