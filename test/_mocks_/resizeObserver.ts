//tests/mocks/resizeObserver.ts

export const mockResizeObserver = class ResizeObserver {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    this.callback([
      {
        target,
        contentRect: new DOMRectReadOnly(0, 0, 0, 0),
        borderBoxSize: [{ blockSize: 0, inlineSize: 0 }],
        contentBoxSize: [{ blockSize: 0, inlineSize: 0 }],
        devicePixelContentBoxSize: [{ blockSize: 0, inlineSize: 0 }],
      },
    ], this);
  }

  unobserve() {}
  disconnect() {}
};