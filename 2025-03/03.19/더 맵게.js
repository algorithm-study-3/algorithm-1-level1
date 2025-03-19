function solution(scoville, K) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    peek() {
      return this.heap[0];
    }

    insert(val) {
      this.heap.push(val);
      this.#bubbleUp();
    }

    #bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] > this.heap[index]) {
          [this.heap[parentIndex], this.heap[index]] = [
            this.heap[index],
            this.heap[parentIndex],
          ];
          index = parentIndex;
        } else {
          break;
        }
      }
    }

    extract() {
      if (this.heap.length === 0) return null;
      const min = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.#bubbleDown();
      }
      return min;
    }

    #bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      while (true) {
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        let smallest = index;

        if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
          smallest = leftIndex;
        }
        if (
          rightIndex < length &&
          this.heap[rightIndex] < this.heap[smallest]
        ) {
          smallest = rightIndex;
        }
        if (smallest !== index) {
          [this.heap[index], this.heap[smallest]] = [
            this.heap[smallest],
            this.heap[index],
          ];
          index = smallest;
        } else {
          break;
        }
      }
    }
  }

  const heap = new MinHeap();
  for (let s of scoville) {
    heap.insert(s);
  }

  let count = 0;
  while (heap.size() > 0 && heap.peek() < K) {
    if (heap.size() < 2) return -1;

    const first = heap.extract();
    const second = heap.extract();

    const newScoville = first + second * 2;
    heap.insert(newScoville);
    count += 1;
  }

  return count;
}
