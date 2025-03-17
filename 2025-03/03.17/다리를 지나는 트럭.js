function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const bridge = [];
  let totalWeight = 0;

  while (truck_weights.length > 0 || bridge.length > 0) {
    answer += 1;

    if (bridge.length > 0) {
      bridge.forEach((truck) => (truck.remainingTime -= 1));
      if (bridge[0].remainingTime === 0) {
        totalWeight -= bridge[0].weight;
        bridge.shift();
      }
    }

    if (truck_weights.length > 0) {
      if (
        bridge.length < bridge_length &&
        totalWeight + truck_weights[0] <= weight
      ) {
        const currentTruck = truck_weights.shift();
        totalWeight += currentTruck;
        bridge.push({ weight: currentTruck, remainingTime: bridge_length });
      }
    }
  }

  return answer;
}
