import "@testing-library/jest-dom";

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target) {
    if (this.callback) {
      this.callback(
        [
          {
            isIntersecting: true,
            target,
          },
        ],
        this
      );
    }
  }

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

globalThis.IntersectionObserver = IntersectionObserverMock;
window.IntersectionObserver = IntersectionObserverMock;
